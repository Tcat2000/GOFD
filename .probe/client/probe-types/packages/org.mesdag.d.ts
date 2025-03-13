declare module "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$BlockEntityJS, $BlockEntityJS$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityJS"
import {$BlockEntityInfo, $BlockEntityInfo$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityInfo"
import {$BlockEntityAttachment, $BlockEntityAttachment$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityAttachment"
import {$AnimatableBlockEntityInfo, $AnimatableBlockEntityInfo$Type} from "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntityInfo"
import {$GeoBlockEntity, $GeoBlockEntity$Type} from "packages/software/bernie/geckolib/animatable/$GeoBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AnimatableBlockEntity extends $BlockEntityJS implements $GeoBlockEntity {
readonly "info": $BlockEntityInfo
readonly "x": integer
readonly "y": integer
readonly "z": integer
 "tick": integer
 "cycle": integer
 "data": $CompoundTag
readonly "attachments": ($BlockEntityAttachment)[]
 "inventory": $InventoryKJS
 "placerId": $UUID

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $AnimatableBlockEntityInfo$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "setAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: string, arg1: string): void
public "getTick"(arg0: any): double
public "stopTriggeredAnimation"(arg0: string, arg1: string): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$Type<(D)>): D
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableBlockEntity$Type = ($AnimatableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableBlockEntity_ = $AnimatableBlockEntity$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableHoeItem$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AnimatableTiredItemBuilder, $AnimatableTiredItemBuilder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableTiredItemBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AnimatableHoeItem, $AnimatableHoeItem$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableHoeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableHoeItem$Builder extends $AnimatableTiredItemBuilder<($AnimatableHoeItem)> {
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $AnimatableHoeItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableHoeItem$Builder$Type = ($AnimatableHoeItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableHoeItem$Builder_ = $AnimatableHoeItem$Builder$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableTiredItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TieredItem, $TieredItem$Type} from "packages/net/minecraft/world/item/$TieredItem"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$MutableToolTier, $MutableToolTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AbstractAnimatableItemBuilder, $AbstractAnimatableItemBuilder$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableTiredItemBuilder<T extends ($TieredItem) & ($GeoItem)> extends $AbstractAnimatableItemBuilder<(T)> {
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type, arg1: float, arg2: float)

public "speedBaseline"(arg0: float): $AnimatableTiredItemBuilder<(T)>
public "attackDamageBonus"(arg0: float): $AnimatableTiredItemBuilder<(T)>
public "tier"(arg0: $Tier$Type): $AnimatableTiredItemBuilder<(T)>
public "modifyTier"(arg0: $Consumer$Type<($MutableToolTier$Type)>): $AnimatableTiredItemBuilder<(T)>
public "speed"(arg0: float): $AnimatableTiredItemBuilder<(T)>
public "attackDamageBaseline"(arg0: float): $AnimatableTiredItemBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableTiredItemBuilder$Type<T> = ($AnimatableTiredItemBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableTiredItemBuilder_<T> = $AnimatableTiredItemBuilder$Type<(T)>;
}}
declare module "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntityInfo$AnimationStateCallBack" {
import {$AnimatableBlockEntity, $AnimatableBlockEntity$Type} from "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntity"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"

export interface $AnimatableBlockEntityInfo$AnimationStateCallBack {

 "create"(arg0: $AnimationState$Type<($AnimatableBlockEntity$Type)>): $PlayState

(arg0: $AnimationState$Type<($AnimatableBlockEntity$Type)>): $PlayState
}

export namespace $AnimatableBlockEntityInfo$AnimationStateCallBack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableBlockEntityInfo$AnimationStateCallBack$Type = ($AnimatableBlockEntityInfo$AnimationStateCallBack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableBlockEntityInfo$AnimationStateCallBack_ = $AnimatableBlockEntityInfo$AnimationStateCallBack$Type;
}}
declare module "packages/org/mesdag/geckojs/block/$AnimatableBlockItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel$Builder, $ExtendedGeoModel$Builder$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel$Builder"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AnimatableBlockBuilder, $AnimatableBlockBuilder$Type} from "packages/org/mesdag/geckojs/block/$AnimatableBlockBuilder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnimatableBlockItem, $AnimatableBlockItem$Type} from "packages/org/mesdag/geckojs/block/$AnimatableBlockItem"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableBlockItemBuilder extends $ItemBuilder {
readonly "itemModel": $ExtendedGeoModel<($AnimatableBlockItem)>
 "hasModel": boolean
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type, arg1: $AnimatableBlockBuilder$Type)

public "getTranslationKeyGroup"(): string
public "generateAssetJsons"(arg0: $AssetJsonGenerator$Type): void
public "geoModel"(arg0: $Consumer$Type<($ExtendedGeoModel$Builder$Type<($AnimatableBlockItem$Type)>)>): $AnimatableBlockItemBuilder
public "defaultGeoModel"(): $AnimatableBlockItemBuilder
public "useEntityGuiLighting"(): $AnimatableBlockItemBuilder
get "translationKeyGroup"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableBlockItemBuilder$Type = ($AnimatableBlockItemBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableBlockItemBuilder_ = $AnimatableBlockItemBuilder$Type;
}}
declare module "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorRenderer" {
import {$AnimatableArmorBuilder$BoneVisibilityCallback, $AnimatableArmorBuilder$BoneVisibilityCallback$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorBuilder$BoneVisibilityCallback"
import {$GeoArmorRenderer, $GeoArmorRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AnimatableArmorItem, $AnimatableArmorItem$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorItem"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"

export class $AnimatableArmorRenderer extends $GeoArmorRenderer<($AnimatableArmorItem)> {
static readonly "OVERLAY_SCALE": float
static readonly "HAT_OVERLAY_SCALE": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "TOOT_HORN_XROT_BASE": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "head": $ModelPart
readonly "hat": $ModelPart
readonly "body": $ModelPart
readonly "rightArm": $ModelPart
readonly "leftArm": $ModelPart
readonly "rightLeg": $ModelPart
readonly "leftLeg": $ModelPart
 "leftArmPose": $HumanoidModel$ArmPose
 "rightArmPose": $HumanoidModel$ArmPose
 "crouching": boolean
 "swimAmount": float
readonly "scaleHead": boolean
readonly "babyYHeadOffset": float
readonly "babyZHeadOffset": float
readonly "babyHeadScale": float
readonly "babyBodyScale": float
readonly "bodyYOffset": float
 "attackTime": float
 "riding": boolean
 "young": boolean

constructor(arg0: $ExtendedGeoModel$Type<($AnimatableArmorItem$Type)>, arg1: $AnimatableArmorBuilder$BoneVisibilityCallback$Type)

public "setBoneVisible"(arg0: $GeoBone$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableArmorRenderer$Type = ($AnimatableArmorRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableArmorRenderer_ = $AnimatableArmorRenderer$Type;
}}
declare module "packages/org/mesdag/geckojs/$ExtendedGeoModel" {
import {$ExtendedGeoModel$Builder, $ExtendedGeoModel$Builder$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel$Builder"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $ExtendedGeoModel<T extends $GeoAnimatable> extends $GeoModel<(T)> {
readonly "builder": $ExtendedGeoModel$Builder<(T)>

constructor()

public "getAnimationResource"(arg0: T): $ResourceLocation
public "getRenderType"(arg0: T, arg1: $ResourceLocation$Type): $RenderType
public "getModelResource"(arg0: T): $ResourceLocation
public "getTextureResource"(arg0: T): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedGeoModel$Type<T> = ($ExtendedGeoModel<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedGeoModel_<T> = $ExtendedGeoModel$Type<(T)>;
}}
declare module "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorItem" {
import {$AnimatableArmorBuilder, $AnimatableArmorBuilder$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorBuilder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AnimatableArmorItem extends $ArmorItem implements $GeoItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AnimatableArmorBuilder$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public static "get"(arg0: $ItemStack$Type): $Equipable
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableArmorItem$Type = ($AnimatableArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableArmorItem_ = $AnimatableArmorItem$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatablePickaxeItem$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AnimatableTiredItemBuilder, $AnimatableTiredItemBuilder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableTiredItemBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AnimatablePickaxeItem, $AnimatablePickaxeItem$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatablePickaxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatablePickaxeItem$Builder extends $AnimatableTiredItemBuilder<($AnimatablePickaxeItem)> {
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $AnimatablePickaxeItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatablePickaxeItem$Builder$Type = ($AnimatablePickaxeItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatablePickaxeItem$Builder_ = $AnimatablePickaxeItem$Builder$Type;
}}
declare module "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback" {
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback {

 "call"(arg0: $GeoItem$Type, arg1: $ServerLevel$Type, arg2: $LivingEntity$Type): void

(arg0: $GeoItem$Type, arg1: $ServerLevel$Type, arg2: $LivingEntity$Type): void
}

export namespace $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type = ($AbstractAnimatableItemBuilder$FinishUsingAnimationCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback_ = $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableAxeItem$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AnimatableTiredItemBuilder, $AnimatableTiredItemBuilder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableTiredItemBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AnimatableAxeItem, $AnimatableAxeItem$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableAxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableAxeItem$Builder extends $AnimatableTiredItemBuilder<($AnimatableAxeItem)> {
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $AnimatableAxeItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableAxeItem$Builder$Type = ($AnimatableAxeItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableAxeItem$Builder_ = $AnimatableAxeItem$Builder$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableSwordItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$AnimatableSwordItem$Builder, $AnimatableSwordItem$Builder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableSwordItem$Builder"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableSwordItem extends $SwordItem implements $GeoItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AnimatableSwordItem$Builder$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableSwordItem$Type = ($AnimatableSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableSwordItem_ = $AnimatableSwordItem$Type;
}}
declare module "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorBuilder$AnimationStateCallback" {
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$AnimatableArmorItem, $AnimatableArmorItem$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorItem"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"

export interface $AnimatableArmorBuilder$AnimationStateCallback {

 "create"(arg0: $AnimationState$Type<($AnimatableArmorItem$Type)>): $PlayState

(arg0: $AnimationState$Type<($AnimatableArmorItem$Type)>): $PlayState
}

export namespace $AnimatableArmorBuilder$AnimationStateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableArmorBuilder$AnimationStateCallback$Type = ($AnimatableArmorBuilder$AnimationStateCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableArmorBuilder$AnimationStateCallback_ = $AnimatableArmorBuilder$AnimationStateCallback$Type;
}}
declare module "packages/org/mesdag/geckojs/item/$AnimatableItem$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AnimatableItem, $AnimatableItem$Type} from "packages/org/mesdag/geckojs/item/$AnimatableItem"
import {$AbstractAnimatableItemBuilder, $AbstractAnimatableItemBuilder$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableItem$Builder extends $AbstractAnimatableItemBuilder<($AnimatableItem)> {
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $AnimatableItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableItem$Builder$Type = ($AnimatableItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableItem$Builder_ = $AnimatableItem$Builder$Type;
}}
declare module "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$AnimationStateCallback" {
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$AnimationState, $AnimationState$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import {$PlayState, $PlayState$Type} from "packages/software/bernie/geckolib/core/object/$PlayState"

export interface $AbstractAnimatableItemBuilder$AnimationStateCallback {

 "create"(arg0: $AnimationState$Type<($GeoItem$Type)>): $PlayState

(arg0: $AnimationState$Type<($GeoItem$Type)>): $PlayState
}

export namespace $AbstractAnimatableItemBuilder$AnimationStateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAnimatableItemBuilder$AnimationStateCallback$Type = ($AbstractAnimatableItemBuilder$AnimationStateCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAnimatableItemBuilder$AnimationStateCallback_ = $AbstractAnimatableItemBuilder$AnimationStateCallback$Type;
}}
declare module "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorBuilder$BoneVisibilityCallback" {
import {$AnimatableArmorRenderer, $AnimatableArmorRenderer$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorRenderer"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"

export interface $AnimatableArmorBuilder$BoneVisibilityCallback {

 "apply"(arg0: $AnimatableArmorRenderer$Type, arg1: $EquipmentSlot$Type): void

(arg0: $AnimatableArmorRenderer$Type, arg1: $EquipmentSlot$Type): void
}

export namespace $AnimatableArmorBuilder$BoneVisibilityCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableArmorBuilder$BoneVisibilityCallback$Type = ($AnimatableArmorBuilder$BoneVisibilityCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableArmorBuilder$BoneVisibilityCallback_ = $AnimatableArmorBuilder$BoneVisibilityCallback$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableShieldItem$ValidRepairItemCallback" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AnimatableShieldItem$ValidRepairItemCallback {

 "is"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean

(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $AnimatableShieldItem$ValidRepairItemCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableShieldItem$ValidRepairItemCallback$Type = ($AnimatableShieldItem$ValidRepairItemCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableShieldItem$ValidRepairItemCallback_ = $AnimatableShieldItem$ValidRepairItemCallback$Type;
}}
declare module "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback" {
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback {

 "call"(arg0: $GeoItem$Type, arg1: $ServerLevel$Type, arg2: $LivingEntity$Type, arg3: integer): void

(arg0: $GeoItem$Type, arg1: $ServerLevel$Type, arg2: $LivingEntity$Type, arg3: integer): void
}

export namespace $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type = ($AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback_ = $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type;
}}
declare module "packages/org/mesdag/geckojs/$ExtendedGeoModel$ResourceCallback" {
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ExtendedGeoModel$ResourceCallback<T extends $GeoAnimatable> {

 "create"(arg0: T): $ResourceLocation

(arg0: T): $ResourceLocation
}

export namespace $ExtendedGeoModel$ResourceCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedGeoModel$ResourceCallback$Type<T> = ($ExtendedGeoModel$ResourceCallback<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedGeoModel$ResourceCallback_<T> = $ExtendedGeoModel$ResourceCallback$Type<(T)>;
}}
declare module "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractAnimatableItemBuilder$AnimationStateCallback, $AbstractAnimatableItemBuilder$AnimationStateCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$AnimationStateCallback"
import {$ExtendedGeoModel$Builder, $ExtendedGeoModel$Builder$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel$Builder"
import {$AnimationControllerBuilder, $AnimationControllerBuilder$Type} from "packages/org/mesdag/geckojs/$AnimationControllerBuilder"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractAnimatableItemBuilder<T extends ($Item) & ($GeoItem)> extends $ItemBuilder {
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "generateAssetJsons"(arg0: $AssetJsonGenerator$Type): void
public "usingAnimation"(arg0: $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type): $AbstractAnimatableItemBuilder<(T)>
public "addAnimation"(arg0: $AbstractAnimatableItemBuilder$AnimationStateCallback$Type): $AbstractAnimatableItemBuilder<(T)>
public "geoModel"(arg0: $Consumer$Type<($ExtendedGeoModel$Builder$Type<(T)>)>): $AbstractAnimatableItemBuilder<(T)>
public "defaultGeoModel"(): $AbstractAnimatableItemBuilder<(T)>
public "addController"(arg0: $Consumer$Type<($AnimationControllerBuilder$Type<(T)>)>): $AbstractAnimatableItemBuilder<(T)>
public "finishUsingAnimation"(arg0: $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type): $AbstractAnimatableItemBuilder<(T)>
public "useEntityGuiLighting"(): $AbstractAnimatableItemBuilder<(T)>
public "releaseUsingAnimation"(arg0: $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type): $AbstractAnimatableItemBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAnimatableItemBuilder$Type<T> = ($AbstractAnimatableItemBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAnimatableItemBuilder_<T> = $AbstractAnimatableItemBuilder$Type<(T)>;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableShieldItem" {
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AnimatableShieldItem$Builder, $AnimatableShieldItem$Builder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableShieldItem$Builder"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ShieldItem, $ShieldItem$Type} from "packages/net/minecraft/world/item/$ShieldItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AnimatableShieldItem extends $ShieldItem implements $GeoItem {
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "TAG_BASE_COLOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AnimatableShieldItem$Builder$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public static "get"(arg0: $ItemStack$Type): $Equipable
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableShieldItem$Type = ($AnimatableShieldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableShieldItem_ = $AnimatableShieldItem$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableAxeItem" {
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AnimatableAxeItem$Builder, $AnimatableAxeItem$Builder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableAxeItem$Builder"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableAxeItem extends $AxeItem implements $GeoItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AnimatableAxeItem$Builder$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableAxeItem$Type = ($AnimatableAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableAxeItem_ = $AnimatableAxeItem$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableShieldItem$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$AnimatableShieldItem$ValidRepairItemCallback, $AnimatableShieldItem$ValidRepairItemCallback$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableShieldItem$ValidRepairItemCallback"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AnimatableShieldItem, $AnimatableShieldItem$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableShieldItem"
import {$AbstractAnimatableItemBuilder, $AbstractAnimatableItemBuilder$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableShieldItem$Builder extends $AbstractAnimatableItemBuilder<($AnimatableShieldItem)> {
 "validRepairItemCallback": $AnimatableShieldItem$ValidRepairItemCallback
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "generateAssetJsons"(arg0: $AssetJsonGenerator$Type): void
public "validRepairItem"(arg0: $AnimatableShieldItem$ValidRepairItemCallback$Type): $AnimatableShieldItem$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableShieldItem$Builder$Type = ($AnimatableShieldItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableShieldItem$Builder_ = $AnimatableShieldItem$Builder$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatablePickaxeItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimatablePickaxeItem$Builder, $AnimatablePickaxeItem$Builder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatablePickaxeItem$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatablePickaxeItem extends $PickaxeItem implements $GeoItem {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AnimatablePickaxeItem$Builder$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatablePickaxeItem$Type = ($AnimatablePickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatablePickaxeItem_ = $AnimatablePickaxeItem$Type;
}}
declare module "packages/org/mesdag/geckojs/block/$AnimatableBlockBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootBuilder, $LootBuilder$Type} from "packages/dev/latvian/mods/kubejs/loot/$LootBuilder"
import {$ExtendedGeoModel$Builder, $ExtendedGeoModel$Builder$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel$Builder"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RandomTickCallbackJS, $RandomTickCallbackJS$Type} from "packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockBuilder, $BlockBuilder$Type} from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import {$AnimatableBlockEntity, $AnimatableBlockEntity$Type} from "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AnimatableBlockItemBuilder, $AnimatableBlockItemBuilder$Type} from "packages/org/mesdag/geckojs/block/$AnimatableBlockItemBuilder"
import {$AnimatableBlockEntityInfo, $AnimatableBlockEntityInfo$Type} from "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntityInfo"

export class $AnimatableBlockBuilder extends $BlockBuilder {
 "randomTickCallback": $Consumer<($RandomTickCallbackJS)>
 "lootTable": $Consumer<($LootBuilder)>
 "blockstateJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $Block
public "createAdditionalObjects"(): void
public "generateAssetJsons"(arg0: $AssetJsonGenerator$Type): void
public "animatableItem"(arg0: $Consumer$Type<($AnimatableBlockItemBuilder$Type)>): $AnimatableBlockBuilder
public "geoModel"(arg0: $Consumer$Type<($ExtendedGeoModel$Builder$Type<($AnimatableBlockEntity$Type)>)>): $AnimatableBlockBuilder
public "defaultGeoModel"(): $AnimatableBlockBuilder
public "noItem"(): $BlockBuilder
/**
 * Creates a animatable Block Entity for this block
 */
public "animatableBlockEntity"(arg0: $Consumer$Type<($AnimatableBlockEntityInfo$Type)>): $AnimatableBlockBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableBlockBuilder$Type = ($AnimatableBlockBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableBlockBuilder_ = $AnimatableBlockBuilder$Type;
}}
declare module "packages/org/mesdag/geckojs/block/$AnimatableBlockItem" {
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AnimatableBlockItemBuilder, $AnimatableBlockItemBuilder$Type} from "packages/org/mesdag/geckojs/block/$AnimatableBlockItemBuilder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AnimatableBlockItem extends $BlockItem implements $GeoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $AnimatableBlockItemBuilder$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableBlockItem$Type = ($AnimatableBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableBlockItem_ = $AnimatableBlockItem$Type;
}}
declare module "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntityInfo" {
import {$AnimatableBlockEntityInfo$AnimationStateCallBack, $AnimatableBlockEntityInfo$AnimationStateCallBack$Type} from "packages/org/mesdag/geckojs/block/entity/$AnimatableBlockEntityInfo$AnimationStateCallBack"
import {$BlockEntityInfo, $BlockEntityInfo$Type} from "packages/dev/latvian/mods/kubejs/block/entity/$BlockEntityInfo"
import {$AnimatableBlockBuilder, $AnimatableBlockBuilder$Type} from "packages/org/mesdag/geckojs/block/$AnimatableBlockBuilder"

export class $AnimatableBlockEntityInfo extends $BlockEntityInfo {

constructor(arg0: $AnimatableBlockBuilder$Type)

public "addAnimation"(arg0: $AnimatableBlockEntityInfo$AnimationStateCallBack$Type): $AnimatableBlockEntityInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableBlockEntityInfo$Type = ($AnimatableBlockEntityInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableBlockEntityInfo_ = $AnimatableBlockEntityInfo$Type;
}}
declare module "packages/org/mesdag/geckojs/$AnimationControllerBuilder" {
import {$EasingType, $EasingType$Type} from "packages/software/bernie/geckolib/core/animation/$EasingType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AnimationController$ParticleKeyframeHandler, $AnimationController$ParticleKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$ParticleKeyframeHandler"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimationController$SoundKeyframeHandler, $AnimationController$SoundKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$SoundKeyframeHandler"
import {$AnimationController$CustomKeyframeHandler, $AnimationController$CustomKeyframeHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$CustomKeyframeHandler"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$AnimationController$AnimationStateHandler, $AnimationController$AnimationStateHandler$Type} from "packages/software/bernie/geckolib/core/animation/$AnimationController$AnimationStateHandler"

export class $AnimationControllerBuilder<T extends $GeoAnimatable> {

constructor()

public "name"(arg0: string): $AnimationControllerBuilder<(T)>
public "transitionTickTime"(arg0: integer): $AnimationControllerBuilder<(T)>
/**
 * Registers a triggerable RawAnimation with the controller.
 * 
 * These can then be triggered by the various triggerAnim methods in GeoAnimatable's subclasses
 * 
 * @param name The name of the triggerable animation
 * 
 * @param animation The RawAnimation for this triggerable animation
 */
public "triggerableAnim"(arg0: string, arg1: $RawAnimation$Type): $AnimationControllerBuilder<(T)>
/**
 * Sets the controller's EasingType override function for animations.
 * 
 * By default, the controller will use whatever EasingType was defined in the animation json
 * 
 * @param easingType The new EasingType to use
 */
public "overrideEasingTypeFunction"(arg0: $Function$Type<(T), ($EasingType$Type)>): $AnimationControllerBuilder<(T)>
/**
 * Applies the given modifier function to this controller, for handling the speed that the controller should play its animations at.
 * 
 * An output value of 1 is considered neutral, with 2 playing an animation twice as fast, 0.5 playing half as fast, etc.
 * 
 * @param speedModFunction The function to apply to this controller to handle animation speed
 */
public "animationSpeedHandler"(arg0: $Function$Type<(T), (double)>): $AnimationControllerBuilder<(T)>
public "animationState"(arg0: $AnimationController$AnimationStateHandler$Type<(T)>): $AnimationControllerBuilder<(T)>
/**
 * Applies the given SoundKeyframeHandler to this controller, for handling sound keyframe instructions.
 */
public "soundKeyframe"(arg0: $AnimationController$SoundKeyframeHandler$Type<(T)>): $AnimationControllerBuilder<(T)>
/**
 * Applies the given CustomKeyframeHandler to this controller, for handling sound keyframe instructions.
 */
public "customKeyframe"(arg0: $AnimationController$CustomKeyframeHandler$Type<(T)>): $AnimationControllerBuilder<(T)>
/**
 * Sets the controller's EasingType override for animations.
 * 
 * By default, the controller will use whatever EasingType was defined in the animation json
 * 
 * @param easingTypeFunction The new EasingType to use
 */
public "overrideEasingType"(arg0: $EasingType$Type): $AnimationControllerBuilder<(T)>
/**
 * Applies the given ParticleKeyframeHandler to this controller, for handling particle keyframe instructions.
 */
public "particleKeyframe"(arg0: $AnimationController$ParticleKeyframeHandler$Type<(T)>): $AnimationControllerBuilder<(T)>
/**
 * Applies the given modifier value to this controller, for handling the speed that the controller should play its animations at.
 * 
 * An output value of 1 is considered neutral, with 2 playing an animation twice as fast, 0.5 playing half as fast, etc.
 * 
 * @param speed The speed modifier to apply to this controller to handle animation speed.
 */
public "animationSpeed"(arg0: double): $AnimationControllerBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationControllerBuilder$Type<T> = ($AnimationControllerBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationControllerBuilder_<T> = $AnimationControllerBuilder$Type<(T)>;
}}
declare module "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export interface $AbstractAnimatableItemBuilder$UsingAnimationCallback {

 "call"(arg0: $GeoItem$Type, arg1: $ServerLevel$Type, arg2: $ServerPlayer$Type, arg3: $InteractionHand$Type): void

(arg0: $GeoItem$Type, arg1: $ServerLevel$Type, arg2: $ServerPlayer$Type, arg3: $InteractionHand$Type): void
}

export namespace $AbstractAnimatableItemBuilder$UsingAnimationCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type = ($AbstractAnimatableItemBuilder$UsingAnimationCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAnimatableItemBuilder$UsingAnimationCallback_ = $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type;
}}
declare module "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel$Builder, $ExtendedGeoModel$Builder$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel$Builder"
import {$AnimationControllerBuilder, $AnimationControllerBuilder$Type} from "packages/org/mesdag/geckojs/$AnimationControllerBuilder"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AssetJsonGenerator, $AssetJsonGenerator$Type} from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ArmorItemBuilder, $ArmorItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$ArmorItemBuilder"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AnimatableArmorBuilder$BoneVisibilityCallback, $AnimatableArmorBuilder$BoneVisibilityCallback$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorBuilder$BoneVisibilityCallback"
import {$MutableArmorTier, $MutableArmorTier$Type} from "packages/dev/latvian/mods/kubejs/item/$MutableArmorTier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AnimatableArmorBuilder$AnimationStateCallback, $AnimatableArmorBuilder$AnimationStateCallback$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorBuilder$AnimationStateCallback"
import {$AnimatableArmorItem, $AnimatableArmorItem$Type} from "packages/org/mesdag/geckojs/item/armor/$AnimatableArmorItem"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableArmorBuilder extends $ArmorItemBuilder {
readonly "armorModel": $ExtendedGeoModel<($AnimatableArmorItem)>
 "useGeoModel": boolean
 "boneVisibilityCallback": $AnimatableArmorBuilder$BoneVisibilityCallback
readonly "armorType": $ArmorItem$Type
 "armorTier": $MutableArmorTier
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type, arg1: $ArmorItem$Type$Type)

public "createObject"(): $Item
public "generateAssetJsons"(arg0: $AssetJsonGenerator$Type): void
public "boneVisibility"(arg0: $AnimatableArmorBuilder$BoneVisibilityCallback$Type): $AnimatableArmorBuilder
public "addAnimation"(arg0: $AnimatableArmorBuilder$AnimationStateCallback$Type): $AnimatableArmorBuilder
public "geoModel"(arg0: $Consumer$Type<($ExtendedGeoModel$Builder$Type<($AnimatableArmorItem$Type)>)>): $AnimatableArmorBuilder
public "defaultGeoModel"(): $AnimatableArmorBuilder
public "addController"(arg0: $Consumer$Type<($AnimationControllerBuilder$Type<($AnimatableArmorItem$Type)>)>): $AnimatableArmorBuilder
public "armorItemUseGeoModel"(): $AnimatableArmorBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableArmorBuilder$Type = ($AnimatableArmorBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableArmorBuilder_ = $AnimatableArmorBuilder$Type;
}}
declare module "packages/org/mesdag/geckojs/$ExtendedGeoModel$Builder" {
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$ExtendedGeoModel$ResourceCallback, $ExtendedGeoModel$ResourceCallback$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel$ResourceCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ExtendedGeoModel$Builder<T extends $GeoAnimatable> {
 "scaleWidth": float
 "scaleHeight": float
 "autoGlowing": boolean

constructor()

public "setScale"(arg0: float): void
/**
 * This method should return the ResourceLocation path to your .animation.json animation file for this animatable
 */
public "setAnimation"(arg0: $ExtendedGeoModel$ResourceCallback$Type<(T)>): void
/**
 * The ResourceLocation path to your .geo.json model file for this animatable
 */
public "setSimpleModel"(arg0: $ResourceLocation$Type): void
/**
 * The ResourceLocation path to your .png texture file for this animatable
 */
public "setSimpleTexture"(arg0: $ResourceLocation$Type): void
/**
 * The ResourceLocation path to your .animation.json animation file for this animatable
 */
public "setSimpleAnimation"(arg0: $ResourceLocation$Type): void
/**
 * This method should return the ResourceLocation path to your .png texture file for this animatable
 */
public "setTexture"(arg0: $ExtendedGeoModel$ResourceCallback$Type<(T)>): void
/**
 * This method should return the ResourceLocation path to your .geo.json model file for this animatable
 */
public "setModel"(arg0: $ExtendedGeoModel$ResourceCallback$Type<(T)>): void
set "scale"(value: float)
set "animation"(value: $ExtendedGeoModel$ResourceCallback$Type<(T)>)
set "simpleModel"(value: $ResourceLocation$Type)
set "simpleTexture"(value: $ResourceLocation$Type)
set "simpleAnimation"(value: $ResourceLocation$Type)
set "texture"(value: $ExtendedGeoModel$ResourceCallback$Type<(T)>)
set "model"(value: $ExtendedGeoModel$ResourceCallback$Type<(T)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedGeoModel$Builder$Type<T> = ($ExtendedGeoModel$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedGeoModel$Builder_<T> = $ExtendedGeoModel$Builder$Type<(T)>;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableHoeItem" {
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimatableHoeItem$Builder, $AnimatableHoeItem$Builder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableHoeItem$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableHoeItem extends $HoeItem implements $GeoItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AnimatableHoeItem$Builder$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableHoeItem$Type = ($AnimatableHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableHoeItem_ = $AnimatableHoeItem$Type;
}}
declare module "packages/org/mesdag/geckojs/item/tool/$AnimatableSwordItem$Builder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AnimatableTiredItemBuilder, $AnimatableTiredItemBuilder$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableTiredItemBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ExtendedGeoModel, $ExtendedGeoModel$Type} from "packages/org/mesdag/geckojs/$ExtendedGeoModel"
import {$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback, $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$FinishUsingAnimationCallback"
import {$AbstractAnimatableItemBuilder$UsingAnimationCallback, $AbstractAnimatableItemBuilder$UsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$UsingAnimationCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback, $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$AnimatableSwordItem, $AnimatableSwordItem$Type} from "packages/org/mesdag/geckojs/item/tool/$AnimatableSwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnimatableSwordItem$Builder extends $AnimatableTiredItemBuilder<($AnimatableSwordItem)> {
readonly "itemModel": $ExtendedGeoModel<(T)>
 "usingAnimationCallback": $AbstractAnimatableItemBuilder$UsingAnimationCallback
 "finishUsingAnimationCallback": $AbstractAnimatableItemBuilder$FinishUsingAnimationCallback
 "releaseUsingAnimationCallback": $AbstractAnimatableItemBuilder$ReleaseUsingAnimationCallback
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(arg0: $ResourceLocation$Type)

public "createObject"(): $AnimatableSwordItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableSwordItem$Builder$Type = ($AnimatableSwordItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableSwordItem$Builder_ = $AnimatableSwordItem$Builder$Type;
}}
declare module "packages/org/mesdag/geckojs/item/$AnimatableItem" {
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AbstractAnimatableItemBuilder, $AbstractAnimatableItemBuilder$Type} from "packages/org/mesdag/geckojs/item/$AbstractAnimatableItemBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BasicItemJS, $BasicItemJS$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$BasicItemJS"

export class $AnimatableItem extends $BasicItemJS implements $GeoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AbstractAnimatableItemBuilder$Type<($AnimatableItem$Type)>)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$Type): long
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "getTick"(arg0: any): double
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "isPerspectiveAware"(): boolean
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableItem$Type = ($AnimatableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableItem_ = $AnimatableItem$Type;
}}
