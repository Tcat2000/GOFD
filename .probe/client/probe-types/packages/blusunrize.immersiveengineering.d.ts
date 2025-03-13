declare module "packages/blusunrize/immersiveengineering/api/crafting/$IIngredientWithSizeSerializer" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export interface $IIngredientWithSizeSerializer {

 "write"(arg0: $IngredientWithSize$Type): $JsonElement
 "write"(arg0: $FriendlyByteBuf$Type, arg1: $IngredientWithSize$Type): void
 "parse"(arg0: $FriendlyByteBuf$Type): $IngredientWithSize
 "parse"(arg0: $JsonElement$Type): $IngredientWithSize
}

export namespace $IIngredientWithSizeSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientWithSizeSerializer$Type = ($IIngredientWithSizeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientWithSizeSerializer_ = $IIngredientWithSizeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$ShapeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ShapeType extends $Enum<($ShapeType)> {
static readonly "COLLISION": $ShapeType
static readonly "BLOCK_SUPPORT": $ShapeType
static readonly "SELECTION": $ShapeType


public static "values"(): ($ShapeType)[]
public static "valueOf"(arg0: string): $ShapeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeType$Type = (("collision") | ("selection") | ("block_support")) | ($ShapeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeType_ = $ShapeType$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$RenderChunkAccess" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export interface $RenderChunkAccess {

 "invokeBeginLayer"(arg0: $BufferBuilder$Type): void

(arg0: $BufferBuilder$Type): void
}

export namespace $RenderChunkAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderChunkAccess$Type = ($RenderChunkAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderChunkAccess_ = $RenderChunkAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$VoltmeterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$VoltmeterItem$RemoteRedstoneData, $VoltmeterItem$RemoteRedstoneData$Type} from "packages/blusunrize/immersiveengineering/common/items/$VoltmeterItem$RemoteRedstoneData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VoltmeterItem$RemoteEnergyData, $VoltmeterItem$RemoteEnergyData$Type} from "packages/blusunrize/immersiveengineering/common/items/$VoltmeterItem$RemoteEnergyData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VoltmeterItem extends $IEBaseItem {
static "lastEnergyUpdate": $VoltmeterItem$RemoteEnergyData
static "lastRedstoneUpdate": $VoltmeterItem$RemoteRedstoneData
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltmeterItem$Type = ($VoltmeterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoltmeterItem_ = $VoltmeterItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$DamageSourcesAccess" {
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $DamageSourcesAccess {

 "invokeSource"(arg0: $ResourceKey$Type<($DamageType$Type)>, arg1: $Entity$Type, arg2: $Entity$Type): $DamageSource

(arg0: $ResourceKey$Type<($DamageType$Type)>, arg1: $Entity$Type, arg2: $Entity$Type): $DamageSource
}

export namespace $DamageSourcesAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcesAccess$Type = ($DamageSourcesAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageSourcesAccess_ = $DamageSourcesAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$SampleDrillBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CoresampleItem$VeinSampleData, $CoresampleItem$VeinSampleData$Type} from "packages/blusunrize/immersiveengineering/common/items/$CoresampleItem$VeinSampleData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IEClientTickableBE, $IEClientTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$MutableEnergyStorage, $MutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$MutableEnergyStorage"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$MineralWorldInfo, $MineralWorldInfo$Type} from "packages/blusunrize/immersiveengineering/api/excavator/$MineralWorldInfo"
import {$IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IPlayerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $SampleDrillBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEClientTickableBE, $IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IPlayerInteraction, $IModelOffsetProvider {
 "energyStorage": $MutableEnergyStorage
 "dummy": integer
 "process": integer
 "isRunning": boolean
 "sample": $ItemStack

constructor(arg0: $BlockEntityType$Type<($SampleDrillBlockEntity$Type)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tickClient"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "canTickAny"(): boolean
public "isDummy"(): boolean
public "tickServer"(): void
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "getRenderBoundingBox"(): $AABB
public "master"(): $SampleDrillBlockEntity
public "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
public "isSamplingFinished"(): boolean
public "createCoreSample"(arg0: $MineralWorldInfo$Type): $ItemStack
public "getSampleProgress"(): float
public "getVein"(): $List<($CoresampleItem$VeinSampleData)>
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
get "dummy"(): boolean
get "renderBoundingBox"(): $AABB
get "samplingFinished"(): boolean
get "sampleProgress"(): float
get "vein"(): $List<($CoresampleItem$VeinSampleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleDrillBlockEntity$Type = ($SampleDrillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SampleDrillBlockEntity_ = $SampleDrillBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IColouredBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IEBlockInterfaces$IColouredBlock {

 "hasCustomBlockColours"(): boolean
 "getRenderColour"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
}

export namespace $IEBlockInterfaces$IColouredBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IColouredBlock$Type = ($IEBlockInterfaces$IColouredBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IColouredBlock_ = $IEBlockInterfaces$IColouredBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$CoresampleItem$VeinSampleData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MineralMix, $MineralMix$Type} from "packages/blusunrize/immersiveengineering/api/excavator/$MineralMix"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $CoresampleItem$VeinSampleData {

constructor(arg0: $MineralMix$Type, arg1: double, arg2: double, arg3: integer)

public "getType"(): $MineralMix
public "getDepletion"(): integer
public "getSaturation"(): double
public "getPercentageInTotalSample"(): double
public static "fromNBT"(arg0: $Level$Type, arg1: $CompoundTag$Type): $CoresampleItem$VeinSampleData
public "toNBT"(): $CompoundTag
get "type"(): $MineralMix
get "depletion"(): integer
get "saturation"(): double
get "percentageInTotalSample"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoresampleItem$VeinSampleData$Type = ($CoresampleItem$VeinSampleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoresampleItem$VeinSampleData_ = $CoresampleItem$VeinSampleData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/excavator/$MineralVein" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ColumnPos, $ColumnPos$Type} from "packages/net/minecraft/server/level/$ColumnPos"
import {$MineralMix, $MineralMix$Type} from "packages/blusunrize/immersiveengineering/api/excavator/$MineralMix"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MineralVein {

constructor(arg0: $ColumnPos$Type, arg1: $ResourceLocation$Type, arg2: integer)

public "deplete"(): void
public "getRadius"(): integer
public static "readFromNBT"(arg0: $CompoundTag$Type): $MineralVein
public "getMineral"(arg0: $Level$Type): $MineralMix
public "getFailChance"(arg0: $BlockPos$Type): double
public "getDepletion"(): integer
public "isDepleted"(): boolean
public "setDepletion"(arg0: integer): void
public "writeToNBT"(): $CompoundTag
public "getPos"(): $ColumnPos
get "radius"(): integer
get "depletion"(): integer
get "depleted"(): boolean
set "depletion"(value: integer)
get "pos"(): $ColumnPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralVein$Type = ($MineralVein);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineralVein_ = $MineralVein$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$CoresampleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MineralMix, $MineralMix$Type} from "packages/blusunrize/immersiveengineering/api/excavator/$MineralMix"
import {$CoresampleItem$VeinSampleData, $CoresampleItem$VeinSampleData$Type} from "packages/blusunrize/immersiveengineering/common/items/$CoresampleItem$VeinSampleData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MineralWorldInfo, $MineralWorldInfo$Type} from "packages/blusunrize/immersiveengineering/api/excavator/$MineralWorldInfo"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ColumnPos, $ColumnPos$Type} from "packages/net/minecraft/server/level/$ColumnPos"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoresampleItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public static "getSimplifiedMineralList"(arg0: $Level$Type, arg1: $ItemStack$Type): $ListTag
public static "getCoords"(arg0: $ItemStack$Type): $ColumnPos
public static "getCoresampleInfo"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: $ChatFormatting$Type, arg3: $Level$Type, arg4: boolean, arg5: boolean): void
public static "getDimension"(arg0: $ItemStack$Type): $ResourceKey<($Level)>
public static "getMineralMixes"(arg0: $Level$Type, arg1: $ItemStack$Type): ($MineralMix)[]
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setDimension"(arg0: $ItemStack$Type, arg1: $ResourceKey$Type<($Level$Type)>): void
public static "setMineralInfo"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $MineralWorldInfo$Type, arg3: $BlockPos$Type): void
public static "setCoords"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
public static "getVeins"(arg0: $Level$Type, arg1: $ItemStack$Type): $List<($CoresampleItem$VeinSampleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoresampleItem$Type = ($CoresampleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoresampleItem_ = $CoresampleItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$MetalLadderBlock$CoverType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MetalLadderBlock$CoverType extends $Enum<($MetalLadderBlock$CoverType)> {
static readonly "NONE": $MetalLadderBlock$CoverType
static readonly "ALU": $MetalLadderBlock$CoverType
static readonly "STEEL": $MetalLadderBlock$CoverType


public static "values"(): ($MetalLadderBlock$CoverType)[]
public static "valueOf"(arg0: string): $MetalLadderBlock$CoverType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalLadderBlock$CoverType$Type = (("steel") | ("none") | ("alu")) | ($MetalLadderBlock$CoverType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalLadderBlock$CoverType_ = $MetalLadderBlock$CoverType$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ShaderItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IShaderItem, $IShaderItem$Type} from "packages/blusunrize/immersiveengineering/api/shader/$IShaderItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IEItemInterfaces$IColouredItem, $IEItemInterfaces$IColouredItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IColouredItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ShaderCase, $ShaderCase$Type} from "packages/blusunrize/immersiveengineering/api/shader/$ShaderCase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShaderItem extends $IEBaseItem implements $IShaderItem, $IEItemInterfaces$IColouredItem {
static readonly "SHADER_NAME_KEY": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getShaderName"(arg0: $ItemStack$Type): $ResourceLocation
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getColourForIEItem"(arg0: $ItemStack$Type, arg1: integer): integer
public "getShaderCase"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): $ShaderCase
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderItem$Type = ($ShaderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderItem_ = $ShaderItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ToolUpgradeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ToolUpgradeItem$ToolUpgrade, $ToolUpgradeItem$ToolUpgrade$Type} from "packages/blusunrize/immersiveengineering/common/items/$ToolUpgradeItem$ToolUpgrade"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IUpgrade, $IUpgrade$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IUpgrade"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ToolUpgradeItem extends $IEBaseItem implements $IUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ToolUpgradeItem$ToolUpgrade$Type)

public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "canApplyUpgrades"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getUpgradeTypes"(arg0: $ItemStack$Type): $Set<(string)>
public "applyUpgrades"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $CompoundTag$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolUpgradeItem$Type = ($ToolUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolUpgradeItem_ = $ToolUpgradeItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IMultiblockLevel" {
import {$MultiblockOrientation, $MultiblockOrientation$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockOrientation"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RelativeBlockFace, $RelativeBlockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$RelativeBlockFace"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IMultiblockLevel {

 "shouldTickModulo"(arg0: integer): boolean
 "isThundering"(): boolean
 "isRaining"(): boolean
 "getCapabilityValue"<T>(arg0: $Capability$Type<(T)>, arg1: $BlockPos$Type, arg2: $RelativeBlockFace$Type): T
 "getAbsoluteOrigin"(): $BlockPos
 "toRelative"(arg0: $Direction$Type): $RelativeBlockFace
 "toRelative"(arg0: $BlockPos$Type): $BlockPos
 "getMaxBuildHeight"(): integer
 "updateNeighbourForOutputSignal"(arg0: $BlockPos$Type): void
 "forciblyGetBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getOrientation"(): $MultiblockOrientation
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "toAbsolute"(arg0: $BlockPos$Type): $BlockPos
 "toAbsolute"(arg0: $RelativeBlockFace$Type): $Direction
 "toAbsolute"(arg0: $AABB$Type): $AABB
 "toAbsolute"(arg0: $Vec3$Type): $Vec3
 "getRawLevel"(): $Level
}

export namespace $IMultiblockLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockLevel$Type = ($IMultiblockLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockLevel_ = $IMultiblockLevel$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IScrewdriverInteraction" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $IEBlockInterfaces$IScrewdriverInteraction {

 "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): $InteractionResult

(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): $InteractionResult
}

export namespace $IEBlockInterfaces$IScrewdriverInteraction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IScrewdriverInteraction$Type = ($IEBlockInterfaces$IScrewdriverInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IScrewdriverInteraction_ = $IEBlockInterfaces$IScrewdriverInteraction$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$TurnAndCopyRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$AbstractShapedRecipe, $AbstractShapedRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractShapedRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$TurnAndCopyRecipe$MatchLocation, $TurnAndCopyRecipe$MatchLocation$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$TurnAndCopyRecipe$MatchLocation"

export class $TurnAndCopyRecipe extends $AbstractShapedRecipe<($TurnAndCopyRecipe$MatchLocation)> {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type, arg6: $CraftingBookCategory$Type)

public "hasCopyPredicate"(): boolean
public "isQuarterTurn"(): boolean
public "isEightTurn"(): boolean
public "getCopyTargets"(): (integer)[]
public "getBufferPredicate"(): string
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "setNBTCopyPredicate"(arg0: string): void
public "setNBTCopyTargetRecipe"(...arg0: (integer)[]): void
public "allowQuarterTurn"(): void
public "allowEighthTurn"(): void
get "quarterTurn"(): boolean
get "eightTurn"(): boolean
get "copyTargets"(): (integer)[]
get "bufferPredicate"(): string
get "serializer"(): $RecipeSerializer<(any)>
set "nBTCopyPredicate"(value: string)
set "nBTCopyTargetRecipe"(value: (integer)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipe$Type = ($TurnAndCopyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurnAndCopyRecipe_ = $TurnAndCopyRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$ShaderBannerBlock" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ShaderBannerBlockEntity, $ShaderBannerBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/cloth/$ShaderBannerBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ShaderBannerBlock extends $IEEntityBlock<($ShaderBannerBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerBlock$Type = ($ShaderBannerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderBannerBlock_ = $ShaderBannerBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FeedthroughBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlockInterfaces$IBlockEntityDrop, $IEBlockInterfaces$IBlockEntityDrop$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockEntityDrop"

export class $FeedthroughBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IBlockEntityDrop, $IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IStateBasedDirectional {
static readonly "WIRE": string
static readonly "MIDDLE_STATE": string
 "reference": $WireType
 "stateForMiddle": $BlockState
 "offset": integer
 "currentlyDisassembling": boolean

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "getFacingLimitation"(): $PlacementLimitation
public "getConnectionMaster"(arg0: $WireType$Type, arg1: $TargetingInfo$Type): $BlockPos
public "getInternalConnections"(): $Iterable<(any)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
public "removeCable"(arg0: $Connection$Type, arg1: $ConnectionPoint$Type): void
public "getIgnored"(arg0: $IImmersiveConnectable$Type): $Set<($BlockPos)>
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "onBEPlaced"(arg0: $BlockPlaceContext$Type): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getBlockEntityDrop"(arg0: $LootContext$Type, arg1: $Consumer$Type<($ItemStack$Type)>): void
public "getFacingProperty"(): $Property<($Direction)>
public "getPickBlock"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $HitResult$Type): $ItemStack
public static "getIndexForOffset"(arg0: integer): integer
public "getNegativePoint"(): $ConnectionPoint
public "getPositivePoint"(): $ConnectionPoint
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "facingLimitation"(): $PlacementLimitation
get "internalConnections"(): $Iterable<(any)>
get "facingProperty"(): $Property<($Direction)>
get "negativePoint"(): $ConnectionPoint
get "positivePoint"(): $ConnectionPoint
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedthroughBlockEntity$Type = ($FeedthroughBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedthroughBlockEntity_ = $FeedthroughBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$EarmuffsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemGetterList, $ItemGetterList$Type} from "packages/blusunrize/immersiveengineering/common/util/$ItemGetterList"
import {$IConfigurableTool$ToolConfig, $IConfigurableTool$ToolConfig$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IConfigurableTool$ToolConfig$ToolConfigBoolean, $IConfigurableTool$ToolConfig$ToolConfigBoolean$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigBoolean"
import {$IConfigurableTool, $IConfigurableTool$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool"
import {$LinkedHashSet, $LinkedHashSet$Type} from "packages/java/util/$LinkedHashSet"
import {$IConfigurableTool$ToolConfig$ToolConfigFloat, $IConfigurableTool$ToolConfig$ToolConfigFloat$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigFloat"
import {$IEItemInterfaces$IColouredItem, $IEItemInterfaces$IColouredItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IColouredItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EarmuffsItem extends $IEBaseItem implements $DyeableLeatherItem, $IConfigurableTool, $IEItemInterfaces$IColouredItem {
static "EARMUFF_GETTERS": $ItemGetterList
static "affectedSoundCategories": $LinkedHashSet<(string)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "getColourForIEItem"(arg0: $ItemStack$Type, arg1: integer): integer
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public static "getVolumeMod"(arg0: $ItemStack$Type): float
public "getBooleanOptions"(arg0: $ItemStack$Type): ($IConfigurableTool$ToolConfig$ToolConfigBoolean)[]
public "getFloatOptions"(arg0: $ItemStack$Type): ($IConfigurableTool$ToolConfig$ToolConfigFloat)[]
public "fomatConfigName"(arg0: $ItemStack$Type, arg1: $IConfigurableTool$ToolConfig$Type): string
public "applyConfigOption"(arg0: $ItemStack$Type, arg1: string, arg2: any): void
public "fomatConfigDescription"(arg0: $ItemStack$Type, arg1: $IConfigurableTool$ToolConfig$Type): string
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConfigure"(arg0: $ItemStack$Type): boolean
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarmuffsItem$Type = ($EarmuffsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarmuffsItem_ = $EarmuffsItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/multiblocks/logic/$NonMirrorableWithActiveBlock" {
import {$IMultiblockLevel, $IMultiblockLevel$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IMultiblockLevel"
import {$TemplateMultiblock, $TemplateMultiblock$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$TemplateMultiblock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/registry/$MultiblockPartBlock"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiblockRegistration, $MultiblockRegistration$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $NonMirrorableWithActiveBlock<S extends $IMultiblockState> extends $MultiblockPartBlock<(S)> {
static readonly "ACTIVE": $Property<(boolean)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $MultiblockRegistration$Type<(S)>)

public static "setActive"(arg0: $IMultiblockLevel$Type, arg1: $TemplateMultiblock$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonMirrorableWithActiveBlock$Type<S> = ($NonMirrorableWithActiveBlock<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonMirrorableWithActiveBlock_<S> = $NonMirrorableWithActiveBlock$Type<(S)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/plant/$HempBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $HempBlock extends $CropBlock implements $BonemealableBlock {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "AGE": $IntegerProperty
static readonly "TOP": $BooleanProperty
static readonly "MAX_AGE": integer
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getMaxAge"(): integer
public "growCrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "maxAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HempBlock$Type = ($HempBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HempBlock_ = $HempBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$WallmountBlock$Orientation" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $WallmountBlock$Orientation extends $Enum<($WallmountBlock$Orientation)> implements $StringRepresentable {
static readonly "SIDE_UP": $WallmountBlock$Orientation
static readonly "SIDE_DOWN": $WallmountBlock$Orientation
static readonly "VERT_DOWN": $WallmountBlock$Orientation
static readonly "VERT_UP": $WallmountBlock$Orientation


public "toString"(): string
public static "values"(): ($WallmountBlock$Orientation)[]
public static "valueOf"(arg0: string): $WallmountBlock$Orientation
public "getDual"(): $WallmountBlock$Orientation
public "attachedToSide"(): boolean
public "touchesTop"(): boolean
public "modelSuffix"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "dual"(): $WallmountBlock$Orientation
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallmountBlock$Orientation$Type = (("side_down") | ("vert_down") | ("side_up") | ("vert_up")) | ($WallmountBlock$Orientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallmountBlock$Orientation_ = $WallmountBlock$Orientation$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$ClocheFertilizerSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ClocheFertilizer, $ClocheFertilizer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ClocheFertilizer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClocheFertilizerSerializer extends $IERecipeSerializer<($ClocheFertilizer)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ClocheFertilizer
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ClocheFertilizer$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ClocheFertilizer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheFertilizerSerializer$Type = ($ClocheFertilizerSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheFertilizerSerializer_ = $ClocheFertilizerSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPumpBlock" {
import {$FluidPumpBlockEntity, $FluidPumpBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPumpBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FluidPumpBlock extends $IEEntityBlock<($FluidPumpBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPumpBlock$Type = ($FluidPumpBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPumpBlock_ = $FluidPumpBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$FakeLightBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$FakeLightBlock$FakeLightBlockEntity, $FakeLightBlock$FakeLightBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$FakeLightBlock$FakeLightBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"

export class $FakeLightBlock extends $IEEntityBlock<($FakeLightBlock$FakeLightBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isAir"(arg0: $BlockState$Type): boolean
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLightBlock$Type = ($FakeLightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeLightBlock_ = $FakeLightBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$BlockItemCapacitor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$IEServerConfig$Machines$CapacitorConfig, $IEServerConfig$Machines$CapacitorConfig$Type} from "packages/blusunrize/immersiveengineering/common/config/$IEServerConfig$Machines$CapacitorConfig"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockItemIE, $BlockItemIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$BlockItemIE"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemCapacitor extends $BlockItemIE {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $IEServerConfig$Machines$CapacitorConfig$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemCapacitor$Type = ($BlockItemCapacitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemCapacitor_ = $BlockItemCapacitor$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IBulletContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEItemInterfaces$IBulletContainer {

 "getBullets"(arg0: $ItemStack$Type): $NonNullList<($ItemStack)>
 "getBulletCount"(arg0: $ItemStack$Type): integer
}

export namespace $IEItemInterfaces$IBulletContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IBulletContainer$Type = ($IEItemInterfaces$IBulletContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEItemInterfaces$IBulletContainer_ = $IEItemInterfaces$IBulletContainer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$BlockItemIE$BlockItemIENoInventory" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockItemIE, $BlockItemIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$BlockItemIE"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemIE$BlockItemIENoInventory extends $BlockItemIE {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemIE$BlockItemIENoInventory$Type = ($BlockItemIE$BlockItemIENoInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemIE$BlockItemIENoInventory_ = $BlockItemIE$BlockItemIENoInventory$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$Connection$CatenaryData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $Connection$CatenaryData extends $Record {

constructor(isVertical: boolean, offsetX: double, offsetY: double, scale: double, delta: $Vec3$Type, horLength: double, vecA: $Vec3$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): double
public "reverse"(arg0: $Vec3$Type): $Connection$CatenaryData
public "delta"(): $Vec3
public "vecA"(): $Vec3
public "horLength"(): double
public "getSlope"(arg0: double): double
public "isVertical"(): boolean
public "getDeltaY"(): double
public "getDeltaX"(): double
public "getDeltaZ"(): double
public "getRenderPoint"(arg0: integer): $Vec3
public "getPoint"(arg0: double): $Vec3
public "offsetX"(): double
public "offsetY"(): double
get "vertical"(): boolean
get "deltaY"(): double
get "deltaX"(): double
get "deltaZ"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$CatenaryData$Type = ($Connection$CatenaryData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connection$CatenaryData_ = $Connection$CatenaryData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/$TargetingInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $TargetingInfo {
readonly "side": $Direction
readonly "hitX": float
readonly "hitY": float
readonly "hitZ": float

constructor(arg0: $UseOnContext$Type)
constructor(arg0: $Direction$Type, arg1: float, arg2: float, arg3: float)

public static "readFromNBT"(arg0: $CompoundTag$Type): $TargetingInfo
public "writeToNBT"(arg0: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetingInfo$Type = ($TargetingInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetingInfo_ = $TargetingInfo$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$BottlingMachineRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$BottlingMachineRecipe, $BottlingMachineRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$BottlingMachineRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BottlingMachineRecipeSerializer extends $IERecipeSerializer<($BottlingMachineRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BottlingMachineRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BottlingMachineRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BottlingMachineRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottlingMachineRecipeSerializer$Type = ($BottlingMachineRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BottlingMachineRecipeSerializer_ = $BottlingMachineRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeTypes$TypeWithClass" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $IERecipeTypes$TypeWithClass<T extends $Recipe<(any)>> extends $Record implements $Supplier<($RecipeType<(T)>)> {

constructor(type: $RegistryObject$Type<($RecipeType$Type<(T)>)>, recipeClass: $Class$Type<(T)>)

public "type"(): $RegistryObject<($RecipeType<(T)>)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "recipeClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IERecipeTypes$TypeWithClass$Type<T> = ($IERecipeTypes$TypeWithClass<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IERecipeTypes$TypeWithClass_<T> = $IERecipeTypes$TypeWithClass$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$GraphiteElectrodeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GraphiteElectrodeItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDamage"(arg0: $ItemStack$Type): integer
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isDamaged"(arg0: $ItemStack$Type): boolean
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphiteElectrodeItem$Type = ($GraphiteElectrodeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphiteElectrodeItem_ = $GraphiteElectrodeItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IColouredBE" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$IColouredBE {

 "getRenderColour"(arg0: integer): integer

(arg0: integer): integer
}

export namespace $IEBlockInterfaces$IColouredBE {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IColouredBE$Type = ($IEBlockInterfaces$IColouredBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IColouredBE_ = $IEBlockInterfaces$IColouredBE$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEStairsBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$IIEBlock, $IIEBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IIEBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $IEStairsBlock extends $StairBlock implements $IIEBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor<T extends ($Block) & ($IIEBlock)>(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(T)>)

public "getNameForFlavour"(): string
public "hasFlavour"(): boolean
get "nameForFlavour"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEStairsBlock$Type = ($IEStairsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEStairsBlock_ = $IEStairsBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$ShaderBannerStandingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ShaderBannerBlock, $ShaderBannerBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/cloth/$ShaderBannerBlock"

export class $ShaderBannerStandingBlock extends $ShaderBannerBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerStandingBlock$Type = ($ShaderBannerStandingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderBannerStandingBlock_ = $ShaderBannerStandingBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$IConveyorBlockEntity" {
import {$ConveyorHandler$IConveyorAttachable, $ConveyorHandler$IConveyorAttachable$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$IConveyorAttachable"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IConveyorBelt, $IConveyorBelt$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorBelt"

export interface $ConveyorHandler$IConveyorBlockEntity<T extends $IConveyorBelt> extends $ConveyorHandler$IConveyorAttachable {

 "sigOutputDirections"(): ($Direction)[]
 "getConveyorInstance"(): T
 "getFacing"(): $Direction
}

export namespace $ConveyorHandler$IConveyorBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$IConveyorBlockEntity$Type<T> = ($ConveyorHandler$IConveyorBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorHandler$IConveyorBlockEntity_<T> = $ConveyorHandler$IConveyorBlockEntity$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$ZoomHandler$IZoomTool" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ZoomHandler$IZoomTool {

 "canZoom"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "getZoomSteps"(arg0: $ItemStack$Type, arg1: $Player$Type): (float)[]
}

export namespace $ZoomHandler$IZoomTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoomHandler$IZoomTool$Type = ($ZoomHandler$IZoomTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZoomHandler$IZoomTool_ = $ZoomHandler$IZoomTool$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPipeBlockEntity" {
import {$LevelEvent$Unload, $LevelEvent$Unload$Type} from "packages/net/minecraftforge/event/level/$LevelEvent$Unload"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEBlockInterfaces$IAdditionalDrops, $IEBlockInterfaces$IAdditionalDrops$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IAdditionalDrops"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IEBlockInterfaces$IPlacementInteraction, $IEBlockInterfaces$IPlacementInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlacementInteraction"
import {$FluidPipeBlockEntity$ConnectionStyle, $FluidPipeBlockEntity$ConnectionStyle$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPipeBlockEntity$ConnectionStyle"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidPipeBlockEntity$DirectionalFluidOutput, $FluidPipeBlockEntity$DirectionalFluidOutput$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPipeBlockEntity$DirectionalFluidOutput"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ICollisionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ISelectionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISelectionBounds"
import {$Object2BooleanMap, $Object2BooleanMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanMap"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IFluidPipe, $IFluidPipe$Type} from "packages/blusunrize/immersiveengineering/api/fluid/$IFluidPipe"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IPlayerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$IEBlockInterfaces$IColouredBE, $IEBlockInterfaces$IColouredBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IColouredBE"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"

export class $FluidPipeBlockEntity extends $IEBaseBlockEntity implements $IFluidPipe, $IEBlockInterfaces$IColouredBE, $IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IPlacementInteraction, $IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$IAdditionalDrops {
static "validPipeCovers": $ArrayList<($Predicate<($Block)>)>
static "climbablePipeCovers": $ArrayList<($Predicate<($Block)>)>
 "sideConfig": $Object2BooleanMap<($Direction)>
 "cover": $Block

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onLoad"(): void
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "dropCover"(arg0: $Player$Type): void
public "onNeighborBlockChange"(arg0: $BlockPos$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onEntityCollision"(arg0: $Level$Type, arg1: $Entity$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setRemovedIE"(): void
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "onBEPlaced"(arg0: $BlockPlaceContext$Type): void
public "getExtraDrops"(arg0: $Player$Type, arg1: $BlockState$Type): $Collection<($ItemStack)>
public "getRenderColour"(arg0: integer): integer
public "toggleSide"(arg0: $Direction$Type): void
public static "getConnectedFluidHandlers"(arg0: $BlockPos$Type, arg1: $Level$Type): $Set<($FluidPipeBlockEntity$DirectionalFluidOutput)>
public "hasOutputConnection"(arg0: $Direction$Type): boolean
public "updateConnectionByte"(arg0: $Direction$Type): boolean
public "getAvailableConnectionByte"(): byte
public "setSide"(arg0: $Direction$Type, arg1: boolean): void
public "setSide"(arg0: $Direction$Type, arg1: boolean, arg2: boolean): void
public "getColor"(): $DyeColor
public "onChunkUnloaded"(): void
public "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
public static "initCovers"(): void
public static "onWorldUnload"(arg0: $LevelEvent$Unload$Type): void
public "getConnectionStyle"(arg0: $Direction$Type): $FluidPipeBlockEntity$ConnectionStyle
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "getTransferableAmount"(arg0: boolean): integer
public "canOutputPressurized"(arg0: boolean): boolean
public "stripPressureTag"(): boolean
get "availableConnectionByte"(): byte
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlockEntity$Type = ($FluidPipeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPipeBlockEntity_ = $FluidPipeBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ExplosionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExplosionAccess {

}

export namespace $ExplosionAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionAccess$Type = ($ExplosionAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionAccess_ = $ExplosionAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$ConveyorDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConveyorHandler$ConveyorDirection extends $Enum<($ConveyorHandler$ConveyorDirection)> {
static readonly "HORIZONTAL": $ConveyorHandler$ConveyorDirection
static readonly "UP": $ConveyorHandler$ConveyorDirection
static readonly "DOWN": $ConveyorHandler$ConveyorDirection


public static "values"(): ($ConveyorHandler$ConveyorDirection)[]
public static "valueOf"(arg0: string): $ConveyorHandler$ConveyorDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$ConveyorDirection$Type = (("horizontal") | ("up") | ("down")) | ($ConveyorHandler$ConveyorDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorHandler$ConveyorDirection_ = $ConveyorHandler$ConveyorDirection$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds" {
import {$IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ICollisionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ISelectionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISelectionBounds"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"

export interface $IEBlockInterfaces$IBlockBounds extends $IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ICollisionBounds {

 "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
 "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape

(arg0: $CollisionContext$Type): $VoxelShape
}

export namespace $IEBlockInterfaces$IBlockBounds {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IBlockBounds$Type = ($IEBlockInterfaces$IBlockBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IBlockBounds_ = $IEBlockInterfaces$IBlockBounds$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$SpeedloaderItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IEItemInterfaces$IBulletContainer, $IEItemInterfaces$IBulletContainer$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IBulletContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$InternalStorageItem, $InternalStorageItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$InternalStorageItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpeedloaderItem extends $InternalStorageItem implements $IEItemInterfaces$IBulletContainer {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isEmpty"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getSlotCount"(): integer
public "getBullets"(arg0: $ItemStack$Type): $NonNullList<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getBulletCount"(arg0: $ItemStack$Type): integer
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedloaderItem$Type = ($SpeedloaderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeedloaderItem_ = $SpeedloaderItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IUpgrade" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IUpgrade {

 "canApplyUpgrades"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getUpgradeTypes"(arg0: $ItemStack$Type): $Set<(string)>
 "applyUpgrades"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $CompoundTag$Type): void
}

export namespace $IUpgrade {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgrade$Type = ($IUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgrade_ = $IUpgrade$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/registry/$MultiblockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiblockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockItem$Type = ($MultiblockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockItem_ = $MultiblockItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IDrillHead" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export interface $IDrillHead {

 "getAttackDamage"(arg0: $ItemStack$Type): float
 "getHeadDamage"(arg0: $ItemStack$Type): integer
 "damageHead"(arg0: $ItemStack$Type, arg1: integer): void
 "getMiningSpeed"(arg0: $ItemStack$Type): float
 "afterBlockbreak"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
 "getExtraBlocksDug"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $HitResult$Type): $ImmutableList<($BlockPos)>
 "getMiningLevel"(arg0: $ItemStack$Type): $Tier
 "beforeBlockbreak"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
 "getDrillTexture"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ResourceLocation
 "getMaximumHeadDamage"(arg0: $ItemStack$Type): integer
}

export namespace $IDrillHead {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrillHead$Type = ($IDrillHead);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrillHead_ = $IDrillHead$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$LocalNetworkHandler" {
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$GlobalWireNetwork, $GlobalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import {$ILocalHandlerConstructor, $ILocalHandlerConstructor$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerConstructor"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$LocalWireNetwork, $LocalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"

export class $LocalNetworkHandler {


public "merge"(arg0: $LocalNetworkHandler$Type): $LocalNetworkHandler
public static "register"(arg0: $ResourceLocation$Type, arg1: $ILocalHandlerConstructor$Type): void
public "onConnectionRemoved"(arg0: $Connection$Type): void
public "onConnectorUnloaded"(arg0: $BlockPos$Type, arg1: $IImmersiveConnectable$Type): void
public static "createHandler"(arg0: $ResourceLocation$Type, arg1: $LocalWireNetwork$Type, arg2: $GlobalWireNetwork$Type): $LocalNetworkHandler
public "onConnectorLoaded"(arg0: $ConnectionPoint$Type, arg1: $IImmersiveConnectable$Type): void
public "onConnectorRemoved"(arg0: $BlockPos$Type, arg1: $IImmersiveConnectable$Type): void
public "setLocalNet"(arg0: $LocalWireNetwork$Type): void
public "onConnectionAdded"(arg0: $Connection$Type): void
set "localNet"(value: $LocalWireNetwork$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalNetworkHandler$Type = ($LocalNetworkHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalNetworkHandler_ = $LocalNetworkHandler$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISelectionBounds" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"

export interface $IEBlockInterfaces$ISelectionBounds {

 "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape

(arg0: $CollisionContext$Type): $VoxelShape
}

export namespace $IEBlockInterfaces$ISelectionBounds {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ISelectionBounds$Type = ($IEBlockInterfaces$ISelectionBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$ISelectionBounds_ = $IEBlockInterfaces$ISelectionBounds$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/utils/$PlayerUtils$ConnectionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerUtils$ConnectionAccess {

 "setClientIsFloating"(arg0: boolean): void
 "setAboveGroundTickCount"(arg0: integer): void
}

export namespace $PlayerUtils$ConnectionAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerUtils$ConnectionAccess$Type = ($PlayerUtils$ConnectionAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerUtils$ConnectionAccess_ = $PlayerUtils$ConnectionAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$WallmountBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$WallmountBlock$Orientation, $WallmountBlock$Orientation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$WallmountBlock$Orientation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $WallmountBlock extends $IEBaseBlock {
static readonly "ORIENTATION": $EnumProperty<($WallmountBlock$Orientation)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallmountBlock$Type = ($WallmountBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallmountBlock_ = $WallmountBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockEntityDrop" {
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IEBlockInterfaces$IPlacementInteraction, $IEBlockInterfaces$IPlacementInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlacementInteraction"

export interface $IEBlockInterfaces$IBlockEntityDrop extends $IEBlockInterfaces$IPlacementInteraction {

 "getBlockEntityDrop"(arg0: $LootContext$Type, arg1: $Consumer$Type<($ItemStack$Type)>): void
 "getPickBlock"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $HitResult$Type): $ItemStack
 "onBEPlaced"(arg0: $BlockPlaceContext$Type): void
}

export namespace $IEBlockInterfaces$IBlockEntityDrop {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IBlockEntityDrop$Type = ($IEBlockInterfaces$IBlockEntityDrop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IBlockEntityDrop_ = $IEBlockInterfaces$IBlockEntityDrop$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$RefineryRecipe" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$FluidTagInput, $FluidTagInput$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$FluidTagInput"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"

export class $RefineryRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($RefineryRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($RefineryRecipe)>
readonly "output": $FluidStack
readonly "input0": $FluidTagInput
readonly "input1": $FluidTagInput
readonly "catalyst": $Ingredient
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStack$Type, arg2: $FluidTagInput$Type, arg3: $FluidTagInput$Type, arg4: $Ingredient$Type, arg5: integer)

public static "findRecipe"(arg0: $Level$Type, arg1: $FluidStack$Type, arg2: $FluidStack$Type, arg3: $ItemStack$Type): $RefineryRecipe
public static "findIncompleteRefineryRecipe"(arg0: $Level$Type, arg1: $FluidStack$Type, arg2: $FluidStack$Type): $Optional<($RefineryRecipe)>
public "getMultipleProcessTicks"(): integer
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipe$Type = ($RefineryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefineryRecipe_ = $RefineryRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/$GeneratedListRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IListRecipe, $IListRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$IListRecipe"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$GeneratedListRecipe$RecipeListGenerator, $GeneratedListRecipe$RecipeListGenerator$Type} from "packages/blusunrize/immersiveengineering/common/crafting/$GeneratedListRecipe$RecipeListGenerator"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GeneratedListRecipe<R extends $IESerializableRecipe, E> extends $IESerializableRecipe implements $IListRecipe {
static "LIST_GENERATORS": $Map<($ResourceLocation), ($GeneratedListRecipe$RecipeListGenerator<(any), (any)>)>
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($GeneratedListRecipe<(any), (any)>)>)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>


public static "from"(arg0: $ResourceLocation$Type): $GeneratedListRecipe<(any), (any)>
public static "resolved"(arg0: $ResourceLocation$Type, arg1: $List$Type<($IESerializableRecipe$Type)>): $GeneratedListRecipe<(any), (any)>
public "getSubRecipes"(): $List<(any)>
public "getSubSerializer"(): $ResourceLocation
public "isSpecial"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "subRecipes"(): $List<(any)>
get "subSerializer"(): $ResourceLocation
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedListRecipe$Type<R, E> = ($GeneratedListRecipe<(R), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratedListRecipe_<R, E> = $GeneratedListRecipe$Type<(R), (E)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRenderFunction" {
import {$ClocheRenderFunction$ClocheRenderFunctionFactory, $ClocheRenderFunction$ClocheRenderFunctionFactory$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRenderFunction$ClocheRenderFunctionFactory"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ClocheRenderFunction {

 "getBlocks"(arg0: $ItemStack$Type, arg1: float): $Collection<($Pair<($BlockState), ($Transformation)>)>
 "getScale"(arg0: $ItemStack$Type, arg1: float): float
 "injectQuads"(arg0: $ItemStack$Type, arg1: float, arg2: $Consumer$Type<(any)>): void
}

export namespace $ClocheRenderFunction {
const RENDER_FUNCTION_FACTORIES: $Map<(string), ($ClocheRenderFunction$ClocheRenderFunctionFactory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRenderFunction$Type = ($ClocheRenderFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheRenderFunction_ = $ClocheRenderFunction$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRecipe" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ClocheRenderFunction$ClocheRenderReference, $ClocheRenderFunction$ClocheRenderReference$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRenderFunction$ClocheRenderReference"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$ClocheRenderFunction, $ClocheRenderFunction$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRenderFunction"

export class $ClocheRecipe extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($ClocheRecipe)>)>
readonly "outputs": $List<($Lazy<($ItemStack)>)>
readonly "seed": $Ingredient
readonly "soil": $Ingredient
readonly "time": integer
readonly "renderReference": $ClocheRenderFunction$ClocheRenderReference
readonly "renderFunction": $ClocheRenderFunction
static readonly "RECIPES": $CachedRecipeList<($ClocheRecipe)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Lazy$Type<($ItemStack$Type)>)>, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: integer, arg5: $ClocheRenderFunction$ClocheRenderReference$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $Lazy$Type<($ItemStack$Type)>, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: integer, arg5: $ClocheRenderFunction$ClocheRenderReference$Type)

public "matches"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getTime"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ClocheRecipe$Type): $ClocheRecipe
public static "getSoilTexture"(arg0: $ItemStack$Type): $ResourceLocation
public "getOutputs"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $List<($Lazy<($ItemStack)>)>
public static "isValidCombinationInMenu"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type): boolean
public static "registerSoilTexture"(arg0: $Ingredient$Type, arg1: $ResourceLocation$Type): void
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRecipe$Type = ($ClocheRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheRecipe_ = $ClocheRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$FluorescentTubeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableTool$ToolConfig, $IConfigurableTool$ToolConfig$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IConfigurableTool$ToolConfig$ToolConfigBoolean, $IConfigurableTool$ToolConfig$ToolConfigBoolean$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigBoolean"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IConfigurableTool, $IConfigurableTool$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool"
import {$IConfigurableTool$ToolConfig$ToolConfigFloat, $IConfigurableTool$ToolConfig$ToolConfigFloat$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigFloat"
import {$IEItemInterfaces$IColouredItem, $IEItemInterfaces$IColouredItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IColouredItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IElectricEquipment$ElectricSource, $IElectricEquipment$ElectricSource$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IElectricEquipment$ElectricSource"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IElectricEquipment, $IElectricEquipment$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IElectricEquipment"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluorescentTubeItem extends $IEBaseItem implements $IConfigurableTool, $IElectricEquipment, $IEItemInterfaces$IColouredItem {
static readonly "LIT_STRENGTH": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getColourForIEItem"(arg0: $ItemStack$Type, arg1: integer): integer
public static "getRGBFloat"(arg0: $ItemStack$Type, arg1: float): (float)[]
public static "setLit"(arg0: $ItemStack$Type, arg1: float): void
public "getBooleanOptions"(arg0: $ItemStack$Type): ($IConfigurableTool$ToolConfig$ToolConfigBoolean)[]
public static "getRGBInt"(arg0: $ItemStack$Type, arg1: float): integer
public "getFloatOptions"(arg0: $ItemStack$Type): ($IConfigurableTool$ToolConfig$ToolConfigFloat)[]
public "fomatConfigName"(arg0: $ItemStack$Type, arg1: $IConfigurableTool$ToolConfig$Type): string
public "applyConfigOption"(arg0: $ItemStack$Type, arg1: string, arg2: any): void
public static "isLit"(arg0: $ItemStack$Type): boolean
public "fomatConfigDescription"(arg0: $ItemStack$Type, arg1: $IConfigurableTool$ToolConfig$Type): string
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "onStrike"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $LivingEntity$Type, arg3: $Map$Type<(string), (any)>, arg4: $DamageSource$Type, arg5: $IElectricEquipment$ElectricSource$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setRGB"(arg0: $ItemStack$Type, arg1: (float)[]): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "getRGB"(arg0: $ItemStack$Type): (float)[]
public "canConfigure"(arg0: $ItemStack$Type): boolean
public static "applyToEntity"(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: $IElectricEquipment$ElectricSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluorescentTubeItem$Type = ($FluorescentTubeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluorescentTubeItem_ = $FluorescentTubeItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPipeBlockEntity$ConnectionStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FluidPipeBlockEntity$ConnectionStyle extends $Enum<($FluidPipeBlockEntity$ConnectionStyle)> {
static readonly "NO_CONNECTION": $FluidPipeBlockEntity$ConnectionStyle
static readonly "PLAIN": $FluidPipeBlockEntity$ConnectionStyle
static readonly "FLANGE": $FluidPipeBlockEntity$ConnectionStyle


public static "values"(): ($FluidPipeBlockEntity$ConnectionStyle)[]
public static "valueOf"(arg0: string): $FluidPipeBlockEntity$ConnectionStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlockEntity$ConnectionStyle$Type = (("plain") | ("no_connection") | ("flange")) | ($FluidPipeBlockEntity$ConnectionStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPipeBlockEntity$ConnectionStyle_ = $FluidPipeBlockEntity$ConnectionStyle$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$BreakerSwitchBlockEntity" {
import {$IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$IScrewdriverInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBlockInterfaces$IActiveState, $IEBlockInterfaces$IActiveState$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IActiveState"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEBlockInterfaces$IAdvancedDirectionalBE, $IEBlockInterfaces$IAdvancedDirectionalBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IAdvancedDirectionalBE"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IEBlockInterfaces$IRedstoneOutput, $IEBlockInterfaces$IRedstoneOutput$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IRedstoneOutput"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IPlayerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"

export class $BreakerSwitchBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IAdvancedDirectionalBE, $IEBlockInterfaces$IActiveState, $IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IRedstoneOutput, $IEBlockInterfaces$IStateBasedDirectional {
static readonly "LEFT_INDEX": integer
static readonly "RIGHT_INDEX": integer
 "rotation": integer
 "wires": integer
 "inverted": boolean

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "onDirectionalPlacement"(arg0: $Direction$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "getInternalConnections"(): $Iterable<(any)>
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
public "removeCable"(arg0: $Connection$Type, arg1: $ConnectionPoint$Type): void
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): $InteractionResult
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getWeakRSOutput"(arg0: $Direction$Type): integer
public "getStrongRSOutput"(arg0: $Direction$Type): integer
public "getFacingProperty"(): $Property<($Direction)>
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
public "notifyNeighbours"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "setActive"(arg0: boolean): void
public "getIsActive"(): boolean
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "facingLimitation"(): $PlacementLimitation
get "internalConnections"(): $Iterable<(any)>
get "facingProperty"(): $Property<($Direction)>
set "active"(value: boolean)
get "isActive"(): boolean
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakerSwitchBlockEntity$Type = ($BreakerSwitchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreakerSwitchBlockEntity_ = $BreakerSwitchBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$FlowingFluidAccess" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $FlowingFluidAccess {

 "callCanPassThroughWall"(arg0: $Direction$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type, arg5: $BlockState$Type): boolean

(arg0: $Direction$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type, arg5: $BlockState$Type): boolean
}

export namespace $FlowingFluidAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingFluidAccess$Type = ($FlowingFluidAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowingFluidAccess_ = $FlowingFluidAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$ILogicCircuitHandler" {
import {$LogicCircuitHandler$LogicCircuitRegister, $LogicCircuitHandler$LogicCircuitRegister$Type} from "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$LogicCircuitRegister"

export interface $LogicCircuitHandler$ILogicCircuitHandler {

 "setLogicCircuitRegister"(arg0: $LogicCircuitHandler$LogicCircuitRegister$Type, arg1: boolean): void
 "getLogicCircuitRegister"(arg0: $LogicCircuitHandler$LogicCircuitRegister$Type): boolean
}

export namespace $LogicCircuitHandler$ILogicCircuitHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$ILogicCircuitHandler$Type = ($LogicCircuitHandler$ILogicCircuitHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicCircuitHandler$ILogicCircuitHandler_ = $LogicCircuitHandler$ILogicCircuitHandler$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$BlastFurnaceFuelSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$BlastFurnaceFuel, $BlastFurnaceFuel$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$BlastFurnaceFuel"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BlastFurnaceFuelSerializer extends $IERecipeSerializer<($BlastFurnaceFuel)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BlastFurnaceFuel
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BlastFurnaceFuel$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BlastFurnaceFuel
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceFuelSerializer$Type = ($BlastFurnaceFuelSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnaceFuelSerializer_ = $BlastFurnaceFuelSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$ConcreteFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ConcreteFluid, $ConcreteFluid$Type} from "packages/blusunrize/immersiveengineering/common/fluids/$ConcreteFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$IEFluids$FluidEntry, $IEFluids$FluidEntry$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEFluids$FluidEntry"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ConcreteFluid$Flowing extends $ConcreteFluid {
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $IEFluids$FluidEntry$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcreteFluid$Flowing$Type = ($ConcreteFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcreteFluid$Flowing_ = $ConcreteFluid$Flowing$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$FakeIconItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FakeIconItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeIconItem$Type = ($FakeIconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeIconItem_ = $FakeIconItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IIEBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIEBlock {

 "getNameForFlavour"(): string
 "hasFlavour"(): boolean
}

export namespace $IIEBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIEBlock$Type = ($IIEBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIEBlock_ = $IIEBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$AbstractTransformerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $AbstractTransformerBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "getInternalConnections"(): $Iterable<(any)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "canConnect"(): boolean
public "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
public "removeCable"(arg0: $Connection$Type, arg1: $ConnectionPoint$Type): void
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getHigherWiretype"(): string
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<(any)>
get "facingProperty"(): $Property<($Direction)>
get "higherWiretype"(): string
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "facingLimitation"(): $PlacementLimitation
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTransformerBlockEntity$Type = ($AbstractTransformerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTransformerBlockEntity_ = $AbstractTransformerBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IETickableBase, $IETickableBase$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IETickableBase"

export interface $IEClientTickableBE extends $IETickableBase {

 "tickClient"(): void
 "canTickAny"(): boolean

(): void
}

export namespace $IEClientTickableBE {
function makeTicker<T>(): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEClientTickableBE$Type = ($IEClientTickableBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEClientTickableBE_ = $IEClientTickableBE$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IConfigurableTool$ToolConfig {
 "x": integer
 "y": integer
 "name": string


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$ToolConfig$Type = ($IConfigurableTool$ToolConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableTool$ToolConfig_ = $IConfigurableTool$ToolConfig$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/shader/$ShaderCase" {
import {$ShaderLayer, $ShaderLayer$Type} from "packages/blusunrize/immersiveengineering/api/shader/$ShaderLayer"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ShaderCase {


public "addLayers"(...arg0: ($ShaderLayer$Type)[]): $ShaderCase
public "addLayers"(arg0: integer, ...arg1: ($ShaderLayer$Type)[]): $ShaderCase
public "stitchIntoSheet"(): boolean
public "getLayers"(): ($ShaderLayer)[]
public "getShaderType"(): $ResourceLocation
public "getRenderColor"(arg0: string, arg1: integer, arg2: $Vector4f$Type): $Vector4f
public "getTextureReplacement"(arg0: string, arg1: integer): $ResourceLocation
public "getLayerInsertionIndex"(): integer
public "shouldRenderGroupForPass"(arg0: string, arg1: integer): boolean
get "layers"(): ($ShaderLayer)[]
get "shaderType"(): $ResourceLocation
get "layerInsertionIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderCase$Type = ($ShaderCase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderCase_ = $ShaderCase$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$BlockstateProvider" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IEBlockInterfaces$BlockstateProvider {

 "getState"(): $BlockState
 "setState"(arg0: $BlockState$Type): void
}

export namespace $IEBlockInterfaces$BlockstateProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$BlockstateProvider$Type = ($IEBlockInterfaces$BlockstateProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$BlockstateProvider_ = $IEBlockInterfaces$BlockstateProvider$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IElectricEquipment" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IElectricEquipment$ElectricSource, $IElectricEquipment$ElectricSource$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IElectricEquipment$ElectricSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IElectricEquipment {

 "onStrike"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $LivingEntity$Type, arg3: $Map$Type<(string), (any)>, arg4: $DamageSource$Type, arg5: $IElectricEquipment$ElectricSource$Type): void

(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $LivingEntity$Type, arg3: $Map$Type<(string), (any)>, arg4: $DamageSource$Type, arg5: $IElectricEquipment$ElectricSource$Type): void
}

export namespace $IElectricEquipment {
function applyToEntity(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: $IElectricEquipment$ElectricSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElectricEquipment$Type = ($IElectricEquipment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElectricEquipment_ = $IElectricEquipment$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlacementInteraction" {
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IEBlockInterfaces$IPlacementInteraction {

 "onBEPlaced"(arg0: $BlockPlaceContext$Type): void

(arg0: $BlockPlaceContext$Type): void
}

export namespace $IEBlockInterfaces$IPlacementInteraction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IPlacementInteraction$Type = ($IEBlockInterfaces$IPlacementInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IPlacementInteraction_ = $IEBlockInterfaces$IPlacementInteraction$Type;
}}
declare module "packages/blusunrize/immersiveengineering/client/fx/$CustomParticleManager" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $CustomParticleManager {

constructor()

public "add"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: integer): void
public "render"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: float): void
public "clientTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomParticleManager$Type = ($CustomParticleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomParticleManager_ = $CustomParticleManager$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$HorizontalFacingEntityBlock" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $HorizontalFacingEntityBlock<T extends $BlockEntity> extends $IEEntityBlock<(T)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalFacingEntityBlock$Type<T> = ($HorizontalFacingEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalFacingEntityBlock_<T> = $HorizontalFacingEntityBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ToolUpgradeItem$ToolUpgrade" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ToolUpgradeItem$ToolUpgrade extends $Enum<($ToolUpgradeItem$ToolUpgrade)> {
static readonly "DRILL_WATERPROOF": $ToolUpgradeItem$ToolUpgrade
static readonly "DRILL_LUBE": $ToolUpgradeItem$ToolUpgrade
static readonly "DRILL_DAMAGE": $ToolUpgradeItem$ToolUpgrade
static readonly "DRILL_FORTUNE": $ToolUpgradeItem$ToolUpgrade
static readonly "DRILL_CAPACITY": $ToolUpgradeItem$ToolUpgrade
static readonly "REVOLVER_BAYONET": $ToolUpgradeItem$ToolUpgrade
static readonly "REVOLVER_MAGAZINE": $ToolUpgradeItem$ToolUpgrade
static readonly "REVOLVER_ELECTRO": $ToolUpgradeItem$ToolUpgrade
static readonly "CHEMTHROWER_FOCUS": $ToolUpgradeItem$ToolUpgrade
static readonly "RAILGUN_SCOPE": $ToolUpgradeItem$ToolUpgrade
static readonly "RAILGUN_CAPACITORS": $ToolUpgradeItem$ToolUpgrade
static readonly "SHIELD_FLASH": $ToolUpgradeItem$ToolUpgrade
static readonly "SHIELD_SHOCK": $ToolUpgradeItem$ToolUpgrade
static readonly "SHIELD_MAGNET": $ToolUpgradeItem$ToolUpgrade
static readonly "CHEMTHROWER_MULTITANK": $ToolUpgradeItem$ToolUpgrade
static readonly "BUZZSAW_SPAREBLADES": $ToolUpgradeItem$ToolUpgrade
static readonly "POWERPACK_ANTENNA": $ToolUpgradeItem$ToolUpgrade
static readonly "POWERPACK_INDUCTION": $ToolUpgradeItem$ToolUpgrade
static readonly "POWERPACK_TESLA": $ToolUpgradeItem$ToolUpgrade
static readonly "POWERPACK_MAGNET": $ToolUpgradeItem$ToolUpgrade


public static "values"(): ($ToolUpgradeItem$ToolUpgrade)[]
public static "valueOf"(arg0: string): $ToolUpgradeItem$ToolUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolUpgradeItem$ToolUpgrade$Type = (("chemthrower_multitank") | ("powerpack_magnet") | ("drill_damage") | ("buzzsaw_spareblades") | ("drill_waterproof") | ("shield_shock") | ("drill_lube") | ("railgun_capacitors") | ("powerpack_induction") | ("railgun_scope") | ("shield_flash") | ("drill_capacity") | ("drill_fortune") | ("revolver_bayonet") | ("chemthrower_focus") | ("shield_magnet") | ("powerpack_tesla") | ("revolver_magazine") | ("revolver_electro") | ("powerpack_antenna")) | ($ToolUpgradeItem$ToolUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolUpgradeItem$ToolUpgrade_ = $ToolUpgradeItem$ToolUpgrade$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FeedthroughBlock" {
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$FeedthroughBlockEntity, $FeedthroughBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$FeedthroughBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FeedthroughBlock extends $ConnectorBlock<($FeedthroughBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedthroughBlock$Type = ($FeedthroughBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedthroughBlock_ = $FeedthroughBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/$RGBColourationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RGBColourationRecipe implements $CraftingRecipe {

constructor(arg0: $Ingredient$Type, arg1: string, arg2: $ResourceLocation$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getTarget"(): $Ingredient
public "getId"(): $ResourceLocation
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "category"(): $CraftingBookCategory
public "getColorKey"(): string
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
get "target"(): $Ingredient
get "id"(): $ResourceLocation
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "colorKey"(): string
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "mod"(): string
get "orCreateId"(): $ResourceLocation
set "group"(value: string)
get "schema"(): $RecipeSchema
get "group"(): string
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RGBColourationRecipe$Type = ($RGBColourationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RGBColourationRecipe_ = $RGBColourationRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$BalloonBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BalloonBlockEntity, $BalloonBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/cloth/$BalloonBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BalloonBlock extends $IEEntityBlock<($BalloonBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

/**
 * 
 * @deprecated
 */
public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalloonBlock$Type = ($BalloonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalloonBlock_ = $BalloonBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu$MultiblockMenuContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IMultiblockContext, $IMultiblockContext$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IMultiblockContext"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $IEContainerMenu$MultiblockMenuContext<S extends $IMultiblockState> extends $Record {

constructor(mbContext: $IMultiblockContext$Type<(S)>, clickedPos: $BlockPos$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mbContext"(): $IMultiblockContext<(S)>
public "clickedPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$MultiblockMenuContext$Type<S> = ($IEContainerMenu$MultiblockMenuContext<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEContainerMenu$MultiblockMenuContext_<S> = $IEContainerMenu$MultiblockMenuContext$Type<(S)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$LogicCircuitRegister" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $LogicCircuitHandler$LogicCircuitRegister extends $Enum<($LogicCircuitHandler$LogicCircuitRegister)> {
static readonly "WHITE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "ORANGE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "MAGENTA": $LogicCircuitHandler$LogicCircuitRegister
static readonly "LIGHT_BLUE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "YELLOW": $LogicCircuitHandler$LogicCircuitRegister
static readonly "LIME": $LogicCircuitHandler$LogicCircuitRegister
static readonly "PINK": $LogicCircuitHandler$LogicCircuitRegister
static readonly "GRAY": $LogicCircuitHandler$LogicCircuitRegister
static readonly "LIGHT_GRAY": $LogicCircuitHandler$LogicCircuitRegister
static readonly "CYAN": $LogicCircuitHandler$LogicCircuitRegister
static readonly "PURPLE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "BLUE": $LogicCircuitHandler$LogicCircuitRegister
static readonly "BROWN": $LogicCircuitHandler$LogicCircuitRegister
static readonly "GREEN": $LogicCircuitHandler$LogicCircuitRegister
static readonly "RED": $LogicCircuitHandler$LogicCircuitRegister
static readonly "BLACK": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R0": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R1": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R2": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R3": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R4": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R5": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R6": $LogicCircuitHandler$LogicCircuitRegister
static readonly "R7": $LogicCircuitHandler$LogicCircuitRegister


public static "values"(): ($LogicCircuitHandler$LogicCircuitRegister)[]
public static "valueOf"(arg0: string): $LogicCircuitHandler$LogicCircuitRegister
public "getDescription"(): $MutableComponent
get "description"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$LogicCircuitRegister$Type = (("r2") | ("magenta") | ("r3") | ("pink") | ("r4") | ("green") | ("r5") | ("r6") | ("r7") | ("lime") | ("light_gray") | ("yellow") | ("black") | ("light_blue") | ("brown") | ("cyan") | ("orange") | ("red") | ("gray") | ("white") | ("blue") | ("purple") | ("r0") | ("r1")) | ($LogicCircuitHandler$LogicCircuitRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicCircuitHandler$LogicCircuitRegister_ = $LogicCircuitHandler$LogicCircuitRegister$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$MultiblockBEType$BEWithTypeConstructor" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockBEType$BEWithTypeConstructor<T extends $BlockEntity> {

 "create"(arg0: $BlockEntityType$Type<(T)>, arg1: $BlockPos$Type, arg2: $BlockState$Type): T

(arg0: $BlockEntityType$Type<(T)>, arg1: $BlockPos$Type, arg2: $BlockState$Type): T
}

export namespace $MultiblockBEType$BEWithTypeConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBEType$BEWithTypeConstructor$Type<T> = ($MultiblockBEType$BEWithTypeConstructor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBEType$BEWithTypeConstructor_<T> = $MultiblockBEType$BEWithTypeConstructor$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$RelativeBlockFace" {
import {$MultiblockOrientation, $MultiblockOrientation$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockOrientation"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RelativeBlockFace extends $Enum<($RelativeBlockFace)> {
static readonly "FRONT": $RelativeBlockFace
static readonly "LEFT": $RelativeBlockFace
static readonly "BACK": $RelativeBlockFace
static readonly "RIGHT": $RelativeBlockFace
static readonly "UP": $RelativeBlockFace
static readonly "DOWN": $RelativeBlockFace
static readonly "HORIZONTAL": ($RelativeBlockFace)[]


public static "values"(): ($RelativeBlockFace)[]
public static "valueOf"(arg0: string): $RelativeBlockFace
public static "from"(arg0: $MultiblockOrientation$Type, arg1: $Direction$Type): $RelativeBlockFace
public "forFront"(arg0: $MultiblockOrientation$Type): $Direction
public "offsetRelative"(arg0: $BlockPos$Type, arg1: integer): $BlockPos
public "getOpposite"(): $RelativeBlockFace
get "opposite"(): $RelativeBlockFace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeBlockFace$Type = (("left") | ("back") | ("front") | ("right") | ("up") | ("down")) | ($RelativeBlockFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeBlockFace_ = $RelativeBlockFace$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$BasicConveyorCacheData" {
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConveyorHandler$ConveyorDirection, $ConveyorHandler$ConveyorDirection$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$ConveyorDirection"

export class $BasicConveyorCacheData extends $Record {

constructor(cover: $Block$Type, facing: $Direction$Type, direction: $ConveyorHandler$ConveyorDirection$Type, active: boolean, leftWall: boolean, rightWall: boolean, color: $DyeColor$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "color"(): $DyeColor
public "direction"(): $ConveyorHandler$ConveyorDirection
public "active"(): boolean
public "leftWall"(): boolean
public "rightWall"(): boolean
public "cover"(): $Block
public "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicConveyorCacheData$Type = ($BasicConveyorCacheData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicConveyorCacheData_ = $BasicConveyorCacheData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorModelRender$RenderContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IConveyorType, $IConveyorType$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IConveyorBelt, $IConveyorBelt$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorBelt"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConveyorHandler$ConveyorDirection, $ConveyorHandler$ConveyorDirection$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$ConveyorDirection"

export class $IConveyorModelRender$RenderContext<T extends $IConveyorBelt> extends $Record {

constructor(type: $IConveyorType$Type<(T)>, instance: T, coverFallback: $Block$Type)

public "type"(): $IConveyorType<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "instance"(): T
public "getConveyorDirection"(): $ConveyorHandler$ConveyorDirection
public "getCover"(): $Block
public "getFacing"(): $Direction
public "isActiveOr"(arg0: boolean): boolean
public "coverFallback"(): $Block
get "conveyorDirection"(): $ConveyorHandler$ConveyorDirection
get "cover"(): $Block
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorModelRender$RenderContext$Type<T> = ($IConveyorModelRender$RenderContext<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConveyorModelRender$RenderContext_<T> = $IConveyorModelRender$RenderContext$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$IEFluidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEFluids$FluidEntry, $IEFluids$FluidEntry$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEFluids$FluidEntry"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IEFluidBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $IEFluids$FluidEntry$Type, arg1: $BlockBehaviour$Properties$Type)

public static "withCopiedValue"<T extends $StateHolder<(any), (T)>, S extends $Comparable<(S)>>(arg0: $Property$Type<(S)>, arg1: T, arg2: $StateHolder$Type<(any), (any)>): T
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "setEffect"(arg0: $MobEffect$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluidBlock$Type = ($IEFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEFluidBlock_ = $IEFluidBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$BlastFurnaceRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$BlastFurnaceRecipe, $BlastFurnaceRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$BlastFurnaceRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BlastFurnaceRecipeSerializer extends $IERecipeSerializer<($BlastFurnaceRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BlastFurnaceRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BlastFurnaceRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BlastFurnaceRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceRecipeSerializer$Type = ($BlastFurnaceRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnaceRecipeSerializer_ = $BlastFurnaceRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$TNTEntityAccess" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $TNTEntityAccess {

 "setOwner"(arg0: $LivingEntity$Type): void

(arg0: $LivingEntity$Type): void
}

export namespace $TNTEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TNTEntityAccess$Type = ($TNTEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TNTEntityAccess_ = $TNTEntityAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IAdvancedDirectionalBE" {
import {$IEBlockInterfaces$IDirectionalBE, $IEBlockInterfaces$IDirectionalBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IDirectionalBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IEBlockInterfaces$IAdvancedDirectionalBE extends $IEBlockInterfaces$IDirectionalBE {

 "onDirectionalPlacement"(arg0: $Direction$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$Type): void
 "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
 "getFacingLimitation"(): $PlacementLimitation
 "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
 "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
 "setFacing"(arg0: $Direction$Type): void
 "getFacing"(): $Direction
}

export namespace $IEBlockInterfaces$IAdvancedDirectionalBE {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IAdvancedDirectionalBE$Type = ($IEBlockInterfaces$IAdvancedDirectionalBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IAdvancedDirectionalBE_ = $IEBlockInterfaces$IAdvancedDirectionalBE$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IComparatorOverride" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$IComparatorOverride {

 "getComparatorInputOverride"(): integer

(): integer
}

export namespace $IEBlockInterfaces$IComparatorOverride {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IComparatorOverride$Type = ($IEBlockInterfaces$IComparatorOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IComparatorOverride_ = $IEBlockInterfaces$IComparatorOverride$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/shader/$ShaderLayer" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $ShaderLayer {

constructor(arg0: $ResourceLocation$Type, arg1: integer)

public "getRenderType"(arg0: $RenderType$Type): $RenderType
public "getTexture"(): $ResourceLocation
public "getColor"(): $Vector4f
public "setCutoutBounds"(...arg0: (double)[]): $ShaderLayer
public "setTextureBounds"(...arg0: (double)[]): $ShaderLayer
public "getTextureBounds"(): (double)[]
public "getCutoutBounds"(): (double)[]
public "isTranslucent"(): boolean
public "isDynamicLayer"(): boolean
get "texture"(): $ResourceLocation
get "color"(): $Vector4f
set "cutoutBounds"(value: (double)[])
set "textureBounds"(value: (double)[])
get "textureBounds"(): (double)[]
get "cutoutBounds"(): (double)[]
get "translucent"(): boolean
get "dynamicLayer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderLayer$Type = ($ShaderLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderLayer_ = $ShaderLayer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$AbstractFluidAwareRecipe, $AbstractFluidAwareRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractFluidAwareRecipe"
import {$AbstractFluidAwareRecipe$IMatchLocation, $AbstractFluidAwareRecipe$IMatchLocation$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractFluidAwareRecipe$IMatchLocation"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IShapedRecipe, $IShapedRecipe$Type} from "packages/net/minecraftforge/common/crafting/$IShapedRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $AbstractShapedRecipe<MatchLocation extends $AbstractFluidAwareRecipe$IMatchLocation> extends $AbstractFluidAwareRecipe<(MatchLocation)> implements $IShapedRecipe<($CraftingContainer)> {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type, arg6: $CraftingBookCategory$Type)

public "getWidth"(): integer
public "getHeight"(): integer
public "toVanilla"(): $ShapedRecipe
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "category"(): $CraftingBookCategory
public "getRecipeWidth"(): integer
public "getRecipeHeight"(): integer
get "width"(): integer
get "height"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "recipeWidth"(): integer
get "recipeHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$Type<MatchLocation> = ($AbstractShapedRecipe<(MatchLocation)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapedRecipe_<MatchLocation> = $AbstractShapedRecipe$Type<(MatchLocation)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$SkyhookItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeableToolItem, $UpgradeableToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SkyhookItem extends $UpgradeableToolItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "getSlotCount"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getSkylineSpeed"(arg0: $ItemStack$Type): float
public static "setLimitSpeed"(arg0: $ItemStack$Type, arg1: boolean): void
public static "toggleSpeedLimit"(arg0: $ItemStack$Type): boolean
public static "shouldLimitSpeed"(arg0: $ItemStack$Type): boolean
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canModify"(arg0: $ItemStack$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyhookItem$Type = ($SkyhookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyhookItem_ = $SkyhookItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$PostTransformerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$PostTransformerBlockEntity, $PostTransformerBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$PostTransformerBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $PostTransformerBlock extends $ConnectorBlock<($PostTransformerBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public static "isAttacheablePost"(arg0: $BlockPos$Type, arg1: $BlockGetter$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostTransformerBlock$Type = ($PostTransformerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostTransformerBlock_ = $PostTransformerBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$SqueezerRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SqueezerRecipe, $SqueezerRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$SqueezerRecipe"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SqueezerRecipeSerializer extends $IERecipeSerializer<($SqueezerRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SqueezerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SqueezerRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SqueezerRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SqueezerRecipeSerializer$Type = ($SqueezerRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SqueezerRecipeSerializer_ = $SqueezerRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$BlockMatcher$MatcherPredicate" {
import {$BlockMatcher$Result, $BlockMatcher$Result$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$BlockMatcher$Result"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockMatcher$MatcherPredicate {

 "matches"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Level$Type, arg3: $BlockPos$Type): $BlockMatcher$Result

(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Level$Type, arg3: $BlockPos$Type): $BlockMatcher$Result
}

export namespace $BlockMatcher$MatcherPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMatcher$MatcherPredicate$Type = ($BlockMatcher$MatcherPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMatcher$MatcherPredicate_ = $BlockMatcher$MatcherPredicate$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$TurntableBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$TurntableBlockEntity, $TurntableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/wooden/$TurntableBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TurntableBlock extends $IEEntityBlock<($TurntableBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurntableBlock$Type = ($TurntableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurntableBlock_ = $TurntableBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IUpgradeableTool" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IUpgradeableTool {

 "clearUpgrades"(arg0: $ItemStack$Type): void
 "removeUpgrade"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
 "getUpgrades"(arg0: $ItemStack$Type): $CompoundTag
 "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
 "canTakeFromWorkbench"(arg0: $ItemStack$Type): boolean
 "getUpgradeAfterRemoval"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
 "finishUpgradeRecalculation"(arg0: $ItemStack$Type): void
 "recalculateUpgrades"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "canModify"(arg0: $ItemStack$Type): boolean
 "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
}

export namespace $IUpgradeableTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableTool$Type = ($IUpgradeableTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableTool_ = $IUpgradeableTool$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockOverlayText" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $IEBlockInterfaces$IBlockOverlayText {

/**
 * 
 * @deprecated
 */
 "useNixieFont"(arg0: $Player$Type, arg1: $HitResult$Type): boolean
 "getOverlayText"(arg0: $Player$Type, arg1: $HitResult$Type, arg2: boolean): ($Component)[]
}

export namespace $IEBlockInterfaces$IBlockOverlayText {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IBlockOverlayText$Type = ($IEBlockInterfaces$IBlockOverlayText);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IBlockOverlayText_ = $IEBlockInterfaces$IBlockOverlayText$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/config/$IEServerConfig$Machines$CapacitorConfig" {
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"

export class $IEServerConfig$Machines$CapacitorConfig {
static readonly "CREATIVE": $IEServerConfig$Machines$CapacitorConfig
readonly "storage": $IntSupplier
readonly "input": $IntSupplier
readonly "output": $IntSupplier
readonly "tileType": $Supplier<($BlockEntityType<(any)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEServerConfig$Machines$CapacitorConfig$Type = ($IEServerConfig$Machines$CapacitorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEServerConfig$Machines$CapacitorConfig_ = $IEServerConfig$Machines$CapacitorConfig$Type;
}}
declare module "packages/blusunrize/immersiveengineering/client/fx/$IEParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $IEParticleType<T extends $ParticleOptions> extends $ParticleType<(T)> {

constructor(arg0: boolean, arg1: $ParticleOptions$Deserializer$Type<(T)>, arg2: $Codec$Type<(T)>)

public "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEParticleType$Type<T> = ($IEParticleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEParticleType_<T> = $IEParticleType$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/util/compat/computers/generic/$ComputerControllable" {
import {$ComputerControlState, $ComputerControlState$Type} from "packages/blusunrize/immersiveengineering/api/utils/$ComputerControlState"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $ComputerControllable {

 "getAllComputerControlStates"(): $Stream<($ComputerControlState)>

(): $Stream<($ComputerControlState)>
}

export namespace $ComputerControllable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerControllable$Type = ($ComputerControllable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerControllable_ = $ComputerControllable$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$PostBlock$HorizontalOffset" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PostBlock$HorizontalOffset extends $Enum<($PostBlock$HorizontalOffset)> implements $StringRepresentable {
static readonly "NONE": $PostBlock$HorizontalOffset
static readonly "NORTH": $PostBlock$HorizontalOffset
static readonly "SOUTH": $PostBlock$HorizontalOffset
static readonly "EAST": $PostBlock$HorizontalOffset
static readonly "WEST": $PostBlock$HorizontalOffset


public static "get"(arg0: $Direction$Type): $PostBlock$HorizontalOffset
public static "values"(): ($PostBlock$HorizontalOffset)[]
public static "valueOf"(arg0: string): $PostBlock$HorizontalOffset
public "getOffset"(): $Vec3i
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "offset"(): $Vec3i
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlock$HorizontalOffset$Type = (("east") | ("south") | ("north") | ("west") | ("none")) | ($PostBlock$HorizontalOffset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlock$HorizontalOffset_ = $PostBlock$HorizontalOffset$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TurretBlock" {
import {$TurretBlockEntity, $TurretBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$TurretBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$MultiblockBEType, $MultiblockBEType$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$MultiblockBEType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TurretBlock<T extends $TurretBlockEntity<(T)>> extends $IEEntityBlock<(T)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MultiblockBEType$Type<(T)>, arg1: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurretBlock$Type<T> = ($TurretBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurretBlock_<T> = $TurretBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$RGBRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RGBColourationRecipe, $RGBColourationRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/$RGBColourationRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RGBRecipeSerializer implements $RecipeSerializer<($RGBColourationRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RGBColourationRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RGBColourationRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RGBColourationRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RGBColourationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RGBRecipeSerializer$Type = ($RGBRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RGBRecipeSerializer_ = $RGBRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/util/$ItemGetterList" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ItemGetterList {

constructor(arg0: $Function$Type<($LivingEntity$Type), ($ItemStack$Type)>)

public "getFrom"(arg0: $LivingEntity$Type): $ItemStack
public "addGetter"(arg0: $Function$Type<($LivingEntity$Type), ($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGetterList$Type = ($ItemGetterList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGetterList_ = $ItemGetterList$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IEContainerMenu$MenuContext, $IEContainerMenu$MenuContext$Type} from "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu$MenuContext"
import {$PlayerContainerEvent$Open, $PlayerContainerEvent$Open$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerContainerEvent$Open"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GenericDataSerializers$DataPair, $GenericDataSerializers$DataPair$Type} from "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericDataSerializers$DataPair"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$GenericContainerData, $GenericContainerData$Type} from "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericContainerData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$IEContainerMenu$MultiblockMenuContext, $IEContainerMenu$MultiblockMenuContext$Type} from "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu$MultiblockMenuContext"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IEContainerMenu$MoveItemsFunc, $IEContainerMenu$MoveItemsFunc$Type} from "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu$MoveItemsFunc"
import {$PlayerContainerEvent$Close, $PlayerContainerEvent$Close$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerContainerEvent$Close"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $IEContainerMenu extends $AbstractContainerMenu {
 "ownSlotCount": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
readonly "slots": $NonNullList<($Slot)>
readonly "containerId": integer


public static "itemCtx"(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $Inventory$Type, arg3: $EquipmentSlot$Type, arg4: $ItemStack$Type): $IEContainerMenu$MenuContext
public static "moveItemStackToWithMayPlace"(arg0: $List$Type<($Slot$Type)>, arg1: $IEContainerMenu$MoveItemsFunc$Type, arg2: $ItemStack$Type, arg3: integer, arg4: integer): boolean
public "receiveMessageFromScreen"(arg0: $CompoundTag$Type): void
public "addGenericData"(arg0: $GenericContainerData$Type<(any)>): void
public static "onContainerOpened"(arg0: $PlayerContainerEvent$Open$Type): void
public static "blockCtx"(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $BlockEntity$Type): $IEContainerMenu$MenuContext
public "receiveSync"(arg0: $List$Type<($Pair$Type<(integer), ($GenericDataSerializers$DataPair$Type<(any)>)>)>): void
public static "multiblockCtx"(arg0: $MenuType$Type<(any)>, arg1: integer, arg2: $IEContainerMenu$MultiblockMenuContext$Type<(any)>): $IEContainerMenu$MenuContext
public static "onContainerClosed"(arg0: $PlayerContainerEvent$Close$Type): void
public static "clientCtx"(arg0: $MenuType$Type<(any)>, arg1: integer): $IEContainerMenu$MenuContext
public "stillValid"(arg0: $Player$Type): boolean
public "removed"(arg0: $Player$Type): void
public "quickMoveStack"(arg0: $Player$Type, arg1: integer): $ItemStack
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$Type, arg3: $Player$Type): void
public "broadcastChanges"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$Type = ($IEContainerMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEContainerMenu_ = $IEContainerMenu$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$ArcFurnaceRecipeSerializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ArcFurnaceRecipe, $ArcFurnaceRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ArcFurnaceRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ArcFurnaceRecipeSerializer extends $IERecipeSerializer<($ArcFurnaceRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ArcFurnaceRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ArcFurnaceRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcFurnaceRecipeSerializer$Type = ($ArcFurnaceRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcFurnaceRecipeSerializer_ = $ArcFurnaceRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/proxy/$IICProxyProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"

export interface $IICProxyProvider {

 "create"(arg0: $BlockPos$Type, arg1: $Collection$Type<($Connection$Type)>, arg2: $Collection$Type<($ConnectionPoint$Type)>): $IImmersiveConnectable
 "createFor"(arg0: $IImmersiveConnectable$Type): $IImmersiveConnectable
 "fromNBT"(arg0: $CompoundTag$Type): $IImmersiveConnectable
 "toNBT"(arg0: $IImmersiveConnectable$Type): $CompoundTag
}

export namespace $IICProxyProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IICProxyProvider$Type = ($IICProxyProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IICProxyProvider_ = $IICProxyProvider$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IEntityProof" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IEBlockInterfaces$IEntityProof {

 "canEntityDestroy"(arg0: $Entity$Type): boolean

(arg0: $Entity$Type): boolean
}

export namespace $IEBlockInterfaces$IEntityProof {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IEntityProof$Type = ($IEBlockInterfaces$IEntityProof);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IEntityProof_ = $IEBlockInterfaces$IEntityProof$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$ShaderBannerBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CapabilityShader$ShaderWrapper_Direct, $CapabilityShader$ShaderWrapper_Direct$Type} from "packages/blusunrize/immersiveengineering/api/shader/$CapabilityShader$ShaderWrapper_Direct"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $ShaderBannerBlockEntity extends $IEBaseBlockEntity {
 "shader": $CapabilityShader$ShaderWrapper_Direct

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerBlockEntity$Type = ($ShaderBannerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderBannerBlockEntity_ = $ShaderBannerBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$ClocheRecipeSerializer" {
import {$ClocheRecipe, $ClocheRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClocheRecipeSerializer extends $IERecipeSerializer<($ClocheRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ClocheRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ClocheRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ClocheRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRecipeSerializer$Type = ($ClocheRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheRecipeSerializer_ = $ClocheRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$Connection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$GlobalWireNetwork, $GlobalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import {$Connection$CatenaryData, $Connection$CatenaryData$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection$CatenaryData"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LocalWireNetwork, $LocalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Connection {
static readonly "RENDER_POINTS_PER_WIRE": integer
readonly "type": $WireType

constructor(arg0: $CompoundTag$Type)
constructor(arg0: $BlockPos$Type, arg1: integer, arg2: integer)
constructor(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $ConnectionPoint$Type, arg3: $GlobalWireNetwork$Type)
constructor(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $ConnectionPoint$Type, arg3: $Vec3$Type, arg4: $Vec3$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLength"(): double
public "getSlope"(arg0: double, arg1: $ConnectionPoint$Type): double
public "getEndBOffset"(): $Vec3
public "getEndFor"(arg0: $BlockPos$Type): $ConnectionPoint
public "getEnds"(): ($ConnectionPoint)[]
public "getEndAOffset"(): $Vec3
public "getContainingNet"(arg0: $GlobalWireNetwork$Type): $LocalWireNetwork
public "isEnd"(arg0: $ConnectionPoint$Type): boolean
public "transformPosition"(arg0: double, arg1: $ConnectionPoint$Type): double
public "getPoint"(arg0: double, arg1: $ConnectionPoint$Type): $Vec3
public "isInternal"(): boolean
public "getEndB"(): $ConnectionPoint
public "isPositiveEnd"(arg0: $ConnectionPoint$Type): boolean
public "toNBT"(): $CompoundTag
public "getOtherEnd"(arg0: $ConnectionPoint$Type): $ConnectionPoint
public "getCatenaryData"(): $Connection$CatenaryData
public static "makeCatenaryData"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: double): $Connection$CatenaryData
public "getEndA"(): $ConnectionPoint
get "length"(): double
get "endBOffset"(): $Vec3
get "ends"(): ($ConnectionPoint)[]
get "endAOffset"(): $Vec3
get "internal"(): boolean
get "endB"(): $ConnectionPoint
get "catenaryData"(): $Connection$CatenaryData
get "endA"(): $ConnectionPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$Type = ($Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connection_ = $Connection$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration$ExtraComponent" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IMultiblockComponent, $IMultiblockComponent$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/component/$IMultiblockComponent"
import {$IMultiblockComponent$StateWrapper, $IMultiblockComponent$StateWrapper$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/component/$IMultiblockComponent$StateWrapper"

export class $MultiblockRegistration$ExtraComponent<State, ComponentState> extends $Record {

constructor(component: $IMultiblockComponent$Type<(ComponentState)>, makeWrapper: $IMultiblockComponent$StateWrapper$Type<(State), (ComponentState)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "component"(): $IMultiblockComponent<(ComponentState)>
public "makeWrapper"(): $IMultiblockComponent$StateWrapper<(State), (ComponentState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistration$ExtraComponent$Type<State, ComponentState> = ($MultiblockRegistration$ExtraComponent<(State), (ComponentState)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockRegistration$ExtraComponent_<State, ComponentState> = $MultiblockRegistration$ExtraComponent$Type<(State), (ComponentState)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$LogicCircuitInstruction" {
import {$LogicCircuitHandler$ILogicCircuitHandler, $LogicCircuitHandler$ILogicCircuitHandler$Type} from "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$ILogicCircuitHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LogicCircuitHandler$LogicCircuitRegister, $LogicCircuitHandler$LogicCircuitRegister$Type} from "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$LogicCircuitRegister"
import {$LogicCircuitHandler$LogicCircuitOperator, $LogicCircuitHandler$LogicCircuitOperator$Type} from "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$LogicCircuitOperator"

export class $LogicCircuitHandler$LogicCircuitInstruction {

constructor(arg0: $LogicCircuitHandler$LogicCircuitOperator$Type, arg1: $LogicCircuitHandler$LogicCircuitRegister$Type, arg2: ($LogicCircuitHandler$LogicCircuitRegister$Type)[])

public "apply"(arg0: $LogicCircuitHandler$ILogicCircuitHandler$Type): void
public "serialize"(): $CompoundTag
public "getOutput"(): $LogicCircuitHandler$LogicCircuitRegister
public static "deserialize"(arg0: $CompoundTag$Type): $LogicCircuitHandler$LogicCircuitInstruction
public "getOperator"(): $LogicCircuitHandler$LogicCircuitOperator
public "getInputs"(): ($LogicCircuitHandler$LogicCircuitRegister)[]
public "getFormattedString"(): $Component
get "output"(): $LogicCircuitHandler$LogicCircuitRegister
get "operator"(): $LogicCircuitHandler$LogicCircuitOperator
get "inputs"(): ($LogicCircuitHandler$LogicCircuitRegister)[]
get "formattedString"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$LogicCircuitInstruction$Type = ($LogicCircuitHandler$LogicCircuitInstruction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicCircuitHandler$LogicCircuitInstruction_ = $LogicCircuitHandler$LogicCircuitInstruction$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$DamageToolRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DamageToolRecipe, $DamageToolRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/$DamageToolRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DamageToolRecipeSerializer implements $RecipeSerializer<($DamageToolRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $DamageToolRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $DamageToolRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $DamageToolRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $DamageToolRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageToolRecipeSerializer$Type = ($DamageToolRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageToolRecipeSerializer_ = $DamageToolRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$BlastFurnacePreheaterBlock" {
import {$BlastFurnacePreheaterBlockEntity, $BlastFurnacePreheaterBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$BlastFurnacePreheaterBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlastFurnacePreheaterBlock extends $IEEntityBlock<($BlastFurnacePreheaterBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnacePreheaterBlock$Type = ($BlastFurnacePreheaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnacePreheaterBlock_ = $BlastFurnacePreheaterBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$MixerRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$MixerRecipe, $MixerRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MixerRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MixerRecipeSerializer extends $IERecipeSerializer<($MixerRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MixerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MixerRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MixerRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixerRecipeSerializer$Type = ($MixerRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixerRecipeSerializer_ = $MixerRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IIEBlock, $IIEBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IIEBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $IEBaseBlock extends $Block implements $IIEBlock, $SimpleWaterloggedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "isHidden"(): boolean
public "getNameForFlavour"(): string
public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "hasFlavour"(): boolean
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "fitsIntoContainer"(): boolean
public static "applyLocationalWaterlogging"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockState
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "setHasFlavour"(arg0: boolean): $IEBaseBlock
public "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "setHidden"(arg0: boolean): $IEBaseBlock
public "setLightOpacity"(arg0: integer): $IEBaseBlock
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "hidden"(): boolean
get "nameForFlavour"(): string
set "hidden"(value: boolean)
set "lightOpacity"(value: integer)
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseBlock$Type = ($IEBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBaseBlock_ = $IEBaseBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ConcretePowderBlockAccess" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $ConcretePowderBlockAccess {

 "getConcrete"(): $BlockState

(): $BlockState
}

export namespace $ConcretePowderBlockAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcretePowderBlockAccess$Type = ($ConcretePowderBlockAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcretePowderBlockAccess_ = $ConcretePowderBlockAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/config/$IEServerConfig$Ores$VeinType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumMetals, $EnumMetals$Type} from "packages/blusunrize/immersiveengineering/api/$EnumMetals"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IEServerConfig$Ores$VeinType extends $Enum<($IEServerConfig$Ores$VeinType)> {
static readonly "BAUXITE": $IEServerConfig$Ores$VeinType
static readonly "LEAD": $IEServerConfig$Ores$VeinType
static readonly "SILVER": $IEServerConfig$Ores$VeinType
static readonly "NICKEL": $IEServerConfig$Ores$VeinType
static readonly "DEEP_NICKEL": $IEServerConfig$Ores$VeinType
static readonly "URANIUM": $IEServerConfig$Ores$VeinType
static readonly "VALUES": ($IEServerConfig$Ores$VeinType)[]
static readonly "CODEC": $Codec<($IEServerConfig$Ores$VeinType)>
readonly "metal": $EnumMetals


public static "values"(): ($IEServerConfig$Ores$VeinType)[]
public static "valueOf"(arg0: string): $IEServerConfig$Ores$VeinType
public "getVeinName"(): string
get "veinName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEServerConfig$Ores$VeinType$Type = (("nickel") | ("deep_nickel") | ("bauxite") | ("silver") | ("uranium") | ("lead")) | ($IEServerConfig$Ores$VeinType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEServerConfig$Ores$VeinType_ = $IEServerConfig$Ores$VeinType$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu$MoveItemsFunc" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEContainerMenu$MoveItemsFunc {

 "moveItemStackTo"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean

(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export namespace $IEContainerMenu$MoveItemsFunc {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$MoveItemsFunc$Type = ($IEContainerMenu$MoveItemsFunc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEContainerMenu$MoveItemsFunc_ = $IEContainerMenu$MoveItemsFunc$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IDirectionalBE" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IEBlockInterfaces$IDirectionalBE {

 "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
 "getFacingLimitation"(): $PlacementLimitation
 "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
 "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
 "setFacing"(arg0: $Direction$Type): void
 "getFacing"(): $Direction
}

export namespace $IEBlockInterfaces$IDirectionalBE {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IDirectionalBE$Type = ($IEBlockInterfaces$IDirectionalBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IDirectionalBE_ = $IEBlockInterfaces$IDirectionalBE$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$DrillheadItem$DrillHeadPerm" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export class $DrillheadItem$DrillHeadPerm {
readonly "texture": $ResourceLocation

constructor(arg0: string, arg1: $TagKey$Type<($Item$Type)>, arg2: integer, arg3: integer, arg4: $Tier$Type, arg5: float, arg6: integer, arg7: integer, arg8: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillheadItem$DrillHeadPerm$Type = ($DrillheadItem$DrillHeadPerm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillheadItem$DrillHeadPerm_ = $DrillheadItem$DrillHeadPerm$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ScrewdriverItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScrewdriverItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrewdriverItem$Type = ($ScrewdriverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrewdriverItem_ = $ScrewdriverItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$WindmillBiomeSerializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WindmillBiome, $WindmillBiome$Type} from "packages/blusunrize/immersiveengineering/api/energy/$WindmillBiome"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WindmillBiomeSerializer extends $IERecipeSerializer<($WindmillBiome)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $WindmillBiome$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $WindmillBiome
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBiomeSerializer$Type = ($WindmillBiomeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindmillBiomeSerializer_ = $WindmillBiomeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$BalloonBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IPlayerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction"
import {$CapabilityShader$ShaderWrapper, $CapabilityShader$ShaderWrapper$Type} from "packages/blusunrize/immersiveengineering/api/shader/$CapabilityShader$ShaderWrapper"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BalloonBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IBlockBounds {
 "style": integer
 "colour0": $DyeColor
 "colour1": $DyeColor

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "getShader"(): $CapabilityShader$ShaderWrapper
public "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
get "shader"(): $CapabilityShader$ShaderWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalloonBlockEntity$Type = ($BalloonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalloonBlockEntity_ = $BalloonBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$CokeOvenRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CokeOvenRecipe, $CokeOvenRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$CokeOvenRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CokeOvenRecipeSerializer extends $IERecipeSerializer<($CokeOvenRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CokeOvenRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CokeOvenRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CokeOvenRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CokeOvenRecipeSerializer$Type = ($CokeOvenRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CokeOvenRecipeSerializer_ = $CokeOvenRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$CrusherRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StackWithChance, $StackWithChance$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$StackWithChance"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"

export class $CrusherRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($CrusherRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($CrusherRecipe)>
readonly "input": $Ingredient
readonly "output": $Lazy<($ItemStack)>
readonly "secondaryOutputs": $List<($StackWithChance)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Lazy$Type<($ItemStack$Type)>, arg2: $Ingredient$Type, arg3: integer)

public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): $CrusherRecipe
public "addToSecondaryOutput"(arg0: $StackWithChance$Type): $CrusherRecipe
public "getActualItemOutputs"(): $NonNullList<($ItemStack)>
public "getMultipleProcessTicks"(): integer
get "actualItemOutputs"(): $NonNullList<($ItemStack)>
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherRecipe$Type = ($CrusherRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrusherRecipe_ = $CrusherRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ClocheBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClocheRecipe, $ClocheRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRecipe"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$CustomParticleManager, $CustomParticleManager$Type} from "packages/blusunrize/immersiveengineering/client/fx/$CustomParticleManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IInteractionObjectIE, $IEBlockInterfaces$IInteractionObjectIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IInteractionObjectIE"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$DistField, $DistField$Type} from "packages/blusunrize/immersiveengineering/client/utils/$DistField"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IIEInventory, $IIEInventory$Type} from "packages/blusunrize/immersiveengineering/common/util/inventory/$IIEInventory"
import {$IEClientTickableBE, $IEClientTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$MutableEnergyStorage, $MutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$MutableEnergyStorage"
import {$IEMenuTypes$ArgContainer, $IEMenuTypes$ArgContainer$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEMenuTypes$ArgContainer"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $ClocheBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEClientTickableBE, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHasDummyBlocks, $IIEInventory, $IEBlockInterfaces$IInteractionObjectIE<($ClocheBlockEntity)>, $IModelOffsetProvider {
static readonly "SLOT_SOIL": integer
static readonly "SLOT_SEED": integer
static readonly "SLOT_FERTILIZER": integer
static readonly "NUM_SLOTS": integer
static readonly "TANK_CAPACITY": integer
static readonly "ENERGY_CAPACITY": integer
 "dummy": integer
readonly "tank": $FluidTank
 "energyStorage": $MutableEnergyStorage
readonly "particles": $DistField<($CustomParticleManager)>
readonly "cachedRecipe": $Supplier<($ClocheRecipe)>
 "fertilizerAmount": integer
 "fertilizerMod": float
 "renderGrowth": float
 "renderActive": boolean

constructor(arg0: $BlockEntityType$Type<($ClocheBlockEntity$Type)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getContainerType"(): $IEMenuTypes$ArgContainer<($ClocheBlockEntity), (any)>
public "receiveMessageFromServer"(arg0: $CompoundTag$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "tickClient"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "canUseGui"(arg0: $Player$Type): boolean
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "getGuiMaster"(): $ClocheBlockEntity
public "getFacingProperty"(): $Property<($Direction)>
public "canTickAny"(): boolean
public "isStackValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "doGraphicalUpdates"(): void
public "isDummy"(): boolean
public "setFacing"(arg0: $Direction$Type): void
public "tickServer"(): void
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "getRenderBoundingBox"(): $AABB
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public "getGuiProgress"(): float
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getFacing"(): $Direction
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "isValid"(): boolean
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
get "containerType"(): $IEMenuTypes$ArgContainer<($ClocheBlockEntity), (any)>
get "facingLimitation"(): $PlacementLimitation
get "guiMaster"(): $ClocheBlockEntity
get "facingProperty"(): $Property<($Direction)>
get "dummy"(): boolean
set "facing"(value: $Direction$Type)
get "renderBoundingBox"(): $AABB
get "inventory"(): $NonNullList<($ItemStack)>
get "guiProgress"(): float
get "facing"(): $Direction
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
get "valid"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheBlockEntity$Type = ($ClocheBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheBlockEntity_ = $ClocheBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$WorldRendererAccess" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $WorldRendererAccess {

 "callRenderHitOutline"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Entity$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$Type, arg7: $BlockState$Type): void

(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Entity$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$Type, arg7: $BlockState$Type): void
}

export namespace $WorldRendererAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccess$Type = ($WorldRendererAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererAccess_ = $WorldRendererAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IMirrorAble" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEBlockInterfaces$BlockstateProvider, $IEBlockInterfaces$BlockstateProvider$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$BlockstateProvider"

export interface $IEBlockInterfaces$IMirrorAble extends $IEBlockInterfaces$BlockstateProvider {

 "setMirrored"(arg0: boolean): void
 "getIsMirrored"(): boolean
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$Type): void
}

export namespace $IEBlockInterfaces$IMirrorAble {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IMirrorAble$Type = ($IEBlockInterfaces$IMirrorAble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IMirrorAble_ = $IEBlockInterfaces$IMirrorAble$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IRedstoneOutput" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IEBlockInterfaces$IRedstoneOutput {

 "getWeakRSOutput"(arg0: $Direction$Type): integer
 "getStrongRSOutput"(arg0: $Direction$Type): integer
 "canConnectRedstone"(arg0: $Direction$Type): boolean
}

export namespace $IEBlockInterfaces$IRedstoneOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IRedstoneOutput$Type = ($IEBlockInterfaces$IRedstoneOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IRedstoneOutput_ = $IEBlockInterfaces$IRedstoneOutput$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$TemplateMultiblock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TemplateMultiblock$TemplateData, $TemplateMultiblock$TemplateData$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$TemplateMultiblock$TemplateData"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"
import {$BlockMatcher$MatcherPredicate, $BlockMatcher$MatcherPredicate$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$BlockMatcher$MatcherPredicate"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MultiblockHandler$IMultiblock, $MultiblockHandler$IMultiblock$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClientMultiblocks$MultiblockManualData, $ClientMultiblocks$MultiblockManualData$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$ClientMultiblocks$MultiblockManualData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TemplateMultiblock implements $MultiblockHandler$IMultiblock {
static readonly "SYNCED_CLIENT_TEMPLATES": $Map<($ResourceLocation), ($StructureTemplate)>

constructor(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $Map$Type<($Block$Type), ($TagKey$Type<($Block$Type)>)>)
constructor(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $List$Type<($BlockMatcher$MatcherPredicate$Type)>)

public "getSize"(arg0: $Level$Type): $Vec3i
public "getTemplate"(arg0: $Level$Type): $TemplateMultiblock$TemplateData
public "isBlockTrigger"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $Level$Type): boolean
public "createStructure"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Player$Type): boolean
public "getUniqueName"(): $ResourceLocation
public "getTriggerOffset"(): $BlockPos
public "disassemble"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean, arg3: $Direction$Type): void
public "getStructure"(arg0: $Level$Type): $List<($StructureTemplate$StructureBlockInfo)>
public static "setCallbacks"(arg0: $Function$Type<($BlockState$Type), ($ItemStack$Type)>, arg1: $Function$Type<($StructureTemplate$Type), ($List$Type<($StructureTemplate$Palette$Type)>)>): void
public "getMasterFromOriginOffset"(): $BlockPos
public static "withSettingsAndOffset"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Mirror$Type, arg3: $Rotation$Type): $BlockPos
public static "withSettingsAndOffset"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: boolean, arg3: $Direction$Type): $BlockPos
public "getTemplateLocation"(): $ResourceLocation
public "canBeMirrored"(): boolean
public static "getAbsoluteOffset"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Direction$Type): $BlockPos
public static "getAbsoluteOffset"(arg0: $BlockPos$Type, arg1: $Mirror$Type, arg2: $Rotation$Type): $BlockPos
public "getDisplayName"(): $Component
public "getBlock"(): $Block
public "getManualScale"(): float
public "initializeClient"(arg0: $Consumer$Type<($ClientMultiblocks$MultiblockManualData$Type)>): void
get "uniqueName"(): $ResourceLocation
get "triggerOffset"(): $BlockPos
get "masterFromOriginOffset"(): $BlockPos
get "templateLocation"(): $ResourceLocation
get "displayName"(): $Component
get "block"(): $Block
get "manualScale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateMultiblock$Type = ($TemplateMultiblock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateMultiblock_ = $TemplateMultiblock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IAdditionalDrops" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEBlockInterfaces$IAdditionalDrops {

 "getExtraDrops"(arg0: $Player$Type, arg1: $BlockState$Type): $Collection<($ItemStack)>

(arg0: $Player$Type, arg1: $BlockState$Type): $Collection<($ItemStack)>
}

export namespace $IEBlockInterfaces$IAdditionalDrops {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IAdditionalDrops$Type = ($IEBlockInterfaces$IAdditionalDrops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IAdditionalDrops_ = $IEBlockInterfaces$IAdditionalDrops$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$BlastFurnacePreheaterBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEClientTickableBE, $IEClientTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$IEBlockInterfaces$ISoundBE, $IEBlockInterfaces$ISoundBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISoundBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MutableEnergyStorage, $MutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$MutableEnergyStorage"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlastFurnacePreheaterBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHasDummyBlocks, $IModelOffsetProvider, $IEClientTickableBE, $IEBlockInterfaces$ISoundBE {
static readonly "ANGLE_PER_TICK": float
 "active": boolean
 "dummy": integer
readonly "energyStorage": $MutableEnergyStorage
 "angle": float

constructor(arg0: $BlockEntityType$Type<($BlastFurnacePreheaterBlockEntity$Type)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "tickClient"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "isDummy"(): boolean
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "shouldPlaySound"(arg0: string): boolean
public "doSpeedup"(): integer
public "turnOff"(): void
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getSoundRadiusSq"(): float
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "canTickAny"(): boolean
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "dummy"(): boolean
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "soundRadiusSq"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnacePreheaterBlockEntity$Type = ($BlastFurnacePreheaterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnacePreheaterBlockEntity_ = $BlastFurnacePreheaterBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IEShieldItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$UpgradeableToolItem, $UpgradeableToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LivingAttackEvent, $LivingAttackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingAttackEvent"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IEShieldItem extends $UpgradeableToolItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getSlotCount"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canModify"(arg0: $ItemStack$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
public "hitShield"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $DamageSource$Type, arg3: float, arg4: $LivingAttackEvent$Type): void
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEShieldItem$Type = ($IEShieldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEShieldItem_ = $IEShieldItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$ThermoelectricSourceSerializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ThermoelectricSource, $ThermoelectricSource$Type} from "packages/blusunrize/immersiveengineering/api/energy/$ThermoelectricSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ThermoelectricSourceSerializer extends $IERecipeSerializer<($ThermoelectricSource)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ThermoelectricSource$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ThermoelectricSource
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoelectricSourceSerializer$Type = ($ThermoelectricSourceSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermoelectricSourceSerializer_ = $ThermoelectricSourceSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TeslaCoilBlockEntity" {
import {$IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$IScrewdriverInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$TeslaCoilBlockEntity$LightningAnimation, $TeslaCoilBlockEntity$LightningAnimation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$TeslaCoilBlockEntity$LightningAnimation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IEClientTickableBE, $IEClientTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MutableEnergyStorage, $MutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$MutableEnergyStorage"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $TeslaCoilBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEClientTickableBE, $IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IScrewdriverInteraction, $IModelOffsetProvider {
 "energyStorage": $MutableEnergyStorage
 "redstoneControlInverted": boolean
 "lowPower": boolean
readonly "effectMap": $List<($TeslaCoilBlockEntity$LightningAnimation)>

constructor(arg0: $BlockEntityType$Type<($TeslaCoilBlockEntity$Type)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "receiveMessageFromServer"(arg0: $CompoundTag$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "tickClient"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): $InteractionResult
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "tickServer"(): void
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "getRenderBoundingBox"(): $AABB
public "initFreeStreamer"(arg0: double, arg1: double, arg2: double): void
public "canRun"(arg0: integer): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "canTickAny"(): boolean
public "isDummy"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "renderBoundingBox"(): $AABB
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "dummy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlockEntity$Type = ($TeslaCoilBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeslaCoilBlockEntity_ = $TeslaCoilBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$GunpowderBarrelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TntBlock, $TntBlock$Type} from "packages/net/minecraft/world/level/block/$TntBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GunpowderBarrelBlock extends $TntBlock {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "UNSTABLE": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunpowderBarrelBlock$Type = ($GunpowderBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunpowderBarrelBlock_ = $GunpowderBarrelBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$VoltmeterItem$RemoteRedstoneData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VoltmeterItem$RemoteRedstoneData extends $Record {

constructor(pos: $BlockPos$Type, measuredInTick: long, isSignalSource: boolean, rsLevel: byte)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $VoltmeterItem$RemoteRedstoneData
public "pos"(): $BlockPos
public "isSignalSource"(): boolean
public "rsLevel"(): byte
public "measuredInTick"(): long
get "signalSource"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltmeterItem$RemoteRedstoneData$Type = ($VoltmeterItem$RemoteRedstoneData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoltmeterItem$RemoteRedstoneData_ = $VoltmeterItem$RemoteRedstoneData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$RevolverItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RevolverItem$SpecialRevolver, $RevolverItem$SpecialRevolver$Type} from "packages/blusunrize/immersiveengineering/common/items/$RevolverItem$SpecialRevolver"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeableToolItem, $UpgradeableToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IEItemInterfaces$IBulletContainer, $IEItemInterfaces$IBulletContainer$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IBulletContainer"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BulletHandler$IBullet, $BulletHandler$IBullet$Type} from "packages/blusunrize/immersiveengineering/api/tool/$BulletHandler$IBullet"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ZoomHandler$IZoomTool, $ZoomHandler$IZoomTool$Type} from "packages/blusunrize/immersiveengineering/api/tool/$ZoomHandler$IZoomTool"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RevolverItem extends $UpgradeableToolItem implements $IEItemInterfaces$IBulletContainer, $ZoomHandler$IZoomTool {
static "speedModUUID": $UUID
static "luckModUUID": $UUID
static readonly "specialRevolvers": $Multimap<(string), ($RevolverItem$SpecialRevolver)>
static readonly "specialRevolversByTag": $Map<(string), ($RevolverItem$SpecialRevolver)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isEmpty"(arg0: $ItemStack$Type, arg1: boolean): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "getSlotCount"(): integer
public "getUpgradeBase"(arg0: $ItemStack$Type): $CompoundTag
public static "getUpgradeValue_d"(arg0: $ItemStack$Type, arg1: string): double
public "getShootCooldown"(arg0: $ItemStack$Type): integer
public "setBullets"(arg0: $ItemStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: boolean): void
public "rotateCylinder"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean, arg3: $NonNullList$Type<($ItemStack$Type)>): void
public "rotateCylinder"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean): void
public static "getPerks"(arg0: $ItemStack$Type): $CompoundTag
public static "fireProjectile"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: $BulletHandler$IBullet$Type, arg4: $ItemStack$Type): float
public "canZoom"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public static "hasUpgradeValue"(arg0: $ItemStack$Type, arg1: string): boolean
public "getZoomSteps"(arg0: $ItemStack$Type, arg1: $Player$Type): (float)[]
public "getRevolverDisplayTag"(arg0: $ItemStack$Type): string
public static "copyBulletsToShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $CompoundTag
public "getMaxShootCooldown"(arg0: $ItemStack$Type): integer
public static "readBulletsFromShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "applySpecialCrafting"(arg0: $ItemStack$Type, arg1: $RevolverItem$SpecialRevolver$Type): void
public "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getBullets"(arg0: $ItemStack$Type): $NonNullList<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "canModify"(arg0: $ItemStack$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
public "getBulletCount"(arg0: $ItemStack$Type): integer
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverItem$Type = ($RevolverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RevolverItem_ = $RevolverItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IMultiblockState {

 "readSaveNBT"(arg0: $CompoundTag$Type): void
 "writeSyncNBT"(arg0: $CompoundTag$Type): void
 "readSyncNBT"(arg0: $CompoundTag$Type): void
 "writeSaveNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IMultiblockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockState$Type = ($IMultiblockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockState_ = $IMultiblockState$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISoundBE" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$ISoundBE {

 "getSoundRadiusSq"(): float
 "shouldPlaySound"(arg0: string): boolean

(): float
}

export namespace $IEBlockInterfaces$ISoundBE {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ISoundBE$Type = ($IEBlockInterfaces$ISoundBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$ISoundBE_ = $IEBlockInterfaces$ISoundBE$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$HorizontalFacingBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $HorizontalFacingBlock extends $IEBaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalFacingBlock$Type = ($HorizontalFacingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalFacingBlock_ = $HorizontalFacingBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$RailgunItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IEItemInterfaces$IScrollwheel, $IEItemInterfaces$IScrollwheel$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IScrollwheel"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeableToolItem, $UpgradeableToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ZoomHandler$IZoomTool, $ZoomHandler$IZoomTool$Type} from "packages/blusunrize/immersiveengineering/api/tool/$ZoomHandler$IZoomTool"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RailgunItem extends $UpgradeableToolItem implements $ZoomHandler$IZoomTool, $IEItemInterfaces$IScrollwheel {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "getSlotCount"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "clearUpgrades"(arg0: $ItemStack$Type): void
public "onScrollwheel"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean): void
public static "fireProjectile"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): $Entity
public "canZoom"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "getZoomSteps"(arg0: $ItemStack$Type, arg1: $Player$Type): (float)[]
public static "findAmmoInSlot"(arg0: $Player$Type, arg1: integer): $ItemStack
public static "playChargeSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public static "findAmmo"(arg0: $ItemStack$Type, arg1: $Player$Type): $ItemStack
public static "getChargeTime"(arg0: $ItemStack$Type): integer
public static "isAmmo"(arg0: $ItemStack$Type): boolean
public static "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
public "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "recalculateUpgrades"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "canModify"(arg0: $ItemStack$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailgunItem$Type = ($RailgunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailgunItem_ = $RailgunItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$BuzzsawItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SawbladeItem, $SawbladeItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$SawbladeItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IEItemInterfaces$IScrollwheel, $IEItemInterfaces$IScrollwheel$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IScrollwheel"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$DieselToolItem, $DieselToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$DieselToolItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BuzzsawItem extends $DieselToolItem implements $IEItemInterfaces$IScrollwheel {
static readonly "SAWBLADES": $Collection<($SawbladeItem)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "getSlotCount"(): integer
public "getMaxHeadDamage"(arg0: $ItemStack$Type): integer
public "setHead"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "getHeadDamage"(arg0: $ItemStack$Type): integer
public "removeUpgrade"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "getHarvestLevel"(arg0: $ItemStack$Type, arg1: $Player$Type): $Tier
public "canToolBeUsed"(arg0: $ItemStack$Type): boolean
public "isEffective"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public static "hasQuiverUpgrade"(arg0: $ItemStack$Type): boolean
public static "isSawblade"(arg0: $ItemStack$Type): boolean
public "onScrollwheel"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean): void
public static "getSawblade"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "setSawblade"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: integer): void
public "getHead"(arg0: $ItemStack$Type): $ItemStack
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getUpgradeAfterRemoval"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "recalculateUpgrades"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuzzsawItem$Type = ($BuzzsawItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuzzsawItem_ = $BuzzsawItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$WireCoilItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWireCoil, $IWireCoil$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IWireCoil"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WireCoilItem extends $IEBaseItem implements $IWireCoil {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WireType$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getWireType"(arg0: $ItemStack$Type): $WireType
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "doCoilUse"(arg0: $IWireCoil$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $InteractionHand$Type, arg5: $Direction$Type, arg6: float, arg7: float, arg8: float): $InteractionResult
public "canConnectCable"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type): boolean
public "getMaxLength"(arg0: $ItemStack$Type): integer
public "consumeWire"(arg0: $ItemStack$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCoilItem$Type = ($WireCoilItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireCoilItem_ = $WireCoilItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable" {
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$ILocalHandlerProvider, $ILocalHandlerProvider$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IImmersiveConnectable extends $ILocalHandlerProvider {

 "getPosition"(): $BlockPos
 "isProxy"(): boolean
 "getConnectionPoints"(): $Collection<($ConnectionPoint)>
 "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
 "getConnectionMaster"(arg0: $WireType$Type, arg1: $TargetingInfo$Type): $BlockPos
 "getInternalConnections"(): $Iterable<(any)>
 "canConnect"(): boolean
 "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
 "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
 "removeCable"(arg0: $Connection$Type, arg1: $ConnectionPoint$Type): void
 "getIgnored"(arg0: $IImmersiveConnectable$Type): $Set<($BlockPos)>
 "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
 "getRequestedHandlers"(): $Collection<($ResourceLocation)>
}

export namespace $IImmersiveConnectable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IImmersiveConnectable$Type = ($IImmersiveConnectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IImmersiveConnectable_ = $IImmersiveConnectable$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$CapabilityPosition" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MultiblockFace, $MultiblockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockFace"
import {$RelativeBlockFace, $RelativeBlockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$RelativeBlockFace"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CapabilityPosition extends $Record {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $RelativeBlockFace$Type)
constructor(posInMultiblock: $BlockPos$Type, side: $RelativeBlockFace$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "side"(): $RelativeBlockFace
public static "opposing"(arg0: $MultiblockFace$Type): $CapabilityPosition
public "posInMultiblock"(): $BlockPos
public "equalsOrNullFace"(arg0: $CapabilityPosition$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityPosition$Type = ($CapabilityPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityPosition_ = $CapabilityPosition$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$CraftingTableBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CraftingTableBlockEntity, $CraftingTableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/wooden/$CraftingTableBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CraftingTableBlock extends $IEEntityBlock<($CraftingTableBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTableBlock$Type = ($CraftingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingTableBlock_ = $CraftingTableBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IETickableBase, $IETickableBase$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IETickableBase"

export interface $IEServerTickableBE extends $IETickableBase {

 "tickServer"(): void
 "canTickAny"(): boolean

(): $BlockEntityTicker<(T)>
}

export namespace $IEServerTickableBE {
function makeTicker<T>(): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEServerTickableBE$Type = ($IEServerTickableBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEServerTickableBE_ = $IEServerTickableBE$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$ScaffoldingBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEBaseBlock$IELadderBlock, $IEBaseBlock$IELadderBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock$IELadderBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ScaffoldingBlock extends $IEBaseBlock$IELadderBlock {
static readonly "CHECK_SHAPE": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaffoldingBlock$Type = ($ScaffoldingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScaffoldingBlock_ = $ScaffoldingBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$StackWithChance" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $StackWithChance extends $Record {

constructor(stack: $Lazy$Type<($ItemStack$Type)>, chance: float)
constructor(arg0: $ItemStack$Type, arg1: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $StackWithChance
public "stack"(): $Lazy<($ItemStack)>
public static "readFromNBT"(arg0: $CompoundTag$Type): $StackWithChance
public "writeToNBT"(): $CompoundTag
public "chance"(): float
public "recalculate"(arg0: float): $StackWithChance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackWithChance$Type = ($StackWithChance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackWithChance_ = $StackWithChance$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/cache/$IListRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IListRecipe {

 "getSubRecipes"(): $List<(any)>

(): $List<(any)>
}

export namespace $IListRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IListRecipe$Type = ($IListRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IListRecipe_ = $IListRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$WatermillBlock" {
import {$WatermillBlockEntity, $WatermillBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/wooden/$WatermillBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $WatermillBlock extends $IEEntityBlock<($WatermillBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatermillBlock$Type = ($WatermillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatermillBlock_ = $WatermillBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$BlockMatcher$Result" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockMatcher$Result {
static readonly "DEFAULT": $BlockMatcher$Result


public static "allow"(arg0: integer): $BlockMatcher$Result
public static "combine"(arg0: $BlockMatcher$Result$Type, arg1: $BlockMatcher$Result$Type): $BlockMatcher$Result
public "isDefault"(): boolean
public static "deny"(arg0: integer): $BlockMatcher$Result
public "isDeny"(): boolean
public "isAllow"(): boolean
get "default"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMatcher$Result$Type = ($BlockMatcher$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMatcher$Result_ = $BlockMatcher$Result$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/util/inventory/$IIEInventory" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDropInventory, $IDropInventory$Type} from "packages/blusunrize/immersiveengineering/common/util/inventory/$IDropInventory"

export interface $IIEInventory extends $IDropInventory {

 "getDroppedItems"(): $Stream<($ItemStack)>
 "isStackValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "doGraphicalUpdates"(): void
 "getComparatedSize"(): integer
 "getInventory"(): $NonNullList<($ItemStack)>
 "getSlotLimit"(arg0: integer): integer
}

export namespace $IIEInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIEInventory$Type = ($IIEInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIEInventory_ = $IIEInventory$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$JerrycanItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JerrycanItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JerrycanItem$Type = ($JerrycanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JerrycanItem_ = $JerrycanItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$BulletItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BulletHandler$IBullet, $BulletHandler$IBullet$Type} from "packages/blusunrize/immersiveengineering/api/tool/$BulletHandler$IBullet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IEItemInterfaces$IColouredItem, $IEItemInterfaces$IColouredItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IColouredItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BulletItem extends $IEBaseItem implements $IEItemInterfaces$IColouredItem {
static readonly "CASULL": $ResourceLocation
static readonly "ARMOR_PIERCING": $ResourceLocation
static readonly "BUCKSHOT": $ResourceLocation
static readonly "HIGH_EXPLOSIVE": $ResourceLocation
static readonly "SILVER": $ResourceLocation
static readonly "DRAGONS_BREATH": $ResourceLocation
static readonly "POTION": $ResourceLocation
static readonly "FLARE": $ResourceLocation
static readonly "FIREWORK": $ResourceLocation
static readonly "HOMING": $ResourceLocation
static readonly "WOLFPACK": $ResourceLocation
static readonly "WOLFPACK_PART": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $BulletHandler$IBullet$Type)

public "getType"(): $BulletHandler$IBullet
public "getColourForIEItem"(arg0: $ItemStack$Type, arg1: integer): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "initBullets"(): void
get "type"(): $BulletHandler$IBullet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletItem$Type = ($BulletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulletItem_ = $BulletItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/shader/$CapabilityShader$ShaderWrapper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ShaderCase, $ShaderCase$Type} from "packages/blusunrize/immersiveengineering/api/shader/$ShaderCase"

export class $CapabilityShader$ShaderWrapper {

constructor(arg0: $ResourceLocation$Type)

public "getCase"(): $ShaderCase
public "getShaderItem"(): $ItemStack
public "getShaderType"(): $ResourceLocation
public "setShaderItem"(arg0: $ItemStack$Type): void
public "setShaderType"(arg0: $ResourceLocation$Type): void
get "case"(): $ShaderCase
get "shaderItem"(): $ItemStack
get "shaderType"(): $ResourceLocation
set "shaderItem"(value: $ItemStack$Type)
set "shaderType"(value: $ResourceLocation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityShader$ShaderWrapper$Type = ($CapabilityShader$ShaderWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityShader$ShaderWrapper_ = $CapabilityShader$ShaderWrapper$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerProvider" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ILocalHandlerProvider {

 "getRequestedHandlers"(): $Collection<($ResourceLocation)>
}

export namespace $ILocalHandlerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocalHandlerProvider$Type = ($ILocalHandlerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILocalHandlerProvider_ = $ILocalHandlerProvider$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerHVBlock" {
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TransformerHVBlockEntity, $TransformerHVBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerHVBlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TransformerHVBlock extends $ConnectorBlock<($TransformerHVBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerHVBlock$Type = ($TransformerHVBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformerHVBlock_ = $TransformerHVBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$TurnAndCopyRecipeSerializer" {
import {$TurnAndCopyRecipe, $TurnAndCopyRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$TurnAndCopyRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TurnAndCopyRecipeSerializer implements $RecipeSerializer<($TurnAndCopyRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TurnAndCopyRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TurnAndCopyRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TurnAndCopyRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TurnAndCopyRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipeSerializer$Type = ($TurnAndCopyRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurnAndCopyRecipeSerializer_ = $TurnAndCopyRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/register/$IEFluids$FluidEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IEFluidBlock, $IEFluidBlock$Type} from "packages/blusunrize/immersiveengineering/common/fluids/$IEFluidBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlocks$BlockEntry, $IEBlocks$BlockEntry$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEBlocks$BlockEntry"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$IEFluid, $IEFluid$Type} from "packages/blusunrize/immersiveengineering/common/fluids/$IEFluid"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $IEFluids$FluidEntry extends $Record {

constructor(flowing: $RegistryObject$Type<($IEFluid$Type)>, still: $RegistryObject$Type<($IEFluid$Type)>, block: $IEBlocks$BlockEntry$Type<($IEFluidBlock$Type)>, bucket: $RegistryObject$Type<($BucketItem$Type)>, type: $RegistryObject$Type<($FluidType$Type)>, properties: $List$Type<($Property$Type<(any)>)>)

public "type"(): $RegistryObject<($FluidType)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "properties"(): $List<($Property<(any)>)>
public "block"(): $IEBlocks$BlockEntry<($IEFluidBlock)>
public "getBlock"(): $IEFluidBlock
public "getStillGetter"(): $RegistryObject<($IEFluid)>
public "getFlowing"(): $IEFluid
public "getStill"(): $IEFluid
public "bucket"(): $RegistryObject<($BucketItem)>
public "flowing"(): $RegistryObject<($IEFluid)>
public "getBucket"(): $BucketItem
public "still"(): $RegistryObject<($IEFluid)>
get "stillGetter"(): $RegistryObject<($IEFluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluids$FluidEntry$Type = ($IEFluids$FluidEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEFluids$FluidEntry_ = $IEFluids$FluidEntry$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericContainerData" {
import {$IMutableEnergyStorage, $IMutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$IMutableEnergyStorage"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$GenericDataSerializers$DataSerializer, $GenericDataSerializers$DataSerializer$Type} from "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericDataSerializers$DataSerializer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FluidTank, $FluidTank$Type} from "packages/net/minecraftforge/fluids/capability/templates/$FluidTank"
import {$GenericDataSerializers$DataPair, $GenericDataSerializers$DataPair$Type} from "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericDataSerializers$DataPair"
import {$GetterAndSetter, $GetterAndSetter$Type} from "packages/blusunrize/immersiveengineering/common/gui/sync/$GetterAndSetter"

export class $GenericContainerData<T> {

constructor(arg0: $GenericDataSerializers$DataSerializer$Type<(T)>, arg1: $Supplier$Type<(T)>, arg2: $Consumer$Type<(T)>)
constructor(arg0: $GenericDataSerializers$DataSerializer$Type<(T)>, arg1: $GetterAndSetter$Type<(T)>)

public static "bool"(arg0: $Supplier$Type<(boolean)>, arg1: $Consumer$Type<(boolean)>): $GenericContainerData<(boolean)>
public static "energy"(arg0: $IMutableEnergyStorage$Type): $GenericContainerData<(any)>
public static "int32"(arg0: $Supplier$Type<(integer)>, arg1: $Consumer$Type<(integer)>): $GenericContainerData<(integer)>
public static "float32"(arg0: $Supplier$Type<(float)>, arg1: $Consumer$Type<(float)>): $GenericContainerData<(float)>
public "needsUpdate"(): boolean
public "dataPair"(): $GenericDataSerializers$DataPair<(T)>
public "processSync"(arg0: any): void
public static "fluid"(arg0: $FluidTank$Type): $GenericContainerData<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericContainerData$Type<T> = ($GenericContainerData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericContainerData_<T> = $GenericContainerData$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/shader/$IShaderItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ShaderCase, $ShaderCase$Type} from "packages/blusunrize/immersiveengineering/api/shader/$ShaderCase"

export interface $IShaderItem {

 "getShaderName"(arg0: $ItemStack$Type): $ResourceLocation
 "getShaderCase"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): $ShaderCase
}

export namespace $IShaderItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShaderItem$Type = ($IShaderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShaderItem_ = $IShaderItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$EnergyMeterBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$EnergyMeterBlockEntity, $EnergyMeterBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$EnergyMeterBlockEntity"
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $EnergyMeterBlock extends $ConnectorBlock<($EnergyMeterBlockEntity)> {
static readonly "FACING": $Property<($Direction)>
static readonly "DUMMY": $Property<(boolean)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyMeterBlock$Type = ($EnergyMeterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyMeterBlock_ = $EnergyMeterBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LocalNetworkHandler, $LocalNetworkHandler$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$LocalNetworkHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$IWorldTickable, $IWorldTickable$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$IWorldTickable"
import {$GlobalWireNetwork, $GlobalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LocalWireNetwork implements $IWorldTickable {

constructor(arg0: $CompoundTag$Type, arg1: $GlobalWireNetwork$Type)
constructor(arg0: $GlobalWireNetwork$Type)

public "toString"(): string
public "update"(arg0: $Level$Type): void
public "getHandler"<T extends $LocalNetworkHandler>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
public "getVersion"(): integer
public "isValid"(): boolean
public "isValid"(arg0: $ConnectionPoint$Type): boolean
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getConnector"(arg0: $BlockPos$Type): $IImmersiveConnectable
public "getConnector"(arg0: $ConnectionPoint$Type): $IImmersiveConnectable
public "writeToNBT"(): $CompoundTag
public "getAllHandlers"(): $Collection<($LocalNetworkHandler)>
public "addAsFutureTask"(arg0: $Runnable$Type): void
public "setInvalid"(): void
public "getConnections"(arg0: $BlockPos$Type): $Collection<($Connection)>
public "getConnections"(arg0: $ConnectionPoint$Type): $Collection<($Connection)>
public "getConnectors"(): $Collection<($BlockPos)>
get "version"(): integer
get "valid"(): boolean
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "allHandlers"(): $Collection<($LocalNetworkHandler)>
get "connectors"(): $Collection<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalWireNetwork$Type = ($LocalWireNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalWireNetwork_ = $LocalWireNetwork$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IElectricEquipment$ElectricSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IElectricEquipment$ElectricSource {
readonly "level": float

constructor(arg0: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElectricEquipment$ElectricSource$Type = ($IElectricEquipment$ElectricSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElectricEquipment$ElectricSource_ = $IElectricEquipment$ElectricSource$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$IEFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$IEFluids$FluidEntry, $IEFluids$FluidEntry$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEFluids$FluidEntry"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $IEFluid extends $FlowingFluid {
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $IEFluids$FluidEntry$Type)

public static "makeFluid"(arg0: $Function$Type<($IEFluids$FluidEntry$Type), (any)>, arg1: $IEFluids$FluidEntry$Type): $IEFluid
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "isSource"(arg0: $FluidState$Type): boolean
public "getBucket"(): $Item
public "isSame"(arg0: $Fluid$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
public "getFluidType"(): $FluidType
public "m_6760_"(arg0: $Level$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public static "createBuilder"(arg0: integer, arg1: integer): $Consumer<($FluidType$Properties)>
get "bucket"(): $Item
get "fluidType"(): $FluidType
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluid$Type = ($IEFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEFluid_ = $IEFluid$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/$NoContainersRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $NoContainersRecipe<T extends $CraftingRecipe> implements $CraftingRecipe {
readonly "baseRecipe": T

constructor(arg0: T)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "showNotification"(): boolean
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
get "id"(): $ResourceLocation
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "mod"(): string
get "orCreateId"(): $ResourceLocation
set "group"(value: string)
get "schema"(): $RecipeSchema
get "group"(): string
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoContainersRecipe$Type<T> = ($NoContainersRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoContainersRecipe_<T> = $NoContainersRecipe$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$PostTransformerBlockEntity" {
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$AbstractTransformerBlockEntity, $AbstractTransformerBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$AbstractTransformerBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PostTransformerBlockEntity extends $AbstractTransformerBlockEntity implements $IEBlockInterfaces$IBlockBounds {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getFacingLimitation"(): $PlacementLimitation
public "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "facingLimitation"(): $PlacementLimitation
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostTransformerBlockEntity$Type = ($PostTransformerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostTransformerBlockEntity_ = $PostTransformerBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/energy/$ThermoelectricSource" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FastEither, $FastEither$Type} from "packages/blusunrize/immersiveengineering/api/utils/$FastEither"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"

export class $ThermoelectricSource extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($ThermoelectricSource)>)>
static readonly "ALL_SOURCES": $CachedRecipeList<($ThermoelectricSource)>
readonly "blocks": $FastEither<($TagKey<($Block)>), ($List<($Block)>)>
readonly "temperature": integer
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Block$Type)>, arg2: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $TagKey$Type<($Block$Type)>, arg2: integer)

public "matches"(arg0: $Block$Type): boolean
public static "getSource"(arg0: $Level$Type, arg1: $Block$Type, arg2: $ThermoelectricSource$Type): $ThermoelectricSource
public "getExample"(): $Block
public "getMatchingBlocks"(): $List<($Block)>
public static "getThermalValuesSorted"(arg0: $Level$Type, arg1: boolean): $SortedMap<($Component), (integer)>
public "getTemperature"(): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "example"(): $Block
get "matchingBlocks"(): $List<($Block)>
get "temperature"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoelectricSource$Type = ($ThermoelectricSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermoelectricSource_ = $ThermoelectricSource$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$CompiledChunkAccess" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $CompiledChunkAccess {

 "getHasBlocks"(): $Set<($RenderType)>

(): $Set<($RenderType)>
}

export namespace $CompiledChunkAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompiledChunkAccess$Type = ($CompiledChunkAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompiledChunkAccess_ = $CompiledChunkAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TeslaCoilBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$TeslaCoilBlockEntity, $TeslaCoilBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$TeslaCoilBlockEntity"

export class $TeslaCoilBlock extends $IEEntityBlock<($TeslaCoilBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlock$Type = ($TeslaCoilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeslaCoilBlock_ = $TeslaCoilBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/utils/$ComputerControlState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ComputerControlState {

constructor()

public "clear"(): void
public "isEnabled"(): boolean
public "addReference"(): void
public "removeReference"(): void
public "isAttached"(): boolean
public "setOneRef"(): void
public "setEnabled"(arg0: boolean): void
get "enabled"(): boolean
get "attached"(): boolean
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerControlState$Type = ($ComputerControlState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerControlState_ = $ComputerControlState$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorModelRender" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IConveyorBelt, $IConveyorBelt$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorBelt"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicConveyorCacheData, $BasicConveyorCacheData$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$BasicConveyorCacheData"
import {$ConveyorWall, $ConveyorWall$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorWall"
import {$IConveyorModelRender$RenderContext, $IConveyorModelRender$RenderContext$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorModelRender$RenderContext"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IConveyorModelRender<T extends $IConveyorBelt> {

 "modifyBaseRotationMatrix"(arg0: $Transformation$Type): $Transformation
 "getColouredStripesTexture"(): $ResourceLocation
 "getInactiveTexture"(): $ResourceLocation
 "getModelCacheKey"(arg0: $IConveyorModelRender$RenderContext$Type<(T)>): any
 "shouldRenderWall"(arg0: $Direction$Type, arg1: $ConveyorWall$Type, arg2: $IConveyorModelRender$RenderContext$Type<(T)>): boolean
 "updateCachedModels"(arg0: $ModelBaker$Type, arg1: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>): void
 "getActiveTexture"(): $ResourceLocation
 "modifyQuads"(arg0: $List$Type<($BakedQuad$Type)>, arg1: $IConveyorModelRender$RenderContext$Type<(T)>, arg2: $RenderType$Type): $List<($BakedQuad)>
}

export namespace $IConveyorModelRender {
function getDefaultData<T>(arg0: $IConveyorModelRender$Type<(T)>, arg1: $IConveyorModelRender$RenderContext$Type<(T)>): $BasicConveyorCacheData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorModelRender$Type<T> = ($IConveyorModelRender<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConveyorModelRender_<T> = $IConveyorModelRender$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$ShaderBannerWallBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ShaderBannerBlock, $ShaderBannerBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/cloth/$ShaderBannerBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ShaderBannerWallBlock extends $ShaderBannerBlock {
static readonly "FACING": $Property<($Direction)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerWallBlock$Type = ($ShaderBannerWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderBannerWallBlock_ = $ShaderBannerWallBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/registry/$MultiblockPartBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MultiblockRegistration, $MultiblockRegistration$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MultiblockPartBlock<State extends $IMultiblockState> extends $Block implements $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $MultiblockRegistration$Type<(State)>)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPartBlock$Type<State> = ($MultiblockPartBlock<(State)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPartBlock_<State> = $MultiblockPartBlock$Type<(State)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$FermenterRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$FermenterRecipe, $FermenterRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$FermenterRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FermenterRecipeSerializer extends $IERecipeSerializer<($FermenterRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FermenterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $FermenterRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $FermenterRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermenterRecipeSerializer$Type = ($FermenterRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermenterRecipeSerializer_ = $FermenterRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$IEFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$IEFluid, $IEFluid$Type} from "packages/blusunrize/immersiveengineering/common/fluids/$IEFluid"
import {$IEFluids$FluidEntry, $IEFluids$FluidEntry$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEFluids$FluidEntry"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $IEFluid$Flowing extends $IEFluid {
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $IEFluids$FluidEntry$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluid$Flowing$Type = ($IEFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEFluid$Flowing_ = $IEFluid$Flowing$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$FontResourceManagerAccess" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $FontResourceManagerAccess {

 "getFontSets"(): $Map<($ResourceLocation), ($FontSet)>

(): $Map<($ResourceLocation), ($FontSet)>
}

export namespace $FontResourceManagerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontResourceManagerAccess$Type = ($FontResourceManagerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontResourceManagerAccess_ = $FontResourceManagerAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FurnaceHeaterBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FurnaceHeaterBlockEntity, $FurnaceHeaterBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$FurnaceHeaterBlockEntity"

export class $FurnaceHeaterBlock extends $IEEntityBlock<($FurnaceHeaterBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceHeaterBlock$Type = ($FurnaceHeaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnaceHeaterBlock_ = $FurnaceHeaterBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$ICommonMultiblockContext" {
import {$CapabilityReference, $CapabilityReference$Type} from "packages/blusunrize/immersiveengineering/api/utils/$CapabilityReference"
import {$MultiblockFace, $MultiblockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockFace"
import {$RelativeBlockFace, $RelativeBlockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$RelativeBlockFace"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICommonMultiblockContext {

 "getCapabilityAt"<T>(arg0: $Capability$Type<(T)>, arg1: $MultiblockFace$Type): $CapabilityReference<(T)>
 "getCapabilityAt"<T>(arg0: $Capability$Type<(T)>, arg1: $BlockPos$Type, arg2: $RelativeBlockFace$Type): $CapabilityReference<(T)>

(arg0: $Capability$Type<(T)>, arg1: $MultiblockFace$Type): $CapabilityReference<(T)>
}

export namespace $ICommonMultiblockContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommonMultiblockContext$Type = ($ICommonMultiblockContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICommonMultiblockContext_ = $ICommonMultiblockContext$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$ClientMultiblocks$MultiblockManualData" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $ClientMultiblocks$MultiblockManualData {

 "getTotalMaterials"(): $NonNullList<($ItemStack)>
 "canRenderFormedStructure"(): boolean
 "renderFormedStructure"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type): void
}

export namespace $ClientMultiblocks$MultiblockManualData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientMultiblocks$MultiblockManualData$Type = ($ClientMultiblocks$MultiblockManualData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientMultiblocks$MultiblockManualData_ = $ClientMultiblocks$MultiblockManualData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$ItemBatcherBlockEntity$BatchMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemBatcherBlockEntity$BatchMode extends $Enum<($ItemBatcherBlockEntity$BatchMode)> {
static readonly "SINGLE": $ItemBatcherBlockEntity$BatchMode
static readonly "ALL": $ItemBatcherBlockEntity$BatchMode


public static "values"(): ($ItemBatcherBlockEntity$BatchMode)[]
public static "valueOf"(arg0: string): $ItemBatcherBlockEntity$BatchMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBatcherBlockEntity$BatchMode$Type = (("single") | ("all")) | ($ItemBatcherBlockEntity$BatchMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBatcherBlockEntity$BatchMode_ = $ItemBatcherBlockEntity$BatchMode$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/stone/$PartialConcreteBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PartialConcreteBlock extends $IEBaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: integer)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "makeProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialConcreteBlock$Type = ($PartialConcreteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartialConcreteBlock_ = $PartialConcreteBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRenderFunction$ClocheRenderReference" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ClocheRenderFunction$ClocheRenderReference {

constructor(arg0: string, arg1: $Block$Type)

public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $ClocheRenderFunction$ClocheRenderReference
public "getType"(): string
public "getBlock"(): $Block
public "serialize"(): $JsonObject
public static "deserialize"(arg0: $JsonObject$Type): $ClocheRenderFunction$ClocheRenderReference
get "type"(): string
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRenderFunction$ClocheRenderReference$Type = ($ClocheRenderFunction$ClocheRenderReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheRenderFunction$ClocheRenderReference_ = $ClocheRenderFunction$ClocheRenderReference$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ToolboxItem" {
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$InternalStorageItem, $InternalStorageItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$InternalStorageItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ToolboxItem extends $InternalStorageItem {
static readonly "SLOT_COUNT": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getSlotCount"(): integer
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolboxItem$Type = ($ToolboxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolboxItem_ = $ToolboxItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FloodlightBlock" {
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FloodlightBlockEntity, $FloodlightBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$FloodlightBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $FloodlightBlock extends $ConnectorBlock<($FloodlightBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloodlightBlock$Type = ($FloodlightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloodlightBlock_ = $FloodlightBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractFluidAwareRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$AbstractFluidAwareRecipe$IMatchLocation, $AbstractFluidAwareRecipe$IMatchLocation$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractFluidAwareRecipe$IMatchLocation"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AbstractFluidAwareRecipe<MatchLocation extends $AbstractFluidAwareRecipe$IMatchLocation> implements $CraftingRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $NonNullList$Type<($Ingredient$Type)>, arg3: $ItemStack$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "mod"(): string
get "orCreateId"(): $ResourceLocation
set "group"(value: string)
get "schema"(): $RecipeSchema
get "group"(): string
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFluidAwareRecipe$Type<MatchLocation> = ($AbstractFluidAwareRecipe<(MatchLocation)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFluidAwareRecipe_<MatchLocation> = $AbstractFluidAwareRecipe$Type<(MatchLocation)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/util/inventory/$IDropInventory" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDropInventory {

 "getDroppedItems"(): $Stream<($ItemStack)>

(): $Stream<($ItemStack)>
}

export namespace $IDropInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropInventory$Type = ($IDropInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDropInventory_ = $IDropInventory$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigFloat" {
import {$IConfigurableTool$ToolConfig, $IConfigurableTool$ToolConfig$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig"

export class $IConfigurableTool$ToolConfig$ToolConfigFloat extends $IConfigurableTool$ToolConfig {
 "value": float
 "x": integer
 "y": integer
 "name": string

constructor(arg0: string, arg1: integer, arg2: integer, arg3: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$ToolConfig$ToolConfigFloat$Type = ($IConfigurableTool$ToolConfig$ToolConfigFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableTool$ToolConfig$ToolConfigFloat_ = $IConfigurableTool$ToolConfig$ToolConfigFloat$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/excavator/$MineralWorldInfo" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MineralVein, $MineralVein$Type} from "packages/blusunrize/immersiveengineering/api/excavator/$MineralVein"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $MineralWorldInfo {

constructor(arg0: $List$Type<($Pair$Type<($MineralVein$Type), (integer)>)>)

public "getTotalWeight"(): integer
public "getAllVeins"(): $List<($Pair<($MineralVein), (integer)>)>
public "getMineralVein"(arg0: $Random$Type): $MineralVein
get "totalWeight"(): integer
get "allVeins"(): $List<($Pair<($MineralVein), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralWorldInfo$Type = ($MineralWorldInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineralWorldInfo_ = $MineralWorldInfo$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool" {
import {$IConfigurableTool$ToolConfig$ToolConfigBoolean, $IConfigurableTool$ToolConfig$ToolConfigBoolean$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigBoolean"
import {$IConfigurableTool$ToolConfig$ToolConfigFloat, $IConfigurableTool$ToolConfig$ToolConfigFloat$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigFloat"
import {$IConfigurableTool$ToolConfig, $IConfigurableTool$ToolConfig$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IConfigurableTool {

 "getBooleanOptions"(arg0: $ItemStack$Type): ($IConfigurableTool$ToolConfig$ToolConfigBoolean)[]
 "getFloatOptions"(arg0: $ItemStack$Type): ($IConfigurableTool$ToolConfig$ToolConfigFloat)[]
 "fomatConfigName"(arg0: $ItemStack$Type, arg1: $IConfigurableTool$ToolConfig$Type): string
 "applyConfigOption"(arg0: $ItemStack$Type, arg1: string, arg2: any): void
 "fomatConfigDescription"(arg0: $ItemStack$Type, arg1: $IConfigurableTool$ToolConfig$Type): string
 "canConfigure"(arg0: $ItemStack$Type): boolean
}

export namespace $IConfigurableTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$Type = ($IConfigurableTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableTool_ = $IConfigurableTool$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/$IEEnums$IOSideConfig" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $IEEnums$IOSideConfig extends $Enum<($IEEnums$IOSideConfig)> implements $StringRepresentable {
static readonly "NONE": $IEEnums$IOSideConfig
static readonly "INPUT": $IEEnums$IOSideConfig
static readonly "OUTPUT": $IEEnums$IOSideConfig
static readonly "VALUES": ($IEEnums$IOSideConfig)[]


public static "values"(): ($IEEnums$IOSideConfig)[]
public static "valueOf"(arg0: string): $IEEnums$IOSideConfig
public static "next"(arg0: $IEEnums$IOSideConfig$Type): $IEEnums$IOSideConfig
public "getTextComponent"(): $Component
public "getTextureName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "textComponent"(): $Component
get "textureName"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEEnums$IOSideConfig$Type = (("output") | ("input") | ("none")) | ($IEEnums$IOSideConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEEnums$IOSideConfig_ = $IEEnums$IOSideConfig$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$EngineersBlueprintItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BlueprintCraftingRecipe, $BlueprintCraftingRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$BlueprintCraftingRecipe"

export class $EngineersBlueprintItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getDescriptionId"(arg0: $ItemStack$Type): string
public static "getCategory"(arg0: $ItemStack$Type): string
public static "getRecipes"(arg0: $Level$Type, arg1: $ItemStack$Type): ($BlueprintCraftingRecipe)[]
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineersBlueprintItem$Type = ($EngineersBlueprintItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineersBlueprintItem_ = $EngineersBlueprintItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$AnyFacingEntityBlock" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $AnyFacingEntityBlock<T extends $BlockEntity> extends $IEEntityBlock<(T)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyFacingEntityBlock$Type<T> = ($AnyFacingEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnyFacingEntityBlock_<T> = $AnyFacingEntityBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ChuteBlock" {
import {$ChuteBlockEntity, $ChuteBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$ChuteBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $ChuteBlock extends $IEEntityBlock<($ChuteBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChuteBlock$Type = ($ChuteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChuteBlock_ = $ChuteBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$IConnectionTemplate$TemplateConnection" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"

export class $IConnectionTemplate$TemplateConnection extends $Record {

constructor(arg0: $CompoundTag$Type)
constructor(endA: $ConnectionPoint$Type, endB: $ConnectionPoint$Type, type: $WireType$Type)

public "type"(): $WireType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "endB"(): $ConnectionPoint
public "endA"(): $ConnectionPoint
public "toNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectionTemplate$TemplateConnection$Type = ($IConnectionTemplate$TemplateConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectionTemplate$TemplateConnection_ = $IConnectionTemplate$TemplateConnection$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$ItemBatcherBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IEBlockInterfaces$IInteractionObjectIE, $IEBlockInterfaces$IInteractionObjectIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IInteractionObjectIE"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IIEInventory, $IIEInventory$Type} from "packages/blusunrize/immersiveengineering/common/util/inventory/$IIEInventory"
import {$IEMenuTypes$ArgContainer, $IEMenuTypes$ArgContainer$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEMenuTypes$ArgContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ItemBatcherBlockEntity$BatchMode, $ItemBatcherBlockEntity$BatchMode$Type} from "packages/blusunrize/immersiveengineering/common/blocks/wooden/$ItemBatcherBlockEntity$BatchMode"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $ItemBatcherBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IIEInventory, $IEBlockInterfaces$IInteractionObjectIE<($ItemBatcherBlockEntity)>, $IEBlockInterfaces$IStateBasedDirectional {
static readonly "NUM_SLOTS": integer
 "batchMode": $ItemBatcherBlockEntity$BatchMode
 "redstoneColors": $NonNullList<($DyeColor)>

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getFilters"(): $NonNullList<($ItemStack)>
public "getContainerType"(): $IEMenuTypes$ArgContainer<($ItemBatcherBlockEntity), (any)>
public "receiveMessageFromClient"(arg0: $CompoundTag$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "canUseGui"(arg0: $Player$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "isStackValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "doGraphicalUpdates"(): void
public "tickServer"(): void
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "isValid"(): boolean
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
get "filters"(): $NonNullList<($ItemStack)>
get "containerType"(): $IEMenuTypes$ArgContainer<($ItemBatcherBlockEntity), (any)>
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "inventory"(): $NonNullList<($ItemStack)>
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
get "valid"(): boolean
get "displayName"(): $Component
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBatcherBlockEntity$Type = ($ItemBatcherBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBatcherBlockEntity_ = $ItemBatcherBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/$IPostBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPostBlock {

 "canConnectTransformer"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IPostBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPostBlock$Type = ($IPostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPostBlock_ = $IPostBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$FaradaySuitItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IElectricEquipment$ElectricSource, $IElectricEquipment$ElectricSource$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IElectricEquipment$ElectricSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IElectricEquipment, $IElectricEquipment$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IElectricEquipment"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FaradaySuitItem extends $ArmorItem implements $IElectricEquipment {
static "mat": $ArmorMaterial
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type)

public "onStrike"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $LivingEntity$Type, arg3: $Map$Type<(string), (any)>, arg4: $DamageSource$Type, arg5: $IElectricEquipment$ElectricSource$Type): void
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "applyToEntity"(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: $IElectricEquipment$ElectricSource$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaradaySuitItem$Type = ($FaradaySuitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaradaySuitItem_ = $FaradaySuitItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ImmersiveConnectableBlockEntity extends $IEBaseBlockEntity implements $IImmersiveConnectable {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getPosition"(): $BlockPos
public "onLoad"(): void
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getConnectionMaster"(arg0: $WireType$Type, arg1: $TargetingInfo$Type): $BlockPos
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setRemovedIE"(): void
public "canConnect"(): boolean
public "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
public "removeCable"(arg0: $Connection$Type, arg1: $ConnectionPoint$Type): void
public "setLevel"(arg0: $Level$Type): void
public "onChunkUnloaded"(): void
public "isProxy"(): boolean
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "getInternalConnections"(): $Iterable<(any)>
public "getIgnored"(arg0: $IImmersiveConnectable$Type): $Set<($BlockPos)>
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "getRequestedHandlers"(): $Collection<($ResourceLocation)>
get "position"(): $BlockPos
get "connectionPoints"(): $Collection<($ConnectionPoint)>
set "level"(value: $Level$Type)
get "proxy"(): boolean
get "internalConnections"(): $Iterable<(any)>
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmersiveConnectableBlockEntity$Type = ($ImmersiveConnectableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmersiveConnectableBlockEntity_ = $ImmersiveConnectableBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $IESerializableRecipe implements $Recipe<($Container)> {
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>


public static "of"(arg0: $ItemStack$Type): $Lazy<($ItemStack)>
public "getId"(): $ResourceLocation
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "setGroup"(group: string): void
public "getSchema"(): $RecipeSchema
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getGroup"(): string
public "getType"(): $ResourceLocation
get "id"(): $ResourceLocation
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "mod"(): string
get "orCreateId"(): $ResourceLocation
set "group"(value: string)
get "schema"(): $RecipeSchema
get "group"(): string
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESerializableRecipe$Type = ($IESerializableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IESerializableRecipe_ = $IESerializableRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRenderFunction$ClocheRenderFunctionFactory" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ClocheRenderFunction, $ClocheRenderFunction$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$ClocheRenderFunction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $ClocheRenderFunction$ClocheRenderFunctionFactory extends $Function<($Block), ($ClocheRenderFunction)> {

 "apply"(arg0: $Block$Type): $ClocheRenderFunction
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($ClocheRenderFunction)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($Block), (V)>

(arg0: $Block$Type): $ClocheRenderFunction
}

export namespace $ClocheRenderFunction$ClocheRenderFunctionFactory {
function identity<T>(): $Function<($Block), ($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRenderFunction$ClocheRenderFunctionFactory$Type = ($ClocheRenderFunction$ClocheRenderFunctionFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheRenderFunction$ClocheRenderFunctionFactory_ = $ClocheRenderFunction$ClocheRenderFunctionFactory$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$MetalLadderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$MetalLadderBlock$CoverType, $MetalLadderBlock$CoverType$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$MetalLadderBlock$CoverType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$LadderBlock, $LadderBlock$Type} from "packages/net/minecraft/world/level/block/$LadderBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MetalLadderBlock extends $LadderBlock {
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $MetalLadderBlock$CoverType$Type, arg1: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalLadderBlock$Type = ($MetalLadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalLadderBlock_ = $MetalLadderBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$CrusherRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$CrusherRecipe, $CrusherRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$CrusherRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CrusherRecipeSerializer extends $IERecipeSerializer<($CrusherRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CrusherRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CrusherRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CrusherRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherRecipeSerializer$Type = ($CrusherRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrusherRecipeSerializer_ = $CrusherRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ElectricLanternBlock" {
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$ElectricLanternBlockEntity, $ElectricLanternBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$ElectricLanternBlockEntity"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $ElectricLanternBlock extends $ConnectorBlock<($ElectricLanternBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricLanternBlock$Type = ($ElectricLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricLanternBlock_ = $ElectricLanternBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$WindmillBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBlockInterfaces$IPlacementInteraction, $IEBlockInterfaces$IPlacementInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlacementInteraction"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IEClientTickableBE, $IEClientTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IPlayerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $WindmillBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEClientTickableBE, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IPlacementInteraction, $IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IBlockBounds {
 "rotation": float
 "turnSpeed": float
 "sails": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "tickClient"(): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "onBEPlaced"(arg0: $BlockPlaceContext$Type): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "tickServer"(): void
public "getRenderBoundingBox"(): $AABB
public "getActualTurnSpeed"(): double
public "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
public "computeTurnSpeed"(): float
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "renderBoundingBox"(): $AABB
get "actualTurnSpeed"(): double
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBlockEntity$Type = ($WindmillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindmillBlockEntity_ = $WindmillBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$InternalStorageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InternalStorageItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getSlotCount"(): integer
public "getContainedItems"(arg0: $ItemStack$Type): $NonNullList<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "setContainedItems"(arg0: $ItemStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): void
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalStorageItem$Type = ($InternalStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalStorageItem_ = $InternalStorageItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$WrappingRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $WrappingRecipeSerializer<WrappingType extends $Recipe<(any)>, WrappedType extends $Recipe<(any)>> implements $RecipeSerializer<(WrappingType)> {

constructor(arg0: $RecipeSerializer$Type<(WrappedType)>, arg1: $Function$Type<(WrappingType), (WrappedType)>, arg2: $Function$Type<(WrappedType), (WrappingType)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): WrappingType
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): WrappingType
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: WrappingType): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): WrappingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappingRecipeSerializer$Type<WrappingType, WrappedType> = ($WrappingRecipeSerializer<(WrappingType), (WrappedType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappingRecipeSerializer_<WrappingType, WrappedType> = $WrappingRecipeSerializer$Type<(WrappingType), (WrappedType)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$SawmillRecipe" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"

export class $SawmillRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($SawmillRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($SawmillRecipe)>
readonly "input": $Ingredient
readonly "stripped": $Lazy<($ItemStack)>
readonly "secondaryStripping": $NonNullList<($Lazy<($ItemStack)>)>
readonly "output": $Lazy<($ItemStack)>
readonly "secondaryOutputs": $NonNullList<($Lazy<($ItemStack)>)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Lazy$Type<($ItemStack$Type)>, arg2: $Lazy$Type<($ItemStack$Type)>, arg3: $Ingredient$Type, arg4: integer)

public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): $SawmillRecipe
public "addToSecondaryStripping"(arg0: $Lazy$Type<($ItemStack$Type)>): $SawmillRecipe
public "addToSecondaryOutput"(arg0: $Lazy$Type<($ItemStack$Type)>): $SawmillRecipe
public "getActualItemOutputs"(): $NonNullList<($ItemStack)>
public "getMultipleProcessTicks"(): integer
get "actualItemOutputs"(): $NonNullList<($ItemStack)>
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipe$Type = ($SawmillRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillRecipe_ = $SawmillRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ChemthrowerItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IEItemInterfaces$IScrollwheel, $IEItemInterfaces$IScrollwheel$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IScrollwheel"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeableToolItem, $UpgradeableToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEItemInterfaces$IAdvancedFluidItem, $IEItemInterfaces$IAdvancedFluidItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IAdvancedFluidItem"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChemthrowerItem extends $UpgradeableToolItem implements $IEItemInterfaces$IAdvancedFluidItem, $IEItemInterfaces$IScrollwheel {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getCapacity"(arg0: $ItemStack$Type, arg1: integer): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "getSlotCount"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "onScrollwheel"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean): void
public static "isIgniteEnable"(arg0: $ItemStack$Type): boolean
public static "setIgniteEnable"(arg0: $ItemStack$Type, arg1: boolean): void
public "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "finishUpgradeRecalculation"(arg0: $ItemStack$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "canModify"(arg0: $ItemStack$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
public "allowFluid"(arg0: $ItemStack$Type, arg1: $FluidStack$Type): boolean
public "getFluid"(arg0: $ItemStack$Type): $FluidStack
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemthrowerItem$Type = ($ChemthrowerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemthrowerItem_ = $ChemthrowerItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistrationBuilder$RegistrationMethod" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"

export interface $MultiblockRegistrationBuilder$RegistrationMethod<Base> {

 "register"<T extends Base>(arg0: string, arg1: $Supplier$Type<(T)>): $Supplier<(T)>

(arg0: string, arg1: $Supplier$Type<(T)>): $Supplier<(T)>
}

export namespace $MultiblockRegistrationBuilder$RegistrationMethod {
function fromDeferred<B>(arg0: $DeferredRegister$Type<(B)>): $MultiblockRegistrationBuilder$RegistrationMethod<(B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistrationBuilder$RegistrationMethod$Type<Base> = ($MultiblockRegistrationBuilder$RegistrationMethod<(Base)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockRegistrationBuilder$RegistrationMethod_<Base> = $MultiblockRegistrationBuilder$RegistrationMethod$Type<(Base)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FloodlightBlockEntity" {
import {$IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$IScrewdriverInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBlockInterfaces$IActiveState, $IEBlockInterfaces$IActiveState$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IActiveState"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEBlockInterfaces$IAdvancedDirectionalBE, $IEBlockInterfaces$IAdvancedDirectionalBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IAdvancedDirectionalBE"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnergyTransferHandler$EnergyConnector, $EnergyTransferHandler$EnergyConnector$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$EnergyTransferHandler$EnergyConnector"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ComputerControlState, $ComputerControlState$Type} from "packages/blusunrize/immersiveengineering/api/utils/$ComputerControlState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ComputerControllable, $ComputerControllable$Type} from "packages/blusunrize/immersiveengineering/common/util/compat/computers/generic/$ComputerControllable"
import {$IEBlockInterfaces$ISpawnInterdiction, $IEBlockInterfaces$ISpawnInterdiction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISpawnInterdiction"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"

export class $FloodlightBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEServerTickableBE, $IEBlockInterfaces$IAdvancedDirectionalBE, $IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$ISpawnInterdiction, $IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IActiveState, $EnergyTransferHandler$EnergyConnector, $IEBlockInterfaces$IStateBasedDirectional, $ComputerControllable {
 "energyStorage": integer
readonly "maximumStorage": integer
 "redstoneControlInverted": boolean
 "facing": $Direction
 "rotY": float
 "rotX": float
 "fakeLights": $List<($BlockPos)>
 "lightsToBePlaced": $List<($BlockPos)>
 "lightsToBeRemoved": $List<($BlockPos)>
readonly "computerControl": $ComputerControlState
 "turnCooldown": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onLoad"(): void
public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "onDirectionalPlacement"(arg0: $Direction$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setRemovedIE"(): void
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): $InteractionResult
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getInterdictionRangeSquared"(): double
public "placeLightAlongVector"(arg0: $Vec3$Type, arg1: integer, arg2: $ArrayList$Type<($BlockPos$Type)>): void
public "getAllComputerControlStates"(): $Stream<($ComputerControlState)>
public "tickServer"(): void
public "onChunkUnloaded"(): void
public "isSource"(arg0: $ConnectionPoint$Type): boolean
public "updateFakeLights"(arg0: boolean, arg1: boolean): void
public "turnY"(arg0: boolean, arg1: boolean): void
public "canComputerTurn"(): boolean
public "turnX"(arg0: boolean, arg1: boolean): void
public "getRequestedEnergy"(): integer
public "isSink"(arg0: $ConnectionPoint$Type): boolean
public "insertEnergy"(arg0: integer): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "setActive"(arg0: boolean): void
public "getIsActive"(): boolean
public "onEnergyPassedThrough"(arg0: double): void
public "extractEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "interdictionRangeSquared"(): double
get "allComputerControlStates"(): $Stream<($ComputerControlState)>
get "requestedEnergy"(): integer
set "active"(value: boolean)
get "isActive"(): boolean
get "availableEnergy"(): integer
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloodlightBlockEntity$Type = ($FloodlightBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloodlightBlockEntity_ = $FloodlightBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$IWireCoil" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"

export interface $IWireCoil {

 "getWireType"(arg0: $ItemStack$Type): $WireType
 "canConnectCable"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type): boolean
 "getMaxLength"(arg0: $ItemStack$Type): integer
 "consumeWire"(arg0: $ItemStack$Type, arg1: integer): void

(arg0: $ItemStack$Type): $WireType
}

export namespace $IWireCoil {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireCoil$Type = ($IWireCoil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWireCoil_ = $IWireCoil$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISpawnInterdiction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$ISpawnInterdiction {

 "getInterdictionRangeSquared"(): double

(): double
}

export namespace $IEBlockInterfaces$ISpawnInterdiction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ISpawnInterdiction$Type = ($IEBlockInterfaces$ISpawnInterdiction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$ISpawnInterdiction_ = $IEBlockInterfaces$ISpawnInterdiction$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$WindmillBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$WindmillBlockEntity, $WindmillBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/wooden/$WindmillBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $WindmillBlock extends $IEEntityBlock<($WindmillBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBlock$Type = ($WindmillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindmillBlock_ = $WindmillBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/$EnumMetals" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EnumMetals extends $Enum<($EnumMetals)> {
static readonly "COPPER": $EnumMetals
static readonly "ALUMINUM": $EnumMetals
static readonly "LEAD": $EnumMetals
static readonly "SILVER": $EnumMetals
static readonly "NICKEL": $EnumMetals
static readonly "URANIUM": $EnumMetals
static readonly "CONSTANTAN": $EnumMetals
static readonly "ELECTRUM": $EnumMetals
static readonly "STEEL": $EnumMetals
static readonly "IRON": $EnumMetals
static readonly "GOLD": $EnumMetals
readonly "smeltingXP": float


public static "values"(): ($EnumMetals)[]
public static "valueOf"(arg0: string): $EnumMetals
public "tagName"(): string
public "isAlloy"(): boolean
public "shouldAddOre"(): boolean
public "shouldAddNugget"(): boolean
public "isVanillaMetal"(): boolean
get "alloy"(): boolean
get "vanillaMetal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumMetals$Type = (("gold") | ("nickel") | ("electrum") | ("steel") | ("copper") | ("iron") | ("silver") | ("aluminum") | ("uranium") | ("constantan") | ("lead")) | ($EnumMetals);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumMetals_ = $EnumMetals$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$TurnAndCopyRecipe$Rotation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TurnAndCopyRecipe$Rotation extends $Enum<($TurnAndCopyRecipe$Rotation)> {
static readonly "NONE": $TurnAndCopyRecipe$Rotation
static readonly "QUARTER": $TurnAndCopyRecipe$Rotation
static readonly "EIGHTH": $TurnAndCopyRecipe$Rotation


public static "values"(): ($TurnAndCopyRecipe$Rotation)[]
public static "valueOf"(arg0: string): $TurnAndCopyRecipe$Rotation
public "getIndex"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public "isValid"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipe$Rotation$Type = (("eighth") | ("none") | ("quarter")) | ($TurnAndCopyRecipe$Rotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurnAndCopyRecipe$Rotation_ = $TurnAndCopyRecipe$Rotation$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$RockcutterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SawbladeItem, $SawbladeItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$SawbladeItem"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RockcutterItem extends $SawbladeItem {
static readonly "TEXTURE": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: float, arg2: float)

public "getToolActions"(): $Set<($ToolAction)>
public "modifyEnchants"(arg0: $Map$Type<($Enchantment$Type), (integer)>): void
public "canSawbladeFellTree"(): boolean
public "getSawbladeMaterials"(): $Predicate<($BlockState)>
get "toolActions"(): $Set<($ToolAction)>
get "sawbladeMaterials"(): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RockcutterItem$Type = ($RockcutterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RockcutterItem_ = $RockcutterItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ConveyorBeltBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$IConveyorBelt, $IConveyorBelt$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorBelt"
import {$ConveyorHandler$IConveyorBlockEntity, $ConveyorHandler$IConveyorBlockEntity$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$IConveyorBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ICollisionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ISelectionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISelectionBounds"
import {$IConveyorType, $IConveyorType$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$NewRegistryEvent, $NewRegistryEvent$Type} from "packages/net/minecraftforge/registries/$NewRegistryEvent"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IPlayerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConveyorBeltBlockEntity<T extends $IConveyorBelt> extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IPlayerInteraction, $ConveyorHandler$IConveyorBlockEntity<(T)>, $IEServerTickableBE {
static readonly "BE_TYPES": $Map<($IConveyorType<(any)>), ($Supplier<($BlockEntityType<(any)>)>)>

constructor(arg0: $IConveyorType$Type<(T)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "registerConveyorBEsAndBlocks"(arg0: $NewRegistryEvent$Type): void
public "getConveyorInstance"(): T
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "isRSPowered"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "getCapability"<T2>(arg0: $Capability$Type<(T2)>, arg1: $Direction$Type): $LazyOptional<(T2)>
public "onEntityCollision"(arg0: $Level$Type, arg1: $Entity$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "tickServer"(): void
public "getFacing"(): $Direction
public "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
public "setFacing"(arg0: $Direction$Type): void
public "sigOutputDirections"(): ($Direction)[]
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "canTickAny"(): boolean
get "conveyorInstance"(): T
get "rSPowered"(): boolean
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "facing"(): $Direction
set "facing"(value: $Direction$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBeltBlockEntity$Type<T> = ($ConveyorBeltBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorBeltBlockEntity_<T> = $ConveyorBeltBlockEntity$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$StripCurtainBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$StripCurtainBlockEntity, $StripCurtainBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/cloth/$StripCurtainBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StripCurtainBlock extends $IEEntityBlock<($StripCurtainBlockEntity)> {
static "CEILING_ATTACHED": $BooleanProperty
static "FACING": $EnumProperty<($Direction)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StripCurtainBlock$Type = ($StripCurtainBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StripCurtainBlock_ = $StripCurtainBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$CushionBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CushionBlock extends $IEBaseBlock {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CushionBlock$Type = ($CushionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CushionBlock_ = $CushionBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IInteractionObjectIE" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IEMenuTypes$ArgContainer, $IEMenuTypes$ArgContainer$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEMenuTypes$ArgContainer"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IEBlockInterfaces$IInteractionObjectIE<T extends ($BlockEntity) & ($IEBlockInterfaces$IInteractionObjectIE<(T)>)> extends $MenuProvider {

 "isValid"(): boolean
 "getContainerType"(): $IEMenuTypes$ArgContainer<(any), (any)>
 "canUseGui"(arg0: $Player$Type): boolean
 "getGuiMaster"(): T
 "getDisplayName"(): $Component
 "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
}

export namespace $IEBlockInterfaces$IInteractionObjectIE {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IInteractionObjectIE$Type<T> = ($IEBlockInterfaces$IInteractionObjectIE<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IInteractionObjectIE_<T> = $IEBlockInterfaces$IInteractionObjectIE$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$LogicCircuitOperator" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LogicCircuitHandler$LogicCircuitOperator extends $Enum<($LogicCircuitHandler$LogicCircuitOperator)> {
static readonly "SET": $LogicCircuitHandler$LogicCircuitOperator
static readonly "NOT": $LogicCircuitHandler$LogicCircuitOperator
static readonly "OR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "AND": $LogicCircuitHandler$LogicCircuitOperator
static readonly "XOR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "NOR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "NAND": $LogicCircuitHandler$LogicCircuitOperator
static readonly "XNOR": $LogicCircuitHandler$LogicCircuitOperator
static readonly "IMPLY": $LogicCircuitHandler$LogicCircuitOperator
static readonly "NIMPLY": $LogicCircuitHandler$LogicCircuitOperator
static readonly "TOTAL_MAX_INPUTS": integer


public static "values"(): ($LogicCircuitHandler$LogicCircuitOperator)[]
public static "valueOf"(arg0: string): $LogicCircuitHandler$LogicCircuitOperator
public "apply"(arg0: (boolean)[]): boolean
public "getDescription"(): $Component
public "getArgumentCount"(): integer
public "getComplexity"(): integer
public static "getByString"(arg0: string): $LogicCircuitHandler$LogicCircuitOperator
get "description"(): $Component
get "argumentCount"(): integer
get "complexity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitHandler$LogicCircuitOperator$Type = (("nor") | ("xnor") | ("not") | ("set") | ("or") | ("imply") | ("nimply") | ("and") | ("xor") | ("nand")) | ($LogicCircuitHandler$LogicCircuitOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicCircuitHandler$LogicCircuitOperator_ = $LogicCircuitHandler$LogicCircuitOperator$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistrationBuilder" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IMultiblockComponent$StateWrapper, $IMultiblockComponent$StateWrapper$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/component/$IMultiblockComponent$StateWrapper"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TemplateMultiblock, $TemplateMultiblock$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$TemplateMultiblock"
import {$IMultiblockComponent, $IMultiblockComponent$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/component/$IMultiblockComponent"
import {$MultiblockRegistrationBuilder$RegistrationMethod, $MultiblockRegistrationBuilder$RegistrationMethod$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistrationBuilder$RegistrationMethod"
import {$IMultiblockLogic, $IMultiblockLogic$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockLogic"
import {$MultiblockRegistration, $MultiblockRegistration$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"

export class $MultiblockRegistrationBuilder<State extends $IMultiblockState, Self extends $MultiblockRegistrationBuilder<(State), (Self)>> {
static readonly "DUMMY_BE_SUFFIX": string
static readonly "MASTER_BE_SUFFIX": string

constructor(arg0: $IMultiblockLogic$Type<(State)>, arg1: $ResourceLocation$Type)

public "component"(arg0: $IMultiblockComponent$Type<(State)>): Self
public "component"<CS>(arg0: $IMultiblockComponent$Type<(CS)>, arg1: $IMultiblockComponent$StateWrapper$Type<(State), (CS)>): Self
public "build"(): $MultiblockRegistration<(State)>
public "customBlock"(arg0: $DeferredRegister$Type<($Block$Type)>, arg1: $DeferredRegister$Type<($Item$Type)>, arg2: $Function$Type<($MultiblockRegistration$Type<(State)>), (any)>, arg3: $Function$Type<($Block$Type), ($Item$Type)>): Self
public "customBlock"(arg0: $MultiblockRegistrationBuilder$RegistrationMethod$Type<($Block$Type)>, arg1: $MultiblockRegistrationBuilder$RegistrationMethod$Type<($Item$Type)>, arg2: $Function$Type<($MultiblockRegistration$Type<(State)>), (any)>, arg3: $Function$Type<($Block$Type), ($Item$Type)>): Self
public "notMirrored"(): Self
public "defaultBEs"(arg0: $MultiblockRegistrationBuilder$RegistrationMethod$Type<($BlockEntityType$Type<(any)>)>): Self
public "defaultBEs"(arg0: $DeferredRegister$Type<($BlockEntityType$Type<(any)>)>): Self
public "withComparator"(): Self
public "redstoneAware"(): Self
public "postProcessesShape"(): Self
public "selfWrappingComponent"<CS, C extends ($IMultiblockComponent<(CS)>) & ($IMultiblockComponent$StateWrapper<(State), (CS)>)>(arg0: C): Self
public "structure"(arg0: $Supplier$Type<($TemplateMultiblock$Type)>): Self
public "defaultBlock"(arg0: $MultiblockRegistrationBuilder$RegistrationMethod$Type<($Block$Type)>, arg1: $MultiblockRegistrationBuilder$RegistrationMethod$Type<($Item$Type)>, arg2: $BlockBehaviour$Properties$Type): Self
public "defaultBlock"(arg0: $DeferredRegister$Type<($Block$Type)>, arg1: $DeferredRegister$Type<($Item$Type)>, arg2: $BlockBehaviour$Properties$Type): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistrationBuilder$Type<State, Self> = ($MultiblockRegistrationBuilder<(State), (Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockRegistrationBuilder_<State, Self> = $MultiblockRegistrationBuilder$Type<(State), (Self)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/component/$IMultiblockComponent$StateWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMultiblockComponent$StateWrapper<OuterState, OwnState> {

 "wrapState"(arg0: OuterState): OwnState

(arg0: OuterState): OwnState
}

export namespace $IMultiblockComponent$StateWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockComponent$StateWrapper$Type<OuterState, OwnState> = ($IMultiblockComponent$StateWrapper<(OuterState), (OwnState)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockComponent$StateWrapper_<OuterState, OwnState> = $IMultiblockComponent$StateWrapper$Type<(OuterState), (OwnState)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$PostBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$PostBlock$HorizontalOffset, $PostBlock$HorizontalOffset$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$PostBlock$HorizontalOffset"
import {$IPostBlock, $IPostBlock$Type} from "packages/blusunrize/immersiveengineering/api/$IPostBlock"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $PostBlock extends $IEBaseBlock implements $IPostBlock, $IModelOffsetProvider {
static readonly "POST_SLAVE": $IntegerProperty
static readonly "HORIZONTAL_OFFSET": $EnumProperty<($PostBlock$HorizontalOffset)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "canConnectTransformer"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "hasConnection"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlock$Type = ($PostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlock_ = $PostBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IAdvancedFluidItem" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEItemInterfaces$IAdvancedFluidItem {

 "getCapacity"(arg0: $ItemStack$Type, arg1: integer): integer
 "allowFluid"(arg0: $ItemStack$Type, arg1: $FluidStack$Type): boolean
 "getFluid"(arg0: $ItemStack$Type): $FluidStack

(arg0: $ItemStack$Type, arg1: integer): integer
}

export namespace $IEItemInterfaces$IAdvancedFluidItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IAdvancedFluidItem$Type = ($IEItemInterfaces$IAdvancedFluidItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEItemInterfaces$IAdvancedFluidItem_ = $IEItemInterfaces$IAdvancedFluidItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$TemplateAccess" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $TemplateAccess {

 "setSize"(arg0: $Vec3i$Type): void
 "getPalettes"(): $List<($StructureTemplate$Palette)>
}

export namespace $TemplateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateAccess$Type = ($TemplateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateAccess_ = $TemplateAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorType" {
import {$IConveyorModelRender, $IConveyorModelRender$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorModelRender"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IConveyorBelt, $IConveyorBelt$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorBelt"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IConveyorType<T extends $IConveyorBelt> {

 "getId"(): $ResourceLocation
 "canBeDyed"(): boolean
 "initClientData"(arg0: $Consumer$Type<($IConveyorModelRender$Type<(T)>)>): void
 "isTicking"(): boolean
 "acceptsCovers"(): boolean
 "makeInstance"(arg0: $BlockEntity$Type): T
}

export namespace $IConveyorType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorType$Type<T> = ($IConveyorType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConveyorType_<T> = $IConveyorType$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TagsUpdatedEvent, $TagsUpdatedEvent$Type} from "packages/net/minecraftforge/event/$TagsUpdatedEvent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IERecipeTypes$TypeWithClass, $IERecipeTypes$TypeWithClass$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeTypes$TypeWithClass"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipesUpdatedEvent, $RecipesUpdatedEvent$Type} from "packages/net/minecraftforge/client/event/$RecipesUpdatedEvent"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CachedRecipeList<R extends $Recipe<(any)>> {
static readonly "INVALID_RELOAD_COUNT": integer

constructor(arg0: $Supplier$Type<($RecipeType$Type<(R)>)>, arg1: $Class$Type<(R)>)
constructor(arg0: $IERecipeTypes$TypeWithClass$Type<(R)>)

public static "onTagsUpdated"(arg0: $TagsUpdatedEvent$Type): void
public static "getReloadCount"(): integer
public "getById"(arg0: $Level$Type, arg1: $ResourceLocation$Type): R
public "getRecipeNames"(arg0: $Level$Type): $Collection<($ResourceLocation)>
public "getRecipes"(arg0: $Level$Type): $Collection<(R)>
public static "onRecipeUpdatedClient"(arg0: $RecipesUpdatedEvent$Type): void
get "reloadCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipeList$Type<R> = ($CachedRecipeList<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedRecipeList_<R> = $CachedRecipeList$Type<(R)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/utils/$CapabilityReference" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DirectionalBlockPos, $DirectionalBlockPos$Type} from "packages/blusunrize/immersiveengineering/api/utils/$DirectionalBlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapabilityReference<T> {


public "get"(): T
public "isPresent"(): boolean
public static "forBlockEntityAt"<T>(arg0: $BlockEntity$Type, arg1: $Supplier$Type<($DirectionalBlockPos$Type)>, arg2: $Capability$Type<(T)>): $CapabilityReference<(T)>
public static "forNeighbor"<T>(arg0: $BlockEntity$Type, arg1: $Capability$Type<(T)>, arg2: $NonNullSupplier$Type<($Direction$Type)>): $CapabilityReference<(T)>
public static "forNeighbor"<T>(arg0: $BlockEntity$Type, arg1: $Capability$Type<(T)>, arg2: $Direction$Type): $CapabilityReference<(T)>
public static "forAllNeighbors"<T>(arg0: $BlockEntity$Type, arg1: $Capability$Type<(T)>): $Map<($Direction), ($CapabilityReference<(T)>)>
public static "forRelative"<T>(arg0: $BlockEntity$Type, arg1: $Capability$Type<(T)>, arg2: $Vec3i$Type, arg3: $Direction$Type): $CapabilityReference<(T)>
public "getNullable"(): T
get "present"(): boolean
get "nullable"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityReference$Type<T> = ($CapabilityReference<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityReference_<T> = $CapabilityReference$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/sync/$GetterAndSetter" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $GetterAndSetter<T> extends $Record implements $Supplier<(T)>, $Consumer<(T)> {

constructor(getter: $Supplier$Type<(T)>, setter: $Consumer$Type<(T)>)

public "get"(): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "constant"<T>(arg0: T): $GetterAndSetter<(T)>
public "set"(arg0: T): void
public "accept"(arg0: T): void
public "getter"(): $Supplier<(T)>
public static "standalone"<T>(arg0: T): $GetterAndSetter<(T)>
public static "forArray"<T>(arg0: (T)[]): $List<($GetterAndSetter<(T)>)>
public "setter"(): $Consumer<(T)>
public static "getterOnly"<T>(arg0: $Supplier$Type<(T)>): $GetterAndSetter<(T)>
public "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(T)>
get "ter"(): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetterAndSetter$Type<T> = ($GetterAndSetter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GetterAndSetter_<T> = $GetterAndSetter$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig$ToolConfigBoolean" {
import {$IConfigurableTool$ToolConfig, $IConfigurableTool$ToolConfig$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IConfigurableTool$ToolConfig"

export class $IConfigurableTool$ToolConfig$ToolConfigBoolean extends $IConfigurableTool$ToolConfig {
 "value": boolean
 "x": integer
 "y": integer
 "name": string

constructor(arg0: string, arg1: integer, arg2: integer, arg3: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableTool$ToolConfig$ToolConfigBoolean$Type = ($IConfigurableTool$ToolConfig$ToolConfigBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableTool$ToolConfig$ToolConfigBoolean_ = $IConfigurableTool$ToolConfig$ToolConfigBoolean$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ServerPlayNetHandlerAccess" {
import {$PlayerUtils$ConnectionAccess, $PlayerUtils$ConnectionAccess$Type} from "packages/blusunrize/immersiveengineering/api/utils/$PlayerUtils$ConnectionAccess"

export interface $ServerPlayNetHandlerAccess extends $PlayerUtils$ConnectionAccess {

 "setClientIsFloating"(arg0: boolean): void
 "setAboveGroundTickCount"(arg0: integer): void
}

export namespace $ServerPlayNetHandlerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayNetHandlerAccess$Type = ($ServerPlayNetHandlerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayNetHandlerAccess_ = $ServerPlayNetHandlerAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$RefineryRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RefineryRecipe, $RefineryRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$RefineryRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RefineryRecipeSerializer extends $IERecipeSerializer<($RefineryRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RefineryRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RefineryRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RefineryRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipeSerializer$Type = ($RefineryRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefineryRecipeSerializer_ = $RefineryRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/$GeneratedListRecipe$RecipeListGenerator" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IERecipeTypes$TypeWithClass, $IERecipeTypes$TypeWithClass$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeTypes$TypeWithClass"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GeneratedListRecipe$RecipeListGenerator<T extends $IESerializableRecipe, EarlyResult> extends $Record {

constructor(makeEarlyResult: $Supplier$Type<(EarlyResult)>, generator: $Function$Type<(EarlyResult), ($List$Type<(any)>)>, serialized: $ResourceLocation$Type, recipeType: $IERecipeTypes$TypeWithClass$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "generator"(): $Function<(EarlyResult), ($List<(any)>)>
public "makeEarlyResult"(): $Supplier<(EarlyResult)>
public static "simple"<R extends $IESerializableRecipe>(arg0: $Supplier$Type<($List$Type<(any)>)>, arg1: $ResourceLocation$Type, arg2: $IERecipeTypes$TypeWithClass$Type<(R)>): $GeneratedListRecipe$RecipeListGenerator<(R), (any)>
public "serialized"(): $ResourceLocation
public "recipeType"(): $IERecipeTypes$TypeWithClass<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedListRecipe$RecipeListGenerator$Type<T, EarlyResult> = ($GeneratedListRecipe$RecipeListGenerator<(T), (EarlyResult)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratedListRecipe$RecipeListGenerator_<T, EarlyResult> = $GeneratedListRecipe$RecipeListGenerator$Type<(T), (EarlyResult)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/excavator/$MineralMix" {
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$StackWithChance, $StackWithChance$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$StackWithChance"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MineralMix extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($MineralMix)>)>
static readonly "RECIPES": $CachedRecipeList<($MineralMix)>
readonly "outputs": ($StackWithChance)[]
readonly "spoils": ($StackWithChance)[]
readonly "weight": integer
readonly "failChance": float
readonly "dimensions": $ImmutableSet<($ResourceKey<($Level)>)>
readonly "background": $Block
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: ($StackWithChance$Type)[], arg2: ($StackWithChance$Type)[], arg3: integer, arg4: float, arg5: $List$Type<($ResourceKey$Type<($Level$Type)>)>, arg6: $Block$Type)

public "getRandomSpoil"(arg0: $Random$Type): $ItemStack
public "validDimension"(arg0: $ResourceKey$Type<($Level$Type)>): boolean
public "getPlainName"(): string
public "getRandomOre"(arg0: $Random$Type): $ItemStack
public "getTranslationKey"(): string
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "plainName"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralMix$Type = ($MineralMix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineralMix_ = $MineralMix$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$RenderTypeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccess {

 "getName"(): string

(): string
}

export namespace $RenderTypeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccess$Type = ($RenderTypeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccess_ = $RenderTypeAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/$DamageToolRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DamageToolRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $Ingredient$Type, arg4: $NonNullList$Type<($Ingredient$Type)>)

public "getTool"(): $Ingredient
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "tool"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageToolRecipe$Type = ($DamageToolRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageToolRecipe_ = $DamageToolRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/plant/$PottedHempBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FlowerPotBlock, $FlowerPotBlock$Type} from "packages/net/minecraft/world/level/block/$FlowerPotBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $PottedHempBlock extends $FlowerPotBlock {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "AABB_SIZE": float
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PottedHempBlock$Type = ($PottedHempBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PottedHempBlock_ = $PottedHempBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$GrindingDiskItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SawbladeItem, $SawbladeItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$SawbladeItem"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GrindingDiskItem extends $SawbladeItem {
static readonly "TEXTURE": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: float, arg2: float)

public "getToolActions"(): $Set<($ToolAction)>
public "modifyEnchants"(arg0: $Map$Type<($Enchantment$Type), (integer)>): void
public "canSawbladeFellTree"(): boolean
public "getSawbladeMaterials"(): $Predicate<($BlockState)>
public "getSawbladeDamageFromBlock"(arg0: boolean): integer
get "toolActions"(): $Set<($ToolAction)>
get "sawbladeMaterials"(): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindingDiskItem$Type = ($GrindingDiskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrindingDiskItem_ = $GrindingDiskItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerConstructor" {
import {$GlobalWireNetwork, $GlobalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import {$LocalNetworkHandler, $LocalNetworkHandler$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$LocalNetworkHandler"
import {$LocalWireNetwork, $LocalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"

export interface $ILocalHandlerConstructor {

 "create"(arg0: $LocalWireNetwork$Type, arg1: $GlobalWireNetwork$Type): $LocalNetworkHandler

(arg0: $LocalWireNetwork$Type, arg1: $GlobalWireNetwork$Type): $LocalNetworkHandler
}

export namespace $ILocalHandlerConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocalHandlerConstructor$Type = ($ILocalHandlerConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILocalHandlerConstructor_ = $ILocalHandlerConstructor$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$CollisionInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$GlobalWireNetwork, $GlobalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LocalWireNetwork, $LocalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"

export class $WireCollisionData$CollisionInfo extends $Record {

constructor(intersectA: $Vec3$Type, intersectB: $Vec3$Type, connection: $Connection$Type, isInBlock: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "connection"(): $Connection
public "isInBlock"(): boolean
public "getLocalNet"(arg0: $GlobalWireNetwork$Type): $LocalWireNetwork
public "intersectB"(): $Vec3
public "intersectA"(): $Vec3
get "inBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCollisionData$CollisionInfo$Type = ($WireCollisionData$CollisionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireCollisionData$CollisionInfo_ = $WireCollisionData$CollisionInfo$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$SurveyToolsItem" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ColumnPos, $ColumnPos$Type} from "packages/net/minecraft/server/level/$ColumnPos"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SurveyToolsItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "getVeinData"(arg0: $ItemStack$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $ColumnPos$Type): $ListTag
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyToolsItem$Type = ($SurveyToolsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyToolsItem_ = $SurveyToolsItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/$BulletHandler$IBullet" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $BulletHandler$IBullet {

 "addTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "getSound"(): $SoundEvent
 "getTextures"(): ($ResourceLocation)[]
 "getCasing"(arg0: $ItemStack$Type): $ItemStack
 "getColour"(arg0: $ItemStack$Type, arg1: integer): integer
 "getTranslationKey"(arg0: $ItemStack$Type, arg1: string): string
 "getProjectile"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Entity$Type, arg3: boolean): $Entity
 "isValidForTurret"(): boolean
 "getProjectileCount"(arg0: $Player$Type): integer
 "isProperCartridge"(): boolean
 "onHitTarget"(arg0: $Level$Type, arg1: $HitResult$Type, arg2: $UUID$Type, arg3: $Entity$Type, arg4: boolean): void
}

export namespace $BulletHandler$IBullet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletHandler$IBullet$Type = ($BulletHandler$IBullet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulletHandler$IBullet_ = $BulletHandler$IBullet$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$EnergyTransferHandler$EnergyConnector" {
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $EnergyTransferHandler$EnergyConnector extends $IImmersiveConnectable {

 "onEnergyPassedThrough"(arg0: double): void
 "extractEnergy"(arg0: integer): void
 "isSource"(arg0: $ConnectionPoint$Type): boolean
 "getRequestedEnergy"(): integer
 "isSink"(arg0: $ConnectionPoint$Type): boolean
 "insertEnergy"(arg0: integer): void
 "getAvailableEnergy"(): integer
 "getPosition"(): $BlockPos
 "isProxy"(): boolean
 "getConnectionPoints"(): $Collection<($ConnectionPoint)>
 "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
 "getConnectionMaster"(arg0: $WireType$Type, arg1: $TargetingInfo$Type): $BlockPos
 "getInternalConnections"(): $Iterable<(any)>
 "canConnect"(): boolean
 "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
 "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
 "removeCable"(arg0: $Connection$Type, arg1: $ConnectionPoint$Type): void
 "getIgnored"(arg0: $IImmersiveConnectable$Type): $Set<($BlockPos)>
 "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
 "getRequestedHandlers"(): $Collection<($ResourceLocation)>
}

export namespace $EnergyTransferHandler$EnergyConnector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyTransferHandler$EnergyConnector$Type = ($EnergyTransferHandler$EnergyConnector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyTransferHandler$EnergyConnector_ = $EnergyTransferHandler$EnergyConnector$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ContainerAccess" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ContainerAccess {

 "getRemoteSlots"(): $NonNullList<($ItemStack)>
 "getLastSlots"(): $NonNullList<($ItemStack)>
}

export namespace $ContainerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerAccess$Type = ($ContainerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerAccess_ = $ContainerAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$RevolverItem$SpecialRevolver" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"

export class $RevolverItem$SpecialRevolver extends $Record {

constructor(uuid: (string)[], tag: string, flavour: string, baseUpgrades: $HashMap$Type<(string), (any)>, renderAdditions: (string)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tag"(): string
public "flavour"(): string
public "baseUpgrades"(): $HashMap<(string), (any)>
public "uuid"(): (string)[]
public "renderAdditions"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverItem$SpecialRevolver$Type = ($RevolverItem$SpecialRevolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RevolverItem$SpecialRevolver_ = $RevolverItem$SpecialRevolver$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/energy/$IMutableEnergyStorage" {
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"

export interface $IMutableEnergyStorage extends $IEnergyStorage {

 "setStoredEnergy"(arg0: integer): void
 "modifyEnergyStored"(arg0: integer): void
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
 "canExtract"(): boolean
 "canReceive"(): boolean
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
}

export namespace $IMutableEnergyStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMutableEnergyStorage$Type = ($IMutableEnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMutableEnergyStorage_ = $IMutableEnergyStorage$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockOrientation" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MultiblockOrientation extends $Record {

constructor(front: $Direction$Type, mirrored: boolean)
constructor(arg0: $BlockState$Type, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "front"(): $Direction
public "mirrored"(): boolean
public "getPosInMB"(arg0: $BlockPos$Type): $BlockPos
public "transformRelativeShape"(arg0: $VoxelShape$Type): $VoxelShape
public "getAbsoluteOffset"(arg0: $BlockPos$Type): $BlockPos
public "getAbsoluteOffset"(arg0: $Vec3$Type): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockOrientation$Type = ($MultiblockOrientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockOrientation_ = $MultiblockOrientation$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $IERecipeSerializer<R extends $Recipe<(any)>> implements $RecipeSerializer<(R)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
public "getIcon"(): $ItemStack
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IERecipeSerializer$Type<R> = ($IERecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IERecipeSerializer_<R> = $IERecipeSerializer$Type<(R)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$LanternBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $LanternBlock extends $IEBaseBlock {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "FACING": $Property<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanternBlock$Type = ($LanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LanternBlock_ = $LanternBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$GlobalWireNetwork" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LevelEvent$Unload, $LevelEvent$Unload$Type} from "packages/net/minecraftforge/event/level/$LevelEvent$Unload"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LocalWireNetwork, $LocalWireNetwork$Type} from "packages/blusunrize/immersiveengineering/api/wires/$LocalWireNetwork"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$IWorldTickable, $IWorldTickable$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$IWorldTickable"
import {$IWireSyncManager, $IWireSyncManager$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IWireSyncManager"
import {$IICProxyProvider, $IICProxyProvider$Type} from "packages/blusunrize/immersiveengineering/api/wires/proxy/$IICProxyProvider"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$WireCollisionData, $WireCollisionData$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData"
import {$SetRestrictedField, $SetRestrictedField$Type} from "packages/blusunrize/immersiveengineering/api/utils/$SetRestrictedField"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GlobalWireNetwork implements $IWorldTickable {
static readonly "SANITIZE_CONNECTIONS": $SetRestrictedField<($BooleanSupplier)>
static readonly "VALIDATE_CONNECTIONS": $SetRestrictedField<($BooleanSupplier)>

constructor(arg0: boolean, arg1: $IICProxyProvider$Type, arg2: $IWireSyncManager$Type)

public "update"(arg0: $Level$Type): void
public "getExistingConnector"(arg0: $ConnectionPoint$Type): $IImmersiveConnectable
public "removeAndDropConnection"(arg0: $Connection$Type, arg1: $BlockPos$Type, arg2: $Level$Type): void
public "removeAllConnectionsAt"(arg0: $IImmersiveConnectable$Type, arg1: $Consumer$Type<($Connection$Type)>): void
public "removeAllConnectionsAt"(arg0: $ConnectionPoint$Type, arg1: $Consumer$Type<($Connection$Type)>): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "getLocalNet"(arg0: $BlockPos$Type): $LocalWireNetwork
public "getLocalNet"(arg0: $ConnectionPoint$Type): $LocalWireNetwork
public "getNullableLocalNet"(arg0: $ConnectionPoint$Type): $LocalWireNetwork
public "getNullableLocalNet"(arg0: $BlockPos$Type): $LocalWireNetwork
public "removeInsertAndDropConnection"(arg0: $Connection$Type, arg1: $Player$Type, arg2: $Level$Type): void
public "writeToNBT"(): $CompoundTag
public static "getNetwork"(arg0: $Level$Type): $GlobalWireNetwork
public "getCollisionData"(): $WireCollisionData
public "removeConnector"(arg0: $IImmersiveConnectable$Type): void
public "onConnectorLoad"(arg0: $IImmersiveConnectable$Type, arg1: $Level$Type): void
public "onConnectorLoad"(arg0: $IImmersiveConnectable$Type, arg1: boolean): void
public "getAllConnectorsIn"(arg0: $ChunkPos$Type): $Collection<($ConnectionPoint)>
public "onConnectorUnload"(arg0: $IImmersiveConnectable$Type): void
public "getProxyProvider"(): $IICProxyProvider
public "removeConnection"(arg0: $Connection$Type): void
public "updateCatenaryData"(arg0: $Connection$Type): void
public "addConnection"(arg0: $Connection$Type): void
public static "onWorldUnload"(arg0: $LevelEvent$Unload$Type): void
get "collisionData"(): $WireCollisionData
get "proxyProvider"(): $IICProxyProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalWireNetwork$Type = ($GlobalWireNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlobalWireNetwork_ = $GlobalWireNetwork$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IMultiblockContext" {
import {$ICommonMultiblockContext, $ICommonMultiblockContext$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$ICommonMultiblockContext"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CapabilityReference, $CapabilityReference$Type} from "packages/blusunrize/immersiveengineering/api/utils/$CapabilityReference"
import {$IMultiblockLevel, $IMultiblockLevel$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IMultiblockLevel"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$MultiblockFace, $MultiblockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockFace"
import {$RelativeBlockFace, $RelativeBlockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$RelativeBlockFace"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IMultiblockContext<State> extends $ICommonMultiblockContext {

 "getState"(): State
 "getLevel"(): $IMultiblockLevel
 "isValid"(): $BooleanSupplier
 "registerCapability"<T>(arg0: T): $LazyOptional<(T)>
 "markMasterDirty"(): void
 "markDirtyAndSync"(): void
 "setComparatorOutputFor"(arg0: $BlockPos$Type, arg1: integer): void
 "getRedstoneInputValue"(arg0: $BlockPos$Type, arg1: $RelativeBlockFace$Type, arg2: integer): integer
 "getRedstoneInputValue"(arg0: $BlockPos$Type, arg1: integer): integer
 "getRedstoneInputValue"(arg0: $MultiblockFace$Type, arg1: integer): integer
 "requestMasterBESync"(): void
 "getCapabilityAt"<T>(arg0: $Capability$Type<(T)>, arg1: $MultiblockFace$Type): $CapabilityReference<(T)>
 "getCapabilityAt"<T>(arg0: $Capability$Type<(T)>, arg1: $BlockPos$Type, arg2: $RelativeBlockFace$Type): $CapabilityReference<(T)>
}

export namespace $IMultiblockContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockContext$Type<State> = ($IMultiblockContext<(State)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockContext_<State> = $IMultiblockContext$Type<(State)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ShaderBagItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IEItemInterfaces$IColouredItem, $IEItemInterfaces$IColouredItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IColouredItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShaderBagItem extends $IEBaseItem implements $IEItemInterfaces$IColouredItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Rarity$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getColourForIEItem"(arg0: $ItemStack$Type, arg1: integer): integer
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "getName"(arg0: $ItemStack$Type): $Component
public "getDescriptionId"(): string
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBagItem$Type = ($ShaderBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderBagItem_ = $ShaderBagItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$IIngredientWithSizeSerializer, $IIngredientWithSizeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IIngredientWithSizeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$SetRestrictedField, $SetRestrictedField$Type} from "packages/blusunrize/immersiveengineering/api/utils/$SetRestrictedField"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $IngredientWithSize implements $Predicate<($ItemStack)> {
static readonly "SERIALIZER": $SetRestrictedField<($IIngredientWithSizeSerializer)>

constructor(arg0: $TagKey$Type<($Item$Type)>)
constructor(arg0: $TagKey$Type<($Item$Type)>, arg1: integer)
constructor(arg0: $Ingredient$Type)
constructor(arg0: $Ingredient$Type, arg1: integer)

public "test"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: $ItemStack$Type): $IngredientWithSize
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $IngredientWithSize
public "getCount"(): integer
public "serialize"(): $JsonElement
public static "deserialize"(arg0: $JsonElement$Type): $IngredientWithSize
public "hasNoMatchingItems"(): boolean
public "testIgnoringSize"(arg0: $ItemStack$Type): boolean
public "getBaseIngredient"(): $Ingredient
public "withSize"(arg0: integer): $IngredientWithSize
public "getMatchingStacks"(): ($ItemStack)[]
public "getMatchingStackList"(): $List<($ItemStack)>
public "getRandomizedExampleStack"(arg0: integer): $ItemStack
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
get "count"(): integer
get "baseIngredient"(): $Ingredient
get "matchingStacks"(): ($ItemStack)[]
get "matchingStackList"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientWithSize$Type = ($IngredientWithSize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientWithSize_ = $IngredientWithSize$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$PowerpackItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemGetterList, $ItemGetterList$Type} from "packages/blusunrize/immersiveengineering/common/util/$ItemGetterList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$UpgradeableToolItem, $UpgradeableToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PowerpackItem extends $UpgradeableToolItem {
static readonly "POWERPACK_GETTER": $ItemGetterList
static readonly "ITEM_CHARGE_RATE": integer
static readonly "INDUCTION_CHARGE_RATE": integer
static readonly "ANTENNA_CHARGE_RATE": integer
static readonly "TESLA_CONSUMPTION": integer
static readonly "MAGNET_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "getBannerStatic"(arg0: $ItemStack$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getSlotCount"(): integer
public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public static "getMaxEnergyStored"(arg0: $ItemStack$Type): integer
public "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getCapacitorStatic"(arg0: $ItemStack$Type): $ItemStack
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "canModify"(arg0: $ItemStack$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerpackItem$Type = ($PowerpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerpackItem_ = $PowerpackItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractFluidAwareRecipe$IMatchLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractFluidAwareRecipe$IMatchLocation {

 "getListIndex"(arg0: integer, arg1: integer): integer

(arg0: integer, arg1: integer): integer
}

export namespace $AbstractFluidAwareRecipe$IMatchLocation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFluidAwareRecipe$IMatchLocation$Type = ($AbstractFluidAwareRecipe$IMatchLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFluidAwareRecipe$IMatchLocation_ = $AbstractFluidAwareRecipe$IMatchLocation$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$IWorldTickable" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IWorldTickable {

 "update"(arg0: $Level$Type): void

(arg0: $Level$Type): void
}

export namespace $IWorldTickable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldTickable$Type = ($IWorldTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldTickable_ = $IWorldTickable$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$SawdustBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $SawdustBlock extends $IEBaseBlock {
static readonly "LAYERS": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawdustBlock$Type = ($SawdustBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawdustBlock_ = $SawdustBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$SqueezerRecipe" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $SqueezerRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($SqueezerRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($SqueezerRecipe)>
 "input": $IngredientWithSize
readonly "fluidOutput": $FluidStack
readonly "itemOutput": $Lazy<($ItemStack)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStack$Type, arg2: $Lazy$Type<($ItemStack$Type)>, arg3: $IngredientWithSize$Type, arg4: integer)

public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): $SqueezerRecipe
public "setInputSize"(arg0: integer): $SqueezerRecipe
public static "getFluidValuesSorted"(arg0: $Level$Type, arg1: $Fluid$Type, arg2: boolean): $SortedMap<($Component), (integer)>
public "getMultipleProcessTicks"(): integer
set "inputSize"(value: integer)
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SqueezerRecipe$Type = ($SqueezerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SqueezerRecipe_ = $SqueezerRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$BreakerSwitchBlock" {
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BreakerSwitchBlockEntity, $BreakerSwitchBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$BreakerSwitchBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $BreakerSwitchBlock<T extends $BreakerSwitchBlockEntity> extends $ConnectorBlock<(T)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakerSwitchBlock$Type<T> = ($BreakerSwitchBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreakerSwitchBlock_<T> = $BreakerSwitchBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$ManualItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ManualItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualItem$Type = ($ManualItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualItem_ = $ManualItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IEBaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()
constructor(arg0: $Item$Properties$Type)

public "isHidden"(): boolean
public "isIERepairable"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "setBurnTime"(arg0: integer): $IEBaseItem
public "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
get "hidden"(): boolean
set "burnTime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseItem$Type = ($IEBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBaseItem_ = $IEBaseItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ChuteBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ICollisionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ISelectionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISelectionBounds"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ChuteBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ICollisionBounds {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isInwardConveyor"(arg0: $Direction$Type): boolean
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getFacingLimitation"(): $PlacementLimitation
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onEntityCollision"(arg0: $Level$Type, arg1: $Entity$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "isDiagonal"(): boolean
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "diagonal"(): boolean
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChuteBlockEntity$Type = ($ChuteBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChuteBlockEntity_ = $ChuteBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$ClocheFertilizer" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $ClocheFertilizer extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($ClocheFertilizer)>)>
static readonly "RECIPES": $CachedRecipeList<($ClocheFertilizer)>
readonly "input": $Ingredient
readonly "growthModifier": float
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: float)

public static "isValidFertilizer"(arg0: $Level$Type, arg1: $ItemStack$Type): boolean
public "getGrowthModifier"(): float
public static "getFertilizerGrowthModifier"(arg0: $Level$Type, arg1: $ItemStack$Type): float
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "growthModifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheFertilizer$Type = ($ClocheFertilizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheFertilizer_ = $ClocheFertilizer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$MinecraftAccess" {
import {$FontManager, $FontManager$Type} from "packages/net/minecraft/client/gui/font/$FontManager"

export interface $MinecraftAccess {

 "getFontManager"(): $FontManager

(): $FontManager
}

export namespace $MinecraftAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccess$Type = ($MinecraftAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccess_ = $MinecraftAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$FluidTagInput" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"

export class $FluidTagInput implements $Predicate<($FluidStack)> {

constructor(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer)
constructor(arg0: $ResourceLocation$Type, arg1: integer)
constructor(arg0: $ResourceLocation$Type, arg1: integer, arg2: $CompoundTag$Type)
constructor(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $CompoundTag$Type)
constructor(arg0: $Either$Type<($TagKey$Type<($Fluid$Type)>), ($List$Type<($ResourceLocation$Type)>)>, arg1: integer, arg2: $CompoundTag$Type)

public "test"(arg0: $FluidStack$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $FluidTagInput
public "serialize"(): $JsonElement
public static "deserialize"(arg0: $JsonElement$Type): $FluidTagInput
public "testIgnoringAmount"(arg0: $FluidStack$Type): boolean
public "extractFrom"(arg0: $IFluidHandler$Type, arg1: $IFluidHandler$FluidAction$Type): boolean
public "getMatchingFluidStacks"(): $List<($FluidStack)>
public "withAmount"(arg0: integer): $FluidTagInput
public "getAmount"(): integer
public "getRandomizedExampleStack"(arg0: integer): $FluidStack
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
get "matchingFluidStacks"(): $List<($FluidStack)>
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTagInput$Type = ($FluidTagInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTagInput_ = $FluidTagInput$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPipeBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidPipeBlockEntity, $FluidPipeBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPipeBlockEntity"

export class $FluidPipeBlock extends $IEEntityBlock<($FluidPipeBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlock$Type = ($FluidPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPipeBlock_ = $FluidPipeBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$IMultiblockRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$FluidTagInput, $FluidTagInput$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$FluidTagInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export interface $IMultiblockRecipe {

 "getItemInputs"(): $List<($IngredientWithSize)>
 "getFluidInputs"(): $List<($FluidTagInput)>
 "getFluidOutputs"(): $List<($FluidStack)>
 "getItemOutputs"(): $NonNullList<($ItemStack)>
 "getDisplayStack"(arg0: $ItemStack$Type): $ItemStack
 "shouldCheckItemAvailability"(): boolean
 "getActualItemOutputs"(): $NonNullList<($ItemStack)>
 "getActualFluidOutputs"(): $List<($FluidStack)>
 "getMultipleProcessTicks"(): integer
 "getTotalProcessTime"(): integer
 "getTotalProcessEnergy"(): integer
}

export namespace $IMultiblockRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockRecipe$Type = ($IMultiblockRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockRecipe_ = $IMultiblockRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$SawmillRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$SawmillRecipe, $SawmillRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$SawmillRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SawmillRecipeSerializer extends $IERecipeSerializer<($SawmillRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $SawmillRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $SawmillRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $SawmillRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipeSerializer$Type = ($SawmillRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillRecipeSerializer_ = $SawmillRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$ItemBatcherBlock" {
import {$ItemBatcherBlockEntity, $ItemBatcherBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/wooden/$ItemBatcherBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $ItemBatcherBlock extends $IEEntityBlock<($ItemBatcherBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBatcherBlock$Type = ($ItemBatcherBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBatcherBlock_ = $ItemBatcherBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericDataSerializers$DataPair" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GenericDataSerializers$DataSerializer, $GenericDataSerializers$DataSerializer$Type} from "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericDataSerializers$DataSerializer"

export class $GenericDataSerializers$DataPair<T> extends $Record {

constructor(serializer: $GenericDataSerializers$DataSerializer$Type<(T)>, data: T)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "data"(): T
public "write"(arg0: $FriendlyByteBuf$Type): void
public "serializer"(): $GenericDataSerializers$DataSerializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDataSerializers$DataPair$Type<T> = ($GenericDataSerializers$DataPair<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericDataSerializers$DataPair_<T> = $GenericDataSerializers$DataPair$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$BlastFurnaceRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $BlastFurnaceRecipe extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($BlastFurnaceRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($BlastFurnaceRecipe)>
readonly "input": $IngredientWithSize
readonly "output": $Lazy<($ItemStack)>
readonly "slag": $Lazy<($ItemStack)>
readonly "time": integer
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Lazy$Type<($ItemStack$Type)>, arg2: $IngredientWithSize$Type, arg3: integer, arg4: $Lazy$Type<($ItemStack$Type)>)

public "matches"(arg0: $ItemStack$Type): boolean
public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $BlastFurnaceRecipe$Type): $BlastFurnaceRecipe
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceRecipe$Type = ($BlastFurnaceRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnaceRecipe_ = $BlastFurnaceRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$IEFluid$EntityFluidSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $IEFluid$EntityFluidSerializer implements $EntityDataSerializer<($FluidStack)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $FluidStack$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $FluidStack
public "copy"(arg0: $FluidStack$Type): $FluidStack
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($FluidStack$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($FluidStack$Type)>): $EntityDataSerializer<($FluidStack)>
public static "simpleId"<T>(arg0: $IdMap$Type<($FluidStack$Type)>): $EntityDataSerializer<($FluidStack)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($FluidStack$Type)>): $EntityDataSerializer<($FluidStack)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($FluidStack$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($FluidStack$Type)>): $EntityDataSerializer<($Optional<($FluidStack)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluid$EntityFluidSerializer$Type = ($IEFluid$EntityFluidSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEFluid$EntityFluidSerializer_ = $IEFluid$EntityFluidSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PlacementLimitation extends $Enum<($PlacementLimitation)> {
static readonly "SIDE_CLICKED": $PlacementLimitation
static readonly "PISTON_LIKE": $PlacementLimitation
static readonly "PISTON_INVERTED": $PlacementLimitation
static readonly "HORIZONTAL": $PlacementLimitation
static readonly "VERTICAL": $PlacementLimitation
static readonly "HORIZONTAL_AXIS": $PlacementLimitation
static readonly "HORIZONTAL_QUADRANT": $PlacementLimitation
static readonly "HORIZONTAL_PREFER_SIDE": $PlacementLimitation
static readonly "FIXED_DOWN": $PlacementLimitation


public static "values"(): ($PlacementLimitation)[]
public static "valueOf"(arg0: string): $PlacementLimitation
public "getDirectionForPlacement"(arg0: $Direction$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type): $Direction
public "getDirectionForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementLimitation$Type = (("horizontal") | ("piston_like") | ("horizontal_axis") | ("fixed_down") | ("vertical") | ("side_clicked") | ("piston_inverted") | ("horizontal_quadrant") | ("horizontal_prefer_side")) | ($PlacementLimitation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementLimitation_ = $PlacementLimitation$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericDataSerializers$DataSerializer" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$GenericDataSerializers$DataPair, $GenericDataSerializers$DataPair$Type} from "packages/blusunrize/immersiveengineering/common/gui/sync/$GenericDataSerializers$DataPair"

export class $GenericDataSerializers$DataSerializer<T> extends $Record {

constructor(read: $Function$Type<($FriendlyByteBuf$Type), (T)>, write: $BiConsumer$Type<($FriendlyByteBuf$Type), (T)>, copy: $UnaryOperator$Type<(T)>, equals: $BiPredicate$Type<(T), (T)>, id: integer)

public "equals"(arg0: any): boolean
public "equals"(): $BiPredicate<(T), (T)>
public "toString"(): string
public "hashCode"(): integer
public "id"(): integer
public "write"(): $BiConsumer<($FriendlyByteBuf), (T)>
public "read"(): $Function<($FriendlyByteBuf), (T)>
public "read"(arg0: $FriendlyByteBuf$Type): $GenericDataSerializers$DataPair<(T)>
public "copy"(): $UnaryOperator<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDataSerializers$DataSerializer$Type<T> = ($GenericDataSerializers$DataSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericDataSerializers$DataSerializer_<T> = $GenericDataSerializers$DataSerializer$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/register/$IEMenuTypes$ArgContainer" {
import {$IEContainerMenu, $IEContainerMenu$Type} from "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $IEMenuTypes$ArgContainer<T, C extends $IEContainerMenu> {


public "getType"(): $MenuType<(C)>
public "create"(arg0: integer, arg1: $Inventory$Type, arg2: T): C
public "provide"(arg0: T): $MenuProvider
get "type"(): $MenuType<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMenuTypes$ArgContainer$Type<T, C> = ($IEMenuTypes$ArgContainer<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMenuTypes$ArgContainer_<T, C> = $IEMenuTypes$ArgContainer$Type<(T), (C)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/energy/$GeneratorFuel" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"

export class $GeneratorFuel extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($GeneratorFuel)>)>
static readonly "RECIPES": $CachedRecipeList<($GeneratorFuel)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $TagKey$Type<($Fluid$Type)>, arg2: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Fluid$Type)>, arg2: integer)

public "matches"(arg0: $Fluid$Type): boolean
public static "getRecipeFor"(arg0: $Level$Type, arg1: $Fluid$Type, arg2: $GeneratorFuel$Type): $GeneratorFuel
public static "getManualFuelList"(arg0: $Level$Type): $SortedMap<($Component), (integer)>
public "getFluids"(): $List<($Fluid)>
public "getBurnTime"(): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "fluids"(): $List<($Fluid)>
get "burnTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorFuel$Type = ($GeneratorFuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratorFuel_ = $GeneratorFuel$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IInitialMultiblockContext" {
import {$ICommonMultiblockContext, $ICommonMultiblockContext$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$ICommonMultiblockContext"
import {$CapabilityReference, $CapabilityReference$Type} from "packages/blusunrize/immersiveengineering/api/utils/$CapabilityReference"
import {$MultiblockFace, $MultiblockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockFace"
import {$RelativeBlockFace, $RelativeBlockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$RelativeBlockFace"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IInitialMultiblockContext<State extends $IMultiblockState> extends $ICommonMultiblockContext {

 "levelSupplier"(): $Supplier<($Level)>
 "getSyncRunnable"(): $Runnable
 "getMarkDirtyRunnable"(): $Runnable
 "getCapabilityAt"<T>(arg0: $Capability$Type<(T)>, arg1: $MultiblockFace$Type): $CapabilityReference<(T)>
 "getCapabilityAt"<T>(arg0: $Capability$Type<(T)>, arg1: $BlockPos$Type, arg2: $RelativeBlockFace$Type): $CapabilityReference<(T)>
}

export namespace $IInitialMultiblockContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInitialMultiblockContext$Type<State> = ($IInitialMultiblockContext<(State)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInitialMultiblockContext_<State> = $IInitialMultiblockContext$Type<(State)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$AlloyRecipeSerializer" {
import {$AlloyRecipe, $AlloyRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$AlloyRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AlloyRecipeSerializer extends $IERecipeSerializer<($AlloyRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AlloyRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $AlloyRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $AlloyRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloyRecipeSerializer$Type = ($AlloyRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloyRecipeSerializer_ = $AlloyRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$BlockIESlab" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$IIEBlock, $IIEBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IIEBlock"
import {$BlockBehaviour$StatePredicate, $BlockBehaviour$StatePredicate$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StatePredicate"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockIESlab<T extends ($Block) & ($IIEBlock)> extends $SlabBlock implements $IIEBlock {
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(T)>)

public static "causesSuffocation"(arg0: $Supplier$Type<(any)>): $BlockBehaviour$StatePredicate
public "getNameForFlavour"(): string
public "hasFlavour"(): boolean
public static "isNormalCube"(arg0: $Supplier$Type<(any)>): $BlockBehaviour$StatePredicate
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
get "nameForFlavour"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIESlab$Type<T> = ($BlockIESlab<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockIESlab_<T> = $BlockIESlab$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$IJEIRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IJEIRecipe {

 "listInJEI"(): boolean
}

export namespace $IJEIRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJEIRecipe$Type = ($IJEIRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJEIRecipe_ = $IJEIRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IActiveState" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEBlockInterfaces$BlockstateProvider, $IEBlockInterfaces$BlockstateProvider$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$BlockstateProvider"

export interface $IEBlockInterfaces$IActiveState extends $IEBlockInterfaces$BlockstateProvider {

 "setActive"(arg0: boolean): void
 "getIsActive"(): boolean
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$Type): void
}

export namespace $IEBlockInterfaces$IActiveState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IActiveState$Type = ($IEBlockInterfaces$IActiveState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IActiveState_ = $IEBlockInterfaces$IActiveState$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IConfigurableSides" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IEEnums$IOSideConfig, $IEEnums$IOSideConfig$Type} from "packages/blusunrize/immersiveengineering/api/$IEEnums$IOSideConfig"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IEBlockInterfaces$IConfigurableSides {

 "getSideConfig"(arg0: $Direction$Type): $IEEnums$IOSideConfig
 "toggleSide"(arg0: $Direction$Type, arg1: $Player$Type): boolean
}

export namespace $IEBlockInterfaces$IConfigurableSides {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IConfigurableSides$Type = ($IEBlockInterfaces$IConfigurableSides);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IConfigurableSides_ = $IEBlockInterfaces$IConfigurableSides$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $IEBlockInterfaces$IHammerInteraction {

 "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean

(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
}

export namespace $IEBlockInterfaces$IHammerInteraction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IHammerInteraction$Type = ($IEBlockInterfaces$IHammerInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IHammerInteraction_ = $IEBlockInterfaces$IHammerInteraction$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$DrillheadItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDrillHead, $IDrillHead$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IDrillHead"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DrillheadItem$DrillHeadPerm, $DrillheadItem$DrillHeadPerm$Type} from "packages/blusunrize/immersiveengineering/common/items/$DrillheadItem$DrillHeadPerm"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrillheadItem extends $IEBaseItem implements $IDrillHead {
static readonly "STEEL": $DrillheadItem$DrillHeadPerm
static readonly "IRON": $DrillheadItem$DrillHeadPerm
static readonly "DAMAGE_KEY_OLD": string
static readonly "DAMAGE_KEY": string
 "perms": $DrillheadItem$DrillHeadPerm
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DrillheadItem$DrillHeadPerm$Type)

public "getBarWidth"(arg0: $ItemStack$Type): integer
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getAttackDamage"(arg0: $ItemStack$Type): float
public "getHeadDamage"(arg0: $ItemStack$Type): integer
public "damageHead"(arg0: $ItemStack$Type, arg1: integer): void
public "getMiningSpeed"(arg0: $ItemStack$Type): float
public "afterBlockbreak"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "getExtraBlocksDug"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $HitResult$Type): $ImmutableList<($BlockPos)>
public "getMiningLevel"(arg0: $ItemStack$Type): $Tier
public "beforeBlockbreak"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "getDrillTexture"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ResourceLocation
public static "setHeadDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "getMaximumHeadDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillheadItem$Type = ($DrillheadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillheadItem_ = $DrillheadItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$BlueprintCraftingRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$SetRestrictedField, $SetRestrictedField$Type} from "packages/blusunrize/immersiveengineering/api/utils/$SetRestrictedField"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $BlueprintCraftingRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($BlueprintCraftingRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($BlueprintCraftingRecipe)>
static "blueprintItem": $SetRestrictedField<($ItemLike)>
readonly "blueprintCategory": string
readonly "output": $Lazy<($ItemStack)>
readonly "inputs": ($IngredientWithSize)[]
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $Lazy$Type<($ItemStack$Type)>, arg3: ($IngredientWithSize$Type)[])

public "consumeInputs"(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: integer): $NonNullList<($ItemStack)>
public "matchesRecipe"(arg0: $NonNullList$Type<($ItemStack$Type)>): boolean
public "getMaxCrafted"(arg0: $NonNullList$Type<($ItemStack$Type)>): integer
public static "findRecipes"(arg0: $Level$Type, arg1: string): ($BlueprintCraftingRecipe)[]
public static "getTypedBlueprint"(arg0: string): $ItemStack
public static "getCategoriesWithRecipes"(arg0: $Level$Type): $Set<(string)>
public static "updateRecipeCategories"(arg0: $Level$Type): void
public "getMultipleProcessTicks"(): integer
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintCraftingRecipe$Type = ($BlueprintCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintCraftingRecipe_ = $BlueprintCraftingRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/entities/$IEMinecartEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractMinecart$Type, $AbstractMinecart$Type$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart$Type"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $IEMinecartEntity<T extends $BlockEntity> extends $AbstractMinecart implements $MenuProvider {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "dimensions": $EntityDimensions
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>


public "getCapability"<C>(arg0: $Capability$Type<(C)>, arg1: $Direction$Type): $LazyOptional<(C)>
public "destroy"(arg0: $DamageSource$Type): void
public "getMinecartType"(): $AbstractMinecart$Type
public "interact"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "getContainedBlockEntity"(): T
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getComparatorLevel"(): integer
public "readTileFromItem"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "writeTileToItem"(arg0: $ItemStack$Type): void
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "getDisplayName"(): $Component
get "minecartType"(): $AbstractMinecart$Type
get "containedBlockEntity"(): T
get "comparatorLevel"(): integer
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMinecartEntity$Type<T> = ($IEMinecartEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMinecartEntity_<T> = $IEMinecartEntity$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/stone/$SlagGravelBlock" {
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SlagGravelBlock extends $FallingBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlagGravelBlock$Type = ($SlagGravelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlagGravelBlock_ = $SlagGravelBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$DrillItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$PlayerEvent$HarvestCheck, $PlayerEvent$HarvestCheck$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent$HarvestCheck"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DieselToolItem, $DieselToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$DieselToolItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrillItem extends $DieselToolItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "getSlotCount"(): integer
public "getMaxHeadDamage"(arg0: $ItemStack$Type): integer
public "setHead"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "getHeadDamage"(arg0: $ItemStack$Type): integer
public "getHarvestLevel"(arg0: $ItemStack$Type, arg1: $Player$Type): $Tier
public "canToolBeUsed"(arg0: $ItemStack$Type): boolean
public "isEffective"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public static "getHeadStatic"(arg0: $ItemStack$Type): $ItemStack
public "canBreakExtraBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type, arg4: $ItemStack$Type, arg5: $ItemStack$Type): boolean
public static "isSingleBlockMode"(arg0: $ItemStack$Type): boolean
public "getHead"(arg0: $ItemStack$Type): $ItemStack
public "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public static "handleUnderwaterDrill"(arg0: $PlayerEvent$HarvestCheck$Type): void
public "finishUpgradeRecalculation"(arg0: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillItem$Type = ($DrillItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillItem_ = $DrillItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$BottlingMachineRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidTagInput, $FluidTagInput$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$FluidTagInput"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $BottlingMachineRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($BottlingMachineRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($BottlingMachineRecipe)>
readonly "inputs": ($IngredientWithSize)[]
readonly "fluidInput": $FluidTagInput
readonly "output": $Lazy<($NonNullList<($ItemStack)>)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Lazy$Type<($ItemStack$Type)>)>, arg2: ($IngredientWithSize$Type)[], arg3: $FluidTagInput$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Lazy$Type<($ItemStack$Type)>)>, arg2: $IngredientWithSize$Type, arg3: $FluidTagInput$Type)

public "matches"(arg0: ($ItemStack$Type)[], arg1: $FluidStack$Type): boolean
public static "findRecipe"(arg0: $Level$Type, arg1: $FluidStack$Type, ...arg2: ($ItemStack$Type)[]): $BottlingMachineRecipe
public "getDisplayStacks"(arg0: ($ItemStack$Type)[]): $NonNullList<($ItemStack)>
public "getMultipleProcessTicks"(): integer
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottlingMachineRecipe$Type = ($BottlingMachineRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BottlingMachineRecipe_ = $BottlingMachineRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/energy/$MutableEnergyStorage" {
import {$IMutableEnergyStorage, $IMutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$IMutableEnergyStorage"
import {$EnergyStorage, $EnergyStorage$Type} from "packages/net/minecraftforge/energy/$EnergyStorage"

export class $MutableEnergyStorage extends $EnergyStorage implements $IMutableEnergyStorage {

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "setStoredEnergy"(arg0: integer): void
public "modifyEnergyStored"(arg0: integer): void
set "storedEnergy"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableEnergyStorage$Type = ($MutableEnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableEnergyStorage_ = $MutableEnergyStorage$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$StructuralArmBlock" {
import {$StructuralArmBlockEntity, $StructuralArmBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$StructuralArmBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $StructuralArmBlock extends $IEEntityBlock<($StructuralArmBlockEntity)> {
static readonly "FACING": $Property<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructuralArmBlock$Type = ($StructuralArmBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructuralArmBlock_ = $StructuralArmBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IModelOffsetProvider {

 "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos

(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
}

export namespace $IModelOffsetProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModelOffsetProvider$Type = ($IModelOffsetProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModelOffsetProvider_ = $IModelOffsetProvider$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$BlockItemIE" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemIE extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)
constructor(arg0: $Block$Type)

public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "setBurnTime"(arg0: integer): $BlockItemIE
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
set "burnTime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemIE$Type = ($BlockItemIE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemIE_ = $BlockItemIE$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$BETypeAccess" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BETypeAccess {

 "getValidBlocks"(): $Set<($Block)>

(): $Set<($Block)>
}

export namespace $BETypeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BETypeAccess$Type = ($BETypeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BETypeAccess_ = $BETypeAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPumpBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEBlockInterfaces$IBlockOverlayText, $IEBlockInterfaces$IBlockOverlayText$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockOverlayText"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IEEnums$IOSideConfig, $IEEnums$IOSideConfig$Type} from "packages/blusunrize/immersiveengineering/api/$IEEnums$IOSideConfig"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFluidPipe, $IFluidPipe$Type} from "packages/blusunrize/immersiveengineering/api/fluid/$IFluidPipe"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IEBlockInterfaces$IConfigurableSides, $IEBlockInterfaces$IConfigurableSides$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IConfigurableSides"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidPumpBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IConfigurableSides, $IFluidPipe, $IEBlockInterfaces$IBlockOverlayText {
 "sideConfig": $Map<($Direction), ($IEEnums$IOSideConfig)>

constructor(arg0: $BlockEntityType$Type<($FluidPumpBlockEntity$Type)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "canOutputPressurized"(arg0: boolean): boolean
public "outputFluid"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "useNixieFont"(arg0: $Player$Type, arg1: $HitResult$Type): boolean
public "getOverlayText"(arg0: $Player$Type, arg1: $HitResult$Type, arg2: boolean): ($Component)[]
public "getSideConfig"(arg0: $Direction$Type): $IEEnums$IOSideConfig
public "toggleSide"(arg0: $Direction$Type, arg1: $Player$Type): boolean
public "isDummy"(): boolean
public "tickServer"(): void
public "master"(): $FluidPumpBlockEntity
public "prepareAreaCheck"(): void
public "checkAreaTick"(): void
public "setDummy"(arg0: boolean): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public static "getTransferableAmount"(arg0: boolean): integer
public "stripPressureTag"(): boolean
public "canTickAny"(): boolean
get "dummy"(): boolean
set "dummy"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPumpBlockEntity$Type = ($FluidPumpBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPumpBlockEntity_ = $FluidPumpBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$ChatComponentAccess" {
import {$GuiMessage, $GuiMessage$Type} from "packages/net/minecraft/client/$GuiMessage"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ChatComponentAccess {

 "getAllMessages"(): $List<($GuiMessage)>
 "invokeRefreshTrimmedMessage"(): void
}

export namespace $ChatComponentAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponentAccess$Type = ($ChatComponentAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatComponentAccess_ = $ChatComponentAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$EnergyMeterBlockEntity" {
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DoubleList, $DoubleList$Type} from "packages/it/unimi/dsi/fastutil/doubles/$DoubleList"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBlockInterfaces$IComparatorOverride, $IEBlockInterfaces$IComparatorOverride$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IComparatorOverride"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnergyTransferHandler$EnergyConnector, $EnergyTransferHandler$EnergyConnector$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$EnergyTransferHandler$EnergyConnector"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IEBlockInterfaces$IGeneralMultiblock, $IEBlockInterfaces$IGeneralMultiblock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IGeneralMultiblock"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IPlayerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $EnergyMeterBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEServerTickableBE, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IPlayerInteraction, $IEBlockInterfaces$IComparatorOverride, $EnergyTransferHandler$EnergyConnector, $IEBlockInterfaces$IBlockBounds, $IModelOffsetProvider {
readonly "lastPackets": $DoubleList

constructor(arg0: $BlockEntityType$Type<($EnergyMeterBlockEntity$Type)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onLoad"(): void
public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "getFacingLimitation"(): $PlacementLimitation
public "getConnectionMaster"(arg0: $WireType$Type, arg1: $TargetingInfo$Type): $BlockPos
public "getInternalConnections"(): $Iterable<(any)>
public "getComparatorInputOverride"(): integer
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "canConnect"(): boolean
public "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
public "getIgnored"(arg0: $IImmersiveConnectable$Type): $Set<($BlockPos)>
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "tickServer"(): void
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "isSource"(arg0: $ConnectionPoint$Type): boolean
public "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
public "isSink"(arg0: $ConnectionPoint$Type): boolean
public "getAveragePower"(): integer
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "onEnergyPassedThrough"(arg0: double): void
public "extractEnergy"(arg0: integer): void
public "getRequestedEnergy"(): integer
public "insertEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
public "isDummy"(): boolean
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "facingLimitation"(): $PlacementLimitation
get "internalConnections"(): $Iterable<(any)>
get "comparatorInputOverride"(): integer
get "facingProperty"(): $Property<($Direction)>
get "averagePower"(): integer
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "requestedEnergy"(): integer
get "availableEnergy"(): integer
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
get "dummy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyMeterBlockEntity$Type = ($EnergyMeterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyMeterBlockEntity_ = $EnergyMeterBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$StripCurtainBlockEntity" {
import {$IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$IScrewdriverInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEBlockInterfaces$IAdvancedDirectionalBE, $IEBlockInterfaces$IAdvancedDirectionalBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IAdvancedDirectionalBE"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IEBlockInterfaces$IRedstoneOutput, $IEBlockInterfaces$IRedstoneOutput$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IRedstoneOutput"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlockInterfaces$IColouredBE, $IEBlockInterfaces$IColouredBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IColouredBE"
import {$IEBlockInterfaces$IBlockEntityDrop, $IEBlockInterfaces$IBlockEntityDrop$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockEntityDrop"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $StripCurtainBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEBlockInterfaces$IRedstoneOutput, $IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$IAdvancedDirectionalBE, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IColouredBE, $IEBlockInterfaces$IBlockEntityDrop, $IEBlockInterfaces$IBlockBounds {
 "colour": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "onDirectionalPlacement"(arg0: $Direction$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "onEntityCollision"(arg0: $Level$Type, arg1: $Entity$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): $InteractionResult
public "onBEPlaced"(arg0: $BlockPlaceContext$Type): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getRenderColour"(arg0: integer): integer
public "getWeakRSOutput"(arg0: $Direction$Type): integer
public "getStrongRSOutput"(arg0: $Direction$Type): integer
public "setCeilingAttached"(arg0: boolean): void
public "isCeilingAttached"(): boolean
public "getBlockEntityDrop"(arg0: $LootContext$Type, arg1: $Consumer$Type<($ItemStack$Type)>): void
public "getFacingProperty"(): $Property<($Direction)>
public "tickServer"(): void
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "getPickBlock"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $HitResult$Type): $ItemStack
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
get "facingLimitation"(): $PlacementLimitation
set "ceilingAttached"(value: boolean)
get "ceilingAttached"(): boolean
get "facingProperty"(): $Property<($Direction)>
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StripCurtainBlockEntity$Type = ($StripCurtainBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StripCurtainBlockEntity_ = $StripCurtainBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/$LazyShapelessRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LazyShapelessRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $Lazy$Type<($ItemStack$Type)>, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $RecipeSerializer$Type<($LazyShapelessRecipe$Type)>)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<($LazyShapelessRecipe)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<($LazyShapelessRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyShapelessRecipe$Type = ($LazyShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyShapelessRecipe_ = $LazyShapelessRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$PotionBucketItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PotionBucketItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "forPotion"(arg0: $Potion$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "getPotion"(arg0: $ItemStack$Type): $Potion
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBucketItem$Type = ($PotionBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBucketItem_ = $PotionBucketItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$SawbladeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SawbladeItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer, arg1: float, arg2: float, arg3: $ResourceLocation$Type)
constructor(arg0: integer, arg1: float, arg2: float)

public "canBeDepleted"(): boolean
public "getSawbladeDamage"(): float
public "getSawbladeSpeed"(): float
public "getToolActions"(): $Set<($ToolAction)>
public "modifyEnchants"(arg0: $Map$Type<($Enchantment$Type), (integer)>): void
public "getSawbladeTexture"(): $ResourceLocation
public "canSawbladeFellTree"(): boolean
public "getSawbladeMaterials"(): $Predicate<($BlockState)>
public "getSawbladeDamageFromBlock"(arg0: boolean): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "sawbladeDamage"(): float
get "sawbladeSpeed"(): float
get "toolActions"(): $Set<($ToolAction)>
get "sawbladeTexture"(): $ResourceLocation
get "sawbladeMaterials"(): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawbladeItem$Type = ($SawbladeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawbladeItem_ = $SawbladeItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$IConnectionTemplate" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IConnectionTemplate$TemplateConnection, $IConnectionTemplate$TemplateConnection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IConnectionTemplate$TemplateConnection"

export interface $IConnectionTemplate {

 "getStoredConnections"(): $List<($IConnectionTemplate$TemplateConnection)>

(): $List<($IConnectionTemplate$TemplateConnection)>
}

export namespace $IConnectionTemplate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectionTemplate$Type = ($IConnectionTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectionTemplate_ = $IConnectionTemplate$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$HammerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HammerItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerItem$Type = ($HammerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HammerItem_ = $HammerItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$TemplateMultiblock$TemplateData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

export class $TemplateMultiblock$TemplateData extends $Record {

constructor(template: $StructureTemplate$Type, blocksWithoutAir: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, triggerState: $BlockState$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "template"(): $StructureTemplate
public "blocksWithoutAir"(): $List<($StructureTemplate$StructureBlockInfo)>
public "triggerState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateMultiblock$TemplateData$Type = ($TemplateMultiblock$TemplateData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateMultiblock$TemplateData_ = $TemplateMultiblock$TemplateData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$CokeOvenRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $CokeOvenRecipe extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($CokeOvenRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($CokeOvenRecipe)>
readonly "input": $IngredientWithSize
readonly "output": $Lazy<($ItemStack)>
readonly "time": integer
readonly "creosoteOutput": integer
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Lazy$Type<($ItemStack$Type)>, arg2: $IngredientWithSize$Type, arg3: integer, arg4: integer)

public "matches"(arg0: $ItemStack$Type): boolean
public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $CokeOvenRecipe$Type): $CokeOvenRecipe
public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): $CokeOvenRecipe
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CokeOvenRecipe$Type = ($CokeOvenRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CokeOvenRecipe_ = $CokeOvenRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorWall" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ConveyorWall extends $Enum<($ConveyorWall)> {
static readonly "LEFT": $ConveyorWall
static readonly "RIGHT": $ConveyorWall


public static "values"(): ($ConveyorWall)[]
public static "valueOf"(arg0: string): $ConveyorWall
public "getWallSide"(arg0: $Direction$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorWall$Type = (("left") | ("right")) | ($ConveyorWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorWall_ = $ConveyorWall$Type;
}}
declare module "packages/blusunrize/immersiveengineering/client/utils/$DistField" {
import {$DistExecutor$SafeCallable, $DistExecutor$SafeCallable$Type} from "packages/net/minecraftforge/fml/$DistExecutor$SafeCallable"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Dist, $Dist$Type} from "packages/net/minecraftforge/api/distmarker/$Dist"

export class $DistField<T> {

constructor(arg0: $Dist$Type, arg1: $Supplier$Type<($DistExecutor$SafeCallable$Type<(T)>)>)

public "get"(): T
public static "client"<T>(arg0: $Supplier$Type<($DistExecutor$SafeCallable$Type<(T)>)>): $DistField<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistField$Type<T> = ($DistField<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistField_<T> = $DistField$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/shader/$CapabilityShader$ShaderWrapper_Direct" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CapabilityShader$ShaderWrapper, $CapabilityShader$ShaderWrapper$Type} from "packages/blusunrize/immersiveengineering/api/shader/$CapabilityShader$ShaderWrapper"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CapabilityShader$ShaderWrapper_Direct extends $CapabilityShader$ShaderWrapper implements $ICapabilityProvider, $INBTSerializable<($CompoundTag)> {

constructor(arg0: $ResourceLocation$Type)

public "getShaderItem"(): $ItemStack
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "setShaderItem"(arg0: $ItemStack$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
get "shaderItem"(): $ItemStack
set "shaderItem"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityShader$ShaderWrapper_Direct$Type = ($CapabilityShader$ShaderWrapper_Direct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityShader$ShaderWrapper_Direct_ = $CapabilityShader$ShaderWrapper_Direct$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/world/$IEOreFeature$IEOreFeatureConfig" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEServerConfig$Ores$VeinType, $IEServerConfig$Ores$VeinType$Type} from "packages/blusunrize/immersiveengineering/common/config/$IEServerConfig$Ores$VeinType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration$TargetBlockState"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IEOreFeature$IEOreFeatureConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($IEOreFeature$IEOreFeatureConfig)>

constructor(targetList: $List$Type<($OreConfiguration$TargetBlockState$Type)>, type: $IEServerConfig$Ores$VeinType$Type)

public "type"(): $IEServerConfig$Ores$VeinType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): integer
public "getAirExposure"(): double
public "targetList"(): $List<($OreConfiguration$TargetBlockState)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "size"(): integer
get "airExposure"(): double
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEOreFeature$IEOreFeatureConfig$Type = ($IEOreFeature$IEOreFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEOreFeature$IEOreFeatureConfig_ = $IEOreFeature$IEOreFeatureConfig$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$NoContainerSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$NoContainersRecipe, $NoContainersRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/$NoContainersRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $NoContainerSerializer implements $RecipeSerializer<($NoContainersRecipe<(any)>)> {
static readonly "BASE_RECIPE": string

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $NoContainersRecipe<(any)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $NoContainersRecipe$Type<(any)>): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $NoContainersRecipe<(any)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $NoContainersRecipe<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoContainerSerializer$Type = ($NoContainerSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoContainerSerializer_ = $NoContainerSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$GuiSubtitleOverlayAccess" {
import {$SubtitleOverlay, $SubtitleOverlay$Type} from "packages/net/minecraft/client/gui/components/$SubtitleOverlay"

export interface $GuiSubtitleOverlayAccess {

 "getSubtitleOverlay"(): $SubtitleOverlay

(): $SubtitleOverlay
}

export namespace $GuiSubtitleOverlayAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSubtitleOverlayAccess$Type = ($GuiSubtitleOverlayAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSubtitleOverlayAccess_ = $GuiSubtitleOverlayAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IESeedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IESeedItem extends $BlockItem implements $IPlantable {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "getPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
public "getDescriptionId"(): string
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESeedItem$Type = ($IESeedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IESeedItem_ = $IESeedItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$WatermillBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$IEClientTickableBE, $IEClientTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IEBlockInterfaces$IGeneralMultiblock, $IEBlockInterfaces$IGeneralMultiblock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IGeneralMultiblock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $WatermillBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEClientTickableBE, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHasDummyBlocks {
 "offset": (integer)[]
 "rotation": float
 "multiblock": boolean
 "perTick": double

constructor(arg0: $BlockEntityType$Type<($WatermillBlockEntity$Type)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isBlocked"(): boolean
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "tickClient"(): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "isDummy"(): boolean
public "tickServer"(): void
public "getRenderBoundingBox"(): $AABB
public "getPower"(): double
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "getRotationVec"(): $Vec3
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
get "blocked"(): boolean
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "dummy"(): boolean
get "renderBoundingBox"(): $AABB
get "power"(): double
get "rotationVec"(): $Vec3
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatermillBlockEntity$Type = ($WatermillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatermillBlockEntity_ = $WatermillBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IGeneralMultiblock" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEBlockInterfaces$BlockstateProvider, $IEBlockInterfaces$BlockstateProvider$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$BlockstateProvider"

export interface $IEBlockInterfaces$IGeneralMultiblock extends $IEBlockInterfaces$BlockstateProvider {

 "isDummy"(): boolean
 "master"(): $IEBlockInterfaces$IGeneralMultiblock
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$Type): void
}

export namespace $IEBlockInterfaces$IGeneralMultiblock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IGeneralMultiblock$Type = ($IEBlockInterfaces$IGeneralMultiblock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IGeneralMultiblock_ = $IEBlockInterfaces$IGeneralMultiblock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$RazorWireBlockEntity" {
import {$IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ICollisionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ISelectionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISelectionBounds"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$EnergyTransferHandler$EnergyConnector, $EnergyTransferHandler$EnergyConnector$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$EnergyTransferHandler$EnergyConnector"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RazorWireBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$ICollisionBounds, $EnergyTransferHandler$EnergyConnector, $IEBlockInterfaces$ISelectionBounds {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "getFacingLimitation"(): $PlacementLimitation
public "onEntityCollision"(arg0: $Level$Type, arg1: $Entity$Type): void
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "isSource"(arg0: $ConnectionPoint$Type): boolean
public "getRequestedEnergy"(): integer
public "isSink"(arg0: $ConnectionPoint$Type): boolean
public "isOnGround"(): boolean
public "insertEnergy"(arg0: integer): void
public "isStacked"(): boolean
public static "applyDamage"(arg0: $LivingEntity$Type): void
public "renderWall"(arg0: boolean): boolean
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "onEnergyPassedThrough"(arg0: double): void
public "extractEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "requestedEnergy"(): integer
get "onGround"(): boolean
get "stacked"(): boolean
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "availableEnergy"(): integer
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RazorWireBlockEntity$Type = ($RazorWireBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RazorWireBlockEntity_ = $RazorWireBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$MetalPressRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $MetalPressRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($MetalPressRecipe)>)>
static readonly "STANDARD_RECIPES": $CachedRecipeList<($MetalPressRecipe)>
 "input": $IngredientWithSize
readonly "mold": $Item
readonly "output": $Lazy<($ItemStack)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Lazy$Type<($ItemStack$Type)>, arg2: $IngredientWithSize$Type, arg3: $Item$Type, arg4: integer)

public "matches"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type): boolean
public static "findRecipe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type): $MetalPressRecipe
public "setInputSize"(arg0: integer): $MetalPressRecipe
public static "addSpecialRecipe"(arg0: $MetalPressRecipe$Type): void
public static "isValidMold"(arg0: $Level$Type, arg1: $ItemStack$Type): boolean
public "getActualRecipe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type): $MetalPressRecipe
public "getMultipleProcessTicks"(): integer
set "inputSize"(value: integer)
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalPressRecipe$Type = ($MetalPressRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalPressRecipe_ = $MetalPressRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/registry/$MultiblockPartBlock$WithMirrorState" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$MultiblockPartBlock, $MultiblockPartBlock$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/registry/$MultiblockPartBlock"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiblockRegistration, $MultiblockRegistration$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $MultiblockPartBlock$WithMirrorState<State extends $IMultiblockState> extends $MultiblockPartBlock<(State)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $MultiblockRegistration$Type<(State)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPartBlock$WithMirrorState$Type<State> = ($MultiblockPartBlock$WithMirrorState<(State)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockPartBlock$WithMirrorState_<State> = $MultiblockPartBlock$WithMirrorState$Type<(State)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$MetalPressRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MetalPressRecipe, $MetalPressRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MetalPressRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MetalPressRecipeSerializer extends $IERecipeSerializer<($MetalPressRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MetalPressRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MetalPressRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MetalPressRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalPressRecipeSerializer$Type = ($MetalPressRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalPressRecipeSerializer_ = $MetalPressRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$MultiblockBEType" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEBlockInterfaces$IGeneralMultiblock, $IEBlockInterfaces$IGeneralMultiblock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IGeneralMultiblock"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MultiblockBEType$BEWithTypeConstructor, $MultiblockBEType$BEWithTypeConstructor$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$MultiblockBEType$BEWithTypeConstructor"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"

export class $MultiblockBEType<T extends ($BlockEntity) & ($IEBlockInterfaces$IGeneralMultiblock)> implements $BiFunction<($BlockPos), ($BlockState), (T)> {

constructor(arg0: string, arg1: $DeferredRegister$Type<($BlockEntityType$Type<(any)>)>, arg2: $MultiblockBEType$BEWithTypeConstructor$Type<(T)>, arg3: $Supplier$Type<(any)>, arg4: $Predicate$Type<($BlockState$Type)>)

public "apply"(arg0: $BlockPos$Type, arg1: $BlockState$Type): T
public "dummy"(): $BlockEntityType<(T)>
public static "makeType"<T extends $BlockEntity>(arg0: $MultiblockBEType$BEWithTypeConstructor$Type<(T)>, arg1: $Supplier$Type<(any)>): $Supplier<($BlockEntityType<(T)>)>
public "master"(): $BlockEntityType<(T)>
public "masterHolder"(): $RegistryObject<($BlockEntityType<(T)>)>
public "dummyHolder"(): $RegistryObject<($BlockEntityType<(T)>)>
public "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<($BlockPos), ($BlockState), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBEType$Type<T> = ($MultiblockBEType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockBEType_<T> = $MultiblockBEType$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$PlayerControllerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerControllerAccess {

 "getDestroyProgress"(): float

(): float
}

export namespace $PlayerControllerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerControllerAccess$Type = ($PlayerControllerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerControllerAccess_ = $PlayerControllerAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$RazorWireBlock" {
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RazorWireBlockEntity, $RazorWireBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$RazorWireBlockEntity"

export class $RazorWireBlock extends $ConnectorBlock<($RazorWireBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RazorWireBlock$Type = ($RazorWireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RazorWireBlock_ = $RazorWireBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InternalStorageItem, $InternalStorageItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$InternalStorageItem"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IUpgradeableTool, $IUpgradeableTool$Type} from "packages/blusunrize/immersiveengineering/api/tool/$IUpgradeableTool"

export class $UpgradeableToolItem extends $InternalStorageItem implements $IUpgradeableTool {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: string)

public "getUpgradeBase"(arg0: $ItemStack$Type): $CompoundTag
public "clearUpgrades"(arg0: $ItemStack$Type): void
public "getUpgrades"(arg0: $ItemStack$Type): $CompoundTag
public "removeFromWorkbench"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "canTakeFromWorkbench"(arg0: $ItemStack$Type): boolean
public "finishUpgradeRecalculation"(arg0: $ItemStack$Type): void
public "recalculateUpgrades"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "getUpgradesStatic"(arg0: $ItemStack$Type): $CompoundTag
public "removeUpgrade"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "getUpgradeAfterRemoval"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "canModify"(arg0: $ItemStack$Type): boolean
public "getWorkbenchSlots"(arg0: $AbstractContainerMenu$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Supplier$Type<($Player$Type)>, arg4: $IItemHandler$Type): ($Slot)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeableToolItem$Type = ($UpgradeableToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeableToolItem_ = $UpgradeableToolItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock$IELadderBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IEBaseBlock$IELadderBlock extends $IEBaseBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "applyLadderLogic"(arg0: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseBlock$IELadderBlock$Type = ($IEBaseBlock$IELadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBaseBlock$IELadderBlock_ = $IEBaseBlock$IELadderBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ICollisionBounds" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"

export interface $IEBlockInterfaces$ICollisionBounds {

 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape

(arg0: $CollisionContext$Type): $VoxelShape
}

export namespace $IEBlockInterfaces$ICollisionBounds {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ICollisionBounds$Type = ($IEBlockInterfaces$ICollisionBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$ICollisionBounds_ = $IEBlockInterfaces$ICollisionBounds$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$IWireSyncManager" {
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"

export interface $IWireSyncManager {

 "onConnectionRemoved"(arg0: $Connection$Type): void
 "onConnectionEndpointsChanged"(arg0: $Connection$Type): void
 "onConnectionAdded"(arg0: $Connection$Type): void
}

export namespace $IWireSyncManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireSyncManager$Type = ($IWireSyncManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWireSyncManager_ = $IWireSyncManager$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TurretBlockEntity" {
import {$IEBlockInterfaces$IScrewdriverInteraction, $IEBlockInterfaces$IScrewdriverInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IScrewdriverInteraction"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IInteractionObjectIE, $IEBlockInterfaces$IInteractionObjectIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IInteractionObjectIE"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IIEInventory, $IIEInventory$Type} from "packages/blusunrize/immersiveengineering/common/util/inventory/$IIEInventory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IEClientTickableBE, $IEClientTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEClientTickableBE"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MutableEnergyStorage, $MutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$MutableEnergyStorage"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IEMenuTypes$ArgContainer, $IEMenuTypes$ArgContainer$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEMenuTypes$ArgContainer"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$IEBlockInterfaces$IEntityProof, $IEBlockInterfaces$IEntityProof$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IEntityProof"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IEBlockInterfaces$IBlockEntityDrop, $IEBlockInterfaces$IBlockEntityDrop$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockEntityDrop"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $TurretBlockEntity<T extends $TurretBlockEntity<(T)>> extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEClientTickableBE, $IIEInventory, $IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IBlockEntityDrop, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IInteractionObjectIE<(T)>, $IEBlockInterfaces$IEntityProof, $IEBlockInterfaces$IScrewdriverInteraction, $IModelOffsetProvider {
static readonly "ENERGY_CAPACITY": integer
 "energyStorage": $MutableEnergyStorage
 "redstoneControlInverted": boolean
 "owner": string
 "targetList": $List<(string)>
 "whitelist": boolean
 "attackAnimals": boolean
 "attackPlayers": boolean
 "attackNeutrals": boolean
 "rotationYaw": float
 "rotationPitch": float

constructor(arg0: $BlockEntityType$Type<(T)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getFacingLimitation"(): $PlacementLimitation
public "tickClient"(): void
public "getCapability"<T2>(arg0: $Capability$Type<(T2)>, arg1: $Direction$Type): $LazyOptional<(T2)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): $InteractionResult
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "onBEPlaced"(arg0: $BlockPlaceContext$Type): void
public "canUseGui"(arg0: $Player$Type): boolean
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getBlockEntityDrop"(arg0: $LootContext$Type, arg1: $Consumer$Type<($ItemStack$Type)>): void
public "getFacingProperty"(): $Property<($Direction)>
public "isStackValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "doGraphicalUpdates"(): void
public "isDummy"(): boolean
public "tickServer"(): void
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "getRenderBoundingBox"(): $AABB
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public "master"(): $TurretBlockEntity<(T)>
public "canEntityDestroy"(arg0: $Entity$Type): boolean
public "isValidTarget"(arg0: $LivingEntity$Type, arg1: boolean): boolean
public "tickCommon"(): void
public "setDummy"(arg0: boolean): void
public "resetTarget"(): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "getPickBlock"(arg0: $Player$Type, arg1: $BlockState$Type, arg2: $HitResult$Type): $ItemStack
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "isValid"(): boolean
public "getContainerType"(): $IEMenuTypes$ArgContainer<(any), (any)>
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "dummy"(): boolean
get "renderBoundingBox"(): $AABB
get "inventory"(): $NonNullList<($ItemStack)>
set "dummy"(value: boolean)
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "valid"(): boolean
get "containerType"(): $IEMenuTypes$ArgContainer<(any), (any)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurretBlockEntity$Type<T> = ($TurretBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurretBlockEntity_<T> = $TurretBlockEntity$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$DieselToolItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$UpgradeableToolItem, $UpgradeableToolItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$UpgradeableToolItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IEItemInterfaces$IAdvancedFluidItem, $IEItemInterfaces$IAdvancedFluidItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IAdvancedFluidItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DieselToolItem extends $UpgradeableToolItem implements $IEItemInterfaces$IAdvancedFluidItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: string)

public "getCapacity"(arg0: $ItemStack$Type, arg1: integer): integer
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "getMaxHeadDamage"(arg0: $ItemStack$Type): integer
public "getHeadDamage"(arg0: $ItemStack$Type): integer
public "getHarvestLevel"(arg0: $ItemStack$Type, arg1: $Player$Type): $Tier
public "canToolBeUsed"(arg0: $ItemStack$Type): boolean
public "allowFluid"(arg0: $ItemStack$Type, arg1: $FluidStack$Type): boolean
public "isEffective"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "finishUpgradeRecalculation"(arg0: $ItemStack$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getEnchantmentValue"(): integer
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "canModify"(arg0: $ItemStack$Type): boolean
public "getFluid"(arg0: $ItemStack$Type): $FluidStack
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DieselToolItem$Type = ($DieselToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DieselToolItem_ = $DieselToolItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/cloth/$BlockItemBalloon" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockItemIE, $BlockItemIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$BlockItemIE"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockItemBalloon extends $BlockItemIE {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemBalloon$Type = ($BlockItemBalloon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemBalloon_ = $BlockItemBalloon$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess {

 "setAge"(arg0: integer): void

(arg0: integer): void
}

export namespace $ItemEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccess$Type = ($ItemEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityAccess_ = $ItemEntityAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$RevolverAssemblyRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$RevolverAssemblyRecipe, $RevolverAssemblyRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/$RevolverAssemblyRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RevolverAssemblyRecipeSerializer implements $RecipeSerializer<($RevolverAssemblyRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $RevolverAssemblyRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $RevolverAssemblyRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $RevolverAssemblyRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $RevolverAssemblyRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverAssemblyRecipeSerializer$Type = ($RevolverAssemblyRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RevolverAssemblyRecipeSerializer_ = $RevolverAssemblyRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IPlayerInteraction" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEBlockInterfaces$IPlayerInteraction {

 "interact"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean

(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
}

export namespace $IEBlockInterfaces$IPlayerInteraction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IPlayerInteraction$Type = ($IEBlockInterfaces$IPlayerInteraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IPlayerInteraction_ = $IEBlockInterfaces$IPlayerInteraction$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConnectorBlock<T extends ($BlockEntity) & ($IImmersiveConnectable)> extends $IEEntityBlock<(T)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>)
constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), (T)>)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorBlock$Type<T> = ($ConnectorBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectorBlock_<T> = $ConnectorBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$FakeLightBlock$FakeLightBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEBlockInterfaces$ISpawnInterdiction, $IEBlockInterfaces$ISpawnInterdiction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISpawnInterdiction"

export class $FakeLightBlock$FakeLightBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEBlockInterfaces$ISpawnInterdiction {
 "floodlightCoords": $BlockPos

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onLoad"(): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setRemovedIE"(): void
public "getInterdictionRangeSquared"(): double
public "tickServer"(): void
public "onChunkUnloaded"(): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "canTickAny"(): boolean
get "interdictionRangeSquared"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLightBlock$FakeLightBlockEntity$Type = ($FakeLightBlock$FakeLightBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakeLightBlock$FakeLightBlockEntity_ = $FakeLightBlock$FakeLightBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$MultiblockRegistration$ExtraComponent, $MultiblockRegistration$ExtraComponent$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration$ExtraComponent"
import {$MultiblockRegistration$Disassembler, $MultiblockRegistration$Disassembler$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration$Disassembler"
import {$MultiblockRegistrationBuilder, $MultiblockRegistrationBuilder$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistrationBuilder"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMultiblockLogic, $IMultiblockLogic$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockLogic"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MultiblockRegistration<State extends $IMultiblockState> extends $Record {

constructor(logic: $IMultiblockLogic$Type<(State)>, extraComponents: $List$Type<($MultiblockRegistration$ExtraComponent$Type<(State), (any)>)>, masterBE: $Supplier$Type<($BlockEntityType$Type<(any)>)>, dummyBE: $Supplier$Type<($BlockEntityType$Type<(any)>)>, block: $Supplier$Type<(any)>, blockItem: $Supplier$Type<(any)>, mirrorable: boolean, hasComparatorOutput: boolean, redstoneInputAware: boolean, postProcessesShape: boolean, getMasterPosInMB: $Supplier$Type<($BlockPos$Type)>, getSize: $Function$Type<($Level$Type), ($Vec3i$Type)>, disassemble: $MultiblockRegistration$Disassembler$Type, getStructure: $Function$Type<($Level$Type), ($List$Type<($StructureTemplate$StructureBlockInfo$Type)>)>, id: $ResourceLocation$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(arg0: $Level$Type): $Vec3i
public static "builder"<State extends $IMultiblockState>(arg0: $IMultiblockLogic$Type<(State)>, arg1: $ResourceLocation$Type): $MultiblockRegistrationBuilder<(State), (any)>
public "id"(): $ResourceLocation
public "getSize"(): $Function<($Level), ($Vec3i)>
public "block"(): $Supplier<(any)>
public "hasComparatorOutput"(): boolean
public "masterBE"(): $Supplier<($BlockEntityType<(any)>)>
public "logic"(): $IMultiblockLogic<(State)>
public "mirrorable"(): boolean
public "extraComponents"(): $List<($MultiblockRegistration$ExtraComponent<(State), (any)>)>
public "redstoneInputAware"(): boolean
public "getMasterPosInMB"(): $Supplier<($BlockPos)>
public "postProcessesShape"(): boolean
public "masterPosInMB"(): $BlockPos
public "disassemble"(): $MultiblockRegistration$Disassembler
public "getStructure"(): $Function<($Level), ($List<($StructureTemplate$StructureBlockInfo)>)>
public "iconStack"(): $ItemStack
public "blockItem"(): $Supplier<(any)>
public "dummyBE"(): $Supplier<($BlockEntityType<(any)>)>
get "structure"(): $Function<($Level), ($List<($StructureTemplate$StructureBlockInfo)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistration$Type<State> = ($MultiblockRegistration<(State)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockRegistration_<State> = $MultiblockRegistration$Type<(State)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$TurnAndCopyRecipe$MatchLocation" {
import {$AbstractFluidAwareRecipe$IMatchLocation, $AbstractFluidAwareRecipe$IMatchLocation$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$AbstractFluidAwareRecipe$IMatchLocation"
import {$TurnAndCopyRecipe$Rotation, $TurnAndCopyRecipe$Rotation$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$TurnAndCopyRecipe$Rotation"

export class $TurnAndCopyRecipe$MatchLocation implements $AbstractFluidAwareRecipe$IMatchLocation {

constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $TurnAndCopyRecipe$Rotation$Type, arg4: integer, arg5: integer)

public "getListIndex"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipe$MatchLocation$Type = ($TurnAndCopyRecipe$MatchLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurnAndCopyRecipe$MatchLocation_ = $TurnAndCopyRecipe$MatchLocation$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/entities/$IEMinecartEntity$MinecartConstructor" {
import {$IEMinecartEntity, $IEMinecartEntity$Type} from "packages/blusunrize/immersiveengineering/common/entities/$IEMinecartEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IEMinecartEntity$MinecartConstructor {

 "make"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $IEMinecartEntity<(any)>

(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $IEMinecartEntity<(any)>
}

export namespace $IEMinecartEntity$MinecartConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMinecartEntity$MinecartConstructor$Type = ($IEMinecartEntity$MinecartConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMinecartEntity$MinecartConstructor_ = $IEMinecartEntity$MinecartConstructor$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerBlock" {
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$TransformerBlockEntity, $TransformerBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerBlockEntity"

export class $TransformerBlock extends $ConnectorBlock<($TransformerBlockEntity)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerBlock$Type = ($TransformerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformerBlock_ = $TransformerBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/utils/$FastEither" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export class $FastEither<L, R> {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "map"<T>(arg0: $Function$Type<(L), (T)>, arg1: $Function$Type<(R), (T)>): T
public static "left"<L, R>(arg0: L): $FastEither<(L), (R)>
public static "right"<L, R>(arg0: R): $FastEither<(L), (R)>
public "isRight"(): boolean
public "leftNonnull"(): L
public "rightNonnull"(): R
public "isLeft"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastEither$Type<L, R> = ($FastEither<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastEither_<L, R> = $FastEither$Type<(L), (R)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerHVBlockEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TransformerBlockEntity, $TransformerBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerBlockEntity"

export class $TransformerHVBlockEntity extends $TransformerBlockEntity {
 "dummy": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getHigherWiretype"(): string
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "higherWiretype"(): string
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerHVBlockEntity$Type = ($TransformerHVBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformerHVBlockEntity_ = $TransformerHVBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEBlockInterfaces$IGeneralMultiblock, $IEBlockInterfaces$IGeneralMultiblock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IGeneralMultiblock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IEBlockInterfaces$IHasDummyBlocks extends $IEBlockInterfaces$IGeneralMultiblock {

 "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
 "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
 "isDummy"(): boolean
 "master"(): $IEBlockInterfaces$IGeneralMultiblock
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$Type): void
}

export namespace $IEBlockInterfaces$IHasDummyBlocks {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IHasDummyBlocks$Type = ($IEBlockInterfaces$IHasDummyBlocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IHasDummyBlocks_ = $IEBlockInterfaces$IHasDummyBlocks$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FurnaceHeaterBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBlockInterfaces$IActiveState, $IEBlockInterfaces$IActiveState$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IActiveState"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MutableEnergyStorage, $MutableEnergyStorage$Type} from "packages/blusunrize/immersiveengineering/api/energy/$MutableEnergyStorage"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FurnaceHeaterBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE, $IEBlockInterfaces$IActiveState, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHammerInteraction {
 "energyStorage": $MutableEnergyStorage

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "tickServer"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setActive"(arg0: boolean): void
public "getIsActive"(): boolean
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
set "active"(value: boolean)
get "isActive"(): boolean
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceHeaterBlockEntity$Type = ($FurnaceHeaterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnaceHeaterBlockEntity_ = $FurnaceHeaterBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IJEIRecipe, $IJEIRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IJEIRecipe"
import {$IMultiblockRecipe, $IMultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IMultiblockRecipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$FluidTagInput, $FluidTagInput$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$FluidTagInput"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $MultiblockRecipe extends $IESerializableRecipe implements $IMultiblockRecipe, $IJEIRecipe {
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>


public "getItemInputs"(): $List<($IngredientWithSize)>
public "getFluidInputs"(): $List<($FluidTagInput)>
public "getFluidOutputs"(): $List<($FluidStack)>
public "getItemOutputs"(): $NonNullList<($ItemStack)>
public "modifyTimeAndEnergy"(arg0: $DoubleSupplier$Type, arg1: $DoubleSupplier$Type): void
public "getTotalProcessTime"(): integer
public "getTotalProcessEnergy"(): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getDisplayStack"(arg0: $ItemStack$Type): $ItemStack
public "shouldCheckItemAvailability"(): boolean
public "getActualItemOutputs"(): $NonNullList<($ItemStack)>
public "getActualFluidOutputs"(): $List<($FluidStack)>
public "getMultipleProcessTicks"(): integer
public "listInJEI"(): boolean
get "itemInputs"(): $List<($IngredientWithSize)>
get "fluidInputs"(): $List<($FluidTagInput)>
get "fluidOutputs"(): $List<($FluidStack)>
get "itemOutputs"(): $NonNullList<($ItemStack)>
get "totalProcessTime"(): integer
get "totalProcessEnergy"(): integer
get "actualItemOutputs"(): $NonNullList<($ItemStack)>
get "actualFluidOutputs"(): $List<($FluidStack)>
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRecipe$Type = ($MultiblockRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockRecipe_ = $MultiblockRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$PotionFluid" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $PotionFluid extends $Fluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public static "getType"(arg0: $FluidStack$Type): $Potion
public static "getFluidStackForType"(arg0: $Potion$Type, arg1: integer): $FluidStack
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "getHeight"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "isSource"(arg0: $FluidState$Type): boolean
public "getBucket"(): $Item
public "getOwnHeight"(arg0: $FluidState$Type): float
public "getAmount"(arg0: $FluidState$Type): integer
public "getShape"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getFluidType"(): $FluidType
public static "fromTag"(arg0: $CompoundTag$Type): $Potion
public "addInformation"(arg0: $FluidStack$Type, arg1: $Consumer$Type<($Component$Type)>): void
get "bucket"(): $Item
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluid$Type = ($PotionFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFluid_ = $PotionFluid$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData" {
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$WireCollisionData$CollisionInfo, $WireCollisionData$CollisionInfo$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$CollisionInfo"
import {$WireCollisionData$ConnectionSegments, $WireCollisionData$ConnectionSegments$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$ConnectionSegments"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WireCollisionData {


public "getCollisionInfo"(arg0: $BlockPos$Type): $Collection<($WireCollisionData$CollisionInfo)>
public "getWiresIn"(arg0: $SectionPos$Type): $List<($WireCollisionData$ConnectionSegments)>
public "removeConnection"(arg0: $Connection$Type): void
public "addConnection"(arg0: $Connection$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCollisionData$Type = ($WireCollisionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireCollisionData_ = $WireCollisionData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockItemIE, $BlockItemIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$BlockItemIE"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransformerBlockItem extends $BlockItemIE {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerBlockItem$Type = ($TransformerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformerBlockItem_ = $TransformerBlockItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IColouredItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEItemInterfaces$IColouredItem {

 "getColourForIEItem"(arg0: $ItemStack$Type, arg1: integer): integer

(arg0: $ItemStack$Type, arg1: integer): integer
}

export namespace $IEItemInterfaces$IColouredItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IColouredItem$Type = ($IEItemInterfaces$IColouredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEItemInterfaces$IColouredItem_ = $IEItemInterfaces$IColouredItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$StructuralArmBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ICollisionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$ISelectionBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISelectionBounds"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $StructuralArmBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$ICollisionBounds, $IEBlockInterfaces$ISelectionBounds, $IEBlockInterfaces$IBlockBounds {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "onNeighborBlockChange"(arg0: $BlockPos$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "getFacingLimitation"(): $PlacementLimitation
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "getSlopePosition"(): integer
public "isOnCeiling"(): boolean
public "getTotalLength"(): integer
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "slopePosition"(): integer
get "onCeiling"(): boolean
get "totalLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructuralArmBlockEntity$Type = ($StructuralArmBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructuralArmBlockEntity_ = $StructuralArmBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/gui/$IEContainerMenu$MenuContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $IEContainerMenu$MenuContext extends $Record {


public "type"(): $MenuType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): integer
public "isValid"(): $Predicate<($Player)>
public "setChanged"(): $Runnable
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$MenuContext$Type = ($IEContainerMenu$MenuContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEContainerMenu$MenuContext_ = $IEContainerMenu$MenuContext$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IEItemInterfaces$IScrollwheel" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEItemInterfaces$IScrollwheel {

 "onScrollwheel"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean): void

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean): void
}

export namespace $IEItemInterfaces$IScrollwheel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEItemInterfaces$IScrollwheel$Type = ($IEItemInterfaces$IScrollwheel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEItemInterfaces$IScrollwheel_ = $IEItemInterfaces$IScrollwheel$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IETickableBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IETickableBase {

 "canTickAny"(): boolean
}

export namespace $IETickableBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IETickableBase$Type = ($IETickableBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IETickableBase_ = $IETickableBase$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/register/$IEPotions$IEPotion" {
import {$IClientMobEffectExtensions, $IClientMobEffectExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $IEPotions$IEPotion extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: integer, arg5: boolean, arg6: boolean)

public "initializeClient"(arg0: $Consumer$Type<($IClientMobEffectExtensions$Type)>): void
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEPotions$IEPotion$Type = ($IEPotions$IEPotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEPotions$IEPotion_ = $IEPotions$IEPotion$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$CropBlockAccess" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"

export interface $CropBlockAccess {

 "invokeGetAgeProperty"(): $IntegerProperty

(): $IntegerProperty
}

export namespace $CropBlockAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBlockAccess$Type = ($CropBlockAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropBlockAccess_ = $CropBlockAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$HammerCrushingRecipeSerializer" {
import {$LazyShapelessRecipe, $LazyShapelessRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/$LazyShapelessRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $HammerCrushingRecipeSerializer extends $IERecipeSerializer<($LazyShapelessRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $LazyShapelessRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $LazyShapelessRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $LazyShapelessRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerCrushingRecipeSerializer$Type = ($HammerCrushingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HammerCrushingRecipeSerializer_ = $HammerCrushingRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$BasicConnectorBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IEBlocks$BlockEntry, $IEBlocks$BlockEntry$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEBlocks$BlockEntry"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$ConnectorBlock, $ConnectorBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ConnectorBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BasicConnectorBlock<T extends ($BlockEntity) & ($IImmersiveConnectable)> extends $ConnectorBlock<(T)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>)

public static "forPower"(arg0: string, arg1: boolean): $IEBlocks$BlockEntry<($BasicConnectorBlock<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicConnectorBlock$Type<T> = ($BasicConnectorBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicConnectorBlock_<T> = $BasicConnectorBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional" {
import {$IEBlockInterfaces$IDirectionalBE, $IEBlockInterfaces$IDirectionalBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IDirectionalBE"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IEBlockInterfaces$BlockstateProvider, $IEBlockInterfaces$BlockstateProvider$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$BlockstateProvider"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IEBlockInterfaces$IStateBasedDirectional extends $IEBlockInterfaces$IDirectionalBE, $IEBlockInterfaces$BlockstateProvider {

 "getFacingProperty"(): $Property<($Direction)>
 "setFacing"(arg0: $Direction$Type): void
 "getFacing"(): $Direction
 "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
 "getFacingLimitation"(): $PlacementLimitation
 "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
 "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$Type): void
}

export namespace $IEBlockInterfaces$IStateBasedDirectional {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IStateBasedDirectional$Type = ($IEBlockInterfaces$IStateBasedDirectional);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlockInterfaces$IStateBasedDirectional_ = $IEBlockInterfaces$IStateBasedDirectional$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$GeneratorFuelSerializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$GeneratorFuel, $GeneratorFuel$Type} from "packages/blusunrize/immersiveengineering/api/energy/$GeneratorFuel"

export class $GeneratorFuelSerializer extends $IERecipeSerializer<($GeneratorFuel)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GeneratorFuel$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GeneratorFuel
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorFuelSerializer$Type = ($GeneratorFuelSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratorFuelSerializer_ = $GeneratorFuelSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/world/$IEOreFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$IEOreFeature$IEOreFeatureConfig, $IEOreFeature$IEOreFeatureConfig$Type} from "packages/blusunrize/immersiveengineering/common/world/$IEOreFeature$IEOreFeatureConfig"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $IEOreFeature extends $Feature<($IEOreFeature$IEOreFeatureConfig)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($IEOreFeature$IEOreFeatureConfig$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEOreFeature$Type = ($IEOreFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEOreFeature_ = $IEOreFeature$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ConnectionPoint extends $Record implements $Comparable<($ConnectionPoint)> {

constructor(arg0: $CompoundTag$Type)
constructor(position: $BlockPos$Type, index: integer)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ConnectionPoint$Type): integer
public "position"(): $BlockPos
public "createTag"(): $CompoundTag
public "getY"(): integer
public "getX"(): integer
public "getZ"(): integer
get "y"(): integer
get "x"(): integer
get "z"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionPoint$Type = ($ConnectionPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionPoint_ = $ConnectionPoint$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$GliderItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GliderItem extends $IEBaseItem implements $Equipable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getEquipmentSlot"(): $EquipmentSlot
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
public "getEquipSound"(): $SoundEvent
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GliderItem$Type = ($GliderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GliderItem_ = $GliderItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/component/$IMultiblockComponent" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IMultiblockContext, $IMultiblockContext$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IMultiblockContext"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CapabilityPosition, $CapabilityPosition$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$CapabilityPosition"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMultiblockComponent<State> {

 "getCapability"<T>(arg0: $IMultiblockContext$Type<(State)>, arg1: $CapabilityPosition$Type, arg2: $Capability$Type<(T)>): $LazyOptional<(T)>
 "onEntityCollision"(arg0: $IMultiblockContext$Type<(State)>, arg1: $BlockPos$Type, arg2: $Entity$Type): void
 "click"(arg0: $IMultiblockContext$Type<(State)>, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: boolean): $InteractionResult
 "dropExtraItems"(arg0: State, arg1: $Consumer$Type<($ItemStack$Type)>): void
}

export namespace $IMultiblockComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockComponent$Type<State> = ($IMultiblockComponent<(State)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockComponent_<State> = $IMultiblockComponent$Type<(State)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$BlueprintCraftingRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$BlueprintCraftingRecipe, $BlueprintCraftingRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$BlueprintCraftingRecipe"

export class $BlueprintCraftingRecipeSerializer extends $IERecipeSerializer<($BlueprintCraftingRecipe)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BlueprintCraftingRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BlueprintCraftingRecipe$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BlueprintCraftingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintCraftingRecipeSerializer$Type = ($BlueprintCraftingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintCraftingRecipeSerializer_ = $BlueprintCraftingRecipeSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$MixerRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$FluidTagInput, $FluidTagInput$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$FluidTagInput"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $MixerRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($MixerRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($MixerRecipe)>
readonly "itemInputs": ($IngredientWithSize)[]
readonly "fluidInput": $FluidTagInput
readonly "fluidOutput": $FluidStack
readonly "fluidAmount": integer
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStack$Type, arg2: $FluidTagInput$Type, arg3: ($IngredientWithSize$Type)[], arg4: integer)

public "matches"(arg0: $FluidStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): boolean
public static "findRecipe"(arg0: $Level$Type, arg1: $FluidStack$Type, arg2: $NonNullList$Type<($ItemStack$Type)>): $MixerRecipe
public "getFluidOutput"(arg0: $FluidStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): $FluidStack
public "getUsedSlots"(arg0: $FluidStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): (integer)[]
public "shouldCheckItemAvailability"(): boolean
public "getMultipleProcessTicks"(): integer
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixerRecipe$Type = ($MixerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixerRecipe_ = $MixerRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEBlockInterfaces$IColouredBlock, $IEBlockInterfaces$IColouredBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IColouredBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $IEEntityBlock<T extends $BlockEntity> extends $IEBaseBlock implements $IEBlockInterfaces$IColouredBlock, $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: $BlockBehaviour$Properties$Type, arg2: boolean)
constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), (T)>, arg1: $BlockBehaviour$Properties$Type, arg2: boolean)
constructor(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), (T)>, arg1: $BlockBehaviour$Properties$Type)

public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "hasCustomBlockColours"(): boolean
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "screwdriverUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "setHasColours"(): $IEEntityBlock<(any)>
public "getRenderColour"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public static "areAllReplaceable"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $BlockPlaceContext$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T2 extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T2)>): $BlockEntityTicker<(T2)>
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEEntityBlock$Type<T> = ($IEEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEEntityBlock_<T> = $IEEntityBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$FertilizerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FertilizerItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizerItem$Type = ($FertilizerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FertilizerItem_ = $FertilizerItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$AlloyRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $AlloyRecipe extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($AlloyRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($AlloyRecipe)>
readonly "input0": $IngredientWithSize
readonly "input1": $IngredientWithSize
readonly "output": $Lazy<($ItemStack)>
readonly "time": integer
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Lazy$Type<($ItemStack$Type)>, arg2: $IngredientWithSize$Type, arg3: $IngredientWithSize$Type, arg4: integer)

public "matches"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $AlloyRecipe$Type): $AlloyRecipe
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloyRecipe$Type = ($AlloyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloyRecipe_ = $AlloyRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorBelt" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConveyorType, $IConveyorType$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$ConveyorHandler$ConveyorDirection, $ConveyorHandler$ConveyorDirection$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$ConveyorDirection"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IConveyorBelt {

 "getType"(): $IConveyorType<(any)>
 "isActive"(): boolean
 "sigTransportDirections"(): ($Direction)[]
 "getConveyorDirection"(): $ConveyorHandler$ConveyorDirection
 "changeConveyorDirection"(): boolean
 "setConveyorDirection"(arg0: $ConveyorHandler$ConveyorDirection$Type): boolean
 "getNextConveyorCandidates"(): $List<($BlockPos)>
 "getOutputInventory"(): $BlockPos
 "getOutputConveyor"(): $IConveyorBelt
 "onItemDeployed"(arg0: $ItemEntity$Type): void
 "getCover"(): $Block
 "getDyeColour"(): $DyeColor
 "isBlocked"(): boolean
 "setCover"(arg0: $Block$Type): void
 "writeConveyorNBT"(): $CompoundTag
 "getSelectionShape"(): $VoxelShape
 "getCollisionShape"(): $VoxelShape
 "readConveyorNBT"(arg0: $CompoundTag$Type): void
 "playerInteraction"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type, arg3: float, arg4: float, arg5: float, arg6: $Direction$Type): boolean
 "setDyeColour"(arg0: $DyeColor$Type): boolean
 "isOutputBlocked"(): boolean
 "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "handleInsertion"(arg0: $ItemEntity$Type, arg1: $ConveyorHandler$ConveyorDirection$Type, arg2: double, arg3: double): void
 "getDirection"(arg0: $Entity$Type, arg1: boolean): $Vec3
 "onEntityCollision"(arg0: $Entity$Type): void
 "tickServer"(): void
 "getFacing"(): $Direction
 "getBlockEntity"(): $BlockEntity
}

export namespace $IConveyorBelt {
const conveyorBounds: $VoxelShape
const highConveyorBounds: $VoxelShape
const FULL_BLOCK: $VoxelShape
function getCoverOrDefault(arg0: $IConveyorBelt$Type, arg1: $Block$Type): $Block
function isCovered(arg0: $IConveyorBelt$Type, arg1: $Block$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConveyorBelt$Type = ($IConveyorBelt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConveyorBelt_ = $IConveyorBelt$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TransformerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$AbstractTransformerBlockEntity, $AbstractTransformerBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$AbstractTransformerBlockEntity"
import {$IModelOffsetProvider, $IModelOffsetProvider$Type} from "packages/blusunrize/immersiveengineering/api/client/$IModelOffsetProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IEBlockInterfaces$IGeneralMultiblock, $IEBlockInterfaces$IGeneralMultiblock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IGeneralMultiblock"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IImmersiveConnectable, $IImmersiveConnectable$Type} from "packages/blusunrize/immersiveengineering/api/wires/$IImmersiveConnectable"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEBlockInterfaces$IMirrorAble, $IEBlockInterfaces$IMirrorAble$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IMirrorAble"
import {$TargetingInfo, $TargetingInfo$Type} from "packages/blusunrize/immersiveengineering/api/$TargetingInfo"
import {$IEBlockInterfaces$IHasDummyBlocks, $IEBlockInterfaces$IHasDummyBlocks$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHasDummyBlocks"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TransformerBlockEntity extends $AbstractTransformerBlockEntity implements $IEBlockInterfaces$IMirrorAble, $IEBlockInterfaces$IHasDummyBlocks, $IModelOffsetProvider, $IEBlockInterfaces$IBlockBounds {
 "dummy": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getFacingLimitation"(): $PlacementLimitation
public "getConnectionMaster"(arg0: $WireType$Type, arg1: $TargetingInfo$Type): $BlockPos
public "getInternalConnections"(): $Iterable<(any)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getTargetedPoint"(arg0: $TargetingInfo$Type, arg1: $Vec3i$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $IImmersiveConnectable$Type, arg3: $ConnectionPoint$Type): void
public "getIgnored"(arg0: $IImmersiveConnectable$Type): $Set<($BlockPos)>
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "breakDummies"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "placeDummies"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public "isDummy"(): boolean
public "getModelOffset"(arg0: $BlockState$Type, arg1: $Vec3i$Type): $BlockPos
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "setMirrored"(arg0: boolean): void
public "getIsMirrored"(): boolean
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "facingLimitation"(): $PlacementLimitation
get "internalConnections"(): $Iterable<(any)>
get "dummy"(): boolean
set "mirrored"(value: boolean)
get "isMirrored"(): boolean
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerBlockEntity$Type = ($TransformerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformerBlockEntity_ = $TransformerBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$IConveyorBlock" {
import {$IConveyorType, $IConveyorType$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorType"

export interface $ConveyorHandler$IConveyorBlock {

 "getType"(): $IConveyorType<(any)>

(): $IConveyorType<(any)>
}

export namespace $ConveyorHandler$IConveyorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$IConveyorBlock$Type = ($ConveyorHandler$IConveyorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorHandler$IConveyorBlock_ = $ConveyorHandler$IConveyorBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$WireCollisionData$ConnectionSegments" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"

export class $WireCollisionData$ConnectionSegments extends $Record {

constructor(connection: $Connection$Type, firstPointToRender: integer, lastPointToRender: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "connection"(): $Connection
public "firstPointToRender"(): integer
public "lastPointToRender"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCollisionData$ConnectionSegments$Type = ($WireCollisionData$ConnectionSegments);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireCollisionData$ConnectionSegments_ = $WireCollisionData$ConnectionSegments$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$GeneratedListSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$GeneratedListRecipe, $GeneratedListRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/$GeneratedListRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GeneratedListSerializer extends $IERecipeSerializer<($GeneratedListRecipe<(any), (any)>)> {

constructor()

public "readFromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GeneratedListRecipe<(any), (any)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GeneratedListRecipe$Type<(any), (any)>): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GeneratedListRecipe<(any), (any)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedListSerializer$Type = ($GeneratedListSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratedListSerializer_ = $GeneratedListSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$FermenterRecipe" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $FermenterRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($FermenterRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($FermenterRecipe)>
 "input": $IngredientWithSize
readonly "fluidOutput": $FluidStack
readonly "itemOutput": $Lazy<($ItemStack)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $FluidStack$Type, arg2: $Lazy$Type<($ItemStack$Type)>, arg3: $IngredientWithSize$Type, arg4: integer)

public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type): $FermenterRecipe
public "setInputSize"(arg0: integer): $FermenterRecipe
public static "getFluidValuesSorted"(arg0: $Level$Type, arg1: $Fluid$Type, arg2: boolean): $SortedMap<($Component), (integer)>
public "getMultipleProcessTicks"(): integer
set "inputSize"(value: integer)
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermenterRecipe$Type = ($FermenterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FermenterRecipe_ = $FermenterRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/energy/$WindmillBiome" {
import {$FastEither, $FastEither$Type} from "packages/blusunrize/immersiveengineering/api/utils/$FastEither"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"

export class $WindmillBiome extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($WindmillBiome)>)>
static readonly "ALL_BIOMES": $CachedRecipeList<($WindmillBiome)>
readonly "biomes": $FastEither<($TagKey<($Biome)>), ($List<($Biome)>)>
readonly "modifier": float
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Biome$Type)>, arg2: float)
constructor(arg0: $ResourceLocation$Type, arg1: $TagKey$Type<($Biome$Type)>, arg2: float)

public "matches"(arg0: $Holder$Type<($Biome$Type)>): boolean
public "getModifier"(): float
public static "getBiome"(arg0: $Level$Type, arg1: $Holder$Type<($Biome$Type)>, arg2: $WindmillBiome$Type): $WindmillBiome
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "modifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBiome$Type = ($WindmillBiome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindmillBiome_ = $WindmillBiome$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$PotionFluid$PotionFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $PotionFluid$PotionFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor()

public "getDescription"(arg0: $FluidStack$Type): $Component
public "getBucket"(arg0: $FluidStack$Type): $ItemStack
public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluid$PotionFluidType$Type = ($PotionFluid$PotionFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFluid$PotionFluidType_ = $PotionFluid$PotionFluidType$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ConveyorBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConveyorBeltBlockEntity, $ConveyorBeltBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$ConveyorBeltBlockEntity"
import {$IConveyorType, $IConveyorType$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$IConveyorType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ConveyorHandler$IConveyorBlock, $ConveyorHandler$IConveyorBlock$Type} from "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$IConveyorBlock"

export class $ConveyorBlock extends $IEEntityBlock<($ConveyorBeltBlockEntity<(any)>)> implements $ConveyorHandler$IConveyorBlock {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "DEFAULT_COVER": string
static readonly "FACING": $EnumProperty<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $IConveyorType$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getType"(): $IConveyorType<(any)>
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): void
public static "makeCovered"(arg0: $ItemLike$Type, arg1: $Block$Type): $ItemStack
public static "getCover"(arg0: $ItemStack$Type): $Block
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
get "type"(): $IConveyorType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBlock$Type = ($ConveyorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorBlock_ = $ConveyorBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/fluids/$ConcreteFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IEFluid, $IEFluid$Type} from "packages/blusunrize/immersiveengineering/common/fluids/$IEFluid"
import {$IEFluids$FluidEntry, $IEFluids$FluidEntry$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEFluids$FluidEntry"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ConcreteFluid extends $IEFluid {
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $IEFluids$FluidEntry$Type)

public "getTickDelay"(arg0: $LevelReader$Type): integer
public "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): void
public "getFlowingFluidState"(arg0: integer, arg1: boolean, arg2: $FluidState$Type, arg3: integer): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcreteFluid$Type = ($ConcreteFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcreteFluid_ = $ConcreteFluid$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$FurnaceTEAccess" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"
import {$RecipeManager$CachedCheck, $RecipeManager$CachedCheck$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager$CachedCheck"

export interface $FurnaceTEAccess {

 "getQuickCheck"(): $RecipeManager$CachedCheck<($Container), (any)>
 "getDataAccess"(): $ContainerData
}

export namespace $FurnaceTEAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceTEAccess$Type = ($FurnaceTEAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnaceTEAccess_ = $FurnaceTEAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$ArcFurnaceRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StackWithChance, $StackWithChance$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$StackWithChance"
import {$MultiblockRecipe, $MultiblockRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$MultiblockRecipe"
import {$IngredientWithSize, $IngredientWithSize$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IngredientWithSize"

export class $ArcFurnaceRecipe extends $MultiblockRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($ArcFurnaceRecipe)>)>
readonly "input": $IngredientWithSize
readonly "additives": ($IngredientWithSize)[]
readonly "output": $Lazy<($NonNullList<($ItemStack)>)>
readonly "secondaryOutputs": $List<($StackWithChance)>
readonly "slag": $Lazy<($ItemStack)>
 "specialRecipeType": string
static "specialRecipeTypes": $List<(string)>
static readonly "RECIPES": $CachedRecipeList<($ArcFurnaceRecipe)>
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $List$Type<($Lazy$Type<($ItemStack$Type)>)>, arg2: $Lazy$Type<($ItemStack$Type)>, arg3: $List$Type<($StackWithChance$Type)>, arg4: integer, arg5: integer, arg6: $IngredientWithSize$Type, ...arg7: ($IngredientWithSize$Type)[])

public "matches"(arg0: $ItemStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>): boolean
public static "findRecipe"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $NonNullList$Type<($ItemStack$Type)>): $ArcFurnaceRecipe
public "isValidAdditive"(arg0: $ItemStack$Type): boolean
public static "isValidRecipeInput"(arg0: $Level$Type, arg1: $ItemStack$Type): boolean
public "getBaseOutputs"(): $NonNullList<($ItemStack)>
public "getConsumedAdditives"(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: boolean): (integer)[]
public "setSpecialRecipeType"(arg0: string): $ArcFurnaceRecipe
public "generateActualOutput"(arg0: $ItemStack$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: long): $NonNullList<($ItemStack)>
public static "isValidRecipeAdditive"(arg0: $Level$Type, arg1: $ItemStack$Type): boolean
public "isValidInput"(arg0: $ItemStack$Type): boolean
public "getMultipleProcessTicks"(): integer
get "baseOutputs"(): $NonNullList<($ItemStack)>
set "specialRecipeType"(value: string)
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcFurnaceRecipe$Type = ($ArcFurnaceRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcFurnaceRecipe_ = $ArcFurnaceRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$TeslaCoilBlockEntity$LightningAnimation" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TeslaCoilBlockEntity$LightningAnimation {
 "startPos": $Vec3
 "targetEntity": $LivingEntity
 "targetPos": $Vec3
 "subPoints": $List<($Vec3)>

constructor(arg0: $Vec3$Type, arg1: $LivingEntity$Type)
constructor(arg0: $Vec3$Type, arg1: $Vec3$Type)

public "tick"(): boolean
public "shoudlRecalculateLightning"(): boolean
public "createLightning"(arg0: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlockEntity$LightningAnimation$Type = ($TeslaCoilBlockEntity$LightningAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeslaCoilBlockEntity$LightningAnimation_ = $TeslaCoilBlockEntity$LightningAnimation$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/world/$FeatureMineralVein" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$HashMultimap, $HashMultimap$Type} from "packages/com/google/common/collect/$HashMultimap"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $FeatureMineralVein extends $Feature<($NoneFeatureConfiguration)> {
static "veinGeneratedChunks": $HashMultimap<($ResourceKey<($Level)>), ($ChunkPos)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureMineralVein$Type = ($FeatureMineralVein);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatureMineralVein_ = $FeatureMineralVein$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$SimpleRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SimpleRecipeSerializer<R extends $Recipe<(any)>> extends $Record implements $RecipeSerializer<(R)> {

constructor(create: $Function$Type<($ResourceLocation$Type), (R)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "create"(): $Function<($ResourceLocation), (R)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRecipeSerializer$Type<R> = ($SimpleRecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleRecipeSerializer_<R> = $SimpleRecipeSerializer$Type<(R)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/utils/$DirectionalBlockPos" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DirectionalBlockPos extends $Record {

constructor(position: $BlockPos$Type, side: $Direction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "position"(): $BlockPos
public "side"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalBlockPos$Type = ($DirectionalBlockPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalBlockPos_ = $DirectionalBlockPos$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$IEBlockInterfaces$BlockstateProvider, $IEBlockInterfaces$BlockstateProvider$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$BlockstateProvider"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IEBaseBlockEntity extends $BlockEntity implements $IEBlockInterfaces$BlockstateProvider {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
public "onLoad"(): void
public "invalidateCaps"(): void
public "receiveMessageFromServer"(arg0: $CompoundTag$Type): void
public "markContainingBlockForUpdate"(arg0: $BlockState$Type): void
public "addCapInvalidateHook"(arg0: $Runnable$Type): void
public "receiveMessageFromClient"(arg0: $CompoundTag$Type): void
public "onEntityCollision"(arg0: $Level$Type, arg1: $Entity$Type): void
public "setOverrideState"(arg0: $BlockState$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "markBlockForUpdate"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setRemovedIE"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getLevelNonnull"(): $Level
public "load"(arg0: $CompoundTag$Type): void
public "setLevel"(arg0: $Level$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public "onChunkUnloaded"(): void
/**
 * 
 * @deprecated
 */
public "setBlockState"(arg0: $BlockState$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getBlockState"(): $BlockState
public "getModelData"(): $ModelData
public "setChanged"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
set "overrideState"(value: $BlockState$Type)
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "levelNonnull"(): $Level
set "level"(value: $Level$Type)
get "updateTag"(): $CompoundTag
set "blockState"(value: $BlockState$Type)
get "blockState"(): $BlockState
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseBlockEntity$Type = ($IEBaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBaseBlockEntity_ = $IEBaseBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$PaletteAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PaletteAccess {

}

export namespace $PaletteAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteAccess$Type = ($PaletteAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteAccess_ = $PaletteAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$LogicCircuitBoardItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$LogicCircuitHandler$LogicCircuitInstruction, $LogicCircuitHandler$LogicCircuitInstruction$Type} from "packages/blusunrize/immersiveengineering/api/tool/$LogicCircuitHandler$LogicCircuitInstruction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LogicCircuitBoardItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getInstruction"(arg0: $ItemStack$Type): $LogicCircuitHandler$LogicCircuitInstruction
public static "buildCircuitBoard"(arg0: $LogicCircuitHandler$LogicCircuitInstruction$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicCircuitBoardItem$Type = ($LogicCircuitBoardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicCircuitBoardItem_ = $LogicCircuitBoardItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/$TemplatePoolAccess" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $TemplatePoolAccess {

 "setRawTemplates"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
}

export namespace $TemplatePoolAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplatePoolAccess$Type = ($TemplatePoolAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplatePoolAccess_ = $TemplatePoolAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/$RevolverAssemblyRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TurnAndCopyRecipe, $TurnAndCopyRecipe$Type} from "packages/blusunrize/immersiveengineering/common/crafting/fluidaware/$TurnAndCopyRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RevolverAssemblyRecipe extends $TurnAndCopyRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverAssemblyRecipe$Type = ($RevolverAssemblyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RevolverAssemblyRecipe_ = $RevolverAssemblyRecipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$RevolverpartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RevolverpartItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverpartItem$Type = ($RevolverpartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RevolverpartItem_ = $RevolverpartItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/crafting/$BlastFurnaceFuel" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$IESerializableRecipe, $IESerializableRecipe$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IESerializableRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CachedRecipeList, $CachedRecipeList$Type} from "packages/blusunrize/immersiveengineering/api/crafting/cache/$CachedRecipeList"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"

export class $BlastFurnaceFuel extends $IESerializableRecipe {
static "SERIALIZER": $RegistryObject<($IERecipeSerializer<($BlastFurnaceFuel)>)>
static readonly "RECIPES": $CachedRecipeList<($BlastFurnaceFuel)>
readonly "input": $Ingredient
readonly "burnTime": integer
static readonly "LAZY_EMPTY": $Lazy<($ItemStack)>

constructor(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer)

public static "isValidBlastFuel"(arg0: $Level$Type, arg1: $ItemStack$Type): boolean
public static "getBlastFuelTime"(arg0: $Level$Type, arg1: $ItemStack$Type): integer
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceFuel$Type = ($BlastFurnaceFuel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastFurnaceFuel_ = $BlastFurnaceFuel$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/tool/conveyor/$ConveyorHandler$IConveyorAttachable" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $ConveyorHandler$IConveyorAttachable {

 "sigOutputDirections"(): ($Direction)[]
 "getFacing"(): $Direction
}

export namespace $ConveyorHandler$IConveyorAttachable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorHandler$IConveyorAttachable$Type = ($ConveyorHandler$IConveyorAttachable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConveyorHandler$IConveyorAttachable_ = $ConveyorHandler$IConveyorAttachable$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$MaintenanceKitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MaintenanceKitItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaintenanceKitItem$Type = ($MaintenanceKitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaintenanceKitItem_ = $MaintenanceKitItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ElectricLanternBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEBlockInterfaces$IActiveState, $IEBlockInterfaces$IActiveState$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IActiveState"
import {$IEServerTickableBE, $IEServerTickableBE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/ticking/$IEServerTickableBE"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ImmersiveConnectableBlockEntity"
import {$WireType, $WireType$Type} from "packages/blusunrize/immersiveengineering/api/wires/$WireType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IBlockBounds$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IBlockBounds"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnergyTransferHandler$EnergyConnector, $EnergyTransferHandler$EnergyConnector$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$EnergyTransferHandler$EnergyConnector"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ConnectionPoint, $ConnectionPoint$Type} from "packages/blusunrize/immersiveengineering/api/wires/$ConnectionPoint"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IEBlockInterfaces$ISpawnInterdiction, $IEBlockInterfaces$ISpawnInterdiction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$ISpawnInterdiction"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"

export class $ElectricLanternBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$ISpawnInterdiction, $IEServerTickableBE, $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IBlockBounds, $IEBlockInterfaces$IActiveState, $EnergyTransferHandler$EnergyConnector {
 "energyStorage": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "onLoad"(): void
public "getBlockBounds"(arg0: $CollisionContext$Type): $VoxelShape
public "getConnectionOffset"(arg0: $ConnectionPoint$Type, arg1: $ConnectionPoint$Type, arg2: $WireType$Type): $Vec3
public "getFacingLimitation"(): $PlacementLimitation
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "setRemovedIE"(): void
public "canConnectCable"(arg0: $WireType$Type, arg1: $ConnectionPoint$Type, arg2: $Vec3i$Type): boolean
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getInterdictionRangeSquared"(): double
public "tickServer"(): void
public "onChunkUnloaded"(): void
public "isSource"(arg0: $ConnectionPoint$Type): boolean
public "getRequestedEnergy"(): integer
public "isSink"(arg0: $ConnectionPoint$Type): boolean
public "insertEnergy"(arg0: integer): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "setActive"(arg0: boolean): void
public "getIsActive"(): boolean
public "onEnergyPassedThrough"(arg0: double): void
public "extractEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "interdictionRangeSquared"(): double
get "requestedEnergy"(): integer
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
set "active"(value: boolean)
get "isActive"(): boolean
get "availableEnergy"(): integer
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricLanternBlockEntity$Type = ($ElectricLanternBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricLanternBlockEntity_ = $ElectricLanternBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/register/$IEBlocks$BlockEntry" {
import {$PostBlock, $PostBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$PostBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$IEBaseBlock, $IEBaseBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$WallmountBlock, $WallmountBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$WallmountBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ScaffoldingBlock, $ScaffoldingBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/generic/$ScaffoldingBlock"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $IEBlocks$BlockEntry<T extends $Block> implements $Supplier<(T)>, $ItemLike {
static readonly "ALL_ENTRIES": $Collection<($IEBlocks$BlockEntry<(any)>)>

constructor(arg0: $IEBlocks$BlockEntry$Type<(any)>)
constructor(arg0: T)
constructor(arg0: string, arg1: $Supplier$Type<($BlockBehaviour$Properties$Type)>, arg2: $Function$Type<($BlockBehaviour$Properties$Type), (T)>)

public "get"(): T
public "getProperties"(): $BlockBehaviour$Properties
public "getId"(): $ResourceLocation
public static "fence"(arg0: string, arg1: $Supplier$Type<($BlockBehaviour$Properties$Type)>): $IEBlocks$BlockEntry<($FenceBlock)>
public static "post"(arg0: string, arg1: $Supplier$Type<($BlockBehaviour$Properties$Type)>): $IEBlocks$BlockEntry<($PostBlock)>
public "getRegObject"(): $RegistryObject<(any)>
public static "wallmount"(arg0: string, arg1: $Supplier$Type<($BlockBehaviour$Properties$Type)>): $IEBlocks$BlockEntry<($WallmountBlock)>
public "defaultBlockState"(): $BlockState
public static "barrel"(arg0: string, arg1: boolean): $IEBlocks$BlockEntry<($IEEntityBlock<(any)>)>
public static "simple"(arg0: string, arg1: $Supplier$Type<($BlockBehaviour$Properties$Type)>, arg2: $Consumer$Type<($IEBaseBlock$Type)>): $IEBlocks$BlockEntry<($IEBaseBlock)>
public static "simple"(arg0: string, arg1: $Supplier$Type<($BlockBehaviour$Properties$Type)>): $IEBlocks$BlockEntry<($IEBaseBlock)>
public static "scaffolding"(arg0: string, arg1: $Supplier$Type<($BlockBehaviour$Properties$Type)>): $IEBlocks$BlockEntry<($ScaffoldingBlock)>
public "asItem"(): $Item
get "properties"(): $BlockBehaviour$Properties
get "id"(): $ResourceLocation
get "regObject"(): $RegistryObject<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlocks$BlockEntry$Type<T> = ($IEBlocks$BlockEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEBlocks$BlockEntry_<T> = $IEBlocks$BlockEntry$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/wires/$WireType" {
import {$LinkedHashSet, $LinkedHashSet$Type} from "packages/java/util/$LinkedHashSet"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Connection, $Connection$Type} from "packages/blusunrize/immersiveengineering/api/wires/$Connection"
import {$ILocalHandlerProvider, $ILocalHandlerProvider$Type} from "packages/blusunrize/immersiveengineering/api/wires/localhandlers/$ILocalHandlerProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $WireType implements $ILocalHandlerProvider {
static readonly "LV_CATEGORY": string
static readonly "MV_CATEGORY": string
static readonly "HV_CATEGORY": string
static readonly "STRUCTURE_CATEGORY": string
static readonly "REDSTONE_CATEGORY": string
static "COPPER": $WireType
static "ELECTRUM": $WireType
static "STEEL": $WireType
static "STRUCTURE_ROPE": $WireType
static "STRUCTURE_STEEL": $WireType
static "REDSTONE": $WireType
static "COPPER_INSULATED": $WireType
static "ELECTRUM_INSULATED": $WireType
static "INTERNAL_CONNECTION": $WireType

constructor()

public static "getValue"(arg0: string): $WireType
public static "getValues"(): $LinkedHashSet<($WireType)>
public "getUniqueName"(): string
public "getCategory"(): string
public "getMaxLength"(): integer
public "getRenderDiameter"(): double
public "getColour"(arg0: $Connection$Type): integer
public static "getIEWireTypes"(): $Collection<($WireType)>
public "getSlack"(): double
public "getWireCoil"(arg0: $Connection$Type): $ItemStack
public "getRequestedHandlers"(): $Collection<($ResourceLocation)>
get "values"(): $LinkedHashSet<($WireType)>
get "uniqueName"(): string
get "category"(): string
get "maxLength"(): integer
get "renderDiameter"(): double
get "iEWireTypes"(): $Collection<($WireType)>
get "slack"(): double
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$Type = ($WireType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireType_ = $WireType$Type;
}}
declare module "packages/blusunrize/immersiveengineering/mixin/accessors/client/$ParticleManagerAccess" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleManagerAccess {

 "invokeMakeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}

export namespace $ParticleManagerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManagerAccess$Type = ($ParticleManagerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleManagerAccess_ = $ParticleManagerAccess$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockFace" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RelativeBlockFace, $RelativeBlockFace$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$RelativeBlockFace"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MultiblockFace extends $Record {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $RelativeBlockFace$Type)
constructor(face: $RelativeBlockFace$Type, posInMultiblock: $BlockPos$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "face"(): $RelativeBlockFace
public "posInMultiblock"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockFace$Type = ($MultiblockFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockFace_ = $MultiblockFace$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$FluidPipeBlockEntity$DirectionalFluidOutput" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $FluidPipeBlockEntity$DirectionalFluidOutput extends $Record {

constructor(output: $IFluidHandler$Type, direction: $Direction$Type, containingTile: $BlockEntity$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "direction"(): $Direction
public "output"(): $IFluidHandler
public "containingTile"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlockEntity$DirectionalFluidOutput$Type = ($FluidPipeBlockEntity$DirectionalFluidOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPipeBlockEntity$DirectionalFluidOutput_ = $FluidPipeBlockEntity$DirectionalFluidOutput$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$SteelArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SteelArmorItem extends $ArmorItem {
static "mat": $ArmorMaterial
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type)

public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteelArmorItem$Type = ($SteelArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteelArmorItem_ = $SteelArmorItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$TurntableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IEBlockInterfaces$IHammerInteraction, $IEBlockInterfaces$IHammerInteraction$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IHammerInteraction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $TurntableBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IHammerInteraction {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getRotationFromSide"(arg0: $Direction$Type): $Rotation
public "verticalTransitionRotationMap"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "onNeighborBlockChange"(arg0: $BlockPos$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "hammerUseSide"(arg0: $Direction$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $Vec3$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "rotateRotationMap"(arg0: $Rotation$Type): void
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurntableBlockEntity$Type = ($TurntableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurntableBlockEntity_ = $TurntableBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$ClocheBlock" {
import {$ClocheBlockEntity, $ClocheBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$ClocheBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ClocheBlock extends $IEEntityBlock<($ClocheBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheBlock$Type = ($ClocheBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClocheBlock_ = $ClocheBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$DeskBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $DeskBlock<T extends $BlockEntity> extends $IEEntityBlock<(T)> {
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "FACING": $Property<($Direction)>
static readonly "DUMMY": $Property<(boolean)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public static "placeDummies"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockPlaceContext$Type): void
public static "getDeskDummyOffset"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockPlaceContext$Type): $Direction
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeskBlock$Type<T> = ($DeskBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeskBlock_<T> = $DeskBlock$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$IEMinecartItem" {
import {$IEMinecartEntity, $IEMinecartEntity$Type} from "packages/blusunrize/immersiveengineering/common/entities/$IEMinecartEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEMinecartEntity$MinecartConstructor, $IEMinecartEntity$MinecartConstructor$Type} from "packages/blusunrize/immersiveengineering/common/entities/$IEMinecartEntity$MinecartConstructor"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IEMinecartItem extends $IEBaseItem {
static readonly "MINECART_DISPENSER_BEHAVIOR": $DispenseItemBehavior
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $IEMinecartEntity$MinecartConstructor$Type, arg1: boolean)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createCart"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double, arg4: $ItemStack$Type): $IEMinecartEntity<(any)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canFitInsideContainerItems"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMinecartItem$Type = ($IEMinecartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMinecartItem_ = $IEMinecartItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$VoltmeterItem$RemoteEnergyData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FastEither, $FastEither$Type} from "packages/blusunrize/immersiveengineering/api/utils/$FastEither"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $VoltmeterItem$RemoteEnergyData extends $Record {

constructor(pos: $FastEither$Type<($BlockPos$Type), (integer)>, measuredInTick: long, isValid: boolean, stored: integer, capacity: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $VoltmeterItem$RemoteEnergyData
public "pos"(): $FastEither<($BlockPos), (integer)>
public "capacity"(): integer
public "isValid"(): boolean
public "measuredInTick"(): long
public "stored"(): integer
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltmeterItem$RemoteEnergyData$Type = ($VoltmeterItem$RemoteEnergyData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoltmeterItem$RemoteEnergyData_ = $VoltmeterItem$RemoteEnergyData$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/fluid/$IFluidPipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFluidPipe {

 "canOutputPressurized"(arg0: boolean): boolean
 "stripPressureTag"(): boolean
}

export namespace $IFluidPipe {
const AMOUNT_PRESSURIZED: integer
const AMOUNT_UNPRESSURIZED: integer
const NBT_PRESSURIZED: string
function getTransferableAmount(arg0: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidPipe$Type = ($IFluidPipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidPipe_ = $IFluidPipe$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/crafting/serializers/$MineralMixSerializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IERecipeSerializer, $IERecipeSerializer$Type} from "packages/blusunrize/immersiveengineering/api/crafting/$IERecipeSerializer"
import {$MineralMix, $MineralMix$Type} from "packages/blusunrize/immersiveengineering/api/excavator/$MineralMix"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $MineralMixSerializer extends $IERecipeSerializer<($MineralMix)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MineralMix$Type): void
public "getIcon"(): $ItemStack
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MineralMix
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralMixSerializer$Type = ($MineralMixSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MineralMixSerializer_ = $MineralMixSerializer$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/utils/$SetRestrictedField" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SetRestrictedField<T> {


public static "lock"(arg0: boolean): void
public "getValue"(): T
public "setValue"(arg0: T): void
public static "common"<T>(): $SetRestrictedField<(T)>
public static "client"<T>(): $SetRestrictedField<(T)>
public static "startInitializing"(arg0: boolean): void
public "isInitialized"(): boolean
get "value"(): T
set "value"(value: T)
get "initialized"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetRestrictedField$Type<T> = ($SetRestrictedField<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetRestrictedField_<T> = $SetRestrictedField$Type<(T)>;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/$MultiblockHandler$IMultiblock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ClientMultiblocks$MultiblockManualData, $ClientMultiblocks$MultiblockManualData$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/$ClientMultiblocks$MultiblockManualData"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockHandler$IMultiblock {

 "getSize"(arg0: $Level$Type): $Vec3i
 "getDisplayName"(): $Component
 "getBlock"(): $Block
 "isBlockTrigger"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $Level$Type): boolean
 "createStructure"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Player$Type): boolean
 "getUniqueName"(): $ResourceLocation
 "getTriggerOffset"(): $BlockPos
 "getManualScale"(): float
 "disassemble"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: boolean, arg3: $Direction$Type): void
 "getStructure"(arg0: $Level$Type): $List<($StructureTemplate$StructureBlockInfo)>
 "initializeClient"(arg0: $Consumer$Type<($ClientMultiblocks$MultiblockManualData$Type)>): void
}

export namespace $MultiblockHandler$IMultiblock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockHandler$IMultiblock$Type = ($MultiblockHandler$IMultiblock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockHandler$IMultiblock_ = $MultiblockHandler$IMultiblock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/$MultiblockRegistration$Disassembler" {
import {$MultiblockOrientation, $MultiblockOrientation$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$MultiblockOrientation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MultiblockRegistration$Disassembler {

 "disassemble"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $MultiblockOrientation$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $MultiblockOrientation$Type): void
}

export namespace $MultiblockRegistration$Disassembler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistration$Disassembler$Type = ($MultiblockRegistration$Disassembler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockRegistration$Disassembler_ = $MultiblockRegistration$Disassembler$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/wooden/$CraftingTableBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IEMenuTypes$ArgContainer, $IEMenuTypes$ArgContainer$Type} from "packages/blusunrize/immersiveengineering/common/register/$IEMenuTypes$ArgContainer"
import {$PlacementLimitation, $PlacementLimitation$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$PlacementLimitation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IEBaseBlockEntity, $IEBaseBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBaseBlockEntity"
import {$IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IStateBasedDirectional$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IStateBasedDirectional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IEBlockInterfaces$IInteractionObjectIE, $IEBlockInterfaces$IInteractionObjectIE$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEBlockInterfaces$IInteractionObjectIE"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IDropInventory, $IDropInventory$Type} from "packages/blusunrize/immersiveengineering/common/util/inventory/$IDropInventory"

export class $CraftingTableBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional, $IEBlockInterfaces$IInteractionObjectIE<($CraftingTableBlockEntity)>, $IDropInventory {
static readonly "GRID_SIZE": integer
static readonly "STORAGE_SIZE": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getContainerType"(): $IEMenuTypes$ArgContainer<($CraftingTableBlockEntity), (any)>
public "getCraftingInventory"(): $NonNullList<($ItemStack)>
public "getFacingLimitation"(): $PlacementLimitation
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "writeCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readCustomNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public "canUseGui"(arg0: $Player$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getDisplayName"(): $Component
public "setFacing"(arg0: $Direction$Type): void
public "getFacing"(): $Direction
public "isValid"(): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "afterRotation"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$Type): $Direction
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$Type): boolean
public "canHammerRotate"(arg0: $Direction$Type, arg1: $Vec3$Type, arg2: $LivingEntity$Type): boolean
get "containerType"(): $IEMenuTypes$ArgContainer<($CraftingTableBlockEntity), (any)>
get "craftingInventory"(): $NonNullList<($ItemStack)>
get "facingLimitation"(): $PlacementLimitation
get "facingProperty"(): $Property<($Direction)>
get "droppedItems"(): $Stream<($ItemStack)>
get "displayName"(): $Component
set "facing"(value: $Direction$Type)
get "facing"(): $Direction
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTableBlockEntity$Type = ($CraftingTableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingTableBlockEntity_ = $CraftingTableBlockEntity$Type;
}}
declare module "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockLogic" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$IInitialMultiblockContext, $IInitialMultiblockContext$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IInitialMultiblockContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IMultiblockState, $IMultiblockState$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/logic/$IMultiblockState"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IMultiblockComponent, $IMultiblockComponent$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/component/$IMultiblockComponent"
import {$IMultiblockContext, $IMultiblockContext$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/env/$IMultiblockContext"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ShapeType, $ShapeType$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$ShapeType"
import {$CapabilityPosition, $CapabilityPosition$Type} from "packages/blusunrize/immersiveengineering/api/multiblocks/blocks/util/$CapabilityPosition"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMultiblockLogic<State extends $IMultiblockState> extends $IMultiblockComponent<(State)> {

 "postProcessAbsoluteShape"(arg0: $IMultiblockContext$Type<(State)>, arg1: $VoxelShape$Type, arg2: $CollisionContext$Type, arg3: $BlockPos$Type, arg4: $ShapeType$Type): $VoxelShape
 "createInitialState"(arg0: $IInitialMultiblockContext$Type<(State)>): State
 "shapeGetter"(arg0: $ShapeType$Type): $Function<($BlockPos), ($VoxelShape)>
 "getCapability"<T>(arg0: $IMultiblockContext$Type<(State)>, arg1: $CapabilityPosition$Type, arg2: $Capability$Type<(T)>): $LazyOptional<(T)>
 "onEntityCollision"(arg0: $IMultiblockContext$Type<(State)>, arg1: $BlockPos$Type, arg2: $Entity$Type): void
 "click"(arg0: $IMultiblockContext$Type<(State)>, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: boolean): $InteractionResult
 "dropExtraItems"(arg0: State, arg1: $Consumer$Type<($ItemStack$Type)>): void
}

export namespace $IMultiblockLogic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockLogic$Type<State> = ($IMultiblockLogic<(State)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiblockLogic_<State> = $IMultiblockLogic$Type<(State)>;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/metal/$SampleDrillBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IEEntityBlock, $IEEntityBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IEEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SampleDrillBlockEntity, $SampleDrillBlockEntity$Type} from "packages/blusunrize/immersiveengineering/common/blocks/metal/$SampleDrillBlockEntity"

export class $SampleDrillBlock extends $IEEntityBlock<($SampleDrillBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleDrillBlock$Type = ($SampleDrillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SampleDrillBlock_ = $SampleDrillBlock$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/items/$WirecutterItem" {
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IEBaseItem, $IEBaseItem$Type} from "packages/blusunrize/immersiveengineering/common/items/$IEBaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WirecutterItem extends $IEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "canBeDepleted"(): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getEnchantmentValue"(): integer
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirecutterItem$Type = ($WirecutterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirecutterItem_ = $WirecutterItem$Type;
}}
declare module "packages/blusunrize/immersiveengineering/common/blocks/$IEWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IIEBlock, $IIEBlock$Type} from "packages/blusunrize/immersiveengineering/common/blocks/$IIEBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"

export class $IEWallBlock extends $WallBlock implements $IIEBlock {
static readonly "UP": $BooleanProperty
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor<T extends ($Block) & ($IIEBlock)>(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(T)>)

public "getNameForFlavour"(): string
public "hasFlavour"(): boolean
get "nameForFlavour"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEWallBlock$Type = ($IEWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEWallBlock_ = $IEWallBlock$Type;
}}
