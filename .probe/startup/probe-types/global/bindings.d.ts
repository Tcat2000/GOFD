import {$SceneWidget, $SceneWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget"
import {$NBTIOWrapper, $NBTIOWrapper$Type} from "packages/dev/latvian/mods/kubejs/util/$NBTIOWrapper"
import {$PlatformWrapper, $PlatformWrapper$Type} from "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$MBDRegistries, $MBDRegistries$Type} from "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistries"
import {$SelectableWidgetGroup, $SelectableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SelectableWidgetGroup"
import {$Blocks, $Blocks$Type} from "packages/net/minecraft/world/level/block/$Blocks"
import {$ItemStackTexture, $ItemStackTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ItemStackTexture"
import {$BlockWrapper, $BlockWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$BlockWrapper"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {$ForgeEventWrapper, $ForgeEventWrapper$Type} from "packages/dev/latvian/mods/kubejs/forge/$ForgeEventWrapper"
import {$ItemTransferHelperImpl, $ItemTransferHelperImpl$Type} from "packages/com/lowdragmc/lowdraglib/side/item/forge/$ItemTransferHelperImpl"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ImageWidget, $ImageWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget"
import {$ProgressTexture, $ProgressTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Stats, $Stats$Type} from "packages/net/minecraft/stats/$Stats"
import {$GuiTextureGroup, $GuiTextureGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$GuiTextureGroup"
import {$ItemUIJSFactory, $ItemUIJSFactory$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory"
import {$JavaWrapper, $JavaWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$JavaWrapper"
import {$ConfigBlockProperties, $ConfigBlockProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties"
import {$RotationAxis, $RotationAxis$Type} from "packages/dev/latvian/mods/kubejs/util/$RotationAxis"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$Painter, $Painter$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import {$SidedNativeEvents, $SidedNativeEvents$Type} from "packages/zank/mods/eventjs/$SidedNativeEvents"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BlockUIJSFactory, $BlockUIJSFactory$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory"
import {$IngredientForgeHelper, $IngredientForgeHelper$Type} from "packages/dev/latvian/mods/kubejs/platform/forge/$IngredientForgeHelper"
import {$EasingType, $EasingType$Type} from "packages/software/bernie/geckolib/core/animation/$EasingType"
import {$AnimationTexture, $AnimationTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$AnimationTexture"
import {$ColorPattern, $ColorPattern$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ColorPattern"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$UUIDWrapper, $UUIDWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$UUIDWrapper"
import {$Shapes, $Shapes$Type} from "packages/net/minecraft/world/phys/shapes/$Shapes"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$IngredientWrapper, $IngredientWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$IngredientWrapper"
import {$TextTexture, $TextTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"
import {$TextFieldWidget, $TextFieldWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"
import {$CreateMachineState, $CreateMachineState$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateMachineState"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$JsonIO, $JsonIO$Type} from "packages/dev/latvian/mods/kubejs/util/$JsonIO"
import {$TankWidget, $TankWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget"
import {$DirectionWrapper, $DirectionWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$DirectionWrapper"
import {$DialogWidget, $DialogWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget"
import {$ItemStackTransfer, $ItemStackTransfer$Type} from "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$KMath, $KMath$Type} from "packages/dev/latvian/mods/kubejs/bindings/$KMath"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$ColorWrapper, $ColorWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$ColorWrapper"
import {$NBTUtils, $NBTUtils$Type} from "packages/dev/latvian/mods/rhino/mod/util/$NBTUtils"
import {$TextBoxWidget, $TextBoxWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextBoxWidget"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidStorage, $FluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/misc/$FluidStorage"
import {$DataTickets, $DataTickets$Type} from "packages/software/bernie/geckolib/constant/$DataTickets"
import {$NotificationBuilder, $NotificationBuilder$Type} from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import {$FluidTransferHelperImpl, $FluidTransferHelperImpl$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/forge/$FluidTransferHelperImpl"
import {$TextWrapper, $TextWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$TextWrapper"
import {$LabelWidget, $LabelWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget"
import {$Items, $Items$Type} from "packages/net/minecraft/world/item/$Items"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ColorRectTexture, $ColorRectTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture"
import {$Math, $Math$Type} from "packages/java/lang/$Math"
import {$ButtonWidget, $ButtonWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$ItemWrapper, $ItemWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$ItemWrapper"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$CapabilityIO, $CapabilityIO$Type} from "packages/com/lowdragmc/mbd2/common/trait/$CapabilityIO"
import {$BlockSelectorWidget, $BlockSelectorWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$BlockSelectorWidget"
import {$FluidAmounts, $FluidAmounts$Type} from "packages/dev/latvian/mods/kubejs/util/$FluidAmounts"
import {$DraggableWidgetGroup, $DraggableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableWidgetGroup"
import {$UtilsWrapper, $UtilsWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$UtilsWrapper"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$SwitchWidget, $SwitchWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget"
import {$ProgressWidget, $ProgressWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ProgressWidget"
import {$ManaItemHandlerImpl, $ManaItemHandlerImpl$Type} from "packages/vazkii/botania/common/impl/mana/$ManaItemHandlerImpl"
import {$FluidWrapper, $FluidWrapper$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidWrapper"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$TreeListWidget, $TreeListWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TreeListWidget"
import {$BlockStateProperties, $BlockStateProperties$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockStateProperties"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$AABBWrapper, $AABBWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$AABBWrapper"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$ShaderTexture, $ShaderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ShaderTexture"
import {$TextTexture$TextType, $TextTexture$TextType$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$PhantomFluidWidget, $PhantomFluidWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomFluidWidget"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$UIProject, $UIProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$UIProject"
import {$DraggableScrollableWidgetGroup, $DraggableScrollableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup"
import {$PhantomSlotWidget, $PhantomSlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomSlotWidget"
import {$CorporeaHelperImpl, $CorporeaHelperImpl$Type} from "packages/vazkii/botania/common/impl/corporea/$CorporeaHelperImpl"

declare global {
const Platform: typeof $PlatformWrapper
const ProgressTexture: typeof $ProgressTexture
const ContentModifier: typeof $ContentModifier
const Widget: typeof $Widget
const OutputItem: typeof $OutputItem
const RotationAxis: typeof $RotationAxis
const TextBoxWidget: typeof $TextBoxWidget
const GuiTextureGroup: typeof $GuiTextureGroup
const SlotWidget: typeof $SlotWidget
const ModularUI: typeof $ModularUI
const ForgeModEvents: $ForgeEventWrapper
const Painter: $Painter
const ImageWidget: typeof $ImageWidget
const PhantomFluidWidget: typeof $PhantomFluidWidget
const MBDRegistries: typeof $MBDRegistries
const NativeEvents: $SidedNativeEvents
const MachineState: typeof $MachineState
const ConfigBlockProperties: typeof $ConfigBlockProperties
const FillDirection: typeof $ProgressTexture$FillDirection
const IO: typeof $IO
const ResourceBorderTexture: typeof $ResourceBorderTexture
const TextType: typeof $TextTexture$TextType
const Matrix4f: typeof $Matrix4f
const PhantomSlotWidget: typeof $PhantomSlotWidget
const TabButton: typeof $TabButton
const Vector3f: typeof $Vector3f
const ManaHandler: $ManaItemHandlerImpl
const TextFieldWidget: typeof $TextFieldWidget
const JavaMath: typeof $Math
const DraggableScrollableWidgetGroup: typeof $DraggableScrollableWidgetGroup
const global: $HashMap<(any), (any)>
const DraggableWidgetGroup: typeof $DraggableWidgetGroup
const IngredientHelper: $IngredientForgeHelper
const Notification: typeof $NotificationBuilder
const AnimationTexture: typeof $AnimationTexture
const UIProject: typeof $UIProject
const Matrix3f: typeof $Matrix3f
const ResourceLocation: typeof $ResourceLocation
const BlockProperties: typeof $BlockStateProperties
const SceneWidget: typeof $SceneWidget
const Java: $JavaWrapper
const Blocks: typeof $Blocks
const SelectableWidgetGroup: typeof $SelectableWidgetGroup
const Quaternionf: typeof $Quaternionf
const ColorRectTexture: typeof $ColorRectTexture
const WidgetGroup: typeof $WidgetGroup
const Text: typeof $TextWrapper
const ColorPattern: typeof $ColorPattern
const ItemUIFactory: typeof $ItemUIJSFactory
const LabelWidget: typeof $LabelWidget
const CapabilityIO: typeof $CapabilityIO
const ItemStackTransfer: typeof $ItemStackTransfer
const TankWidget: typeof $TankWidget
const TabContainer: typeof $TabContainer
const RawAnimation: typeof $RawAnimation
const ProgressWidget: typeof $ProgressWidget
const Items: typeof $Items
const MINUTE: double
const BlockPos: typeof $BlockPos
const Shapes: typeof $Shapes
const Client: $Minecraft
const CorporeaHelper: $CorporeaHelperImpl
const SoundType: typeof $SoundType
const Fluid: typeof $FluidWrapper
const Duration: typeof $Duration
const SwitchWidget: typeof $SwitchWidget
const ShaderTexture: typeof $ShaderTexture
const DialogWidget: typeof $DialogWidget
const CreateMachineState: typeof $CreateMachineState
const ButtonWidget: typeof $ButtonWidget
const KMath: typeof $KMath
const Stats: typeof $Stats
const BlockUIFactory: typeof $BlockUIJSFactory
const Block: typeof $BlockWrapper
const HOUR: double
const EquipmentSlot: typeof $EquipmentSlot
const GuiSize: typeof $Size
const Vec4f: typeof $Vector4f
const BlockSelectorWidget: typeof $BlockSelectorWidget
const TreeListWidget: typeof $TreeListWidget
const TextTexture: typeof $TextTexture
const Component: typeof $TextWrapper
const console: $ConsoleJS
const JsonIO: typeof $JsonIO
const Vec3i: typeof $Vec3i
const ItemStackTexture: typeof $ItemStackTexture
const DamageSource: typeof $DamageSource
const ResourceTexture: typeof $ResourceTexture
const Vec3f: typeof $Vector3f
const Vec3d: typeof $Vec3
const ItemTransferHelper: typeof $ItemTransferHelperImpl
const GuiPos: typeof $Position
const ForgeEvents: $ForgeEventWrapper
const InputItem: typeof $InputItem
const DataTickets: typeof $DataTickets
const SECOND: double
const FluidTransferHelper: typeof $FluidTransferHelperImpl
const FluidStorage: typeof $FluidStorage
export import NBT = $NBTUtils
export import Facing = $DirectionWrapper
export import Color = $ColorWrapper
export import NBTIO = $NBTIOWrapper
export import Direction = $DirectionWrapper
export import Item = $ItemWrapper
export import EasingType = $EasingType
export import Utils = $UtilsWrapper
export import Ingredient = $IngredientWrapper
export import GeoItem = $GeoItem
export import BlockStatePredicate = $BlockStatePredicate
export import UUID = $UUIDWrapper
export import AABB = $AABBWrapper
export import FluidAmounts = $FluidAmounts
}