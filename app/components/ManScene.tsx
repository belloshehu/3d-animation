import {
	FilamentScene,
	FilamentView,
	DefaultLight,
	Model,
	Camera,
	Animator,
} from "react-native-filament";

function ManScene() {
	return (
		<FilamentScene>
			{/* 🏞️ A view to draw the 3D content to */}
			<FilamentView style={{ flex: 1, width: 200, height: 200 }}>
				{/* 💡 A light source, otherwise the scene will be black */}
				<DefaultLight />

				{/* 📦 A 3D model */}
				<Model source={require("@/assets/F_Talking1.glb")}>
					{/* <Animator
						// The animation index to play (alternatively you can provide a useSharedValue)
						animationIndex={0}
						onAnimationsLoaded={(animations) => {
							// The animations have been loaded
							console.log(animations);
						}}
					/> */}
				</Model>
				{/* 📹 A camera through which the scene is observed and projected onto the view */}
				<Camera />
			</FilamentView>
		</FilamentScene>
	);
}

export default ManScene;
