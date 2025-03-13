declare module "packages/net/createmod/ponder/api/$VirtualBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VirtualBlockEntity {

 "isVirtual"(): boolean
 "markVirtual"(): void
}

export namespace $VirtualBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualBlockEntity$Type = ($VirtualBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualBlockEntity_ = $VirtualBlockEntity$Type;
}}
declare module "packages/net/createmod/catnip/levelWrappers/$WrappedLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $WrappedLevel extends $Level {
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(arg0: $Level$Type)

public "getLevel"(): $Level
public "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
public "getChunkSource"(): $ChunkSource
public "setChunkSource"(arg0: $ChunkSource$Type): void
public "getScoreboard"(): $Scoreboard
public "registryAccess"(): $RegistryAccess
public "playSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $SoundEvent$Type, arg5: $SoundSource$Type, arg6: float, arg7: float): void
public "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
public "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
public "addFreshEntity"(arg0: $Entity$Type): boolean
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
public "setMapData"(arg0: string, arg1: $MapItemSavedData$Type): void
public "getFreeMapId"(): integer
public "getMapData"(arg0: string): $MapItemSavedData
public "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "sendBlockUpdated"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: integer): void
public "updateNeighbourForOutputSignal"(arg0: $BlockPos$Type, arg1: $Block$Type): void
public "getLightEngine"(): $LevelLightEngine
public "playSeededSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$Type<($SoundEvent$Type)>, arg5: $SoundSource$Type, arg6: float, arg7: float, arg8: long): void
public "playSound"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
public "playSeededSound"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $Holder$Type<($SoundEvent$Type)>, arg3: $SoundSource$Type, arg4: float, arg5: float, arg6: long): void
public "gatherChunkSourceStats"(): string
public "getEntity"(arg0: integer): $Entity
public "players"(): $List<(any)>
public "getRecipeManager"(): $RecipeManager
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getShade"(arg0: $Direction$Type, arg1: boolean): float
public "getSectionsCount"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getMaxSection"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMinSection"(): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "enabledFeatures"(): $FeatureFlagSet
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getMaxBuildHeight"(): integer
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "level"(): $Level
get "chunkSource"(): $ChunkSource
set "chunkSource"(value: $ChunkSource$Type)
get "scoreboard"(): $Scoreboard
get "freeMapId"(): integer
get "lightEngine"(): $LevelLightEngine
get "recipeManager"(): $RecipeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedLevel$Type = ($WrappedLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedLevel_ = $WrappedLevel$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$RenderElement" {
import {$FadableScreenElement, $FadableScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$FadableScreenElement"
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $RenderElement extends $FadableScreenElement {

 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "getY"(): float
 "getX"(): float
 "getWidth"(): integer
 "getHeight"(): integer
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "render"(arg0: $GuiGraphics$Type): void
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
 "getZ"(): float
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $RenderElement {
function of(arg0: $ScreenElement$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderElement$Type = ($RenderElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderElement_ = $RenderElement$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$ConfigInt" {
import {$ConfigBase$CValue, $ConfigBase$CValue$Type} from "packages/net/createmod/catnip/config/$ConfigBase$CValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"

export class $ConfigBase$ConfigInt extends $ConfigBase$CValue<(integer), ($ForgeConfigSpec$IntValue)> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, ...arg5: (string)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigInt$Type = ($ConfigBase$ConfigInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigInt_ = $ConfigBase$ConfigInt$Type;
}}
declare module "packages/net/createmod/catnip/animation/$LerpedFloat" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LerpedFloat$Interpolator, $LerpedFloat$Interpolator$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat$Interpolator"
import {$LerpedFloat$Chaser, $LerpedFloat$Chaser$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat$Chaser"

export class $LerpedFloat {

constructor(arg0: $LerpedFloat$Interpolator$Type)

public "getValue"(): float
public "getValue"(arg0: float): float
public "setValue"(arg0: double): void
public "disableSmartAngleChasing"(): $LerpedFloat
public "updateChaseTarget"(arg0: float): void
public "startWithValue"(arg0: double): $LerpedFloat
public static "angular"(): $LerpedFloat
public "tickChaser"(): void
public "chase"(arg0: double, arg1: double, arg2: $LerpedFloat$Chaser$Type): $LerpedFloat
public "updateChaseSpeed"(arg0: double): boolean
public "setValueNoUpdate"(arg0: double): void
public "chaseTimed"(arg0: double, arg1: integer): $LerpedFloat
public "getChaseTarget"(): float
public "settled"(): boolean
public "forceNextSync"(): void
public "writeNBT"(): $CompoundTag
public static "linear"(): $LerpedFloat
public "readNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
get "value"(): float
set "value"(value: double)
set "valueNoUpdate"(value: double)
get "chaseTarget"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Type = ($LerpedFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat_ = $LerpedFloat$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$ScreenElement" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ScreenElement {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $ScreenElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenElement$Type = ($ScreenElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenElement_ = $ScreenElement$Type;
}}
declare module "packages/net/createmod/catnip/render/$SuperByteBuffer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AxisAngle4f, $AxisAngle4f$Type} from "packages/org/joml/$AxisAngle4f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PoseTransformStack, $PoseTransformStack$Type} from "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack"
import {$TransformStack, $TransformStack$Type} from "packages/dev/engine_room/flywheel/lib/transform/$TransformStack"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionfc, $Quaternionfc$Type} from "packages/org/joml/$Quaternionfc"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4fc, $Matrix4fc$Type} from "packages/org/joml/$Matrix4fc"
import {$Matrix3fc, $Matrix3fc$Type} from "packages/org/joml/$Matrix3fc"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"
import {$SpriteShiftEntry, $SpriteShiftEntry$Type} from "packages/net/createmod/catnip/render/$SpriteShiftEntry"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $SuperByteBuffer extends $TransformStack<($SuperByteBuffer)> {

 "isEmpty"(): boolean
 "delete"(): void
 "reset"<Self extends $SuperByteBuffer>(): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: $Color$Type): Self
 "rotate"<Self extends $SuperByteBuffer>(arg0: $Direction$Axis$Type, arg1: float): Self
 "disableDiffuse"<Self extends $SuperByteBuffer>(): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$Type, arg1: $Matrix4f$Type): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$Type): Self
 "getTransforms"(): $PoseStack
 "overlay"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "light"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "renderInto"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type): void
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type, arg1: float): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type, arg1: float, arg2: float): Self
 "shiftUVtoSheet"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type, arg1: float, arg2: float, arg3: integer): Self
 "shiftUV"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type): Self
 "pushPose"(): $SuperByteBuffer
 "popPose"(): $SuperByteBuffer
 "transform"(pose: $PoseStack$Pose$Type): $SuperByteBuffer
 "transform"(stack: $PoseStack$Type): $SuperByteBuffer
 "transform"(pose: $Matrix4fc$Type, normal: $Matrix3fc$Type): $SuperByteBuffer
 "mulNormal"(arg0: $Matrix3fc$Type): $SuperByteBuffer
 "mulPose"(arg0: $Matrix4fc$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$Type): $SuperByteBuffer
 "rotateZCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateYCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateXCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateXCentered"(radians: float): $SuperByteBuffer
 "rotateYCentered"(radians: float): $SuperByteBuffer
 "rotateZCentered"(radians: float): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$Type, x: float, y: float, z: float): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$Type, vec: $Vector3fc$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Axis$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCentered"(q: $Quaternionfc$Type): $SuperByteBuffer
 "uncenter"(): $SuperByteBuffer
 "translateX"(x: float): $SuperByteBuffer
 "translateY"(y: float): $SuperByteBuffer
 "nudge"(seed: integer): $SuperByteBuffer
 "translateZ"(z: float): $SuperByteBuffer
 "translateBack"(x: double, y: double, z: double): $SuperByteBuffer
 "translateBack"(v: float): $SuperByteBuffer
 "translateBack"(vec: $Vec3i$Type): $SuperByteBuffer
 "translateBack"(vec: $Vector3ic$Type): $SuperByteBuffer
 "translateBack"(vec: $Vector3fc$Type): $SuperByteBuffer
 "translateBack"(vec: $Vec3$Type): $SuperByteBuffer
 "translateBack"(x: float, y: float, z: float): $SuperByteBuffer
 "center"(): $SuperByteBuffer
 "translate"(v: float): $SuperByteBuffer
 "translate"(x: double, y: double, z: double): $SuperByteBuffer
 "translate"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "translate"(vec: $Vec3$Type): $SuperByteBuffer
 "translate"(vec: $Vector3fc$Type): $SuperByteBuffer
 "translate"(vec: $Vector3ic$Type): $SuperByteBuffer
 "translate"(vec: $Vec3i$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Axis$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotate"(arg0: $Quaternionfc$Type): $SuperByteBuffer
 "rotate"(axisAngle: $AxisAngle4f$Type): $SuperByteBuffer
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "self"(): $SuperByteBuffer
 "rotateZDegrees"(degrees: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Axis$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$Type): $SuperByteBuffer
 "rotateXDegrees"(degrees: float): $SuperByteBuffer
 "rotateYDegrees"(degrees: float): $SuperByteBuffer
 "rotateToFace"(facing: $Direction$Type): $SuperByteBuffer
 "rotateX"(radians: float): $SuperByteBuffer
 "rotateY"(radians: float): $SuperByteBuffer
 "rotateZ"(radians: float): $SuperByteBuffer
 "rotateTo"(from: $Vector3fc$Type, to: $Vector3fc$Type): $SuperByteBuffer
 "rotateTo"(from: $Direction$Type, to: $Direction$Type): $SuperByteBuffer
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $SuperByteBuffer
 "scale"(factors: $Vector3fc$Type): $SuperByteBuffer
 "scale"(factor: float): $SuperByteBuffer
 "scale"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "scaleY"(factor: float): $SuperByteBuffer
 "scaleZ"(factor: float): $SuperByteBuffer
 "scaleX"(factor: float): $SuperByteBuffer
}

export namespace $SuperByteBuffer {
function maxLight(arg0: integer, arg1: integer): integer
function of(stack: $PoseStack$Type): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperByteBuffer$Type = ($SuperByteBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperByteBuffer_ = $SuperByteBuffer$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$ConfigBool" {
import {$ConfigBase$CValue, $ConfigBase$CValue$Type} from "packages/net/createmod/catnip/config/$ConfigBase$CValue"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"

export class $ConfigBase$ConfigBool extends $ConfigBase$CValue<(boolean), ($ForgeConfigSpec$BooleanValue)> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: boolean, ...arg3: (string)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigBool$Type = ($ConfigBase$ConfigBool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigBool_ = $ConfigBase$ConfigBool$Type;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$ParticleEngineAccessor" {
import {$ParticleProvider, $ParticleProvider$Type} from "packages/net/minecraft/client/particle/$ParticleProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ParticleEngineAccessor {

 "ponder$getProviders"(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>

(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$Type = ($ParticleEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$Type;
}}
declare module "packages/net/createmod/catnip/gui/$TickableGuiEventListener" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$ComponentPath, $ComponentPath$Type} from "packages/net/minecraft/client/gui/$ComponentPath"
import {$FocusNavigationEvent, $FocusNavigationEvent$Type} from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $TickableGuiEventListener extends $GuiEventListener {

 "tick"(): void
 "nextFocusPath"(arg0: $FocusNavigationEvent$Type): $ComponentPath
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "getCurrentFocusPath"(): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "setFocused"(arg0: boolean): void
 "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "isFocused"(): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "getTabOrderGroup"(): integer
}

export namespace $TickableGuiEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableGuiEventListener$Type = ($TickableGuiEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableGuiEventListener_ = $TickableGuiEventListener$Type;
}}
declare module "packages/net/createmod/catnip/math/$BlockFace" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockFace extends $Pair<($BlockPos), ($Direction)> {

constructor(arg0: $BlockPos$Type, arg1: $Direction$Type)

public "getConnectedPos"(): $BlockPos
public "serializeNBT"(): $CompoundTag
public "getOppositeFace"(): $Direction
public "isEquivalent"(arg0: $BlockFace$Type): boolean
public "getPos"(): $BlockPos
public "getFace"(): $Direction
public static "fromNBT"(arg0: $CompoundTag$Type): $BlockFace
public "getOpposite"(): $BlockFace
get "connectedPos"(): $BlockPos
get "oppositeFace"(): $Direction
get "pos"(): $BlockPos
get "face"(): $Direction
get "opposite"(): $BlockFace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFace$Type = ($BlockFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFace_ = $BlockFace$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$DelegatedStencilElement" {
import {$StencilElement, $StencilElement$Type} from "packages/net/createmod/catnip/gui/element/$StencilElement"
import {$FadableScreenElement, $FadableScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$FadableScreenElement"
import {$AbstractRenderElement, $AbstractRenderElement$Type} from "packages/net/createmod/catnip/gui/element/$AbstractRenderElement"
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderElement, $RenderElement$Type} from "packages/net/createmod/catnip/gui/element/$RenderElement"

export class $DelegatedStencilElement extends $AbstractRenderElement implements $StencilElement {
static "EMPTY": $RenderElement

constructor()
constructor(arg0: $FadableScreenElement$Type, arg1: $FadableScreenElement$Type)

public "withStencilRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$Type): T
public "renderElement"(arg0: $GuiGraphics$Type): void
public "withElementRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$Type): T
public "renderStencil"(arg0: $GuiGraphics$Type): void
public "transform"(arg0: $GuiGraphics$Type): void
public "render"(arg0: $GuiGraphics$Type): void
public "prepareElement"(arg0: $GuiGraphics$Type): void
public "prepareStencil"(arg0: $GuiGraphics$Type): void
public "cleanUp"(arg0: $GuiGraphics$Type): void
public static "of"(arg0: $ScreenElement$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatedStencilElement$Type = ($DelegatedStencilElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegatedStencilElement_ = $DelegatedStencilElement$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$AbstractRenderElement" {
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderElement, $RenderElement$Type} from "packages/net/createmod/catnip/gui/element/$RenderElement"

export class $AbstractRenderElement implements $RenderElement {
static "EMPTY": $RenderElement

constructor()

public "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
public "at"<T extends $RenderElement>(arg0: float, arg1: float): T
public "getY"(): float
public "getX"(): float
public "getWidth"(): integer
public "getHeight"(): integer
public "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
public "withAlpha"<T extends $RenderElement>(arg0: float): T
public "getZ"(): float
public static "of"(arg0: $ScreenElement$Type): $RenderElement
public "render"(arg0: $GuiGraphics$Type): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
get "y"(): float
get "x"(): float
get "width"(): integer
get "height"(): integer
get "z"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRenderElement$Type = ($AbstractRenderElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRenderElement_ = $AbstractRenderElement$Type;
}}
declare module "packages/net/createmod/catnip/math/$VoxelShaper" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $VoxelShaper {

constructor()

public "get"(arg0: $Direction$Axis$Type): $VoxelShape
public "get"(arg0: $Direction$Type): $VoxelShape
public "withShape"(arg0: $VoxelShape$Type, arg1: $Direction$Type): $VoxelShaper
public "withVerticalShapes"(arg0: $VoxelShape$Type): $VoxelShaper
public static "forAxis"(arg0: $VoxelShape$Type, arg1: $Direction$Axis$Type): $VoxelShaper
public static "forDirectional"(arg0: $VoxelShape$Type, arg1: $Direction$Type): $VoxelShaper
public static "forHorizontal"(arg0: $VoxelShape$Type, arg1: $Direction$Type): $VoxelShaper
public static "forHorizontalAxis"(arg0: $VoxelShape$Type, arg1: $Direction$Axis$Type): $VoxelShaper
public static "axisAsFace"(arg0: $Direction$Axis$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShaper$Type = ($VoxelShaper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShaper_ = $VoxelShaper$Type;
}}
declare module "packages/net/createmod/catnip/data/$WorldAttached" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export class $WorldAttached<T> {

constructor(arg0: $Function$Type<($LevelAccessor$Type), (T)>)

public "get"(arg0: $LevelAccessor$Type): T
public "put"(arg0: $LevelAccessor$Type, arg1: T): void
public "replace"(arg0: $LevelAccessor$Type, arg1: $Consumer$Type<(T)>): T
public "replace"(arg0: $LevelAccessor$Type): T
public "empty"(arg0: $BiConsumer$Type<($LevelAccessor$Type), (T)>): void
public "empty"(arg0: $Consumer$Type<(T)>): void
public static "invalidateWorld"(arg0: $LevelAccessor$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldAttached$Type<T> = ($WorldAttached<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldAttached_<T> = $WorldAttached$Type<(T)>;
}}
declare module "packages/net/createmod/catnip/lang/$LangBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $LangBuilder {
static readonly "DEFAULT_SPACE_WIDTH": float

constructor(arg0: string)

public "add"(arg0: $LangBuilder$Type): $LangBuilder
public "add"(arg0: $MutableComponent$Type): $LangBuilder
public "add"(arg0: $Component$Type): $LangBuilder
public "component"(): $MutableComponent
public "newLine"(): $LangBuilder
public "color"(arg0: integer): $LangBuilder
public "color"(arg0: $Color$Type): $LangBuilder
public "text"(arg0: $ChatFormatting$Type, arg1: string): $LangBuilder
public "text"(arg0: string): $LangBuilder
public "text"(arg0: integer, arg1: string): $LangBuilder
public "space"(): $LangBuilder
public "string"(): string
public "style"(arg0: $ChatFormatting$Type): $LangBuilder
public "addTo"(arg0: $List$Type<(any)>): void
public "json"(): string
public "translate"(arg0: string, ...arg1: (any)[]): $LangBuilder
public "forGoggles"(arg0: $List$Type<(any)>): void
public "forGoggles"(arg0: $List$Type<(any)>, arg1: integer): void
public "sendStatus"(arg0: $Player$Type): void
public "sendChat"(arg0: $Player$Type): void
public static "resolveBuilders"(arg0: (any)[]): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangBuilder$Type = ($LangBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangBuilder_ = $LangBuilder$Type;
}}
declare module "packages/net/createmod/catnip/data/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<F, S> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public "copy"(): $Pair<(F), (S)>
public "swap"(): $Pair<(S), (F)>
public "getFirst"(): F
public "getSecond"(): S
public "setSecond"(arg0: S): void
public "setFirst"(arg0: F): void
get "first"(): F
get "second"(): S
set "second"(value: S)
set "first"(value: F)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<F, S> = $Pair$Type<(F), (S)>;
}}
declare module "packages/net/createmod/catnip/math/$Pointing" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Pointing extends $Enum<($Pointing)> implements $StringRepresentable {
static readonly "UP": $Pointing
static readonly "LEFT": $Pointing
static readonly "DOWN": $Pointing
static readonly "RIGHT": $Pointing


public static "values"(): ($Pointing)[]
public static "valueOf"(arg0: string): $Pointing
public "getXRotation"(): integer
public "getCombinedDirection"(arg0: $Direction$Type): $Direction
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "xRotation"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointing$Type = (("left") | ("up") | ("right") | ("down")) | ($Pointing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pointing_ = $Pointing$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$ConfigGroup" {
import {$ConfigBase$CValue, $ConfigBase$CValue$Type} from "packages/net/createmod/catnip/config/$ConfigBase$CValue"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $ConfigBase$ConfigGroup extends $ConfigBase$CValue<(boolean), ($ForgeConfigSpec$BooleanValue)> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: integer, ...arg3: (string)[])

public "register"(arg0: $ForgeConfigSpec$Builder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigGroup$Type = ($ConfigBase$ConfigGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigGroup_ = $ConfigBase$ConfigGroup$Type;
}}
declare module "packages/net/createmod/ponder/mixin/accessor/$EntityAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "catnip$callSetLevel"(arg0: $Level$Type): void

(arg0: $Level$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/net/createmod/catnip/gui/widget/$AbstractSimiWidget" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$TickableGuiEventListener, $TickableGuiEventListener$Type} from "packages/net/createmod/catnip/gui/$TickableGuiEventListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener {
static readonly "HEADER_RGB": $Color
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
static readonly "COLOR_HOVER": $Couple<($Color)>
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "COLOR_DISABLED": $Couple<($Color)>
static readonly "COLOR_SUCCESS": $Couple<($Color)>
static readonly "COLOR_FAIL": $Couple<($Color)>
 "lockedTooltipX": integer
 "lockedTooltipY": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "active": boolean
 "visible": boolean
static readonly "UNSET_FG_COLOR": integer


public "tick"(): void
public "onClick"(arg0: double, arg1: double): void
public "atZLevel"<T extends $AbstractSimiWidget>(arg0: float): T
public "runCallback"(arg0: double, arg1: double): void
public "getToolTip"(): $List<($Component)>
public "m_168797_"(arg0: $NarrationElementOutput$Type): void
public "setHeight"(arg0: integer): void
public "setActive"<T extends $AbstractSimiWidget>(arg0: boolean): T
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $Runnable$Type): T
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $BiConsumer$Type<(integer), (integer)>): T
get "toolTip"(): $List<($Component)>
set "height"(value: integer)
set "active"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimiWidget$Type = ($AbstractSimiWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSimiWidget_ = $AbstractSimiWidget$Type;
}}
declare module "packages/net/createmod/catnip/animation/$LerpedFloat$Chaser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Chaser {

 "chase"(arg0: double, arg1: double, arg2: double): float

(arg0: double): $LerpedFloat$Chaser
}

export namespace $LerpedFloat$Chaser {
const IDLE: $LerpedFloat$Chaser
const EXP: $LerpedFloat$Chaser
const LINEAR: $LerpedFloat$Chaser
function exp(arg0: double): $LerpedFloat$Chaser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Chaser$Type = ($LerpedFloat$Chaser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat$Chaser_ = $LerpedFloat$Chaser$Type;
}}
declare module "packages/net/createmod/catnip/render/$SpriteShiftEntry" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $SpriteShiftEntry {

constructor()

public "set"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): void
public "getTarget"(): $TextureAtlasSprite
public "getTargetU"(arg0: float): float
public static "getUnInterpolatedU"(arg0: $TextureAtlasSprite$Type, arg1: float): float
public static "getUnInterpolatedV"(arg0: $TextureAtlasSprite$Type, arg1: float): float
public "getTargetV"(arg0: float): float
public "getOriginal"(): $TextureAtlasSprite
public "getOriginalResourceLocation"(): $ResourceLocation
public "getTargetResourceLocation"(): $ResourceLocation
get "target"(): $TextureAtlasSprite
get "original"(): $TextureAtlasSprite
get "originalResourceLocation"(): $ResourceLocation
get "targetResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteShiftEntry$Type = ($SpriteShiftEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteShiftEntry_ = $SpriteShiftEntry$Type;
}}
declare module "packages/net/createmod/catnip/data/$Couple" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $Couple<T> extends $Pair<(T), (T)> implements $Iterable<(T)> {


public "get"(arg0: boolean): T
public "replace"(arg0: $Function$Type<(T), (T)>): void
public "iterator"(): $Iterator<(T)>
public "map"<S>(arg0: $Function$Type<(T), (S)>): $Couple<(S)>
public "stream"(): $Stream<(T)>
public "set"(arg0: boolean, arg1: T): void
public "forEach"(arg0: $Consumer$Type<(any)>): void
public static "create"<T>(arg0: $Supplier$Type<(T)>): $Couple<(T)>
public static "create"<T>(arg0: T, arg1: T): $Couple<(T)>
public "swap"(): $Couple<(T)>
public "mapWithContext"<S>(arg0: $BiFunction$Type<(T), (boolean), (S)>): $Couple<(S)>
public "mapWithParams"<S, R>(arg0: $BiFunction$Type<(T), (R), (S)>, arg1: $Couple$Type<(R)>): $Couple<(S)>
public "forEachWithParams"<S>(arg0: $BiConsumer$Type<(T), (S)>, arg1: $Couple$Type<(S)>): void
public "replaceWithContext"(arg0: $BiFunction$Type<(T), (boolean), (T)>): void
public "replaceWithParams"<S>(arg0: $BiFunction$Type<(T), (S), (T)>, arg1: $Couple$Type<(S)>): void
public "forEachWithContext"(arg0: $BiConsumer$Type<(T), (boolean)>): void
public "mapNotNull"<S>(arg0: $Function$Type<(T), (S)>): $Couple<(S)>
public "mapNotNullWithParam"<S, R>(arg0: $BiFunction$Type<(T), (R), (S)>, arg1: R): $Couple<(S)>
public "both"(arg0: $Predicate$Type<(T)>): boolean
public static "deserializeEach"<S>(arg0: $ListTag$Type, arg1: $Function$Type<($CompoundTag$Type), (S)>): $Couple<(S)>
public "serializeEach"(arg0: $Function$Type<(T), ($CompoundTag$Type)>): $ListTag
public static "createWithContext"<T>(arg0: $Function$Type<(boolean), (T)>): $Couple<(T)>
public "either"(arg0: $Predicate$Type<(T)>): boolean
public "spliterator"(): $Spliterator<(T)>
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Couple$Type<T> = ($Couple<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Couple_<T> = $Couple$Type<(T)>;
}}
declare module "packages/net/createmod/catnip/gui/element/$StencilElement" {
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderElement, $RenderElement$Type} from "packages/net/createmod/catnip/gui/element/$RenderElement"

export interface $StencilElement extends $RenderElement {

 "transform"(arg0: $GuiGraphics$Type): void
 "renderElement"(arg0: $GuiGraphics$Type): void
 "render"(arg0: $GuiGraphics$Type): void
 "prepareElement"(arg0: $GuiGraphics$Type): void
 "renderStencil"(arg0: $GuiGraphics$Type): void
 "prepareStencil"(arg0: $GuiGraphics$Type): void
 "cleanUp"(arg0: $GuiGraphics$Type): void
 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "getY"(): float
 "getX"(): float
 "getWidth"(): integer
 "getHeight"(): integer
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
 "getZ"(): float
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $StencilElement {
function of(arg0: $ScreenElement$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StencilElement$Type = ($StencilElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StencilElement_ = $StencilElement$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase" {
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $ConfigBase {
 "specification": $ForgeConfigSpec

constructor()

public "getName"(): string
public "onLoad"(): void
public "onReload"(): void
public "registerAll"(arg0: $ForgeConfigSpec$Builder$Type): void
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$Type = ($ConfigBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase_ = $ConfigBase$Type;
}}
declare module "packages/net/createmod/catnip/data/$IntAttached" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"

export class $IntAttached<V> extends $Pair<(integer), (V)> {


public "getValue"(): V
public "increment"(): void
public static "read"<T>(arg0: $CompoundTag$Type, arg1: $Function$Type<($CompoundTag$Type), (T)>): $IntAttached<(T)>
public static "comparator"(): $Comparator<(any)>
public "decrement"(): void
public "isZero"(): boolean
public static "with"<V>(arg0: integer, arg1: V): $IntAttached<(V)>
public "exceeds"(arg0: integer): boolean
public static "withZero"<V>(arg0: V): $IntAttached<(V)>
public "isOrBelowZero"(): boolean
public "serializeNBT"(arg0: $Function$Type<(V), ($CompoundTag$Type)>): $CompoundTag
get "value"(): V
get "zero"(): boolean
get "orBelowZero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntAttached$Type<V> = ($IntAttached<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntAttached_<V> = $IntAttached$Type<(V)>;
}}
declare module "packages/net/createmod/catnip/data/$TriState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "DEFAULT": $TriState
static readonly "FALSE": $TriState


public static "values"(): ($TriState)[]
public static "valueOf"(arg0: string): $TriState
public "getValue"(): boolean
public "isDefault"(): boolean
public "isTrue"(): boolean
public "isFalse"(): boolean
get "value"(): boolean
get "default"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$Type = (("default") | ("true") | ("false")) | ($TriState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$Type;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$BufferBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderAccessor {

 "catnip$getVertices"(): integer

(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$Type = ($BufferBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$Type;
}}
declare module "packages/net/createmod/catnip/theme/$Color" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"

export class $Color {
static readonly "TRANSPARENT_BLACK": $Color
static readonly "BLACK": $Color
static readonly "WHITE": $Color
static readonly "RED": $Color
static readonly "GREEN": $Color
static readonly "PURPLE": $Color
static readonly "SPRING_GREEN": $Color

constructor(arg0: integer, arg1: boolean)
constructor(arg0: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "setValue"(arg0: integer): $Color
public "copy"(): $Color
public "copy"(arg0: boolean): $Color
public "getAlpha"(): integer
public "brighter"(): $Color
public "darker"(): $Color
public "getRed"(): integer
public "getBlue"(): integer
public "getGreen"(): integer
public "asVectorF"(): $Vector3f
public "asStyle"(): $Style
public "scaleAlpha"(arg0: float): $Color
public "scaleAlphaForText"(arg0: float): $Color
public static "rainbowColor"(arg0: integer): $Color
public "ensureMutable"(): $Color
public "modifyValue"(arg0: $UnaryOperator$Type<(integer)>): $Color
public static "generateFromLong"(arg0: long): $Color
public "getAlphaAsFloat"(): float
public "asVector"(): $Vec3
public "mixWith"(arg0: $Color$Type, arg1: float): $Color
public static "mixColors"(arg0: $Color$Type, arg1: $Color$Type, arg2: float): $Color
public static "mixColors"(arg0: $Couple$Type<($Color$Type)>, arg1: float): $Color
public static "mixColors"(arg0: integer, arg1: integer, arg2: float): integer
public "getRedAsFloat"(): float
public "getBlueAsFloat"(): float
public "getGreenAsFloat"(): float
public "setRed"(arg0: integer): $Color
public "setRed"(arg0: float): $Color
public "setBlue"(arg0: integer): $Color
public "setBlue"(arg0: float): $Color
public "setGreen"(arg0: integer): $Color
public "setGreen"(arg0: float): $Color
public "setImmutable"(): $Color
public "setAlpha"(arg0: float): $Color
public "setAlpha"(arg0: integer): $Color
public "getRGB"(): integer
set "value"(value: integer)
get "alpha"(): integer
get "red"(): integer
get "blue"(): integer
get "green"(): integer
get "alphaAsFloat"(): float
get "redAsFloat"(): float
get "blueAsFloat"(): float
get "greenAsFloat"(): float
set "red"(value: integer)
set "red"(value: float)
set "blue"(value: integer)
set "blue"(value: float)
set "green"(value: integer)
set "green"(value: float)
set "alpha"(value: float)
set "alpha"(value: integer)
get "rGB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {

}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$Type = ($RenderTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccessor_ = $RenderTypeAccessor$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$FadableScreenElement" {
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $FadableScreenElement extends $ScreenElement {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $FadableScreenElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FadableScreenElement$Type = ($FadableScreenElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FadableScreenElement_ = $FadableScreenElement$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$CValue" {
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ConfigBase$IValueProvider, $ConfigBase$IValueProvider$Type} from "packages/net/createmod/catnip/config/$ConfigBase$IValueProvider"

export class $ConfigBase$CValue<V, T extends $ForgeConfigSpec$ConfigValue<(V)>> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: $ConfigBase$IValueProvider$Type<(any), (any)>, ...arg3: (string)[])

public "getName"(): string
public "get"(): V
public "register"(arg0: $ForgeConfigSpec$Builder$Type): void
public "set"(arg0: V): void
public "addComments"(arg0: $ForgeConfigSpec$Builder$Type, ...arg1: (string)[]): void
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$CValue$Type<V, T> = ($ConfigBase$CValue<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$CValue_<V, T> = $ConfigBase$CValue$Type<(V), (T)>;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$GameRendererAccessor" {
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccessor {

 "catnip$callGetFov"(arg0: $Camera$Type, arg1: float, arg2: boolean): double

(arg0: $Camera$Type, arg1: float, arg2: boolean): double
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$Type = ($GameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$IValueProvider" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export interface $ConfigBase$IValueProvider<V, T extends $ForgeConfigSpec$ConfigValue<(V)>> extends $Function<($ForgeConfigSpec$Builder), (T)> {

 "apply"(arg0: $ForgeConfigSpec$Builder$Type): T
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($ForgeConfigSpec$Builder), (V)>

(arg0: $ForgeConfigSpec$Builder$Type): T
}

export namespace $ConfigBase$IValueProvider {
function identity<T>(): $Function<($ForgeConfigSpec$Builder), ($ForgeConfigSpec$Builder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$IValueProvider$Type<V, T> = ($ConfigBase$IValueProvider<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$IValueProvider_<V, T> = $ConfigBase$IValueProvider$Type<(V), (T)>;
}}
declare module "packages/net/createmod/catnip/animation/$LerpedFloat$Interpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Interpolator {

 "interpolate"(arg0: double, arg1: double, arg2: double): float

(arg0: double, arg1: double, arg2: double): float
}

export namespace $LerpedFloat$Interpolator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Interpolator$Type = ($LerpedFloat$Interpolator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat$Interpolator_ = $LerpedFloat$Interpolator$Type;
}}
