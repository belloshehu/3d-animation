import {
	FilamentScene,
	FilamentView,
	DefaultLight,
	Model,
	Camera,
	Animator,
} from "react-native-filament";
import Horse from "@/assets/Horse.glb";
import F_Talking from "@/assets/F_Talking1.glb";

function MyScene() {
	return (
		<FilamentScene>
			{/* 🏞️ A view to draw the 3D content to */}
			<FilamentView style={{ flex: 1 }}>
				{/* 💡 A light source, otherwise the scene will be black */}
				<DefaultLight />

				{/* 📦 A 3D model */}
				<Model source={Horse} transformToUnitCube>
					<Animator
						// The animation index to play (alternatively you can provide a useSharedValue)
						animationIndex={0}
						onAnimationsLoaded={(animations) => {
							// The animations have been loaded
						}}
					/>
				</Model>
				{/* 📹 A camera through which the scene is observed and projected onto the view */}
				<Camera />
			</FilamentView>
		</FilamentScene>
	);
}

export default MyScene;
