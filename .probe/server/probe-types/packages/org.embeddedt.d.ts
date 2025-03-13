declare module "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $EmbeddiumBakedModelExtension {

 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $EmbeddiumBakedModelExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumBakedModelExtension$Type = ($EmbeddiumBakedModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmbeddiumBakedModelExtension_ = $EmbeddiumBakedModelExtension$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/matrix_stack/$CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack {

 "embeddium$setCachingEnabled"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $CachingPoseStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingPoseStack$Type = ($CachingPoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachingPoseStack_ = $CachingPoseStack$Type;
}}
declare module "packages/org/embeddedt/embeddium/model/$EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement {

 "embeddium$epsilonize"(): void

(): void
}

export namespace $EpsilonizableBlockElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpsilonizableBlockElement$Type = ($EpsilonizableBlockElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpsilonizableBlockElement_ = $EpsilonizableBlockElement$Type;
}}
declare module "packages/org/embeddedt/embeddium/render/entity/$ModelPartExtended" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartExtended {

 "embeddium$asOptional"(): $Optional<($ModelPart)>
 "embeddium$getDescendantsByName"(): $Map<(string), ($ModelPart)>
 "embeddium$getPartsList"(): $List<($ModelPart)>
}

export namespace $ModelPartExtended {
function of(arg0: $ModelPart$Type): $ModelPartExtended
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartExtended$Type = ($ModelPartExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartExtended_ = $ModelPartExtended$Type;
}}
