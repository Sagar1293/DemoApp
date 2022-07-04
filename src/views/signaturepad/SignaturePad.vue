<template>
	<div class="container sig-margin" style="height:300px">
		<VueSignaturePad
			id="signature"
			width="100%"
			ref="signaturePad"
			:options="options.option"
		/>
		<div class="buttons">
			<button class="btn-common btn-red" @click="undo">Undo</button>
			<button class="btn-common btn-red" @click="save">
				<a href="path_to_file" :download="data"> </a>Save
			</button>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
	name: 'MySignaturePad',
	setup() {
		//ref
		const signaturePad = ref(null);
		const options = reactive({
			count: 0,
			option: {
				penColor: '#c0f',
				backgroundColor: 'rgb(255,255,255)',
			},
			disabled: false,
		});
		//method
		const undo = () => {
			signaturePad.value.clearSignature();
		};
		const save = () => {
			var dataURL = signaturePad.value.saveSignature();
			download(dataURL, 'signature.png');
		};
		const download = (dataURL, filename) => {
			var blob = dataURLToBlob(dataURL);
			var url = window.URL.createObjectURL(blob);

			var a = document.createElement('a');
			a.style = 'display: none';
			a.href = url;
			a.download = filename;

			document.body.appendChild(a);
			a.click();

			window.URL.revokeObjectURL(url);
		};
		const dataURLToBlob = dataURL => {
			// Code taken from https://github.com/ebidel/filer.js
			var parts = dataURL.data.split('data:image/png;base64,');
			var contentType = parts[0].split(':')[1];
			var raw = window.atob(parts[1]);
			var rawLength = raw.length;
			var uInt8Array = new Uint8Array(rawLength);

			for (var i = 0; i < rawLength; ++i) {
				uInt8Array[i] = raw.charCodeAt(i);
			}

			return new Blob([uInt8Array], { type: contentType });
		};
		return {
			options,
			signaturePad,
			//method
			undo,
			save,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#signature {
	border: double 3px #808a8f;
	border-radius: 5px;
	background-image: linear-gradient(white, white),
		radial-gradient(circle at top left, #ff4b57, #808a8f);
	background-origin: border-box;
	background-clip: content-box, border-box;
}

.container {
	width: '100%';
	padding: 8px 16px;
}

.buttons {
	display: flex;
	gap: 8px;
	justify-content: center;
	margin-top: 15px;
}
.sig-margin {
	margin: 90px 0;
}
@media (max-width: 576px) {
	.sig-margin {
		margin: 40px 0;
	}
}
</style>
