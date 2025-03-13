declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IConfigurableWidgetGroup, $IConfigurableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Layout, $Layout$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Layout"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $WidgetGroup extends $Widget implements $IGhostIngredientTarget, $IIngredientSlot, $IConfigurableWidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setLayout"(layout: $Layout$Type): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "initWidget"(): void
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "waitToAdded"(widget: $Widget$Type): void
public "isDynamicSized"(): boolean
public "initTemplate"(): void
public "setDynamicSized"(dynamicSized: boolean): void
public "getWidgetsById"(regex: string): $List<($Widget)>
public "getWidgetsByType"<T extends $Widget>(clazz: $Class$Type<(T)>): $List<(T)>
public "getFirstWidgetById"(regex: string): $Widget
public "setLayoutPadding"(layoutPadding: integer): void
public "waitToRemoved"(widget: $Widget$Type): void
public "addWidgets"(...widgets: ($Widget$Type)[]): $WidgetGroup
public "removeWidget"(widget: $Widget$Type): void
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "clearAllWidgets"(): void
public "removeWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "addWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "getAllWidgetSize"(): integer
public "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "getLayoutPadding"(): integer
public "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
public "serializeInnerNBT"(): $CompoundTag
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "addWidget"<T extends $Widget>(widget: T, callback: $Consumer$Type<(T)>): $WidgetGroup
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "addWidget"(widget: $Widget$Type): $WidgetGroup
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "isChild"(widget: $Widget$Type): boolean
public "detectAndSendChanges"(): void
public "isAllowXEIIngredientOverMouse"(): boolean
public "setGui"(gui: $ModularUI$Type): void
public "setAllowXEIIngredientOverMouse"(allowXEIIngredientOverMouse: boolean): void
public "getContainedWidgets"(includeHidden: boolean): $List<($Widget)>
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "getLayout"(): $Layout
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "layout"(value: $Layout$Type)
get "dynamicSized"(): boolean
set "dynamicSized"(value: boolean)
set "layoutPadding"(value: integer)
get "allWidgetSize"(): integer
get "layoutPadding"(): integer
get "allowXEIIngredientOverMouse"(): boolean
set "gui"(value: $ModularUI$Type)
set "allowXEIIngredientOverMouse"(value: boolean)
get "layout"(): $Layout
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetGroup$Type = ($WidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetGroup_ = $WidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IConfiguratorContainer, $IConfiguratorContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ConfiguratorGroup extends $Configurator {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor(name: string, isCollapse: boolean)

public "init"(width: integer): void
public "getConfigurators"(): $List<($Configurator)>
public "removeConfigurator"(configurator: $Configurator$Type): void
public "addConfigurators"(...configurators: ($Configurator$Type)[]): void
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
public "removeAllConfigurators"(): void
public "addConfigurator"(index: integer, configurator: $Configurator$Type): void
public "isCollapse"(): boolean
public "setCanCollapse"(canCollapse: boolean): void
public "setCollapse"(collapse: boolean): void
public "computeHeight"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "configurators"(): $List<($Configurator)>
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
get "collapse"(): boolean
set "canCollapse"(value: boolean)
set "collapse"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguratorGroup$Type = ($ConfiguratorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguratorGroup_ = $ConfiguratorGroup$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/gui/editor/machine/$MachineScenePanel" {
import {$MachineEditor, $MachineEditor$Type} from "packages/com/lowdragmc/mbd2/common/gui/editor/$MachineEditor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SceneWidget, $SceneWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$TrackedDummyWorld, $TrackedDummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $MachineScenePanel extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(arg0: $MachineEditor$Type)

public "getLevel"(): $TrackedDummyWorld
public "renderAfterWorld"(arg0: $SceneWidget$Type): void
public "getScene"(): $SceneWidget
public "addButton"(arg0: $IGuiTexture$Type, arg1: string, arg2: $Runnable$Type): void
public "getPreviewMachine"(): $MBDMachine
public "prepareButtonGroup"(): void
public "refreshButtonGroupPosition"(): void
public "addSwitch"(arg0: $IGuiTexture$Type, arg1: $IGuiTexture$Type, arg2: string, arg3: $BooleanSupplier$Type, arg4: $BooleanConsumer$Type): void
public "getButtonGroup"(): $WidgetGroup
public "getEditor"(): $MachineEditor
public "resetScene"(): void
public "reloadAdditionalTraits"(): void
public "isDrawShapeFrameLines"(): boolean
public "setDrawShapeFrameLines"(arg0: boolean): void
public "setDrawRenderingBoxFrameLines"(arg0: boolean): void
public "isDrawRenderingBoxFrameLines"(): boolean
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "level"(): $TrackedDummyWorld
get "scene"(): $SceneWidget
get "previewMachine"(): $MBDMachine
get "buttonGroup"(): $WidgetGroup
get "editor"(): $MachineEditor
get "drawShapeFrameLines"(): boolean
set "drawShapeFrameLines"(value: boolean)
set "drawRenderingBoxFrameLines"(value: boolean)
get "drawRenderingBoxFrameLines"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineScenePanel$Type = ($MachineScenePanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineScenePanel_ = $MachineScenePanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef" {
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"

export interface $IRef {

 "update"(): void
 "getKey"(): $ManagedKey
 "markAsDirty"(): void
 "clearSyncDirty"(): void
 "isSyncDirty"(): boolean
 "clearPersistedDirty"(): void
 "setPersistedPrefixName"(arg0: string): void
 "readRaw"<T>(): T
 "getPersistedKey"(): string
 "isPersistedDirty"(): boolean
 "setOnSyncListener"(arg0: $BooleanConsumer$Type): void
 "setOnPersistedListener"(arg0: $BooleanConsumer$Type): void
 "getPersistedPrefixName"(): string
 "isLazy"(): boolean
}

export namespace $IRef {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRef$Type = ($IRef);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRef_ = $IRef$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$SignalConnection" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ConfigMachineSettings$SignalConnection {

constructor()

public "getConnection"(arg0: $Direction$Type, arg1: $Direction$Type): boolean
public "rightConnection"(): boolean
public "rightConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "frontConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "frontConnection"(): boolean
public "backConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "backConnection"(): boolean
public "leftConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "leftConnection"(): boolean
public "topConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "topConnection"(): boolean
public "bottomConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "bottomConnection"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMachineSettings$SignalConnection$Type = ($ConfigMachineSettings$SignalConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMachineSettings$SignalConnection_ = $ConfigMachineSettings$SignalConnection$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SwitchWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $BiConsumer$Type<($ClickData$Type), (boolean)>)
constructor()

public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "initTemplate"(): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setPressedTexture"(...pressedTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "isPressed"(): boolean
public "detectAndSendChanges"(): void
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $SwitchWidget
public "setPressed"(isPressed: boolean): $SwitchWidget
public "setSupplier"(supplier: $Supplier$Type<(boolean)>): $SwitchWidget
public "setOnPressCallback"(onPressCallback: $BiConsumer$Type<($ClickData$Type), (boolean)>): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setHoverBorderTexture"(border: integer, color: integer): $SwitchWidget
public "widget"(): $Widget
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "baseTexture"(value: ($IGuiTexture$Type)[])
set "pressedTexture"(value: ($IGuiTexture$Type)[])
get "pressed"(): boolean
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "pressed"(value: boolean)
set "supplier"(value: $Supplier$Type<(boolean)>)
set "onPressCallback"(value: $BiConsumer$Type<($ClickData$Type), (boolean)>)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchWidget$Type = ($SwitchWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchWidget_ = $SwitchWidget$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineBeforeRecipeWorkingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineBeforeRecipeWorkingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)
constructor()

public "getRecipe"(): $MBDRecipe
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "recipe"(): $MBDRecipe
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBeforeRecipeWorkingEvent$Type = ($MachineBeforeRecipeWorkingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineBeforeRecipeWorkingEvent_ = $MachineBeforeRecipeWorkingEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachinePlacedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachinePlacedEvent extends $MachineEvent {
readonly "player": $LivingEntity
readonly "itemStack": $ItemStack
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type)

public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getItemStack"(): $ItemStack
public "getPlayer"(): $LivingEntity
get "listenerList"(): $ListenerList
get "itemStack"(): $ItemStack
get "player"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachinePlacedEvent$Type = ($MachinePlacedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachinePlacedEvent_ = $MachinePlacedEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/item/$MBDGadgetsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HeldItemUIFactory$HeldItemHolder, $HeldItemUIFactory$HeldItemHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$HeldItemUIFactory$IHeldItemUIHolder, $HeldItemUIFactory$IHeldItemUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$IHeldItemUIHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDGadgetsItem extends $Item implements $HeldItemUIFactory$IHeldItemUIHolder {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "createUI"(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI
public "getRecipe"(arg0: $ItemStack$Type): $ResourceLocation
public "setRecipe"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "isRecipeDebugger"(arg0: $ItemStack$Type): boolean
public "isMultiblockBuilder"(arg0: $ItemStack$Type): boolean
public "isMultiblockDebugger"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDGadgetsItem$Type = ($MBDGadgetsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDGadgetsItem_ = $MBDGadgetsItem$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineFuelRecipeModifyEventJS" {
import {$MachineFuelRecipeModifyEvent, $MachineFuelRecipeModifyEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineFuelRecipeModifyEvent"
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MBDMachineEvents$MachineFuelRecipeModifyEventJS extends $MBDMachineEvents$MachineEventJS<($MachineFuelRecipeModifyEvent)> {
readonly "event": E

constructor(arg0: $MachineFuelRecipeModifyEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineFuelRecipeModifyEventJS$Type = ($MBDMachineEvents$MachineFuelRecipeModifyEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineFuelRecipeModifyEventJS_ = $MBDMachineEvents$MachineFuelRecipeModifyEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContentChangeAware, $IContentChangeAware$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware"

export class $ItemStackTransfer implements $IItemTransfer, $ITagSerializable<($CompoundTag)>, $IContentChangeAware {

constructor(stack: $ItemStack$Type)
constructor(stacks: $NonNullList$Type<($ItemStack$Type)>)
constructor(size: integer)
constructor()

public "copy"(): $ItemStackTransfer
public "setSize"(size: integer): void
public "setFilter"(filter: $Function$Type<($ItemStack$Type), (boolean)>): void
public "getOnContentsChanged"(): $Runnable
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "getStackInSlot"(slot: integer): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean, notifyChanges: boolean): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean, notifyChanges: boolean): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getSlots"(): integer
public "onContentsChanged"(): void
public "onContentsChanged"(slot: integer): void
public "createSnapshot"(): any
public "restoreFromSnapshot"(snapshot: any): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
set "size"(value: integer)
set "filter"(value: $Function$Type<($ItemStack$Type), (boolean)>)
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackTransfer$Type = ($ItemStackTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackTransfer_ = $ItemStackTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/misc/$FluidStorage" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$IFluidStorage, $IFluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContentChangeAware, $IContentChangeAware$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware"

export class $FluidStorage implements $IFluidStorage, $IContentChangeAware, $ITagSerializable<($CompoundTag)> {

constructor(fluidStack: $FluidStack$Type)
constructor(capacity: long, validator: $Predicate$Type<($FluidStack$Type)>)
constructor(capacity: long)

public "fill"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): long
public "copy"(): $FluidStorage
public "drain"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): $FluidStack
public "getCapacity"(): long
public "setCapacity"(capacity: long): void
public "getOnContentsChanged"(): $Runnable
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "setValidator"(validator: $Predicate$Type<($FluidStack$Type)>): void
public "supportsFill"(tank: integer): boolean
public "supportsDrain"(tank: integer): boolean
public "setFluid"(fluid: $FluidStack$Type): void
public "isFluidValid"(stack: $FluidStack$Type): boolean
public "onContentsChanged"(): void
public "createSnapshot"(): any
public "restoreFromSnapshot"(snapshot: any): void
public "getFluid"(): $FluidStack
public "getTankCapacity"(tank: integer): long
public "getFluidInTank"(tank: integer): $FluidStack
public "getFluidAmount"(): long
public "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
public "getTanks"(): integer
public "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
public "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
public "fill"(resource: $FluidStack$Type, simulate: boolean): long
public "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
public "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean): $FluidStack
get "capacity"(): long
set "capacity"(value: long)
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
set "fluid"(value: $FluidStack$Type)
get "fluid"(): $FluidStack
get "fluidAmount"(): long
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStorage$Type = ($FluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStorage_ = $FluidStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WorldSceneRenderer$VertexConsumerWrapper, $WorldSceneRenderer$VertexConsumerWrapper$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ISceneBlockRenderHook {

 "apply"(isTESR: boolean, layer: $RenderType$Type): void
 "applyVertexConsumerWrapper"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, wrapperBuffer: $WorldSceneRenderer$VertexConsumerWrapper$Type, layer: $RenderType$Type, partialTicks: float): void
 "applyBESR"(world: $Level$Type, pos: $BlockPos$Type, blockEntity: $BlockEntity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
}

export namespace $ISceneBlockRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneBlockRenderHook$Type = ($ISceneBlockRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneBlockRenderHook_ = $ISceneBlockRenderHook$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $FluidStack {


public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public "copy"(amount: long): $FluidStack
public "copy"(): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long, nbt: $CompoundTag$Type): $FluidStack
public static "create"(stack: $FluidStack$Type, amount: long): $FluidStack
public "grow"(amount: long): void
public "getTag"(): $CompoundTag
public "getDisplayName"(): $Component
public "setTag"(tag: $CompoundTag$Type): void
public "setAmount"(amount: long): void
public "getAmount"(): long
public static "loadFromTag"(nbt: $CompoundTag$Type): $FluidStack
public "saveToTag"(nbt: $CompoundTag$Type): $CompoundTag
public "isFluidEqual"(other: $FluidStack$Type): boolean
public "getRawFluid"(): $Fluid
public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $FluidStack
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
public "isFluidStackEqual"(other: $FluidStack$Type): boolean
public "setFluid"(fluid: $Fluid$Type): void
public "hasTag"(): boolean
public "shrink"(amount: long): void
public "getFluid"(): $Fluid
get "tag"(): $CompoundTag
get "displayName"(): $Component
set "tag"(value: $CompoundTag$Type)
set "amount"(value: long)
get "amount"(): long
get "rawFluid"(): $Fluid
set "fluid"(value: $Fluid$Type)
get "fluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IGuiTexture extends $IConfigurable {

 "scale"(scale: float): $IGuiTexture
 "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
 "copy"(): $IGuiTexture
 "rotate"(degree: float): $IGuiTexture
 "setColor"(color: integer): $IGuiTexture
 "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
 "createPreview"(father: $ConfiguratorGroup$Type): void
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer): void
 "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "updateTick"(): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister

(scale: float): $IGuiTexture
}

export namespace $IGuiTexture {
const EMPTY: $IGuiTexture
const MISSING_TEXTURE: $IGuiTexture
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IGuiTexture)>)>
function serializeWrapper(texture: $IGuiTexture$Type): $CompoundTag
function deserializeWrapper(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiTexture$Type = ($IGuiTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiTexture_ = $IGuiTexture$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$RenderTypes" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"

export class $ConfigBlockProperties$RenderTypes implements $IPersistedSerializable {

constructor()

public "solid"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "solid"(): boolean
public "cutoutMipped"(): boolean
public "cutoutMipped"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "translucent"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "translucent"(): boolean
public "cutout"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "cutout"(): boolean
public "deserializeNBT"(tag: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBlockProperties$RenderTypes$Type = ($ConfigBlockProperties$RenderTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBlockProperties$RenderTypes_ = $ConfigBlockProperties$RenderTypes$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/machine/$IMachine" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$RecipeLogic$Status, $RecipeLogic$Status$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status"
import {$RecipeLogic, $RecipeLogic$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeCapabilityHolder, $IRecipeCapabilityHolder$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export interface $IMachine extends $IRecipeCapabilityHolder {

 "getOffset"(): long
 "getLevel"(): $Level
 "doModifyRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "onLoad"(): void
 "notifyRecipeStatusChanged"(arg0: $RecipeLogic$Status$Type, arg1: $RecipeLogic$Status$Type): void
 "alwaysTryModifyRecipe"(): boolean
 "afterWorking"(): void
 "getModifiedRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "beforeWorking"(arg0: $MBDRecipe$Type): boolean
 "getMaxParallel"(arg0: $MBDRecipe$Type): $ContentModifier
 "onWorking"(): boolean
 "onWaiting"(): void
 "runRecipeLogic"(): boolean
 "hasFrontFacing"(): boolean
 "modifyFuelRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "setFrontFacing"(arg0: $Direction$Type): void
 "onUnload"(): void
 "getMachineLevel"(): integer
 "getOffsetTimer"(): long
 "isFacingValid"(arg0: $Direction$Type): boolean
 "onRotated"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "isInValid"(): boolean
 "applyParallel"(arg0: $MBDRecipe$Type, arg1: integer): $MBDRecipe
 "getChanceTier"(): integer
 "dampingWhenWaiting"(): boolean
 "getPos"(): $BlockPos
 "getRecipeType"(): $MBDRecipeType
 "getRecipeLogic"(): $RecipeLogic
 "getFrontFacing"(): $Optional<($Direction)>
 "onFuelBurningFinish"(arg0: $MBDRecipe$Type): void
 "scheduleRenderUpdate"(): void
 "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
 "alwaysReSearchRecipe"(): boolean
 "getRecipeDampingValue"(): integer
 "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
 "getBlockState"(): $BlockState
 "getHolder"(): $BlockEntity
 "notifyBlockUpdate"(): void
 "markDirty"(): void
 "hasProxies"(): boolean
 "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
}

export namespace $IMachine {
function ofMachine(arg0: $BlockEntity$Type): $Optional<($IMachine)>
function ofMachine(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMachine)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachine$Type = ($IMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachine_ = $IMachine$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoPersistBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAutoPersistBlockEntity extends $IManagedBlockEntity {

 "loadManagedPersistentData"(tag: $CompoundTag$Type): void
 "saveManagedPersistentData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "loadCustomPersistedData"(tag: $CompoundTag$Type): void
 "saveCustomPersistedData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity

(tag: $CompoundTag$Type): void
}

export namespace $IAutoPersistBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoPersistBlockEntity$Type = ($IAutoPersistBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoPersistBlockEntity_ = $IAutoPersistBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MBDMachineEvents$MachineEventJS<E extends $MachineEvent> extends $EventJS {
readonly "event": E

constructor(arg0: E)

public "getEvent"(): E
get "event"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineEventJS$Type<E> = ($MBDMachineEvents$MachineEventJS<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineEventJS_<E> = $MBDMachineEvents$MachineEventJS$Type<(E)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"

export interface $IFluidStorage extends $IFluidTransfer {

 "getCapacity"(): long
 "getTankCapacity"(tank: integer): long
 "getFluidInTank"(tank: integer): $FluidStack
 "getFluidAmount"(): long
 "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
 "getTanks"(): integer
 "setFluid"(arg0: $FluidStack$Type): void
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
 "getFluid"(): $FluidStack
 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "supportsFill"(arg0: integer): boolean
 "supportsDrain"(arg0: integer): boolean
 "onContentsChanged"(): void
 "createSnapshot"(): any
 "restoreFromSnapshot"(arg0: any): void
}

export namespace $IFluidStorage {
const EMPTY: $IFluidStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidStorage$Type = ($IFluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidStorage_ = $IFluidStorage$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineClientTickEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineClientTickEvent, $MachineClientTickEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineClientTickEvent"

export class $MBDMachineEvents$MachineClientTickEventJS extends $MBDMachineEvents$MachineEventJS<($MachineClientTickEvent)> {
readonly "event": E

constructor(arg0: $MachineClientTickEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineClientTickEventJS$Type = ($MBDMachineEvents$MachineClientTickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineClientTickEventJS_ = $MBDMachineEvents$MachineClientTickEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineAfterRecipeWorkingEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineAfterRecipeWorkingEvent, $MachineAfterRecipeWorkingEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineAfterRecipeWorkingEvent"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MBDMachineEvents$MachineAfterRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<($MachineAfterRecipeWorkingEvent)> {
readonly "event": E

constructor(arg0: $MachineAfterRecipeWorkingEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineAfterRecipeWorkingEventJS$Type = ($MBDMachineEvents$MachineAfterRecipeWorkingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineAfterRecipeWorkingEventJS_ = $MBDMachineEvents$MachineAfterRecipeWorkingEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigItemProperties" {
import {$ToggleCreativeTab, $ToggleCreativeTab$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCreativeTab"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ConfigItemProperties$ConfigItemPropertiesBuilder, $ConfigItemProperties$ConfigItemPropertiesBuilder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigItemProperties$ConfigItemPropertiesBuilder"
import {$ToggleRenderer, $ToggleRenderer$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleRenderer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $ConfigItemProperties implements $IConfigurable, $IPersistedSerializable {


public "apply"(arg0: $Item$Properties$Type): $Item$Properties
public static "builder"(): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "maxStackSize"(): integer
public "creativeTab"(): $ToggleCreativeTab
public "isGui3d"(): boolean
public "itemTooltips"(): $List<($Component)>
public "useBlockLight"(): boolean
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "renderer"(): $ToggleRenderer
public "rarity"(): $Rarity
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "gui3d"(): boolean
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigItemProperties$Type = ($ConfigItemProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigItemProperties_ = $ConfigItemProperties$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export interface $IConfigurable extends $ILDLRegister {

 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
}

export namespace $IConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IHandlerContext {

 "getContext"(): any
 "getLevel"(): $Level
 "isClient"(): boolean
 "getServer"(): $MinecraftServer
 "getPlayer"(): $ServerPlayer
}

export namespace $IHandlerContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandlerContext$Type = ($IHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandlerContext_ = $IHandlerContext$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $CPacketUIClientAction implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPacketUIClientAction$Type = ($CPacketUIClientAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPacketUIClientAction_ = $CPacketUIClientAction$Type;
}}
declare module "packages/com/lowdragmc/photon/core/mixins/accessor/$BlendModeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlendModeAccessor {

}

export namespace $BlendModeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendModeAccessor$Type = ($BlendModeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendModeAccessor_ = $BlendModeAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/processor/$GraphProcessor" {
import {$BaseGraph, $BaseGraph$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$BaseGraphProcessor, $BaseGraphProcessor$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/processor/$BaseGraphProcessor"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $GraphProcessor extends $BaseGraphProcessor {

constructor(graph: $BaseGraph$Type)

public "iterator"(): $Iterator<($BaseNode)>
public "updateComputeOrder"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphProcessor$Type = ($GraphProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphProcessor_ = $GraphProcessor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineStructureInvalidEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineStructureInvalidEvent, $MachineStructureInvalidEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineStructureInvalidEvent"

export class $MBDMachineEvents$MachineStructureInvalidEventJS extends $MBDMachineEvents$MachineEventJS<($MachineStructureInvalidEvent)> {
readonly "event": E

constructor(arg0: $MachineStructureInvalidEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineStructureInvalidEventJS$Type = ($MBDMachineEvents$MachineStructureInvalidEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineStructureInvalidEventJS_ = $MBDMachineEvents$MachineStructureInvalidEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateMachineState" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$CreateMachineState$Builder, $CreateMachineState$Builder$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateMachineState$Builder"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $CreateMachineState extends $MachineState {

constructor(arg0: string, arg1: $List$Type<($MachineState$Type)>, arg2: $IRenderer$Type, arg3: $VoxelShape$Type, arg4: integer, arg5: $AABB$Type, arg6: $IRenderer$Type)

public static "builder"(): $CreateMachineState$Builder
public "getRotationRenderer"(): $IRenderer
public "getRealRenderer"(): $IRenderer
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
get "rotationRenderer"(): $IRenderer
get "realRenderer"(): $IRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateMachineState$Type = ($CreateMachineState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateMachineState_ = $CreateMachineState$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $LabelWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, text: $Supplier$Type<(string)>)
constructor(xPosition: integer, yPosition: integer, component: $Component$Type)
constructor(xPosition: integer, yPosition: integer, text: string)
constructor()

public "setColor"(color: integer): void
public "setText"(text: string): void
public "handleDragging"(dragging: any): boolean
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): void
public "setTextProvider"(textProvider: $Supplier$Type<(string)>): void
/**
 * 
 * @deprecated
 */
public "setTextColor"(color: integer): $LabelWidget
public "detectAndSendChanges"(): void
/**
 * 
 * @deprecated
 */
public "setDropShadow"(dropShadow: boolean): $LabelWidget
public "setComponent"(component: $Component$Type): void
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "color"(value: integer)
set "text"(value: string)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textProvider"(value: $Supplier$Type<(string)>)
set "textColor"(value: integer)
set "dropShadow"(value: boolean)
set "component"(value: $Component$Type)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelWidget$Type = ($LabelWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelWidget_ = $LabelWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ColorRectTexture extends $TransformTexture {
 "color": integer
 "radiusLT": float
 "radiusLB": float
 "radiusRT": float
 "radiusRB": float

constructor(color: $Color$Type)
constructor(color: integer)
constructor()

public "setColor"(color: integer): $ColorRectTexture
public "setTopRadius"(radius: float): $ColorRectTexture
public "setRadiusLB"(radiusLB: float): $ColorRectTexture
public "setRightRadius"(radius: float): $ColorRectTexture
public "setBottomRadius"(radius: float): $ColorRectTexture
public "setRadiusLT"(radiusLT: float): $ColorRectTexture
public "setLeftRadius"(radius: float): $ColorRectTexture
public "setRadiusRT"(radiusRT: float): $ColorRectTexture
public "setRadiusRB"(radiusRB: float): $ColorRectTexture
public "setRadius"(radius: float): $ColorRectTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "topRadius"(value: float)
set "radiusLB"(value: float)
set "rightRadius"(value: float)
set "bottomRadius"(value: float)
set "radiusLT"(value: float)
set "leftRadius"(value: float)
set "radiusRT"(value: float)
set "radiusRB"(value: float)
set "radius"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorRectTexture$Type = ($ColorRectTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorRectTexture_ = $ColorRectTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor()
constructor(imageLocation: $ResourceLocation$Type)
constructor(imageLocation: string)
constructor(imageLocation: $ResourceLocation$Type, offsetX: float, offsetY: float, width: float, height: float)

public "copy"(): $ResourceTexture
public static "fromSpirit"(texture: $ResourceLocation$Type): $ResourceTexture
public "getSubTexture"(offsetX: double, offsetY: double, width: double, height: double): $ResourceTexture
public "getSubTexture"(offsetX: float, offsetY: float, width: float, height: float): $ResourceTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceTexture$Type = ($ResourceTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceTexture_ = $ResourceTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IAutoPersistedSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"

export interface $IAutoPersistedSerializable extends $ITagSerializable<($CompoundTag)> {

 "deserializeNBT"(tag: $CompoundTag$Type): void
}

export namespace $IAutoPersistedSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoPersistedSerializable$Type = ($IAutoPersistedSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoPersistedSerializable_ = $IAutoPersistedSerializable$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeLogic$Status extends $Enum<($RecipeLogic$Status)> {
static readonly "IDLE": $RecipeLogic$Status
static readonly "WORKING": $RecipeLogic$Status
static readonly "WAITING": $RecipeLogic$Status
static readonly "SUSPEND": $RecipeLogic$Status


public static "values"(): ($RecipeLogic$Status)[]
public static "valueOf"(arg0: string): $RecipeLogic$Status
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeLogic$Status$Type = (("suspend") | ("waiting") | ("idle") | ("working")) | ($RecipeLogic$Status);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeLogic$Status_ = $RecipeLogic$Status$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$Builder" {
import {$ConfigRecipeLogicSettings, $ConfigRecipeLogicSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigRecipeLogicSettings"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$ConfigItemProperties, $ConfigItemProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigItemProperties"
import {$MBDMachineDefinition$ConfigPartSettingsFactory, $MBDMachineDefinition$ConfigPartSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigPartSettingsFactory"
import {$MBDMachineDefinition$ConfigMachineSettingsFactory, $MBDMachineDefinition$ConfigMachineSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigMachineSettingsFactory"
import {$ConfigBlockProperties, $ConfigBlockProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"

export class $MBDMachineDefinition$Builder {


public "id"(arg0: $ResourceLocation$Type): $MBDMachineDefinition$Builder
public "build"(): $MBDMachineDefinition
public "itemProperties"(arg0: $ConfigItemProperties$Type): $MBDMachineDefinition$Builder
public "recipeLogicSettings"(arg0: $ConfigRecipeLogicSettings$Type): $MBDMachineDefinition$Builder
public "partSettings"(arg0: $MBDMachineDefinition$ConfigPartSettingsFactory$Type): $MBDMachineDefinition$Builder
public "machineSettings"(arg0: $MBDMachineDefinition$ConfigMachineSettingsFactory$Type): $MBDMachineDefinition$Builder
public "blockProperties"(arg0: $ConfigBlockProperties$Type): $MBDMachineDefinition$Builder
public "rootState"(arg0: $MachineState$Type): $MBDMachineDefinition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineDefinition$Builder$Type = ($MBDMachineDefinition$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineDefinition$Builder_ = $MBDMachineDefinition$Builder$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/trait/$AutoIO" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export class $AutoIO {

constructor()

public "setInterval"(arg0: integer): void
public "getIO"(arg0: $Direction$Type, arg1: $Direction$Type): $IO
public "getInterval"(): integer
public "setTopIO"(arg0: $IO$Type): void
public "setBottomIO"(arg0: $IO$Type): void
public "getBottomIO"(): $IO
public "getLeftIO"(): $IO
public "getRightIO"(): $IO
public "setFrontIO"(arg0: $IO$Type): void
public "getFrontIO"(): $IO
public "setRightIO"(arg0: $IO$Type): void
public "getTopIO"(): $IO
public "setLeftIO"(arg0: $IO$Type): void
public "getBackIO"(): $IO
public "setBackIO"(arg0: $IO$Type): void
set "interval"(value: integer)
get "interval"(): integer
set "topIO"(value: $IO$Type)
set "bottomIO"(value: $IO$Type)
get "bottomIO"(): $IO
get "leftIO"(): $IO
get "rightIO"(): $IO
set "frontIO"(value: $IO$Type)
get "frontIO"(): $IO
set "rightIO"(value: $IO$Type)
get "topIO"(): $IO
set "leftIO"(value: $IO$Type)
get "backIO"(): $IO
set "backIO"(value: $IO$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoIO$Type = ($AutoIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoIO_ = $AutoIO$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry$RL" {
import {$MBDRegistry, $MBDRegistry$Type} from "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRegistry$RL<V> extends $MBDRegistry<($ResourceLocation), (V)> {
static readonly "REGISTERED": $Map<($ResourceLocation), ($MBDRegistry<(any), (any)>)>

constructor(arg0: $ResourceLocation$Type)

public "saveToNBT"(arg0: V): $Tag
public "readBuf"(arg0: $FriendlyByteBuf$Type): V
public "loadFromNBT"(arg0: $Tag$Type): V
public "writeBuf"(arg0: V, arg1: $FriendlyByteBuf$Type): void
public "codec"(): $Codec<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRegistry$RL$Type<V> = ($MBDRegistry$RL<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRegistry$RL_<V> = $MBDRegistry$RL$Type<(V)>;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineNeighborChangedEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineNeighborChangedEvent, $MachineNeighborChangedEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineNeighborChangedEvent"

export class $MBDMachineEvents$MachineNeighborChangedEventJS extends $MBDMachineEvents$MachineEventJS<($MachineNeighborChangedEvent)> {
readonly "event": E

constructor(arg0: $MachineNeighborChangedEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineNeighborChangedEventJS$Type = ($MBDMachineEvents$MachineNeighborChangedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineNeighborChangedEventJS_ = $MBDMachineEvents$MachineNeighborChangedEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/processor/$BaseGraphProcessor" {
import {$BaseGraph, $BaseGraph$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $BaseGraphProcessor implements $Iterable<($BaseNode)> {

constructor(graph: $BaseGraph$Type)

public "run"(): void
public "iterator"(): $Iterator<($BaseNode)>
public "updateComputeOrder"(): void
public "spliterator"(): $Spliterator<($BaseNode)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$BaseNode>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGraphProcessor$Type = ($BaseGraphProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGraphProcessor_ = $BaseGraphProcessor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/trait/$ICapabilityProviderTrait" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export interface $ICapabilityProviderTrait<T> {

 "getCapability"(): $Capability<(any)>
 "getCapContent"(arg0: $IO$Type): T
 "mergeContents"(arg0: $List$Type<(T)>): T
 "getCapabilityIO"(arg0: $Direction$Type): $IO
}

export namespace $ICapabilityProviderTrait {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProviderTrait$Type<T> = ($ICapabilityProviderTrait<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProviderTrait_<T> = $ICapabilityProviderTrait$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$AccessorOp" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AccessorOp extends $Enum<($AccessorOp)> {
static readonly "SYNCED": $AccessorOp
static readonly "FORCE_SYNCED": $AccessorOp
static readonly "PERSISTED": $AccessorOp


public static "values"(): ($AccessorOp)[]
public static "valueOf"(name: string): $AccessorOp
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorOp$Type = (("synced") | ("force_synced") | ("persisted")) | ($AccessorOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorOp_ = $AccessorOp$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoSyncBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAutoSyncBlockEntity extends $IManagedBlockEntity {

 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "defaultServerTick"(): void
 "getSyncTag"(): string
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity

(tag: $CompoundTag$Type): void
}

export namespace $IAutoSyncBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoSyncBlockEntity$Type = ($IAutoSyncBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoSyncBlockEntity_ = $IAutoSyncBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeModifier$RecipeModifiers, $RecipeModifier$RecipeModifiers$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$RecipeModifier$RecipeModifiers"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ConfigPartSettings$ConfigPartSettingsBuilder, $ConfigPartSettings$ConfigPartSettingsBuilder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings$ConfigPartSettingsBuilder"
import {$IToggleConfigurable, $IToggleConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IToggleConfigurable"
import {$ConfigPartSettings$ProxyCapability, $ConfigPartSettings$ProxyCapability$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings$ProxyCapability"

export class $ConfigPartSettings implements $IToggleConfigurable, $IPersistedSerializable {


public static "builder"(): $ConfigPartSettings$ConfigPartSettingsBuilder
public "enable"(): boolean
public "enable"(arg0: boolean): $ConfigPartSettings
public "proxyControllerCapabilities"(): $List<($ConfigPartSettings$ProxyCapability)>
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "isEnable"(): boolean
public "recipeModifiers"(): $RecipeModifier$RecipeModifiers
public "canShare"(): boolean
public "setEnable"(arg0: boolean): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPartSettings$Type = ($ConfigPartSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPartSettings_ = $ConfigPartSettings$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor$HistoryItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Editor$HistoryItem extends $Record {

constructor(name: string, date: $CompoundTag$Type, source: any)

public "name"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "source"(): any
public "date"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Editor$HistoryItem$Type = ($Editor$HistoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Editor$HistoryItem_ = $Editor$HistoryItem$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/forge/$FluidTransferHelperImpl" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$ItemStackTransfer, $ItemStackTransfer$Type} from "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$FluidTransferHelper, $FluidTransferHelper$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidTransferHelper"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidTransferHelperImpl extends $FluidTransferHelper {

constructor()

public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "toFluidHandler"(fluidTransfer: $IFluidTransfer$Type): $IFluidHandler
public static "toFluidTransfer"(handler: $IFluidHandler$Type): $IFluidTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTransferHelperImpl$Type = ($FluidTransferHelperImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTransferHelperImpl_ = $FluidTransferHelperImpl$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ExposedParameter$ParameterAccessor, $ExposedParameter$ParameterAccessor$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter$ParameterAccessor"

export class $ExposedParameter<T> implements $IPersistedSerializable {
readonly "identifier": string
readonly "type": $Class<(T)>

constructor(identifier: string, type: $Class$Type<(T)>)

public "getValue"(): T
public "setValue"(value: any): void
public "getAccessor"(): $ExposedParameter$ParameterAccessor
public "getDisplayName"(): string
public "setDisplayName"(displayName: string): $ExposedParameter<(T)>
public "setAccessor"(accessor: $ExposedParameter$ParameterAccessor$Type): $ExposedParameter<(T)>
public "setTips"(tips: $List$Type<(string)>): $ExposedParameter<(T)>
public "getTips"(): $List<(string)>
public "deserializeNBT"(tag: $CompoundTag$Type): void
get "value"(): T
set "value"(value: any)
get "accessor"(): $ExposedParameter$ParameterAccessor
get "displayName"(): string
set "displayName"(value: string)
set "accessor"(value: $ExposedParameter$ParameterAccessor$Type)
set "tips"(value: $List$Type<(string)>)
get "tips"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExposedParameter$Type<T> = ($ExposedParameter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExposedParameter_<T> = $ExposedParameter$Type<(T)>;
}}
declare module "packages/com/lowdragmc/mbd2/common/gui/editor/$MachineEditor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ILDLRegisterClient, $ILDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegisterClient"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"

export class $MachineEditor extends $Editor implements $ILDLRegisterClient {
static readonly "BASIC": $ConfigPanel$Tab
static readonly "SECOND": $ConfigPanel$Tab
static readonly "RESOURCE": $ConfigPanel$Tab
static "INSTANCE": $Editor
readonly "widgets": $List<($Widget)>

constructor()

public "initEditorViews"(): void
public "loadProject"(arg0: $IProject$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
public "getRegisterUI"(): $LDLRegister
public "getRegisterUIClient"(): $LDLRegisterClient
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineEditor$Type = ($MachineEditor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineEditor_ = $MachineEditor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleAABB" {
import {$ToggleObject, $ToggleObject$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ToggleAABB extends $ToggleObject<($AABB)> {

constructor()
constructor(arg0: boolean)
constructor(arg0: $AABB$Type)
constructor(arg0: $AABB$Type, arg1: boolean)

public "setValue"(arg0: $AABB$Type): void
set "value"(value: $AABB$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleAABB$Type = ($ToggleAABB);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleAABB_ = $ToggleAABB$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort$IPushDataDelegate" {
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"

export interface $NodePort$IPushDataDelegate {

 "pushData"(arg0: $PortEdge$Type): void

(arg0: $PortEdge$Type): void
}

export namespace $NodePort$IPushDataDelegate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodePort$IPushDataDelegate$Type = ($NodePort$IPushDataDelegate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodePort$IPushDataDelegate_ = $NodePort$IPushDataDelegate$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$MBDMachineDefinition$Builder, $MBDMachineDefinition$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ConfigMachineEvents, $ConfigMachineEvents$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineEvents"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$StateMachine, $StateMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$StateMachine"
import {$File, $File$Type} from "packages/java/io/$File"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ConfigItemProperties, $ConfigItemProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigItemProperties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigPartSettings, $ConfigPartSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings"
import {$BlockEntityRendererProvider, $BlockEntityRendererProvider$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider"
import {$EntityRenderersEvent$RegisterRenderers, $EntityRenderersEvent$RegisterRenderers$Type} from "packages/net/minecraftforge/client/event/$EntityRenderersEvent$RegisterRenderers"
import {$ConfigMachineSettings, $ConfigMachineSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConfigRecipeLogicSettings, $ConfigRecipeLogicSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigRecipeLogicSettings"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$IMachineBlockEntity, $IMachineBlockEntity$Type} from "packages/com/lowdragmc/mbd2/api/blockentity/$IMachineBlockEntity"
import {$MBDMachineDefinition$ConfigPartSettingsFactory, $MBDMachineDefinition$ConfigPartSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigPartSettingsFactory"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$RegisterEvent, $RegisterEvent$Type} from "packages/net/minecraftforge/registries/$RegisterEvent"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MBDMachineDefinition$ConfigMachineSettingsFactory, $MBDMachineDefinition$ConfigMachineSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigMachineSettingsFactory"
import {$ConfigBlockProperties, $ConfigBlockProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties"

export class $MBDMachineDefinition implements $IConfigurable, $IPersistedSerializable {


public static "get"(): $MBDMachineDefinition
public static "clear"(): void
public static "builder"(): $MBDMachineDefinition$Builder
public "id"(): $ResourceLocation
public static "set"(arg0: $MBDMachineDefinition$Type): void
public "getState"(arg0: string): $MachineState
public "block"(): $Block
public "item"(): $Item
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "itemProperties"(): $ConfigItemProperties
public "loadFactory"(): void
public "onRegistry"(arg0: $RegisterEvent$Type): void
public "loadProductiveTag"(arg0: $File$Type, arg1: $CompoundTag$Type, arg2: $Deque$Type<($Runnable$Type)>): $MBDMachineDefinition
public static "createDefault"(): $MBDMachineDefinition
public "projectFile"(): $File
public "blockEntityType"(): $BlockEntityType<(any)>
public "recipeLogicSettings"(): $ConfigRecipeLogicSettings
public "machineSettingsFactory"(): $MBDMachineDefinition$ConfigMachineSettingsFactory
public "partSettingsFactory"(): $MBDMachineDefinition$ConfigPartSettingsFactory
public "createDefaultRootState"(): $MachineState
public "createMachineEvents"(): $ConfigMachineEvents
public "createBlockRenderer"(): $IRenderer
public "reloadFromProjectFile"(): void
public "isCreatedFromProjectFile"(): boolean
public "itemRenderer"(): $IRenderer
public "stateMachine"(): $StateMachine<(any)>
public "partSettings"(): $ConfigPartSettings
public "machineSettings"(): $ConfigMachineSettings
public "blockProperties"(): $ConfigBlockProperties
public "machineEvents"(): $ConfigMachineEvents
public "blockRenderer"(): $IRenderer
public "uiCreator"(): $Function<($MBDMachine), ($WidgetGroup)>
public "allowPartSettings"(): boolean
public "createItem"(arg0: $Block$Type): $Item
public "createMachine"(arg0: $IMachineBlockEntity$Type): $MBDMachine
public "createBlock"(): $Block
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "createItemRenderer"(): $IRenderer
public "createBESRR"(): $BlockEntityRendererProvider<($BlockEntity)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "getDescriptionId"(): string
public "initRenderer"(arg0: $EntityRenderersEvent$RegisterRenderers$Type): void
public "asStack"(arg0: integer): $ItemStack
public "asStack"(): $ItemStack
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "createdFromProjectFile"(): boolean
get "descriptionId"(): string
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineDefinition$Type = ($MBDMachineDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineDefinition_ = $MBDMachineDefinition$Type;
}}
declare module "packages/com/lowdragmc/photon/core/mixins/accessor/$ShaderInstanceAccessor" {
import {$BlendMode, $BlendMode$Type} from "packages/com/mojang/blaze3d/shaders/$BlendMode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Uniform, $Uniform$Type} from "packages/com/mojang/blaze3d/shaders/$Uniform"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ShaderInstanceAccessor {

 "getSamplerNames"(): $List<(string)>
 "getBlend"(): $BlendMode
 "getUniformMap"(): $Map<(string), ($Uniform)>
}

export namespace $ShaderInstanceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstanceAccessor$Type = ($ShaderInstanceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderInstanceAccessor_ = $ShaderInstanceAccessor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings$ProxyCapability" {
import {$ToggleAutoIO, $ToggleAutoIO$Type} from "packages/com/lowdragmc/mbd2/common/trait/$ToggleAutoIO"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$CapabilityIO, $CapabilityIO$Type} from "packages/com/lowdragmc/mbd2/common/trait/$CapabilityIO"

export class $ConfigPartSettings$ProxyCapability implements $IConfigurable, $IPersistedSerializable {

constructor()

public "traitNameFilter"(): string
public "capabilityIO"(): $CapabilityIO
public "autoIO"(): $ToggleAutoIO
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPartSettings$ProxyCapability$Type = ($ConfigPartSettings$ProxyCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPartSettings$ProxyCapability_ = $ConfigPartSettings$ProxyCapability$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/$ItemTransferHelper" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemTransferHelper {

constructor()

public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "canItemStacksStackRelaxed"(a: $ItemStack$Type, b: $ItemStack$Type): boolean
public static "insertItemStacked"(inventory: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertItem"(dest: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "copyStackWithSize"(stack: $ItemStack$Type, size: integer): $ItemStack
public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type, preferredSlot: integer): void
public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type): void
public static "canItemStacksStack"(first: $ItemStack$Type, second: $ItemStack$Type): boolean
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransferHelper$Type = ($ItemTransferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransferHelper_ = $ItemTransferHelper$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeBuilder" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Content, $Content$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$Content"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$FluidIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeCondition, $RecipeCondition$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeCondition"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRecipeBuilder {
readonly "input": $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
readonly "output": $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
 "data": $CompoundTag
readonly "conditions": $List<($RecipeCondition)>
 "id": $ResourceLocation
 "recipeType": $MBDRecipeType
 "duration": integer
 "perTick": boolean
 "slotName": string
 "uiName": string
 "chance": float
 "tierChanceBoost": float
 "isFuel": boolean
 "priority": integer
 "onSave": $BiConsumer<($MBDRecipeBuilder), ($Consumer<($FinishedRecipe)>)>

constructor(arg0: $ResourceLocation$Type, arg1: $MBDRecipeType$Type)
constructor(arg0: $MBDRecipe$Type, arg1: $MBDRecipeType$Type)

public "priority"(arg0: integer): $MBDRecipeBuilder
public static "of"(arg0: $ResourceLocation$Type, arg1: $MBDRecipeType$Type): $MBDRecipeBuilder
public "id"(arg0: $ResourceLocation$Type): $MBDRecipeBuilder
public "save"(arg0: $Consumer$Type<($FinishedRecipe$Type)>): void
public "copy"(arg0: string): $MBDRecipeBuilder
public "copy"(arg0: $ResourceLocation$Type): $MBDRecipeBuilder
public "input"<T>(arg0: $RecipeCapability$Type<(T)>, ...arg1: (T)[]): $MBDRecipeBuilder
public "build"(): $FinishedRecipe
public "output"<T>(arg0: $RecipeCapability$Type<(T)>, ...arg1: (T)[]): $MBDRecipeBuilder
public "copyFrom"(arg0: $MBDRecipeBuilder$Type): $MBDRecipeBuilder
public "duration"(arg0: integer): $MBDRecipeBuilder
public "uiName"(arg0: string): $MBDRecipeBuilder
public "tierChanceBoost"(arg0: float): $MBDRecipeBuilder
public "isFuel"(arg0: boolean): $MBDRecipeBuilder
public "outputFluids"(...arg0: ($FluidStack$Type)[]): $MBDRecipeBuilder
public "outputFluids"(...arg0: ($FluidIngredient$Type)[]): $MBDRecipeBuilder
public "addCondition"(arg0: $RecipeCondition$Type): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: boolean): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: $Tag$Type): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: integer): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: long): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: float): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: string): $MBDRecipeBuilder
public "dimension"(arg0: $ResourceLocation$Type, arg1: boolean): $MBDRecipeBuilder
public "dimension"(arg0: $ResourceLocation$Type): $MBDRecipeBuilder
public "onSave"(arg0: $BiConsumer$Type<($MBDRecipeBuilder$Type), ($Consumer$Type<($FinishedRecipe$Type)>)>): $MBDRecipeBuilder
public "buildRawRecipe"(): $MBDRecipe
public "inputItems"(arg0: $TagKey$Type<($Item$Type)>, arg1: integer): $MBDRecipeBuilder
public "inputItems"(...arg0: ($ItemStack$Type)[]): $MBDRecipeBuilder
public "inputItems"(...arg0: ($Ingredient$Type)[]): $MBDRecipeBuilder
public "inputItems"(arg0: $Supplier$Type<(any)>, arg1: integer): $MBDRecipeBuilder
public "inputItems"(arg0: $Supplier$Type<(any)>): $MBDRecipeBuilder
public "inputItems"(arg0: $Item$Type): $MBDRecipeBuilder
public "inputItems"(arg0: $Item$Type, arg1: integer): $MBDRecipeBuilder
public "inputItems"(arg0: $TagKey$Type<($Item$Type)>): $MBDRecipeBuilder
public "outputItems"(arg0: $Item$Type, arg1: integer): $MBDRecipeBuilder
public "outputItems"(arg0: $Supplier$Type<(any)>): $MBDRecipeBuilder
public "outputItems"(arg0: $Supplier$Type<(any)>, arg1: integer): $MBDRecipeBuilder
public "outputItems"(arg0: $Item$Type): $MBDRecipeBuilder
public "outputItems"(...arg0: ($ItemStack$Type)[]): $MBDRecipeBuilder
public "posY"(arg0: integer, arg1: integer, arg2: boolean): $MBDRecipeBuilder
public "posY"(arg0: integer, arg1: integer): $MBDRecipeBuilder
public "inputs"<T>(arg0: $RecipeCapability$Type<(T)>, ...arg1: (any)[]): $MBDRecipeBuilder
public "slotName"(arg0: string): $MBDRecipeBuilder
public "biome"(arg0: $ResourceLocation$Type): $MBDRecipeBuilder
public "biome"(arg0: $ResourceLocation$Type, arg1: boolean): $MBDRecipeBuilder
public "perTick"(arg0: boolean): $MBDRecipeBuilder
public "rain"(arg0: float, arg1: float, arg2: boolean): $MBDRecipeBuilder
public "rain"(arg0: float, arg1: float): $MBDRecipeBuilder
public "saveAsBuiltinRecipe"(): $MBDRecipe
public "disableDistilleryRecipes"(arg0: boolean): $MBDRecipeBuilder
public "outputs"<T>(arg0: $RecipeCapability$Type<(T)>, ...arg1: (any)[]): $MBDRecipeBuilder
public "itemOutputs"(...arg0: ($ItemStack$Type)[]): $MBDRecipeBuilder
public static "ofRaw"(): $MBDRecipeBuilder
public "inputFluids"(...arg0: ($FluidIngredient$Type)[]): $MBDRecipeBuilder
public "inputFluids"(...arg0: ($FluidStack$Type)[]): $MBDRecipeBuilder
public "notConsumable"(arg0: $ItemStack$Type): $MBDRecipeBuilder
public "notConsumable"(arg0: $Item$Type): $MBDRecipeBuilder
public "notConsumable"(arg0: $Supplier$Type<(any)>): $MBDRecipeBuilder
public "explosivesAmount"(arg0: integer): $MBDRecipeBuilder
public "blastFurnaceTemp"(arg0: integer): $MBDRecipeBuilder
public "explosivesType"(arg0: $ItemStack$Type): $MBDRecipeBuilder
public "solderMultiplier"(arg0: integer): $MBDRecipeBuilder
public "fusionStartEU"(arg0: long): $MBDRecipeBuilder
public "chance"(arg0: float): $MBDRecipeBuilder
public "recipeType"(arg0: $MBDRecipeType$Type): $MBDRecipeBuilder
public "thunder"(arg0: float, arg1: float): $MBDRecipeBuilder
public "thunder"(arg0: float, arg1: float, arg2: boolean): $MBDRecipeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeBuilder$Type = ($MBDRecipeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeBuilder_ = $MBDRecipeBuilder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockPosFace {
readonly "facing": $Direction
readonly "pos": $BlockPos

constructor(pos: $BlockPos$Type, facing: $Direction$Type)

public "equals"(bp: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPosFace$Type = ($BlockPosFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPosFace_ = $BlockPosFace$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$EntityIngredientJS" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$EntityIngredient, $EntityIngredient$Type} from "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$EntityIngredient"

export class $MBDRecipeSchema$EntityIngredientJS extends $Record {

constructor(ingredient: $EntityIngredient$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: any): $MBDRecipeSchema$EntityIngredientJS
public "ingredient"(): $EntityIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeSchema$EntityIngredientJS$Type = ($MBDRecipeSchema$EntityIngredientJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeSchema$EntityIngredientJS_ = $MBDRecipeSchema$EntityIngredientJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/graphprocessor/$MachineEventGraphProcessor" {
import {$BaseGraph, $BaseGraph$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TriggerProcessor, $TriggerProcessor$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/processor/$TriggerProcessor"

export class $MachineEventGraphProcessor extends $TriggerProcessor {

constructor(arg0: $Class$Type<(any)>, arg1: $BaseGraph$Type)

public "postEvent"(arg0: $MachineEvent$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineEventGraphProcessor$Type = ($MachineEventGraphProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineEventGraphProcessor_ = $MachineEventGraphProcessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ImageWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textureSupplier: $Supplier$Type<($IGuiTexture$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, area: $IGuiTexture$Type)
constructor()

public "getBorderColor"(): integer
public "getBorder"(): integer
public "getImage"(): $IGuiTexture
public "setBorder"(border: integer, color: integer): $ImageWidget
public "setImage"(textureSupplier: $Supplier$Type<($IGuiTexture$Type)>): $ImageWidget
public "setImage"(area: $IGuiTexture$Type): $ImageWidget
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "borderColor"(): integer
get "border"(): integer
get "image"(): $IGuiTexture
set "image"(value: $Supplier$Type<($IGuiTexture$Type)>)
set "image"(value: $IGuiTexture$Type)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageWidget$Type = ($ImageWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageWidget_ = $ImageWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MenuTab, $MenuTab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MenuPanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "saveMenuData"(): void
public "initWidget"(): void
public "getTabs"(): $Map<(string), ($MenuTab)>
public "getTab"<T extends $MenuTab>(name: string): T
public "getEditor"(): $Editor
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "tabs"(): $Map<(string), ($MenuTab)>
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuPanel$Type = ($MenuPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuPanel_ = $MenuPanel$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Content, $Content$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$Content"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$MBDRecipeSchema$FluidIngredientJS, $MBDRecipeSchema$FluidIngredientJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$FluidIngredientJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeCondition, $RecipeCondition$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeCondition"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MBDRecipeSchema$EntityIngredientJS, $MBDRecipeSchema$EntityIngredientJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$EntityIngredientJS"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$MBDRecipeSchema$MBDRecipeJS$RecipeBuilder, $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS$RecipeBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRecipeSchema$MBDRecipeJS extends $RecipeJS {
readonly "inputs": $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
readonly "outputs": $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
readonly "conditions": $List<($RecipeCondition)>
 "data": $CompoundTag
 "duration": integer
 "priority": integer
 "isFuel": boolean
 "perTick": boolean
 "slotName": string
 "uiName": string
 "chance": float
 "tierChanceBoost": float
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "priority"(): integer
public "priority"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "data"(): $CompoundTag
public "duration"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "duration"(): integer
public "uiName"(): string
public "uiName"(arg0: string, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "uiName"(arg0: string): $MBDRecipeSchema$MBDRecipeJS
public "positionY"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "serialize"(): void
public "deserialize"(arg0: boolean): void
public "tierChanceBoost"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "tierChanceBoost"(): float
public "tierChanceBoost"(arg0: float, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "isFuel"(arg0: boolean): $MBDRecipeSchema$MBDRecipeJS
public "isFuel"(): boolean
public "outputFluids"(...arg0: ($MBDRecipeSchema$FluidIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "addCondition"(arg0: $RecipeCondition$Type): $MBDRecipeSchema$MBDRecipeJS
public "blocksInStructure"(arg0: integer, arg1: integer, ...arg2: ($Block$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputPigments"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "rotationCondition"(arg0: float, arg1: float, arg2: float, arg3: float): $MBDRecipeSchema$MBDRecipeJS
public "dayLight"(arg0: boolean): $MBDRecipeSchema$MBDRecipeJS
public "outputPigments"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "addDataNumber"(arg0: string, arg1: double): $MBDRecipeSchema$MBDRecipeJS
public "addDataBoolean"(arg0: string, arg1: boolean): $MBDRecipeSchema$MBDRecipeJS
public "addDataString"(arg0: string, arg1: string): $MBDRecipeSchema$MBDRecipeJS
public "outputMana"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputEmber"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "outputEmber"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "inputEU"(arg0: long): $MBDRecipeSchema$MBDRecipeJS
public "outputHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "inputRPM"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "inputMana"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "inputPNCAir"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputFE"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "outputEntities"(...arg0: ($MBDRecipeSchema$EntityIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputPNCPressure"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "outputPNCHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "outputAura"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputPNCPressure"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "inputEntities"(...arg0: ($MBDRecipeSchema$EntityIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputPNCHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "outputFE"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputAura"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "outputPNCAir"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "outputEU"(arg0: long): $MBDRecipeSchema$MBDRecipeJS
public "inputStress"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "outputStress"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "inputSlurries"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputInfusions"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputGases"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputInfusions"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputSlurries"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputRPM"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "inputGases"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "conditions"(): $List<($RecipeCondition)>
public "addData"(arg0: string, arg1: $Tag$Type): $MBDRecipeSchema$MBDRecipeJS
public "machineData"(arg0: $CompoundTag$Type, arg1: boolean): $MBDRecipeSchema$MBDRecipeJS
public "redstoneSignal"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "dimension"(arg0: $ResourceLocation$Type): $MBDRecipeSchema$MBDRecipeJS
public "inputItems"(...arg0: ($InputItem$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputItems"(...arg0: ($InputItem$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputs"(): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "inputs"(arg0: $RecipeCapability$Type<(any)>, ...arg1: (any)[]): $MBDRecipeSchema$MBDRecipeJS
public "machineLevel"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "slotName"(arg0: string, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "slotName"(): string
public "slotName"(arg0: string): $MBDRecipeSchema$MBDRecipeJS
public "biome"(arg0: $ResourceLocation$Type): $MBDRecipeSchema$MBDRecipeJS
public "perTick"(): boolean
public "perTick"(arg0: boolean): $MBDRecipeSchema$MBDRecipeJS
public "perTick"(arg0: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "outputs"(): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "outputs"(arg0: $RecipeCapability$Type<(any)>, ...arg1: (any)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputFluids"(...arg0: ($MBDRecipeSchema$FluidIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "raining"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "thundering"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "chance"(arg0: float, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "chance"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "chance"(): float
public "inputItemsDurability"(...arg0: ($InputItem$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "pncTemperatureCondition"(arg0: float, arg1: float): $MBDRecipeSchema$MBDRecipeJS
public "mekTemperatureCondition"(arg0: double, arg1: double): $MBDRecipeSchema$MBDRecipeJS
public "outputItemsDurability"(...arg0: ($InputItem$Type)[]): $MBDRecipeSchema$MBDRecipeJS
get "fuel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeSchema$MBDRecipeJS$Type = ($MBDRecipeSchema$MBDRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeSchema$MBDRecipeJS_ = $MBDRecipeSchema$MBDRecipeJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$FluidIngredient" {
import {$FluidIngredient$Value, $FluidIngredient$Value$Type} from "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$FluidIngredient$Value"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $FluidIngredient implements $Predicate<($FluidStack)> {
static readonly "EMPTY": $FluidIngredient
 "values": ($FluidIngredient$Value)[]
 "stacks": ($FluidStack)[]

constructor(arg0: $Stream$Type<(any)>, arg1: long, arg2: $CompoundTag$Type)

public "test"(arg0: $FluidStack$Type): boolean
public "isEmpty"(): boolean
public static "of"(): $FluidIngredient
public static "of"(arg0: long, ...arg1: ($Fluid$Type)[]): $FluidIngredient
public static "of"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: long): $FluidIngredient
public static "of"(...arg0: ($FluidStack$Type)[]): $FluidIngredient
public static "of"(arg0: $Stream$Type<($Fluid$Type)>, arg1: long, arg2: $CompoundTag$Type): $FluidIngredient
public static "of"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: long, arg2: $CompoundTag$Type): $FluidIngredient
public "copy"(): $FluidIngredient
public "copy"(arg0: long): $FluidIngredient
public "toJson"(): $JsonElement
public static "fromJson"(arg0: $JsonElement$Type): $FluidIngredient
public static "fromJson"(arg0: $JsonElement$Type, arg1: boolean): $FluidIngredient
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getNbt"(): $CompoundTag
public "setNbt"(arg0: $CompoundTag$Type): void
public "getStacks"(): ($FluidStack)[]
public "setAmount"(arg0: long): void
public "getAmount"(): long
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $FluidIngredient
public static "fromValues"(arg0: $Stream$Type<(any)>, arg1: long, arg2: $CompoundTag$Type): $FluidIngredient
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
get "empty"(): boolean
get "nbt"(): $CompoundTag
set "nbt"(value: $CompoundTag$Type)
get "stacks"(): ($FluidStack)[]
set "amount"(value: long)
get "amount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$Type = ($FluidIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredient_ = $FluidIngredient$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$BlockSound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ForgeSoundType, $ForgeSoundType$Type} from "packages/net/minecraftforge/common/util/$ForgeSoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $ConfigBlockProperties$BlockSound implements $IPersistedSerializable, $IConfigurable {

constructor()

public "createSoundConfigurator"(arg0: string, arg1: $Consumer$Type<($ResourceLocation$Type)>, arg2: $Supplier$Type<($ResourceLocation$Type)>): $Configurator
public "hitSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "hitSound"(): $ResourceLocation
public "volumeIn"(): float
public "volumeIn"(arg0: float): $ConfigBlockProperties$BlockSound
public "stepSound"(): $ResourceLocation
public "stepSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "placeSound"(): $ResourceLocation
public "placeSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "fallSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "fallSound"(): $ResourceLocation
public "breakSound"(): $ResourceLocation
public "breakSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "pitchIn"(): float
public "pitchIn"(arg0: float): $ConfigBlockProperties$BlockSound
public "createSoundType"(): $ForgeSoundType
public "stepSoundEvent"(): $SoundEvent
public "stepSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "placeSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "placeSoundEvent"(): $SoundEvent
public "fallSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "fallSoundEvent"(): $SoundEvent
public "hitSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "hitSoundEvent"(): $SoundEvent
public "breakSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "breakSoundEvent"(): $SoundEvent
public "getFallSoundEvent"(): $SoundEvent
public "getPlaceSoundEvent"(): $SoundEvent
public "getHitSoundEvent"(): $SoundEvent
public "getStepSoundEvent"(): $SoundEvent
public "getBreakSoundEvent"(): $SoundEvent
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBlockProperties$BlockSound$Type = ($ConfigBlockProperties$BlockSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBlockProperties$BlockSound_ = $ConfigBlockProperties$BlockSound$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SelectableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SelectableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$ISelected {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "setOnSelected"(onSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $SelectableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $SelectableWidgetGroup
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "onUnSelected"(): void
public "onSelected"(): void
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setPrefab"(prefab: any): void
public "getPrefab"<T>(): T
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "selectedTexture"(value: $IGuiTexture$Type)
get "selected"(): boolean
set "prefab"(value: any)
get "prefab"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableWidgetGroup$Type = ($SelectableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableWidgetGroup_ = $SelectableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IMachine, $IMachine$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMachine"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$RecipeLogic$Status, $RecipeLogic$Status$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status"
import {$IEnhancedManaged, $IEnhancedManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IEnhancedManaged"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MBDRecipe$ActionResult, $MBDRecipe$ActionResult$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe$ActionResult"

export class $RecipeLogic implements $IEnhancedManaged {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder
readonly "machine": $IMachine
 "lastFailedMatches": $List<($MBDRecipe)>

constructor(arg0: $IMachine$Type)

public "isActive"(): boolean
public "getDuration"(): integer
public "getStatus"(): $RecipeLogic$Status
public "isWorking"(): boolean
public "onChanged"(): void
public "setStatus"(arg0: $RecipeLogic$Status$Type): void
public "getMaxProgress"(): integer
public "resetRecipeLogic"(): void
public "getLastRecipe"(): $MBDRecipe
public "inValid"(): void
public "isIdle"(): boolean
public "setDuration"(arg0: integer): void
public "getMachine"(): $IMachine
public "getProgress"(): integer
public "findAndHandleRecipe"(): void
public "handleRecipeWorking"(): void
public "getTotalContinuousRunningTime"(): long
public "setTotalContinuousRunningTime"(arg0: long): void
public "markLastRecipeDirty"(): void
/**
 * 
 * @deprecated
 */
public "isHasNotEnoughEnergy"(): boolean
public "getLastOriginRecipe"(): $MBDRecipe
public "getRecipeManager"(): $RecipeManager
public "getFuelTime"(): integer
public "getFuelMaxTime"(): integer
public "isWaiting"(): boolean
public "needFuel"(): boolean
public "getWaitingReason"(): $Component
public "setProgress"(arg0: integer): void
public "getFuelProgressPercent"(): double
public "getProgressPercent"(): double
public "getFieldHolder"(): $ManagedFieldHolder
public "scheduleRenderUpdate"(): void
public "isSuspend"(): boolean
public "onRecipeFinish"(): void
public "setupRecipe"(arg0: $MBDRecipe$Type): void
public "interruptRecipe"(): void
public "handleTickRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe$ActionResult
public "handleFuelRecipe"(): boolean
public "setWaiting"(arg0: $Component$Type): void
public "setWorkingEnabled"(arg0: boolean): void
public "setFuelTime"(arg0: integer): void
public "setLastFuelRecipe"(arg0: $MBDRecipe$Type): void
public "isRecipeDirty"(): boolean
public "setLastRecipe"(arg0: $MBDRecipe$Type): void
public "getLastFuelRecipe"(): $MBDRecipe
public "setFuelMaxTime"(arg0: integer): void
public "serverTick"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
public "markDirty"(name: string): void
get "active"(): boolean
get "duration"(): integer
get "status"(): $RecipeLogic$Status
get "working"(): boolean
set "status"(value: $RecipeLogic$Status$Type)
get "maxProgress"(): integer
get "lastRecipe"(): $MBDRecipe
get "idle"(): boolean
set "duration"(value: integer)
get "machine"(): $IMachine
get "progress"(): integer
get "totalContinuousRunningTime"(): long
set "totalContinuousRunningTime"(value: long)
get "hasNotEnoughEnergy"(): boolean
get "lastOriginRecipe"(): $MBDRecipe
get "recipeManager"(): $RecipeManager
get "fuelTime"(): integer
get "fuelMaxTime"(): integer
get "waiting"(): boolean
get "waitingReason"(): $Component
set "progress"(value: integer)
get "fuelProgressPercent"(): double
get "progressPercent"(): double
get "fieldHolder"(): $ManagedFieldHolder
get "suspend"(): boolean
set "upRecipe"(value: $MBDRecipe$Type)
set "waiting"(value: $Component$Type)
set "workingEnabled"(value: boolean)
set "fuelTime"(value: integer)
set "lastFuelRecipe"(value: $MBDRecipe$Type)
get "recipeDirty"(): boolean
set "lastRecipe"(value: $MBDRecipe$Type)
get "lastFuelRecipe"(): $MBDRecipe
set "fuelMaxTime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeLogic$Type = ($RecipeLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeLogic_ = $RecipeLogic$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Resources {
readonly "resources": $Map<(string), ($Resource<(any)>)>

constructor(resources: $Map$Type<(string), ($Resource$Type<(any)>)>)

public "load"(): void
public "merge"(resources: $Resources$Type): void
public "dispose"(): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public static "defaultResource"(): $Resources
public static "emptyResource"(): $Resources
public static "fromNBT"(tag: $CompoundTag$Type): $Resources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resources$Type = ($Resources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resources_ = $Resources$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigRecipeLogicSettings" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder, $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder"
import {$RecipeModifier$RecipeModifiers, $RecipeModifier$RecipeModifiers$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$RecipeModifier$RecipeModifiers"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IToggleConfigurable, $IToggleConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IToggleConfigurable"

export class $ConfigRecipeLogicSettings implements $IToggleConfigurable, $IPersistedSerializable {


public static "builder"(): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "isEnable"(): boolean
public "recipeModifiers"(): $RecipeModifier$RecipeModifiers
public "alwaysSearchRecipe"(): boolean
public "recipeDampingValue"(): integer
public "alwaysModifyRecipe"(): boolean
public "getRecipeType"(): $MBDRecipeType
public "setEnable"(arg0: boolean): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "recipeType"(): $ResourceLocation
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "enable"(): boolean
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigRecipeLogicSettings$Type = ($ConfigRecipeLogicSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigRecipeLogicSettings_ = $ConfigRecipeLogicSettings$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$IHeldItemUIHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IUIHolder$ItemUI, $IUIHolder$ItemUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder$ItemUI"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$HeldItemUIFactory$HeldItemHolder, $HeldItemUIFactory$HeldItemHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder"

/**
 * 
 * @deprecated
 */
export interface $HeldItemUIFactory$IHeldItemUIHolder extends $IUIHolder$ItemUI {

 "createUI"(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI

(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI
}

export namespace $HeldItemUIFactory$IHeldItemUIHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeldItemUIFactory$IHeldItemUIHolder$Type = ($HeldItemUIFactory$IHeldItemUIHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeldItemUIFactory$IHeldItemUIHolder_ = $HeldItemUIFactory$IHeldItemUIHolder$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/geckolib/$AnimationStage$LoopType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Animation$LoopType, $Animation$LoopType$Type} from "packages/software/bernie/geckolib/core/animation/$Animation$LoopType"

export class $AnimationStage$LoopType extends $Enum<($AnimationStage$LoopType)> {
static readonly "DEFAULT": $AnimationStage$LoopType
static readonly "PLAY_ONCE": $AnimationStage$LoopType
static readonly "HOLD_ON_LAST_FRAME": $AnimationStage$LoopType
static readonly "LOOP": $AnimationStage$LoopType
readonly "type": $Animation$LoopType


public static "values"(): ($AnimationStage$LoopType)[]
public static "valueOf"(arg0: string): $AnimationStage$LoopType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationStage$LoopType$Type = (("default") | ("loop") | ("play_once") | ("hold_on_last_frame")) | ($AnimationStage$LoopType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationStage$LoopType_ = $AnimationStage$LoopType$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export interface $IManagedStorage {

 "init"(): void
 "getSyncFields"(): ($IRef)[]
 "getManaged"(): ($IManaged)[]
 "addSyncUpdateListener"<T>(arg0: $ManagedKey$Type, arg1: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "getPersistedFields"(): ($IRef)[]
 "notifyFieldUpdate"<T>(arg0: $ManagedKey$Type, arg1: T, arg2: T): void
 "hasSyncListener"(arg0: $ManagedKey$Type): boolean
 "hasDirtySyncFields"(): boolean
 "getNonLazyFields"(): ($IRef)[]
 "getFieldByKey"(arg0: $ManagedKey$Type): $IRef
 "hasDirtyPersistedFields"(): boolean
 "removeAllSyncUpdateListener"(arg0: $ManagedKey$Type): void
 "markAllDirty"(): void
 "markDirty"(key: $ManagedKey$Type): void
}

export namespace $IManagedStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedStorage$Type = ($IManagedStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedStorage_ = $IManagedStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ISlotWidgetKJS, $ISlotWidgetKJS$Type} from "packages/com/lowdragmc/lowdraglib/kjs/forge/$ISlotWidgetKJS"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SlotWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget, $ISlotWidgetKJS {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean

constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor()

public "getHandler"(): $Slot
public "getItem"(): $ItemStack
public "setSize"(size: $Size$Type): void
public "isEnabled"(): boolean
public "getTooltipTexts"(): $List<($Component)>
public "initTemplate"(): void
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setCanPutItems"(canPutItems: boolean): $SlotWidget
public "getXEIChance"(): float
public "getXEIIngredients"(): $List<(any)>
public "setDrawHoverTips"(drawHoverTips: boolean): $SlotWidget
public "setChangeListener"(changeListener: $Runnable$Type): $SlotWidget
public "setCanTakeItems"(canTakeItems: boolean): $SlotWidget
public "setItemHook"(itemHook: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>): $SlotWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>): $SlotWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
public "setXEIChance"(XEIChance: float): $SlotWidget
public "getLastItem"(): $ItemStack
public "getIngredientIO"(): $IngredientIO
public "setHandlerSlot"(itemHandler: $IItemTransfer$Type, slotIndex: integer): $SlotWidget
public "getRealStack"(itemStack: $ItemStack$Type): $ItemStack
public "canPutStack"(stack: $ItemStack$Type): boolean
public "setContainerSlot"(inventory: $Container$Type, slotIndex: integer): $SlotWidget
public "canTakeStack"(player: $Player$Type): boolean
public "onSlotChanged"(): void
public "setLocationInfo"(isPlayerContainer: boolean, isPlayerHotBar: boolean): $SlotWidget
public "detectAndSendChanges"(): void
public "setGui"(gui: $ModularUI$Type): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$Type): $SlotWidget
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $SlotWidget
public "getFullTooltipTexts"(): $List<($Component)>
public "getXEICurrentIngredient"(): any
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "setItem"(stack: $ItemStack$Type, notify: boolean): void
public "setItem"(stack: $ItemStack$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "self"(): $Widget
public "widget"(): $Widget
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "kjs$self"(): $SlotWidget
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "handler"(): $Slot
get "item"(): $ItemStack
set "size"(value: $Size$Type)
get "enabled"(): boolean
get "tooltipTexts"(): $List<($Component)>
set "canPutItems"(value: boolean)
get "xEIChance"(): float
get "xEIIngredients"(): $List<(any)>
set "drawHoverTips"(value: boolean)
set "changeListener"(value: $Runnable$Type)
set "canTakeItems"(value: boolean)
set "itemHook"(value: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>)
set "onAddedTooltips"(value: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>)
set "ingredientIO"(value: $IngredientIO$Type)
set "xEIChance"(value: float)
get "lastItem"(): $ItemStack
get "ingredientIO"(): $IngredientIO
set "gui"(value: $ModularUI$Type)
set "backgroundTexture"(value: $IGuiTexture$Type)
set "drawHoverOverlay"(value: boolean)
get "fullTooltipTexts"(): $List<($Component)>
get "xEICurrentIngredient"(): any
set "item"(value: $ItemStack$Type)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotWidget$Type = ($SlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotWidget_ = $SlotWidget$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDRecipeTypeRegistryEventJS" {
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MBDRecipeTypeRegistryEventJS extends $StartupEventJS {

constructor()

public "removeRecipeType"(arg0: $ResourceLocation$Type): void
public "createRecipeType"(arg0: $ResourceLocation$Type): $MBDRecipeType
public "getRecipeType"(arg0: $ResourceLocation$Type): $MBDRecipeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeTypeRegistryEventJS$Type = ($MBDRecipeTypeRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeTypeRegistryEventJS_ = $MBDRecipeTypeRegistryEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/geckolib/$AnimationStage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$AnimationStage$LoopType, $AnimationStage$LoopType$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$AnimationStage$LoopType"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $AnimationStage implements $IConfigurable, $ITagSerializable<($CompoundTag)> {
static readonly "WAIT": string

constructor()

public "getAdditionalTicks"(): integer
public "isWait"(): boolean
public "getAnimationName"(): string
public "getLoopType"(): $AnimationStage$LoopType
public "setWait"(arg0: boolean): $AnimationStage
public "setAnimationName"(arg0: string): $AnimationStage
public "setAdditionalTicks"(arg0: integer): $AnimationStage
public "setLoopType"(arg0: $AnimationStage$LoopType$Type): $AnimationStage
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "additionalTicks"(): integer
get "wait"(): boolean
get "animationName"(): string
get "loopType"(): $AnimationStage$LoopType
set "wait"(value: boolean)
set "animationName"(value: string)
set "additionalTicks"(value: integer)
set "loopType"(value: $AnimationStage$LoopType$Type)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationStage$Type = ($AnimationStage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationStage_ = $AnimationStage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceBorderTexture extends $ResourceTexture {
static readonly "BORDERED_BACKGROUND": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_INVERSE": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_BLUE": $ResourceBorderTexture
static readonly "BUTTON_COMMON": $ResourceBorderTexture
static readonly "BAR": $ResourceBorderTexture
static readonly "SELECTED": $ResourceBorderTexture
 "borderSize": $Size
 "imageSize": $Size
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor()
constructor(imageLocation: string, imageWidth: integer, imageHeight: integer, cornerWidth: integer, cornerHeight: integer)

public "setBorderSize"(width: integer, height: integer): $ResourceBorderTexture
public "setImageSize"(width: integer, height: integer): $ResourceBorderTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceBorderTexture$Type = ($ResourceBorderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceBorderTexture_ = $ResourceBorderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$PositionedRect" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $PositionedRect {
readonly "position": $Position
readonly "size": $Size

constructor(pos1: $Position$Type, pos2: $Position$Type)
constructor(position: $Position$Type, size: $Size$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Size
public "intersects"(other: $Position$Type): boolean
public "intersects"(other: $PositionedRect$Type): boolean
public "getPosition"(): $Position
get "size"(): $Size
get "position"(): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedRect$Type = ($PositionedRect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedRect_ = $PositionedRect$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ServerPlayerAccessor" {
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $ServerPlayerAccessor {

 "callInitMenu"(arg0: $AbstractContainerMenu$Type): void
 "getContainerCounter"(): integer
 "callNextContainerCounter"(): void
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$Type = ($ServerPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccessor_ = $ServerPlayerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"

export interface $ILDLRegister {

 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
}

export namespace $ILDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILDLRegister$Type = ($ILDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILDLRegister_ = $ILDLRegister$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/content/$IContentSerializer" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Content, $Content$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$Content"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $IContentSerializer<T> {

 "of"(arg0: any): T
 "toJson"(arg0: T): $JsonElement
 "fromJson"(arg0: $JsonElement$Type): T
 "fromJsonContent"(arg0: $JsonElement$Type): $Content
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "toNetworkContent"(arg0: $FriendlyByteBuf$Type, arg1: $Content$Type): void
 "fromNetworkContent"(arg0: $FriendlyByteBuf$Type): $Content
 "copyInner"(arg0: T): T
 "copyWithModifier"(arg0: T, arg1: $ContentModifier$Type): T
 "fromNBT"(arg0: $CompoundTag$Type): $Content
 "fromNBT"(arg0: $Tag$Type): T
 "fromNetwork"(arg0: $FriendlyByteBuf$Type): T
 "toJsonContent"(arg0: $Content$Type): $JsonElement
 "toNBT"(arg0: T): $Tag
 "toNBT"(arg0: $Content$Type): $CompoundTag
}

export namespace $IContentSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentSerializer$Type<T> = ($IContentSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentSerializer_<T> = $IContentSerializer$Type<(T)>;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineClientTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MachineClientTickEvent extends $MachineEvent {
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineClientTickEvent$Type = ($MachineClientTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineClientTickEvent_ = $MachineClientTickEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineCustomKeyframeEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineCustomKeyframeEvent, $MachineCustomKeyframeEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineCustomKeyframeEvent"

export class $MBDMachineEvents$MachineCustomKeyframeEventJS extends $MBDMachineEvents$MachineEventJS<($MachineCustomKeyframeEvent)> {
readonly "event": E

constructor(arg0: $MachineCustomKeyframeEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineCustomKeyframeEventJS$Type = ($MBDMachineEvents$MachineCustomKeyframeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineCustomKeyframeEventJS_ = $MBDMachineEvents$MachineCustomKeyframeEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePortContainer$NodeInputPortContainer" {
import {$NodePortContainer, $NodePortContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePortContainer"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"

export class $NodePortContainer$NodeInputPortContainer extends $NodePortContainer {

constructor(node: $BaseNode$Type)

public "PullDatas"(): void
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodePortContainer$NodeInputPortContainer$Type = ($NodePortContainer$NodeInputPortContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodePortContainer$NodeInputPortContainer_ = $NodePortContainer$NodeInputPortContainer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe$ActionResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $MBDRecipe$ActionResult extends $Record {
static readonly "SUCCESS": $MBDRecipe$ActionResult
static readonly "FAIL_NO_REASON": $MBDRecipe$ActionResult

constructor(isSuccess: boolean, reason: $Supplier$Type<($Component$Type)>, expectingRate: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fail"(arg0: $Supplier$Type<($Component$Type)>, arg1: float): $MBDRecipe$ActionResult
public static "fail"(arg0: $Supplier$Type<($Component$Type)>): $MBDRecipe$ActionResult
public "reason"(): $Supplier<($Component)>
public "isSuccess"(): boolean
public "expectingRate"(): float
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipe$ActionResult$Type = ($MBDRecipe$ActionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipe$ActionResult_ = $MBDRecipe$ActionResult$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISubscription {

 "unsubscribe"(): void

(): void
}

export namespace $ISubscription {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubscription$Type = ($ISubscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubscription_ = $ISubscription$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeModifyEvent$After" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineRecipeModifyEvent, $MachineRecipeModifyEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeModifyEvent"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export class $MachineRecipeModifyEvent$After extends $MachineRecipeModifyEvent {
 "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipeModifyEvent$After$Type = ($MachineRecipeModifyEvent$After);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRecipeModifyEvent$After_ = $MachineRecipeModifyEvent$After$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineNeighborChangedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineNeighborChangedEvent extends $MachineEvent {
readonly "block": $Block
readonly "fromPos": $BlockPos
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type, arg1: $Block$Type, arg2: $BlockPos$Type)
constructor()

public "getBlock"(): $Block
public "getListenerList"(): $ListenerList
public "getFromPos"(): $BlockPos
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "block"(): $Block
get "listenerList"(): $ListenerList
get "fromPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineNeighborChangedEvent$Type = ($MachineNeighborChangedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineNeighborChangedEvent_ = $MachineNeighborChangedEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/block/$RendererBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockRendererProvider, $IBlockRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $RendererBlock extends $Block implements $EntityBlock, $IBlockRendererProvider {
static readonly "BLOCK": $RendererBlock
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


public "getRenderer"(state: $BlockState$Type): $IRenderer
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer
public "getModelState"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendererBlock$Type = ($RendererBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendererBlock_ = $RendererBlock$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $Target extends $Consumer<(any)> {

 "accept"(arg0: any): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(any)>
}

export namespace $Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Target$Type = ($Target);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Target_ = $Target$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AnnotationDetector$Wrapper<A extends $Annotation, T> extends $Record {

constructor(annotation: A, clazz: $Class$Type<(any)>, creator: $Supplier$Type<(T)>)

public "clazz"(): $Class<(any)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "annotation"(): A
public "creator"(): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationDetector$Wrapper$Type<A, T> = ($AnnotationDetector$Wrapper<(A), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationDetector$Wrapper_<A, T> = $AnnotationDetector$Wrapper$Type<(A), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"

export interface $IUIHolder {

 "isInvalid"(): boolean
 "markAsDirty"(): void
 "createUI"(arg0: $Player$Type): $ModularUI
 "isRemote"(): boolean
}

export namespace $IUIHolder {
const EMPTY: $IUIHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUIHolder$Type = ($IUIHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUIHolder_ = $IUIHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$FieldManagedStorage" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export class $FieldManagedStorage implements $IManagedStorage {

constructor(owner: $IManaged$Type)

public "init"(): void
public "getSyncFields"(): ($IRef)[]
public "getManaged"(): ($IManaged)[]
public "addSyncUpdateListener"<T>(key: $ManagedKey$Type, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "getPersistedFields"(): ($IRef)[]
public "notifyFieldUpdate"<T>(key: $ManagedKey$Type, newVal: T, oldVal: T): void
public "hasSyncListener"(key: $ManagedKey$Type): boolean
public "hasDirtySyncFields"(): boolean
public "getNonLazyFields"(): ($IRef)[]
public "getFieldByKey"(key: $ManagedKey$Type): $IRef
public "initEnhancedFeature"(): void
public "hasDirtyPersistedFields"(): boolean
public "removeAllSyncUpdateListener"(key: $ManagedKey$Type): void
public "markAllDirty"(): void
public "markDirty"(key: $ManagedKey$Type): void
get "syncFields"(): ($IRef)[]
get "managed"(): ($IManaged)[]
get "persistedFields"(): ($IRef)[]
get "nonLazyFields"(): ($IRef)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldManagedStorage$Type = ($FieldManagedStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldManagedStorage_ = $FieldManagedStorage$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Content, $Content$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$Content"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IContentSerializer, $IContentSerializer$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$IContentSerializer"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RecipeCapability<T> {
readonly "name": string
readonly "serializer": $IContentSerializer<(T)>


public "of"(arg0: any): T
public "copyContent"(arg0: any, arg1: $ContentModifier$Type): T
public "copyContent"(arg0: any): T
public "getLeftErrorInfo"(arg0: $List$Type<(T)>): $Component
public "createDefaultContent"(): T
public "createPreviewWidget"(arg0: T): $Widget
public "createContentConfigurator"(arg0: $ConfiguratorGroup$Type, arg1: $Supplier$Type<(T)>, arg2: $Consumer$Type<(T)>): void
public "getTraslateComponent"(): $Component
public "bindXEIWidget"(arg0: $Widget$Type, arg1: $Content$Type, arg2: $IngredientIO$Type): void
public "copyInner"(arg0: T): T
public "copyWithModifier"(arg0: T, arg1: $ContentModifier$Type): T
public "deepCopyContent"(arg0: any): T
public "deepCopyContent"(arg0: any, arg1: $ContentModifier$Type): T
public "createXEITemplate"(): $Widget
public "calculateAmount"(arg0: $List$Type<(T)>): double
get "traslateComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCapability$Type<T> = ($RecipeCapability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCapability_<T> = $RecipeCapability$Type<(T)>;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$RecipeModifier$RecipeModifiers" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeLogic, $RecipeLogic$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$RecipeModifier, $RecipeModifier$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$RecipeModifier"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export class $RecipeModifier$RecipeModifiers implements $ITagSerializable<($ListTag)>, $IConfigurable {
readonly "recipeModifiers": $List<($RecipeModifier)>

constructor()

public "deserializeNBT"(arg0: $ListTag$Type): void
public "applyModifiers"(arg0: $RecipeLogic$Type, arg1: $MBDRecipe$Type): $MBDRecipe
public "getMaxParallel"(arg0: $RecipeLogic$Type, arg1: $MBDRecipe$Type): $ContentModifier
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModifier$RecipeModifiers$Type = ($RecipeModifier$RecipeModifiers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeModifier$RecipeModifiers_ = $RecipeModifier$RecipeModifiers$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineRecipeModifyEventBeforeJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineRecipeModifyEvent$Before, $MachineRecipeModifyEvent$Before$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeModifyEvent$Before"

export class $MBDMachineEvents$MachineRecipeModifyEventBeforeJS extends $MBDMachineEvents$MachineEventJS<($MachineRecipeModifyEvent$Before)> {
readonly "event": E

constructor(arg0: $MachineRecipeModifyEvent$Before$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineRecipeModifyEventBeforeJS$Type = ($MBDMachineEvents$MachineRecipeModifyEventBeforeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineRecipeModifyEventBeforeJS_ = $MBDMachineEvents$MachineRecipeModifyEventBeforeJS$Type;
}}
declare module "packages/com/lowdragmc/photon/core/mixins/accessor/$ParticleEngineAccessor" {
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ParticleEngineAccessor {

 "getParticles"(): $Map<($ParticleRenderType), ($Queue<($Particle)>)>

(): $Map<($ParticleRenderType), ($Queue<($Particle)>)>
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
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"

export interface $IGhostIngredientTarget {

 "getPhantomTargets"(arg0: any): $List<($Target)>

(arg0: any): $List<($Target)>
}

export namespace $IGhostIngredientTarget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientTarget$Type = ($IGhostIngredientTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientTarget_ = $IGhostIngredientTarget$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$FluidIngredient$Value" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $FluidIngredient$Value {

 "copy"(): $FluidIngredient$Value
 "serialize"(): $JsonObject
 "getStacks"(): $Collection<($Fluid)>
}

export namespace $FluidIngredient$Value {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$Value$Type = ($FluidIngredient$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredient$Value_ = $FluidIngredient$Value$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerScreenAccessor {

 "getSnapbackStartY"(): integer
 "getSnapbackTime"(): long
 "getDraggingItem"(): $ItemStack
 "getSnapbackEnd"(): $Slot
 "getSnapbackStartX"(): integer
 "isSplittingStack"(): boolean
 "getSnapbackItem"(): $ItemStack
 "setSnapbackItem"(arg0: $ItemStack$Type): void
 "getQuickCraftingRemainder"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ShaderTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UniformCache, $UniformCache$Type} from "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache"

export class $ShaderTexture extends $TransformTexture {
 "location": $ResourceLocation

constructor()

public "dispose"(): void
public "setColor"(color: integer): $ShaderTexture
public static "clearCache"(): void
public "updateRawShader"(rawShader: string): void
public "updateShader"(location: $ResourceLocation$Type): void
public "setUniformCache"(uniformCache: $Consumer$Type<($UniformCache$Type)>): $ShaderTexture
public "getRawShader"(): string
public static "createShader"(location: $ResourceLocation$Type): $ShaderTexture
public static "createRawShader"(rawShader: string): $ShaderTexture
public "setResolution"(resolution: float): $ShaderTexture
public "getResolution"(): float
public "bindTexture"(samplerName: string, location: $ResourceLocation$Type): void
public "bindTexture"(samplerName: string, id: integer): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "uniformCache"(value: $Consumer$Type<($UniformCache$Type)>)
get "rawShader"(): string
set "resolution"(value: float)
get "resolution"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderTexture$Type = ($ShaderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderTexture_ = $ShaderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$VertexFormatAccessor" {
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export interface $VertexFormatAccessor {

 "getOffsets"(): $IntList

(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatAccessor$Type = ($VertexFormatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatAccessor_ = $VertexFormatAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeBuilder, $TreeBuilder$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $TreeBuilder$Menu extends $TreeBuilder<($Tuple<($IGuiTexture), (string)>), ($Runnable)> {
static "CROSS_LINE": $Tuple<($IGuiTexture), (string)>


public static "getName"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): string
public "remove"(name: string): $TreeBuilder$Menu
public static "start"(): $TreeBuilder$Menu
public static "handle"(node: $TreeNode$Type<($Tuple$Type<($IGuiTexture$Type), (string)>), ($Runnable$Type)>): void
public "branch"(icon: $IGuiTexture$Type, name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public "branch"(name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public static "isCrossLine"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): boolean
public "leaf"(name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public "leaf"(icon: $IGuiTexture$Type, name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public static "getIcon"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): $IGuiTexture
public "crossLine"(): $TreeBuilder$Menu
public "endBranch"(): $TreeBuilder$Menu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Menu$Type = ($TreeBuilder$Menu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder$Menu_ = $TreeBuilder$Menu$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineRemovedEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineRemovedEvent, $MachineRemovedEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRemovedEvent"

export class $MBDMachineEvents$MachineRemovedEventJS extends $MBDMachineEvents$MachineEventJS<($MachineRemovedEvent)> {
readonly "event": E

constructor(arg0: $MachineRemovedEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineRemovedEventJS$Type = ($MBDMachineEvents$MachineRemovedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineRemovedEventJS_ = $MBDMachineEvents$MachineRemovedEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget" {
import {$Rect, $Rect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Rect"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Align, $Align$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Align"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Widget {

constructor(selfPosition: $Position$Type, size: $Size$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "getParent"(): $WidgetGroup
public "getId"(): string
public "getSize"(): $Size
public "isActive"(): boolean
public "setSize"(size: $Size$Type): void
public "setSize"(width: integer, height: integer): void
public "getPosition"(): $Position
public "isVisible"(): boolean
public "animation"(animation: $Animation$Type): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getSizeHeight"(): integer
public "getSelfPositionY"(): integer
public "addSelfPosition"(addX: integer, addY: integer): $Position
public "getSelfPosition"(): $Position
public "getSizeWidth"(): integer
public "setSizeWidth"(width: integer): void
public "getPositionY"(): integer
public "setSizeHeight"(height: integer): void
public "getPositionX"(): integer
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "getSelfPositionX"(): integer
public "isParent"(widgetGroup: $WidgetGroup$Type): boolean
public "setSelfPositionY"(y: integer): void
public "setSelfPositionX"(x: integer): void
public "getRect"(): $Rect
public "setSelfPosition"(selfPosition: $Position$Type): void
public "setSelfPosition"(x: integer, y: integer): void
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "initWidget"(): void
public "getAlign"(): $Align
public static "isShiftDown"(): boolean
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "getParentPosition"(): $Position
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "isCtrlDown"(): boolean
public "getAnimation"(): $Animation
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "getTooltipTexts"(): $List<($Component)>
public static "isAltDown"(): boolean
public "setAlign"(align: $Align$Type): $Widget
public "isMouseDown"(button: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getGui"(): $ModularUI
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "isInitialized"(): boolean
public "detectAndSendChanges"(): void
public "setVisible"(isVisible: boolean): $Widget
public "isFocus"(): boolean
public "inAnimate"(): boolean
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $Widget
public "setGui"(gui: $ModularUI$Type): void
public "setParentPosition"(parentPosition: $Position$Type): void
public "setDrawBackgroundWhenHover"(drawBackgroundWhenHover: boolean): $Widget
public "setHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "setDraggingProvider"<T>(draggingProvider: $Supplier$Type<(T)>, draggingRenderer: $BiFunction$Type<(T), ($Position$Type), ($IGuiTexture$Type)>): $Widget
public "setClientSideWidget"(): $Widget
public "appendHoverTooltips"(...tooltipText: (string)[]): $Widget
public "appendHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "appendHoverTooltips"(tooltipText: $List$Type<($Component$Type)>): $Widget
public static "playButtonClickSound"(): void
public "getBackgroundTexture"(): $IGuiTexture
public "setDraggingConsumer"(draggingAccept: $Predicate$Type<(any)>, draggingIn: $Consumer$Type<(any)>, draggingOut: $Consumer$Type<(any)>, draggingSuccess: $Consumer$Type<(any)>): $Widget
public "setActive"(isActive: boolean): $Widget
public "setOverlay"(overlay: $IGuiTexture$Type): $Widget
public "setId"(id: string): $Widget
public static "isMouseOver"(x: integer, y: integer, width: integer, height: integer, mouseX: double, mouseY: double): boolean
public static "isKeyDown"(keyCode: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "isRemote"(): boolean
public "setBackground"(...backgroundTexture: ($IGuiTexture$Type)[]): $Widget
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "toRectangleBox"(): $Rect2i
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setUiAccess"(uiAccess: $WidgetUIAccess$Type): $Widget
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setFocus"(focus: boolean): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "isClientSideWidget"(): boolean
public "getOverlay"(): $IGuiTexture
get "parent"(): $WidgetGroup
get "id"(): string
get "size"(): $Size
get "active"(): boolean
set "size"(value: $Size$Type)
get "position"(): $Position
get "visible"(): boolean
get "sizeHeight"(): integer
get "selfPositionY"(): integer
get "selfPosition"(): $Position
get "sizeWidth"(): integer
set "sizeWidth"(value: integer)
get "positionY"(): integer
set "sizeHeight"(value: integer)
get "positionX"(): integer
get "selfPositionX"(): integer
set "selfPositionY"(value: integer)
set "selfPositionX"(value: integer)
get "rect"(): $Rect
set "selfPosition"(value: $Position$Type)
get "align"(): $Align
get "shiftDown"(): boolean
get "parentPosition"(): $Position
get "ctrlDown"(): boolean
get "tooltipTexts"(): $List<($Component)>
get "altDown"(): boolean
set "align"(value: $Align$Type)
get "gui"(): $ModularUI
get "initialized"(): boolean
set "visible"(value: boolean)
get "focus"(): boolean
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "gui"(value: $ModularUI$Type)
set "parentPosition"(value: $Position$Type)
set "drawBackgroundWhenHover"(value: boolean)
set "hoverTooltips"(value: ($Component$Type)[])
get "backgroundTexture"(): $IGuiTexture
set "active"(value: boolean)
set "overlay"(value: $IGuiTexture$Type)
set "id"(value: string)
get "remote"(): boolean
set "background"(value: ($IGuiTexture$Type)[])
set "uiAccess"(value: $WidgetUIAccess$Type)
set "focus"(value: boolean)
get "clientSideWidget"(): boolean
get "overlay"(): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$IPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export interface $IPacket {

 "decode"(arg0: $FriendlyByteBuf$Type): void
 "encode"(arg0: $FriendlyByteBuf$Type): void
 "execute"(handler: $IHandlerContext$Type): void
}

export namespace $IPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacket$Type = ($IPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacket_ = $IPacket$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Size" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"

export class $Size {
static readonly "ZERO": $Size
readonly "width": integer
readonly "height": integer

constructor(width: integer, height: integer)

public "add"(width: integer, height: integer): $Size
public "add"(other: $Size$Type): $Size
public static "add"(position: $Position$Type): $Size
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(width: integer, height: integer): $Size
public "subtract"(other: $Size$Type): $Size
public "addWidth"(width: integer): $Size
public "addHeight"(height: integer): $Size
public "getWidth"(): integer
public "getHeight"(): integer
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Size$Type = ($Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Size_ = $Size$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/gui/editor/machine/$MachineTraitPanel" {
import {$MachineEditor, $MachineEditor$Type} from "packages/com/lowdragmc/mbd2/common/gui/editor/$MachineEditor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SceneWidget, $SceneWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$MachineScenePanel, $MachineScenePanel$Type} from "packages/com/lowdragmc/mbd2/common/gui/editor/machine/$MachineScenePanel"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $MachineTraitPanel extends $MachineScenePanel {
readonly "widgets": $List<($Widget)>

constructor(arg0: $MachineEditor$Type)

public "renderAfterWorld"(arg0: $SceneWidget$Type): void
public "onPanelSelected"(): void
public "onPanelDeselected"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTraitPanel$Type = ($MachineTraitPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineTraitPanel_ = $MachineTraitPanel$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateKineticMachineDefinition" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$File, $File$Type} from "packages/java/io/$File"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CreateKineticMachineDefinition$Builder, $CreateKineticMachineDefinition$Builder$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateKineticMachineDefinition$Builder"
import {$EntityRenderersEvent$RegisterRenderers, $EntityRenderersEvent$RegisterRenderers$Type} from "packages/net/minecraftforge/client/event/$EntityRenderersEvent$RegisterRenderers"
import {$ConfigKineticMachineSettings, $ConfigKineticMachineSettings$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CreateKineticMachineDefinition extends $MBDMachineDefinition {


public static "builder"(): $CreateKineticMachineDefinition$Builder
public "kineticMachineSettings"(): $ConfigKineticMachineSettings
public "loadProductiveTag"(arg0: $File$Type, arg1: $CompoundTag$Type, arg2: $Deque$Type<($Runnable$Type)>): $MBDMachineDefinition
public static "createDefault"(): $CreateKineticMachineDefinition
public "createDefaultRootState"(): $MachineState
public "createBlock"(): $Block
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "initRenderer"(arg0: $EntityRenderersEvent$RegisterRenderers$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateKineticMachineDefinition$Type = ($CreateKineticMachineDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateKineticMachineDefinition_ = $CreateKineticMachineDefinition$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigMachineSettingsFactory" {
import {$ConfigMachineSettings, $ConfigMachineSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $MBDMachineDefinition$ConfigMachineSettingsFactory extends $Supplier<($ConfigMachineSettings)> {

 "get"(): $ConfigMachineSettings

(): $ConfigMachineSettings
}

export namespace $MBDMachineDefinition$ConfigMachineSettingsFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineDefinition$ConfigMachineSettingsFactory$Type = ($MBDMachineDefinition$ConfigMachineSettingsFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineDefinition$ConfigMachineSettingsFactory_ = $MBDMachineDefinition$ConfigMachineSettingsFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode$NodeFieldInformation" {
import {$ICustomPortBehaviorDelegate, $ICustomPortBehaviorDelegate$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/custom/$ICustomPortBehaviorDelegate"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export class $BaseNode$NodeFieldInformation {
 "name": string
 "fieldName": string
 "info": $Field
 "input": boolean
 "color": integer
 "isMultiple": boolean
 "tooltips": (string)[]
 "behavior": $ICustomPortBehaviorDelegate
 "priority": integer

constructor(info: $Field$Type, name: string, color: integer, input: boolean, isMultiple: boolean, tooltips: (string)[], priority: integer, behavior: $ICustomPortBehaviorDelegate$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseNode$NodeFieldInformation$Type = ($BaseNode$NodeFieldInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseNode$NodeFieldInformation_ = $BaseNode$NodeFieldInformation$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ItemStackTexture" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ItemStackTexture extends $TransformTexture {
 "items": ($ItemStack)[]

constructor(...items: ($Item$Type)[])
constructor(...itemStacks: ($ItemStack$Type)[])
constructor()

public "setItems"(...itemStack: ($ItemStack$Type)[]): $ItemStackTexture
public "getColor"(): integer
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "items"(value: ($ItemStack$Type)[])
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackTexture$Type = ($ItemStackTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackTexture_ = $ItemStackTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockUIJSFactory$BlockAccess, $BlockUIJSFactory$BlockAccess$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory$BlockAccess"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UIFactory, $UIFactory$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockUIJSFactory extends $UIFactory<($BlockUIJSFactory$BlockAccess)> {
static readonly "INSTANCE": $BlockUIJSFactory
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>


/**
 * Opens a UI for a player at a specific block position.
 */
public "openUI"(player: $Player$Type, pos: $BlockPos$Type, uiName: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUIJSFactory$Type = ($BlockUIJSFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockUIJSFactory_ = $BlockUIJSFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IngredientIO extends $Enum<($IngredientIO)> {
static readonly "INPUT": $IngredientIO
static readonly "OUTPUT": $IngredientIO
static readonly "BOTH": $IngredientIO
static readonly "CATALYST": $IngredientIO
static readonly "RENDER_ONLY": $IngredientIO


public static "values"(): ($IngredientIO)[]
public static "valueOf"(name: string): $IngredientIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientIO$Type = (("output") | ("input") | ("catalyst") | ("render_only") | ("both")) | ($IngredientIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientIO_ = $IngredientIO$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode$PortUpdate" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$List, $List$Type} from "packages/java/util/$List"

export class $BaseNode$PortUpdate extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "node"(): $BaseNode
public "fieldNames"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseNode$PortUpdate$Type = ($BaseNode$PortUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseNode$PortUpdate_ = $BaseNode$PortUpdate$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator" {
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IConfiguratorContainer, $IConfiguratorContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LabelWidget, $LabelWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $Configurator extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor()

public "getName"(): string
public "init"(width: integer): void
public "getConfiguratorContainer"(): $IConfiguratorContainer
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
public "addListener"(listener: $Consumer$Type<($Configurator$Type)>): void
public "getWidth"(): integer
public "getListeners"(): $List<($Consumer<($Configurator)>)>
/**
 * 
 * @deprecated
 */
public "getTab"(): $ConfigPanel$Tab
/**
 * 
 * @deprecated
 */
public "getConfigPanel"(): $ConfigPanel
public "computeLayout"(): void
public "getRightWidth"(): integer
/**
 * 
 * @deprecated
 */
public "setConfigPanel"(configPanel: $ConfigPanel$Type, tab: $ConfigPanel$Tab$Type): void
public "setTips"(...tips: (string)[]): void
public "getLeftWidth"(): integer
public "computeHeight"(): void
public "notifyChanges"(source: $Configurator$Type): void
public "notifyChanges"(): void
public "isInit"(): boolean
public "getNameWidget"(): $LabelWidget
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "name"(): string
get "configuratorContainer"(): $IConfiguratorContainer
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
get "width"(): integer
get "listeners"(): $List<($Consumer<($Configurator)>)>
get "tab"(): $ConfigPanel$Tab
get "configPanel"(): $ConfigPanel
get "rightWidth"(): integer
set "tips"(value: (string)[])
get "leftWidth"(): integer
get "nameWidget"(): $LabelWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configurator$Type = ($Configurator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configurator_ = $Configurator$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineOpenUIEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineOpenUIEvent, $MachineOpenUIEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOpenUIEvent"

export class $MBDMachineEvents$MachineOpenUIEventJS extends $MBDMachineEvents$MachineEventJS<($MachineOpenUIEvent)> {
readonly "event": E

constructor(arg0: $MachineOpenUIEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineOpenUIEventJS$Type = ($MBDMachineEvents$MachineOpenUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineOpenUIEventJS_ = $MBDMachineEvents$MachineOpenUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomFluidWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TankWidget, $TankWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget"

/**
 * 
 * @deprecated
 */
export class $PhantomFluidWidget extends $TankWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>, phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>)
constructor()

public static "checkJEIIngredient"(ingredient: any): any
public static "drainFrom"(ingredient: any): $FluidStack
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setPhantomFluidSetter"(phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>): void
public "getLastPhantomStack"(): $FluidStack
public "setPhantomFluidGetter"(phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>): void
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "detectAndSendChanges"(): void
public "setAllowClickFilled"(v: boolean): $PhantomFluidWidget
public "setAllowClickDrained"(v: boolean): $PhantomFluidWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "phantomFluidSetter"(value: $Consumer$Type<($FluidStack$Type)>)
get "lastPhantomStack"(): $FluidStack
set "phantomFluidGetter"(value: $Supplier$Type<($FluidStack$Type)>)
set "allowClickFilled"(value: boolean)
set "allowClickDrained"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomFluidWidget$Type = ($PhantomFluidWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomFluidWidget_ = $PhantomFluidWidget$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineStructureFormedEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineStructureFormedEvent, $MachineStructureFormedEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineStructureFormedEvent"

export class $MBDMachineEvents$MachineStructureFormedEventJS extends $MBDMachineEvents$MachineEventJS<($MachineStructureFormedEvent)> {
readonly "event": E

constructor(arg0: $MachineStructureFormedEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineStructureFormedEventJS$Type = ($MBDMachineEvents$MachineStructureFormedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineStructureFormedEventJS_ = $MBDMachineEvents$MachineStructureFormedEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$IAccessor, $IAccessor$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IAccessor"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export class $ManagedKey {

constructor(name: string, isDestSync: boolean, isPersist: boolean, isDrop: boolean, isLazy: boolean, contentType: $Type$Type, rawField: $Field$Type)

public "getName"(): string
public "getAccessor"(): $IAccessor
public "getContentType"(): $Type
public "readSyncedField"(field: $IRef$Type, force: boolean): $ITypedPayload<(any)>
public "readPersistedField"(field: $IRef$Type): $Tag
public "writeSyncedField"(field: $IRef$Type, payload: $ITypedPayload$Type<(any)>): void
public "getOnDirtyMethod"(): $Method
public "getPersistentKey"(): string
public "getRawField"(): $Field
public "getSerializeMethod"(): $Method
public "isDrop"(): boolean
public "createRef"(instance: any): $IRef
public "setRedOnlyManaged"(onDirtyMethod: $Method$Type, serializeMethod: $Method$Type, deserializeMethod: $Method$Type): void
public "isDestSync"(): boolean
public "setPersistentKey"(persistentKey: string): void
public "isPersist"(): boolean
public "isReadOnlyManaged"(): boolean
public "getDeserializeMethod"(): $Method
public "writePersistedField"(field: $IRef$Type, nbt: $Tag$Type): void
public "isLazy"(): boolean
get "name"(): string
get "accessor"(): $IAccessor
get "contentType"(): $Type
get "onDirtyMethod"(): $Method
get "persistentKey"(): string
get "rawField"(): $Field
get "serializeMethod"(): $Method
get "drop"(): boolean
get "destSync"(): boolean
set "persistentKey"(value: string)
get "persist"(): boolean
get "readOnlyManaged"(): boolean
get "deserializeMethod"(): $Method
get "lazy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagedKey$Type = ($ManagedKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagedKey_ = $ManagedKey$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Align" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Align extends $Enum<($Align)> {
static readonly "NONE": $Align
static readonly "TOP_LEFT": $Align
static readonly "TOP_CENTER": $Align
static readonly "TOP_RIGHT": $Align
static readonly "LEFT_CENTER": $Align
static readonly "CENTER": $Align
static readonly "RIGHT_CENTER": $Align
static readonly "BOTTOM_LEFT": $Align
static readonly "BOTTOM_CENTER": $Align
static readonly "BOTTOM_RIGHT": $Align


public static "values"(): ($Align)[]
public static "valueOf"(name: string): $Align
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Align$Type = (("top_right") | ("right_center") | ("top_center") | ("center") | ("top_left") | ("left_center") | ("bottom_right") | ("none") | ("bottom_left") | ("bottom_center")) | ($Align);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Align_ = $Align$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourceContainer<T, C extends $Widget> extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(resource: $Resource$Type<(T)>, panel: $ResourcePanel$Type)

public "getResource"(): $Resource<(T)>
public "getPanel"(): $ResourcePanel
public "initWidget"(): void
public "setOnRemove"(onRemove: $Predicate$Type<(string)>): $ResourceContainer<(T), (C)>
public "setOnAdd"(onAdd: $Function$Type<(string), (T)>): $ResourceContainer<(T), (C)>
public "getWidgets"(): $Map<(string), (C)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnEdit"(onEdit: $Consumer$Type<(string)>): $ResourceContainer<(T), (C)>
public "setWidgetSupplier"(widgetSupplier: $Function$Type<(string), (C)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<(string), (D)>, draggingRenderer: $TriFunction$Type<(string), (D), ($Position$Type), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<(string), (D)>, draggingRenderer: $Function$Type<(D), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "reBuild"(): void
public "getWidgetSupplier"(): $Function<(string), (C)>
public "setNameSupplier"(nameSupplier: $Supplier$Type<(string)>): $ResourceContainer<(T), (C)>
public "setRenamePredicate"(renamePredicate: $Predicate$Type<(string)>): $ResourceContainer<(T), (C)>
public "getSelected"(): string
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "resource"(): $Resource<(T)>
get "panel"(): $ResourcePanel
set "onRemove"(value: $Predicate$Type<(string)>)
set "onAdd"(value: $Function$Type<(string), (T)>)
get "widgets"(): $Map<(string), (C)>
set "onEdit"(value: $Consumer$Type<(string)>)
set "widgetSupplier"(value: $Function$Type<(string), (C)>)
get "widgetSupplier"(): $Function<(string), (C)>
set "nameSupplier"(value: $Supplier$Type<(string)>)
set "renamePredicate"(value: $Predicate$Type<(string)>)
get "selected"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceContainer$Type<T, C> = ($ResourceContainer<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceContainer_<T, C> = $ResourceContainer$Type<(T), (C)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SPacketUIWidgetUpdate, $SPacketUIWidgetUpdate$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $ModularUIGuiContainer extends $AbstractContainerScreen<($ModularUIContainer)> {
readonly "modularUI": $ModularUI
 "lastFocus": $Widget
 "focused": boolean
 "dragSplittingLimit": integer
 "dragSplittingButton": integer
 "tooltipTexts": $List<($Component)>
 "tooltipComponent": $TooltipComponent
 "tooltipFont": $Font
 "tooltipStack": $ItemStack
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "hoveredSlot": $Slot
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>

constructor(modularUI: $ModularUI$Type, windowId: integer)

public "handleWidgetUpdate"(packet: $SPacketUIWidgetUpdate$Type): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "m_7856_"(): void
public "mouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseDragged"(mouseX: double, mouseY: double, pButton: integer, pDragX: double, pDragY: double): boolean
public "mouseClicked"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, pButton: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "mouseMoved"(mouseX: double, mouseY: double): void
public "m_181908_"(): void
public "render"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "superMouseDragged"(pMouseX: double, pMouseY: double, pButton: integer, pDragX: double, pDragY: double): void
public "superKeyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superMouseClicked"(mouseX: double, mouseY: double, mouseButton: integer): void
public "getGuiExtraAreas"(): $List<($Rect2i)>
public "superMouseMoved"(mouseX: double, mouseY: double): void
public "superKeyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superCharTyped"(codePoint: character, modifiers: integer): boolean
public "superMouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "superMouseReleased"(mouseX: double, mouseY: double, state: integer): void
public "isButtonPressed"(button: integer): boolean
public "setHoverTooltip"(tooltipTexts: $List$Type<($Component$Type)>, tooltipStack: $ItemStack$Type, tooltipFont: $Font$Type, tooltipComponent: $TooltipComponent$Type): void
public "getQuickCraftSlots"(): $Set<($Slot)>
public "renderFloatingItem"(graphics: $GuiGraphics$Type, stack: $ItemStack$Type, x: integer, y: integer, amountText: string): void
public "setHoveredSlot"(hoveredSlot: $Slot$Type): void
public "switchFocus"(widget: $Widget$Type): boolean
public "getQuickCrafting"(): boolean
public "setDraggingElement"(element: any, renderer: $IGuiTexture$Type): boolean
public "getDraggingElement"(): any
public "removed"(): void
get "guiExtraAreas"(): $List<($Rect2i)>
get "quickCraftSlots"(): $Set<($Slot)>
set "hoveredSlot"(value: $Slot$Type)
get "quickCrafting"(): boolean
get "draggingElement"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIGuiContainer$Type = ($ModularUIGuiContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIGuiContainer_ = $ModularUIGuiContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IEnhancedManaged" {
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IEnhancedManaged extends $IManaged {

 "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
 "scheduleRenderUpdate"(): void
 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "getSyncStorage"(): $IManagedStorage
 "onChanged"(): void
 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
 "getFieldHolder"(): $ManagedFieldHolder
 "markDirty"(name: string): void
}

export namespace $IEnhancedManaged {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnhancedManaged$Type = ($IEnhancedManaged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnhancedManaged_ = $IEnhancedManaged$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePortContainer" {
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$NodePort, $NodePort$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort"

export class $NodePortContainer extends $ArrayList<($NodePort)> {

constructor(node: $BaseNode$Type)

public "add"(edge: $PortEdge$Type): void
public "remove"(edge: $PortEdge$Type): void
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodePortContainer$Type = ($NodePortContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodePortContainer_ = $NodePortContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$UIEvents$BlockUIEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UIEvents$BlockUIEventJS extends $EventJS {
 "level": $Level
 "pos": $BlockPos
 "block": $BlockContainerJS
 "player": $Player

constructor(level: $Level$Type, pos: $BlockPos$Type, block: $BlockContainerJS$Type, player: $Player$Type)

public "getLevel"(): $Level
public "getBlock"(): $BlockContainerJS
public "getPos"(): $BlockPos
public "getPlayer"(): $Player
get "level"(): $Level
get "block"(): $BlockContainerJS
get "pos"(): $BlockPos
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIEvents$BlockUIEventJS$Type = ($UIEvents$BlockUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIEvents$BlockUIEventJS_ = $UIEvents$BlockUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineFuelBurningFinishEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineFuelBurningFinishEvent, $MachineFuelBurningFinishEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineFuelBurningFinishEvent"

export class $MBDMachineEvents$MachineFuelBurningFinishEventJS extends $MBDMachineEvents$MachineEventJS<($MachineFuelBurningFinishEvent)> {
readonly "event": E

constructor(arg0: $MachineFuelBurningFinishEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineFuelBurningFinishEventJS$Type = ($MBDMachineEvents$MachineFuelBurningFinishEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineFuelBurningFinishEventJS_ = $MBDMachineEvents$MachineFuelBurningFinishEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IManagedBlockEntity {

 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity

(): $BlockPos
}

export namespace $IManagedBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedBlockEntity$Type = ($IManagedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedBlockEntity_ = $IManagedBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineRegistryEventJS" {
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MBDMachineDefinition$Builder, $MBDMachineDefinition$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$Builder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDMachineRegistryEventJS extends $StartupEventJS {
static readonly "BUILDERS": $Map<(string), ($Supplier<(any)>)>

constructor()

public "create"(arg0: string, arg1: $ResourceLocation$Type): $MBDMachineDefinition$Builder
public "removeMachine"(arg0: $ResourceLocation$Type): void
public "getMachine"(arg0: $ResourceLocation$Type): $MBDMachineDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineRegistryEventJS$Type = ($MBDMachineRegistryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineRegistryEventJS_ = $MBDMachineRegistryEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRightClickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineRightClickEvent extends $MachineEvent {
readonly "player": $Player
readonly "heldItem": $ItemStack
readonly "hand": $InteractionHand
readonly "hit": $BlockHitResult
 "interactionResult": $InteractionResult
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $BlockHitResult$Type)

public "getInteractionResult"(): $InteractionResult
public "setInteractionResult"(arg0: $InteractionResult$Type): void
public "getHit"(): $BlockHitResult
public "getHeldItem"(): $ItemStack
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getPlayer"(): $Player
public "getHand"(): $InteractionHand
get "interactionResult"(): $InteractionResult
set "interactionResult"(value: $InteractionResult$Type)
get "hit"(): $BlockHitResult
get "heldItem"(): $ItemStack
get "listenerList"(): $ListenerList
get "player"(): $Player
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRightClickEvent$Type = ($MachineRightClickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRightClickEvent_ = $MachineRightClickEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidActionResult" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FluidActionResult {
static readonly "FAILURE": $FluidActionResult
readonly "success": boolean
readonly "result": $ItemStack

constructor(result: $ItemStack$Type)

public "getResult"(): $ItemStack
public "isSuccess"(): boolean
get "result"(): $ItemStack
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidActionResult$Type = ($FluidActionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidActionResult_ = $FluidActionResult$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings$ConfigPartSettingsBuilder" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigPartSettings, $ConfigPartSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings"
import {$RecipeModifier$RecipeModifiers, $RecipeModifier$RecipeModifiers$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$RecipeModifier$RecipeModifiers"
import {$ConfigPartSettings$ProxyCapability, $ConfigPartSettings$ProxyCapability$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings$ProxyCapability"

export class $ConfigPartSettings$ConfigPartSettingsBuilder {


public "toString"(): string
public "build"(): $ConfigPartSettings
public "enable"(arg0: boolean): $ConfigPartSettings$ConfigPartSettingsBuilder
public "proxyControllerCapabilities"(arg0: $List$Type<($ConfigPartSettings$ProxyCapability$Type)>): $ConfigPartSettings$ConfigPartSettingsBuilder
public "recipeModifiers"(arg0: $RecipeModifier$RecipeModifiers$Type): $ConfigPartSettings$ConfigPartSettingsBuilder
public "canShare"(arg0: boolean): $ConfigPartSettings$ConfigPartSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPartSettings$ConfigPartSettingsBuilder$Type = ($ConfigPartSettings$ConfigPartSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPartSettings$ConfigPartSettingsBuilder_ = $ConfigPartSettings$ConfigPartSettingsBuilder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ModularUIGuiContainer, $ModularUIGuiContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer"

export class $ModularUI {
readonly "mainGroup": $WidgetGroup
readonly "holder": $IUIHolder
readonly "entityPlayer": $Player

constructor(holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(mainGroup: $WidgetGroup$Type, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(width: integer, height: integer, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(size: $Size$Type, holder: $IUIHolder$Type, entityPlayer: $Player$Type)

public "setSize"(width: integer, height: integer): void
public "widget"(widget: $Widget$Type): $ModularUI
public "getFlatVisibleWidgetCollection"(): $List<($Widget)>
public "getFlatWidgetCollection"(): $List<($Widget)>
public "getModularUIGui"(): $ModularUIGuiContainer
public "getWidgetsById"(regex: string): $List<($Widget)>
public "getFirstWidgetById"(regex: string): $Widget
public "initWidgets"(): void
public "removeNativeSlot"(slotHandle: $Slot$Type): void
public "addNativeSlot"(slotHandle: $Slot$Type, slotWidget: $SlotWidget$Type): void
public "triggerCloseListeners"(): void
public "setModularUIContainer"(container: $ModularUIContainer$Type): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getGuiTop"(): integer
public "getGuiLeft"(): integer
public "background"(...textures: ($IGuiTexture$Type)[]): $ModularUI
public "registerCloseListener"(runnable: $Runnable$Type): void
public "getModularUIContainer"(): $ModularUIContainer
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "getSlotMap"(): $HashMap<($Slot), ($SlotWidget)>
public "setModularUIGui"(modularUIGuiContainer: $ModularUIGuiContainer$Type): void
public "updateScreenSize"(screenWidth: integer, screenHeight: integer): void
public "getTickCount"(): long
public "setFullScreen"(): void
public "isFullScreen"(): boolean
public "toScreenCoords"(widgetRect: $Rectangle$Type): $Rectangle
get "flatVisibleWidgetCollection"(): $List<($Widget)>
get "flatWidgetCollection"(): $List<($Widget)>
get "modularUIGui"(): $ModularUIGuiContainer
set "modularUIContainer"(value: $ModularUIContainer$Type)
get "width"(): integer
get "height"(): integer
get "guiTop"(): integer
get "guiLeft"(): integer
get "modularUIContainer"(): $ModularUIContainer
get "screenWidth"(): integer
get "screenHeight"(): integer
get "slotMap"(): $HashMap<($Slot), ($SlotWidget)>
set "modularUIGui"(value: $ModularUIGuiContainer$Type)
get "tickCount"(): long
get "fullScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUI$Type = ($ModularUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUI_ = $ModularUI$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings$RotationFacing" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ConfigKineticMachineSettings$RotationFacing extends $Enum<($ConfigKineticMachineSettings$RotationFacing)> {
static readonly "FRONT": $ConfigKineticMachineSettings$RotationFacing
static readonly "BACK": $ConfigKineticMachineSettings$RotationFacing
static readonly "LEFT": $ConfigKineticMachineSettings$RotationFacing
static readonly "RIGHT": $ConfigKineticMachineSettings$RotationFacing
static readonly "UP": $ConfigKineticMachineSettings$RotationFacing
static readonly "DOWN": $ConfigKineticMachineSettings$RotationFacing


public static "values"(): ($ConfigKineticMachineSettings$RotationFacing)[]
public static "valueOf"(arg0: string): $ConfigKineticMachineSettings$RotationFacing
public "getDirection"(arg0: $Direction$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigKineticMachineSettings$RotationFacing$Type = (("left") | ("back") | ("front") | ("right") | ("up") | ("down")) | ($ConfigKineticMachineSettings$RotationFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigKineticMachineSettings$RotationFacing_ = $ConfigKineticMachineSettings$RotationFacing$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineRecipeModifyEventAfterJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineRecipeModifyEvent$After, $MachineRecipeModifyEvent$After$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeModifyEvent$After"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MBDMachineEvents$MachineRecipeModifyEventAfterJS extends $MBDMachineEvents$MachineEventJS<($MachineRecipeModifyEvent$After)> {
readonly "event": E

constructor(arg0: $MachineRecipeModifyEvent$After$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineRecipeModifyEventAfterJS$Type = ($MBDMachineEvents$MachineRecipeModifyEventAfterJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineRecipeModifyEventAfterJS_ = $MBDMachineEvents$MachineRecipeModifyEventAfterJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$UIEvents$ItemUIEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $UIEvents$ItemUIEventJS extends $EventJS {
 "player": $Player
 "hand": $InteractionHand
 "held": $ItemStack

constructor(player: $Player$Type, hand: $InteractionHand$Type, held: $ItemStack$Type)

public "getHeld"(): $ItemStack
public "getPlayer"(): $Player
public "getHand"(): $InteractionHand
get "held"(): $ItemStack
get "player"(): $Player
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIEvents$ItemUIEventJS$Type = ($UIEvents$ItemUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIEvents$ItemUIEventJS_ = $UIEvents$ItemUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemUIJSFactory$ItemAccess, $ItemUIJSFactory$ItemAccess$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory$ItemAccess"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UIFactory, $UIFactory$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUIJSFactory extends $UIFactory<($ItemUIJSFactory$ItemAccess)> {
static readonly "INSTANCE": $ItemUIJSFactory
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>


public "openUI"(player: $Player$Type, hand: $InteractionHand$Type, uiName: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUIJSFactory$Type = ($ItemUIJSFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUIJSFactory_ = $ItemUIJSFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Rect" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $Rect {
readonly "left": integer
readonly "right": integer
readonly "up": integer
readonly "down": integer


public static "of"(position: $Position$Type, size: $Size$Type): $Rect
public "expand"(expand: integer): $Rect
public "expand"(x: integer, y: integer): $Rect
public static "ofRelative"(left: integer, width: integer, up: integer, height: integer): $Rect
public "withDownFixedHeight"(height: integer): $Rect
public "withRightFixedWidth"(width: integer): $Rect
public "getWidth"(): integer
public "getHeight"(): integer
public "getWidthCenter"(): integer
public "getHeightCenter"(): integer
public "withLeft"(left: integer): $Rect
public "expandLeft"(expand: integer): $Rect
public "toDownCenter"(): $Position
public "toLeftCenter"(): $Position
public "withUp"(up: integer): $Rect
public "toUpCenter"(): $Position
public "horizontalExpand"(left: integer, right: integer): $Rect
public "horizontalExpand"(x: integer): $Rect
public "expandUp"(expand: integer): $Rect
public "toLeftUp"(): $Position
public "withRight"(right: integer): $Rect
public "toLeftDown"(): $Position
public "verticalExpand"(y: integer): $Rect
public "verticalExpand"(up: integer, down: integer): $Rect
public "expandDown"(expand: integer): $Rect
public "withLeftFixedWidth"(width: integer): $Rect
public "withUpFixedHeight"(height: integer): $Rect
public "expandRight"(expand: integer): $Rect
public "withDown"(down: integer): $Rect
public "moveHorizontal"(delta: integer): $Rect
public "moveVertical"(delta: integer): $Rect
public "toRightCenter"(): $Position
public "upAnd"(x: integer): $Position
public "leftAnd"(y: integer): $Position
public static "ofAbsolute"(left: integer, right: integer, up: integer, down: integer): $Rect
public "toRightUp"(): $Position
public "toRightDown"(): $Position
public "rightAnd"(y: integer): $Position
public "downAnd"(x: integer): $Position
public "isCollide"(rect: $Rect$Type): boolean
get "width"(): integer
get "height"(): integer
get "widthCenter"(): integer
get "heightCenter"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect$Type = ($Rect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rect_ = $Rect$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IContentChangeAware {

 "getOnContentsChanged"(): $Runnable
 "setOnContentsChanged"(arg0: $Runnable$Type): void
}

export namespace $IContentChangeAware {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentChangeAware$Type = ($IContentChangeAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentChangeAware_ = $IContentChangeAware$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ProgressWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ProgressTexture, $ProgressTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ProgressWidget extends $Widget implements $IConfigurableWidget {
static readonly "JEIProgress": $DoubleSupplier
 "progressSupplier": $DoubleSupplier

constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, progressBar: $ProgressTexture$Type)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, fullImage: $ResourceTexture$Type)
constructor()

public "setProgressTexture"(progressTexture: $IGuiTexture$Type): $ProgressWidget
public "setProgressTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressWidget
public "setOverlayTexture"(overlayTexture: $IGuiTexture$Type): $ProgressWidget
public "initWidget"(): void
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "getLastProgressValue"(): double
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "detectAndSendChanges"(): void
public "setDynamicHoverTips"(dynamicHoverTips: $Function$Type<(double), (string)>): $ProgressWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressWidget
public "setProgressSupplier"(progressSupplier: $DoubleSupplier$Type): $ProgressWidget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "progressTexture"(value: $IGuiTexture$Type)
set "overlayTexture"(value: $IGuiTexture$Type)
get "lastProgressValue"(): double
set "dynamicHoverTips"(value: $Function$Type<(double), (string)>)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "progressSupplier"(value: $DoubleSupplier$Type)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressWidget$Type = ($ProgressWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressWidget_ = $ProgressWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $UniformCache {

constructor(programId: integer)

public "invalidate"(): void
public "glUniform2F"(location: string, v0: float, v1: float): void
public "glUniformMatrix4F"(location: string, matrix4f: $Matrix4f$Type): void
public "glUniform1F"(location: string, v0: float): void
public "glUniformMatrix4"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformMatrix2"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniform2I"(location: string, v0: integer, v1: integer): void
public "glUniform4I"(location: string, v0: integer, v1: integer, v2: integer, v3: integer): void
public "fillRGBAColor"(location: string, color: integer): void
public "glUniform1I"(location: string, v0: integer): void
public "glUniform4F"(location: string, v0: float, v1: float, v2: float, v3: float): void
public "glUniform3I"(location: string, v0: integer, v1: integer, v2: integer): void
public "glUniform3F"(location: string, v0: float, v1: float, v2: float): void
public "glUniformMatrix"(location: string, callback: $IntConsumer$Type, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformBoolean"(location: string, value: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniformCache$Type = ($UniformCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniformCache_ = $UniformCache$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Resource<T> {

constructor()

public "name"(): string
public "getResource"(key: string): T
public "merge"(resource: $Resource$Type<(T)>): void
public "getData"(): $Map<(string), (T)>
public "serialize"(arg0: T): $Tag
public "deserialize"(arg0: $Tag$Type): T
public "onLoad"(): void
public "addResource"(key: string, resource: T): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "allResources"(): $Set<($Map$Entry<(string), (T)>)>
public "getResourceOrDefault"(key: string, defaultValue: T): T
public "buildDefault"(): void
public "unLoad"(): void
public "hasResource"(key: string): boolean
public "createContainer"(arg0: $ResourcePanel$Type): $ResourceContainer<(T), (any)>
public "removeResource"(key: string): T
get "data"(): $Map<(string), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$Type<T> = ($Resource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_<T> = $Resource$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "getY"(): integer
 "getX"(): integer
 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAsyncAutoSyncBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAutoSyncBlockEntity, $IAutoSyncBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoSyncBlockEntity"
import {$IAsyncLogic, $IAsyncLogic$Type} from "packages/com/lowdragmc/lowdraglib/async/$IAsyncLogic"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAsyncAutoSyncBlockEntity extends $IAutoSyncBlockEntity, $IAsyncLogic {

 "asyncTick"(periodID: long): void
 "useAsyncThread"(): boolean
 "onInValid"(): void
 "onValid"(): void
 "isAsyncSyncing"(): boolean
 "setAsyncSyncing"(syncing: boolean): void
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "defaultServerTick"(): void
 "getSyncTag"(): string
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity

(periodID: long): void
}

export namespace $IAsyncAutoSyncBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsyncAutoSyncBlockEntity$Type = ($IAsyncAutoSyncBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsyncAutoSyncBlockEntity_ = $IAsyncAutoSyncBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidget extends $IConfigurable {

 "widget"(): $Widget
 "initTemplate"(): void
 "serializeWrapper"(): $CompoundTag
 "serializeInnerNBT"(): $CompoundTag
 "canDragIn"(dragging: any): boolean
 "handleDragging"(dragging: any): boolean
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
}

export namespace $IConfigurableWidget {
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IConfigurableWidget)>)>
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidget$Type = ($IConfigurableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidget_ = $IConfigurableWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $ITagSerializable<T extends $Tag> {

 "serializeNBT"(): T
 "deserializeNBT"(arg0: T): void
}

export namespace $ITagSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagSerializable$Type<T> = ($ITagSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagSerializable_<T> = $ITagSerializable$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"

export class $MenuTab implements $ILDLRegister {


public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "createTabWidget"(): $Widget
public static "registerMenuHook"(menuName: string, consumer: $BiConsumer$Type<($MenuTab$Type), ($TreeBuilder$Menu$Type)>): void
public "appendMenu"(menu: $TreeBuilder$Menu$Type): $TreeBuilder$Menu
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuTab$Type = ($MenuTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuTab_ = $MenuTab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$DraggableScrollableWidgetGroup$IDraggable, $DraggableScrollableWidgetGroup$IDraggable$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $DraggableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$IDraggable {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "setOnSelected"(onSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $DraggableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $DraggableWidgetGroup
public "startDrag"(mouseX: double, mouseY: double): void
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "onUnSelected"(): void
public "setOnStartDrag"(onStartDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "endDrag"(mouseX: double, mouseY: double): void
public "onSelected"(): void
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnDragging"(onDragging: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnEndDrag"(onEndDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "canDragOutRange"(): boolean
public "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "selectedTexture"(value: $IGuiTexture$Type)
set "onStartDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onDragging"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onEndDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
get "selected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableWidgetGroup$Type = ($DraggableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableWidgetGroup_ = $DraggableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineOnRecipeWaitingEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineOnRecipeWaitingEvent, $MachineOnRecipeWaitingEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOnRecipeWaitingEvent"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MBDMachineEvents$MachineOnRecipeWaitingEventJS extends $MBDMachineEvents$MachineEventJS<($MachineOnRecipeWaitingEvent)> {
readonly "event": E

constructor(arg0: $MachineOnRecipeWaitingEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineOnRecipeWaitingEventJS$Type = ($MBDMachineEvents$MachineOnRecipeWaitingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineOnRecipeWaitingEventJS_ = $MBDMachineEvents$MachineOnRecipeWaitingEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineAfterRecipeWorkingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineAfterRecipeWorkingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)

public "getRecipe"(): $MBDRecipe
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "recipe"(): $MBDRecipe
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAfterRecipeWorkingEvent$Type = ($MachineAfterRecipeWorkingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineAfterRecipeWorkingEvent_ = $MachineAfterRecipeWorkingEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeLogic, $RecipeLogic$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Content, $Content$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$Content"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RecipeCondition, $RecipeCondition$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeCondition"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$IRecipeCapabilityHolder, $IRecipeCapabilityHolder$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MBDRecipe$ActionResult, $MBDRecipe$ActionResult$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe$ActionResult"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRecipe implements $Recipe<($Container)> {
 "recipeType": $MBDRecipeType
readonly "id": $ResourceLocation
readonly "inputs": $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
readonly "outputs": $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
readonly "conditions": $List<($RecipeCondition)>
 "data": $CompoundTag
 "duration": integer
 "priority": integer
 "isFuel": boolean

constructor(arg0: $MBDRecipeType$Type, arg1: $ResourceLocation$Type, arg2: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg3: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg4: $List$Type<($RecipeCondition$Type)>, arg5: $CompoundTag$Type, arg6: integer, arg7: boolean, arg8: integer)

public "copy"(): $MBDRecipe
public "copy"(arg0: $ContentModifier$Type): $MBDRecipe
public "copy"(arg0: $ContentModifier$Type, arg1: boolean): $MBDRecipe
public "copy"(arg0: $ContentModifier$Type, arg1: boolean, arg2: $IO$Type): $MBDRecipe
public "copy"(arg0: $ResourceLocation$Type): $MBDRecipe
public "checkConditions"(arg0: $RecipeLogic$Type): $MBDRecipe$ActionResult
public "matchRecipe"(arg0: $IRecipeCapabilityHolder$Type): $MBDRecipe$ActionResult
public "matchRecipe"(arg0: boolean, arg1: $IO$Type, arg2: $IRecipeCapabilityHolder$Type, arg3: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg4: boolean): $MBDRecipe$ActionResult
public "matchTickRecipe"(arg0: $IRecipeCapabilityHolder$Type): $MBDRecipe$ActionResult
public "copyContents"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg1: boolean, arg2: $ContentModifier$Type): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "deepCopied"(arg0: $ResourceLocation$Type): $MBDRecipe
public "hasTick"(): boolean
public "handleRecipeIO"(arg0: $IO$Type, arg1: $IRecipeCapabilityHolder$Type): boolean
public "getOutputContents"(arg0: $RecipeCapability$Type<(any)>): $List<($Content)>
public "handleRecipe"(arg0: boolean, arg1: $IO$Type, arg2: $IRecipeCapabilityHolder$Type, arg3: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>): boolean
public "getInputContents"(arg0: $RecipeCapability$Type<(any)>): $List<($Content)>
public "handleTickRecipeIO"(arg0: $IO$Type, arg1: $IRecipeCapabilityHolder$Type): boolean
public "handlePre"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg1: $IRecipeCapabilityHolder$Type, arg2: $IO$Type): void
public "postWorking"(arg0: $IRecipeCapabilityHolder$Type): void
public "preWorking"(arg0: $IRecipeCapabilityHolder$Type): void
public "handlePost"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg1: $IRecipeCapabilityHolder$Type, arg2: $IO$Type): void
public "isFuel"(): boolean
public static "accurateParallel"(arg0: $IRecipeCapabilityHolder$Type, arg1: $MBDRecipe$Type, arg2: integer, arg3: boolean): $Pair<($MBDRecipe), (integer)>
public "getId"(): $ResourceLocation
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
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
get "fuel"(): boolean
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
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
export type $MBDRecipe$Type = ($MBDRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipe_ = $MBDRecipe$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IRenderer {

 "reBakeCustomQuadsOffset"(): float
 "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
 "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
 "isRaw"(): boolean
 "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
 "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
 "isGui3d"(): boolean
 "useBlockLight"(stack: $ItemStack$Type): boolean
 "useAO"(): boolean
 "useAO"(state: $BlockState$Type): boolean
 "getParticleTexture"(): $TextureAtlasSprite
 "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
 "getViewDistance"(): integer
 "reBakeCustomQuads"(): boolean
 "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
 "hasTESR"(blockEntity: $BlockEntity$Type): boolean
 "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
 "registerEvent"(): void
}

export namespace $IRenderer {
const EVENT_REGISTERS: $Set<($IRenderer)>
const EMPTY: $IRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderer$Type = ($IRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderer_ = $IRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform" {
import {$FloatConsumer, $FloatConsumer$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatConsumer"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IEase, $IEase$Type} from "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Transform extends $Animation {

constructor()

public "scale"(scale: float): $Transform
public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "offset"(xOffset: integer, yOffset: integer): $Transform
public "setIn"(): $Animation
public "setOut"(): $Animation
public "delay"(delay: long): $Transform
public "pre"(graphics: $GuiGraphics$Type): void
public "post"(graphics: $GuiGraphics$Type): void
public "setScale"(scale: float): $Transform
public "isIn"(): boolean
public "onUpdate"(onUpdate: $FloatConsumer$Type): $Transform
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "ease"(ease: $IEase$Type): $Transform
public "isOut"(): boolean
get "in"(): boolean
get "out"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type = ($Transform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_ = $Transform$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $LDLRegisterClient extends $Annotation {

 "name"(): string
 "priority"(): integer
 "group"(): string
 "modID"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $LDLRegisterClient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LDLRegisterClient$Type = ($LDLRegisterClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LDLRegisterClient_ = $LDLRegisterClient$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder" {
import {$ConfigKineticMachineSettings, $ConfigKineticMachineSettings$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings"
import {$ConfigKineticMachineSettings$RotationFacing, $ConfigKineticMachineSettings$RotationFacing$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings$RotationFacing"

export class $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder {


public "toString"(): string
public "build"(): $ConfigKineticMachineSettings
public "frontRotation"(arg0: $ConfigKineticMachineSettings$RotationFacing$Type): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "hasBackRotation"(arg0: boolean): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "maxRPM"(arg0: integer): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "torque"(arg0: float): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "isGenerator"(arg0: boolean): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "useFlywheel"(arg0: boolean): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder$Type = ($ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder_ = $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$FluidIngredientJS" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$InputReplacementTransformer$Replacement, $InputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$FluidIngredient"
import {$InputFluid, $InputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$InputFluid"
import {$OutputFluid, $OutputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid"
import {$FluidLike, $FluidLike$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidLike"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputReplacementTransformer$Replacement, $OutputReplacementTransformer$Replacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement"
import {$InputReplacementTransformer, $InputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacementTransformer, $OutputReplacementTransformer$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MBDRecipeSchema$FluidIngredientJS extends $Record implements $InputFluid, $OutputFluid {

constructor(ingredient: $FluidIngredient$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $FluidLike$Type): boolean
public static "of"(arg0: any): $MBDRecipeSchema$FluidIngredientJS
public "getAmount"(): long
public "copy"(arg0: long): $MBDRecipeSchema$FluidIngredientJS
public "ingredient"(): $FluidIngredient
public "replaceInput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $InputReplacement$Type): any
public "replaceOutput"(recipe: $RecipeJS$Type, match: $ReplacementMatch$Type, original: $OutputReplacement$Type): any
public "isEmpty"(): boolean
public "transform"(transformer: $InputReplacementTransformer$Type): $InputReplacementTransformer$Replacement
public "transform"(transformer: $OutputReplacementTransformer$Type): $OutputReplacementTransformer$Replacement
get "amount"(): long
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeSchema$FluidIngredientJS$Type = ($MBDRecipeSchema$FluidIngredientJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeSchema$FluidIngredientJS_ = $MBDRecipeSchema$FluidIngredientJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineDropsEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineDropsEvent, $MachineDropsEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineDropsEvent"

export class $MBDMachineEvents$MachineDropsEventJS extends $MBDMachineEvents$MachineEventJS<($MachineDropsEvent)> {
readonly "event": E

constructor(arg0: $MachineDropsEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineDropsEventJS$Type = ($MBDMachineEvents$MachineDropsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineDropsEventJS_ = $MBDMachineEvents$MachineDropsEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$UIProject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $UIProject implements $IProject {
 "resources": $Resources
 "root": $WidgetGroup

constructor(tag: $CompoundTag$Type)
constructor(resources: $Resources$Type, root: $WidgetGroup$Type)

public "getResources"(): $Resources
public "onLoad"(editor: $Editor$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "newEmptyProject"(): $UIProject
public static "loadUIFromFile"(location: $ResourceLocation$Type): $Supplier<($WidgetGroup)>
public static "loadUIFromTag"(tag: $CompoundTag$Type): $Supplier<($WidgetGroup)>
public "getSuffix"(): string
public "saveProject"(file: $File$Type): void
public "loadProject"(file: $File$Type): $IProject
public "getProjectWorkSpace"(editor: $Editor$Type): $File
public "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
public "onClosed"(editor: $Editor$Type): void
public "loadResources"(tag: $CompoundTag$Type): $Resources
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "resources"(): $Resources
get "suffix"(): string
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIProject$Type = ($UIProject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIProject_ = $UIProject$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$GuiTextureGroup" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $GuiTextureGroup extends $TransformTexture {
 "textures": ($IGuiTexture)[]

constructor()
constructor(...textures: ($IGuiTexture$Type)[])

public "setColor"(color: integer): $GuiTextureGroup
public "setTextures"(...textures: ($IGuiTexture$Type)[]): $GuiTextureGroup
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "textures"(value: ($IGuiTexture$Type)[])
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiTextureGroup$Type = ($GuiTextureGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiTextureGroup_ = $GuiTextureGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerMenuAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuAccessor {

 "getRemoteSlots"(): $NonNullList<($ItemStack)>
 "getLastSlots"(): $NonNullList<($ItemStack)>
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandlerTrait" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeCapabilityHolder, $IRecipeCapabilityHolder$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export interface $IRecipeHandlerTrait<K> extends $IRecipeHandler<(K)> {

 "addChangedListener"(arg0: $Runnable$Type): $ISubscription
 "getHandlerIO"(): $IO
 "compatibleWith"(arg0: $IO$Type): boolean
 "copyContent"(arg0: any): K
 "handleRecipe"(arg0: $IO$Type, arg1: $MBDRecipe$Type, arg2: $List$Type<(any)>, arg3: string, arg4: boolean): $List<(K)>
 "postWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "preWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "isDistinct"(): boolean
 "getSlotNames"(): $Set<(string)>
 "getRecipeCapability"(): $RecipeCapability<(K)>
 "handleRecipeInner"(arg0: $IO$Type, arg1: $MBDRecipe$Type, arg2: $List$Type<(K)>, arg3: string, arg4: boolean): $List<(K)>
}

export namespace $IRecipeHandlerTrait {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeHandlerTrait$Type<K> = ($IRecipeHandlerTrait<(K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeHandlerTrait_<K> = $IRecipeHandlerTrait$Type<(K)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFieldUpdateListener<T> {

 "onFieldChanged"(arg0: string, arg1: T, arg2: T): void

(arg0: string, arg1: T, arg2: T): void
}

export namespace $IFieldUpdateListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFieldUpdateListener$Type<T> = ($IFieldUpdateListener<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFieldUpdateListener_<T> = $IFieldUpdateListener$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TreeListWidget" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TreeListWidget<K, T> extends $Widget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, root: $TreeNode$Type<(K), (T)>, onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)

public "setOnSelected"(onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setContentNameSupplier"(contentNameSupplier: $Function$Type<(T), (string)>): $TreeListWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $TreeListWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setBackground"(background: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "canSelectNode"(canSelectNode: boolean): $TreeListWidget<(K), (T)>
public "setContentIconSupplier"(contentIconSupplier: $Function$Type<(T), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setLineHeight"(lineHeight: integer): $TreeListWidget<(K), (T)>
public "jumpTo"(path: $List$Type<(K)>): $TreeNode<(K), (T)>
set "onSelected"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "contentNameSupplier"(value: $Function$Type<(T), (string)>)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "leafTexture"(value: $IGuiTexture$Type)
set "background"(value: $IGuiTexture$Type)
set "contentIconSupplier"(value: $Function$Type<(T), ($IGuiTexture$Type)>)
set "lineHeight"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeListWidget$Type<K, T> = ($TreeListWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeListWidget_<K, T> = $TreeListWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider" {
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IBlockRendererProvider {

 "getRenderer"(arg0: $BlockState$Type): $IRenderer
 "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer
 "getModelState"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState

(arg0: $BlockState$Type): $IRenderer
}

export namespace $IBlockRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockRendererProvider$Type = ($IBlockRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockRendererProvider_ = $IBlockRendererProvider$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePortContainer$NodeOutputPortContainer" {
import {$NodePortContainer, $NodePortContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePortContainer"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"

export class $NodePortContainer$NodeOutputPortContainer extends $NodePortContainer {

constructor(node: $BaseNode$Type)

public "PushDatas"(): void
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodePortContainer$NodeOutputPortContainer$Type = ($NodePortContainer$NodeOutputPortContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodePortContainer$NodeOutputPortContainer_ = $NodePortContainer$NodeOutputPortContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/async/$IAsyncLogic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAsyncLogic {

 "asyncTick"(arg0: long): void

(arg0: long): void
}

export namespace $IAsyncLogic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsyncLogic$Type = ($IAsyncLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsyncLogic_ = $IAsyncLogic$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistries" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$MBDRegistry$RL, $MBDRegistry$RL$Type} from "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry$RL"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$MBDRegistry$String, $MBDRegistry$String$Type} from "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry$String"
import {$MBDGadgetsItem, $MBDGadgetsItem$Type} from "packages/com/lowdragmc/mbd2/common/item/$MBDGadgetsItem"

export class $MBDRegistries {
static readonly "MACHINE_DEFINITION_TYPES": $MBDRegistry$String<($AnnotationDetector$Wrapper<($LDLRegister), (any)>)>
static readonly "TRAIT_DEFINITION_TYPES": $MBDRegistry$String<($AnnotationDetector$Wrapper<($LDLRegister), (any)>)>
static readonly "MACHINE_DEFINITIONS": $MBDRegistry$RL<($MBDMachineDefinition)>
static readonly "RECIPE_TYPES": $MBDRegistry$RL<($MBDRecipeType)>
static readonly "RECIPE_CAPABILITIES": $MBDRegistry$String<($RecipeCapability<(any)>)>
static readonly "RECIPE_CONDITIONS": $MBDRegistry$String<($Class<(any)>)>

constructor()

public static "GADGETS_ITEM"(): $MBDGadgetsItem
public static "FAKE_MACHINE"(): $MBDMachineDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRegistries$Type = ($MBDRegistries);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRegistries_ = $MBDRegistries$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/geckolib/$GeckolibRenderer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISerializableRenderer, $ISerializableRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$ISerializableRenderer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GeoCube, $GeoCube$Type} from "packages/software/bernie/geckolib/cache/object/$GeoCube"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$StaticAnimatable, $StaticAnimatable$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$StaticAnimatable"
import {$GeoRenderLayer, $GeoRenderLayer$Type} from "packages/software/bernie/geckolib/renderer/layer/$GeoRenderLayer"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$Animation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"
import {$GeoBone, $GeoBone$Type} from "packages/software/bernie/geckolib/cache/object/$GeoBone"
import {$GeckolibRendererModel, $GeckolibRendererModel$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$GeckolibRendererModel"
import {$GeoRenderer, $GeoRenderer$Type} from "packages/software/bernie/geckolib/renderer/$GeoRenderer"
import {$Color, $Color$Type} from "packages/software/bernie/geckolib/core/object/$Color"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$GeoQuad, $GeoQuad$Type} from "packages/software/bernie/geckolib/cache/object/$GeoQuad"
import {$BakedGeoModel, $BakedGeoModel$Type} from "packages/software/bernie/geckolib/cache/object/$BakedGeoModel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $GeckolibRenderer implements $ISerializableRenderer, $GeoRenderer<($GeoAnimatable)> {
static readonly "DEFAULT_MODEL_PATH": $ResourceLocation
static readonly "DEFAULT_TEXTURE_PATH": $ResourceLocation
static readonly "DEFAULT_ANIMATION_PATH": $ResourceLocation
static readonly "DEFAULT_ITEM_TRANSFORM_MODEL": $ResourceLocation

constructor()
constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type)

public "getBlockRenderTranslations"(): $Matrix4f
public "checkTextureAvailable"(): boolean
public "isUseEntityGuiLighting"(): boolean
public "doPostRenderCleanup"(): void
public "firePostRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): void
public "isScheduleStateAnimation"(): boolean
public "getStaticAnimatable"(): $StaticAnimatable
public "getCurrentItemStack"(): $ItemStack
public "fireCompileRenderLayersEvent"(): void
public "checkAnimationAvailable"(): boolean
public "getAnimatableFromMachine"(arg0: $MBDMachine$Type): $GeoAnimatable
public "getRenderPerspective"(): $ItemDisplayContext
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$Type): void
public "checkModelAvailable"(): boolean
public "getModelRenderTranslations"(): $Matrix4f
public "onPrepareTextureAtlas"(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<($ResourceLocation$Type)>): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getTexturePath"(): $ResourceLocation
public "getModelPath"(): $ResourceLocation
public "getGeoModel"(): $GeoModel<($GeoAnimatable)>
public "getRawAnimation"(arg0: string): $RawAnimation
public "actuallyRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "getInstanceId"(arg0: $GeoAnimatable$Type): long
public "preRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "getAnimationPath"(): $ResourceLocation
public "hasAnimation"(arg0: string): boolean
public "renderRecursively"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "firePreRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): boolean
public "getItemModel"(): $BakedModel
public "setModelPath"(arg0: $ResourceLocation$Type): void
public "getScaleWidth"(): float
public "isUseTranslucent"(): boolean
public "getScaleHeight"(): float
public "isUseGlowingLayer"(): boolean
public "getAnimations"(): $List<($Animation)>
public "getAnimatable"(): $GeoAnimatable
public "getAnimationCache"(): $Map<(string), ($RawAnimation)>
public "setTexturePath"(arg0: $ResourceLocation$Type): void
public "setAnimationPath"(arg0: $ResourceLocation$Type): void
public "render"(arg0: $BlockEntity$Type, arg1: float, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: integer): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "getParticleTexture"(): $TextureAtlasSprite
public "renderItem"(arg0: $ItemStack$Type, arg1: $ItemDisplayContext$Type, arg2: boolean, arg3: $PoseStack$Type, arg4: $MultiBufferSource$Type, arg5: integer, arg6: integer, arg7: $BakedModel$Type): void
public "hasTESR"(arg0: $BlockEntity$Type): boolean
public "getRenderLayers"(): $List<($GeoRenderLayer<($GeoAnimatable)>)>
public "setItemTransformModel"(arg0: $ResourceLocation$Type): void
public "initRenderer"(): void
public "getModel"(): $GeckolibRendererModel
public static "serializeWrapper"(renderer: $ISerializableRenderer$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $ISerializableRenderer
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "getMotionAnimThreshold"(arg0: $GeoAnimatable$Type): float
public "preApplyRenderLayers"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$Type, arg3: $GeoAnimatable$Type, arg4: $BakedGeoModel$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$Type, arg1: $Matrix4f$Type, arg2: $Vector3f$Type, arg3: $VertexConsumer$Type, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "getRenderColor"(arg0: $GeoAnimatable$Type, arg1: float, arg2: integer): $Color
public "getRenderType"(arg0: $GeoAnimatable$Type, arg1: $ResourceLocation$Type, arg2: $MultiBufferSource$Type, arg3: float): $RenderType
public "getTextureLocation"(arg0: $GeoAnimatable$Type): $ResourceLocation
public "defaultRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $MultiBufferSource$Type, arg3: $RenderType$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: float, arg7: integer): void
public "getPackedOverlay"(arg0: $GeoAnimatable$Type, arg1: float, arg2: float): integer
/**
 * 
 * @deprecated
 */
public "getPackedOverlay"(arg0: $GeoAnimatable$Type, arg1: float): integer
public "applyRenderLayers"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "renderChildBones"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "renderFinal"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
public "postRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "renderCubesOfBone"(arg0: $PoseStack$Type, arg1: $GeoBone$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "reRender"(arg0: $BakedGeoModel$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $GeoAnimatable$Type, arg4: $RenderType$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "renderCube"(arg0: $PoseStack$Type, arg1: $GeoCube$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "reBakeCustomQuadsOffset"(): float
public "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
public "isRaw"(): boolean
public "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
public "isGui3d"(): boolean
public "useBlockLight"(stack: $ItemStack$Type): boolean
public "useAO"(): boolean
public "useAO"(state: $BlockState$Type): boolean
public "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
public "getViewDistance"(): integer
public "reBakeCustomQuads"(): boolean
public "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
public "registerEvent"(): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
public "getRegisterUI"(): $LDLRegister
public "getRegisterUIClient"(): $LDLRegisterClient
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "blockRenderTranslations"(): $Matrix4f
get "useEntityGuiLighting"(): boolean
get "scheduleStateAnimation"(): boolean
get "staticAnimatable"(): $StaticAnimatable
get "currentItemStack"(): $ItemStack
get "renderPerspective"(): $ItemDisplayContext
get "modelRenderTranslations"(): $Matrix4f
get "texturePath"(): $ResourceLocation
get "modelPath"(): $ResourceLocation
get "geoModel"(): $GeoModel<($GeoAnimatable)>
get "animationPath"(): $ResourceLocation
get "itemModel"(): $BakedModel
set "modelPath"(value: $ResourceLocation$Type)
get "scaleWidth"(): float
get "useTranslucent"(): boolean
get "scaleHeight"(): float
get "useGlowingLayer"(): boolean
get "animations"(): $List<($Animation)>
get "animatable"(): $GeoAnimatable
get "animationCache"(): $Map<(string), ($RawAnimation)>
set "texturePath"(value: $ResourceLocation$Type)
set "animationPath"(value: $ResourceLocation$Type)
get "particleTexture"(): $TextureAtlasSprite
get "renderLayers"(): $List<($GeoRenderLayer<($GeoAnimatable)>)>
set "itemTransformModel"(value: $ResourceLocation$Type)
get "model"(): $GeckolibRendererModel
get "raw"(): boolean
get "gui3d"(): boolean
get "viewDistance"(): integer
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeckolibRenderer$Type = ($GeckolibRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeckolibRenderer_ = $GeckolibRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"

export interface $IPersistedSerializable extends $ITagSerializable<($CompoundTag)> {

 "deserializeNBT"(tag: $CompoundTag$Type): void
}

export namespace $IPersistedSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPersistedSerializable$Type = ($IPersistedSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPersistedSerializable_ = $IPersistedSerializable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEase {

 "getInterpolation"(arg0: float): float

(arg0: float): float
}

export namespace $IEase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEase$Type = ($IEase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEase_ = $IEase$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ProgressTexture$FillDirection extends $Enum<($ProgressTexture$FillDirection)> {
static readonly "LEFT_TO_RIGHT": $ProgressTexture$FillDirection
static readonly "RIGHT_TO_LEFT": $ProgressTexture$FillDirection
static readonly "UP_TO_DOWN": $ProgressTexture$FillDirection
static readonly "DOWN_TO_UP": $ProgressTexture$FillDirection
static readonly "ALWAYS_FULL": $ProgressTexture$FillDirection


public static "values"(): ($ProgressTexture$FillDirection)[]
public static "valueOf"(name: string): $ProgressTexture$FillDirection
public "getDrawnV"(progress: double): double
public "getDrawnU"(progress: double): double
public "getDrawnHeight"(progress: double): double
public "getDrawnWidth"(progress: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$FillDirection$Type = (("always_full") | ("right_to_left") | ("up_to_down") | ("left_to_right") | ("down_to_up")) | ($ProgressTexture$FillDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture$FillDirection_ = $ProgressTexture$FillDirection$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRemovedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MachineRemovedEvent extends $MachineEvent {
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRemovedEvent$Type = ($MachineRemovedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRemovedEvent_ = $MachineRemovedEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/impl/$IModelRenderer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ISerializableRenderer, $ISerializableRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$ISerializableRenderer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $IModelRenderer implements $ISerializableRenderer {

constructor(modelLocation: $ResourceLocation$Type)

public "updateModelWithReloadingResource"(modelLocation: $ResourceLocation$Type): void
public "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
public "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
/**
 * 
 * @deprecated
 */
public "getRotatedModel"(frontFacing: $Direction$Type): $BakedModel
public "getModelLocation"(): $ResourceLocation
public "isGui3d"(): boolean
public "useBlockLight"(stack: $ItemStack$Type): boolean
public "useAO"(): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "getParticleTexture"(): $TextureAtlasSprite
public "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
public "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
public "initRenderer"(): void
public "updateModelWithoutReloadingResource"(modelLocation: $ResourceLocation$Type): void
public static "serializeWrapper"(renderer: $ISerializableRenderer$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $ISerializableRenderer
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "reBakeCustomQuadsOffset"(): float
public "isRaw"(): boolean
public "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
public "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
public "useAO"(state: $BlockState$Type): boolean
public "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
public "getViewDistance"(): integer
public "reBakeCustomQuads"(): boolean
public "hasTESR"(blockEntity: $BlockEntity$Type): boolean
public "registerEvent"(): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
public "getRegisterUI"(): $LDLRegister
public "getRegisterUIClient"(): $LDLRegisterClient
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
get "modelLocation"(): $ResourceLocation
get "gui3d"(): boolean
get "particleTexture"(): $TextureAtlasSprite
get "raw"(): boolean
get "viewDistance"(): integer
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
get "chatComponent"(): $Component
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModelRenderer$Type = ($IModelRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModelRenderer_ = $IModelRenderer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeCapabilityHolder, $IRecipeCapabilityHolder$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export interface $IRecipeHandler<K> {

 "copyContent"(arg0: any): K
 "handleRecipe"(arg0: $IO$Type, arg1: $MBDRecipe$Type, arg2: $List$Type<(any)>, arg3: string, arg4: boolean): $List<(K)>
 "postWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "preWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "isDistinct"(): boolean
 "getSlotNames"(): $Set<(string)>
 "getRecipeCapability"(): $RecipeCapability<(K)>
 "handleRecipeInner"(arg0: $IO$Type, arg1: $MBDRecipe$Type, arg2: $List$Type<(K)>, arg3: string, arg4: boolean): $List<(K)>
}

export namespace $IRecipeHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeHandler$Type<K> = ($IRecipeHandler<(K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeHandler_<K> = $IRecipeHandler$Type<(K)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IItemRendererProvider" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export interface $IItemRendererProvider {

 "getRenderer"(arg0: $ItemStack$Type): $IRenderer

(arg0: $ItemStack$Type): $IRenderer
}

export namespace $IItemRendererProvider {
const disabled: $ThreadLocal<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRendererProvider$Type = ($IItemRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRendererProvider_ = $IItemRendererProvider$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$EntityIngredient" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$EntityIngredient$Value, $EntityIngredient$Value$Type} from "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$EntityIngredient$Value"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityIngredient implements $Predicate<($Collection<($Entity)>)> {
static readonly "EMPTY": $EntityIngredient
 "values": ($EntityIngredient$Value)[]
 "types": ($EntityType<(any)>)[]

constructor(arg0: $Stream$Type<(any)>, arg1: integer, arg2: $CompoundTag$Type)

public "test"(arg0: $Collection$Type<($Entity$Type)>): boolean
public "isEmpty"(): boolean
public static "of"(arg0: $TagKey$Type<($EntityType$Type<(any)>)>, arg1: integer, arg2: $CompoundTag$Type): $EntityIngredient
public static "of"(): $EntityIngredient
public static "of"(arg0: $TagKey$Type<($EntityType$Type<(any)>)>, arg1: integer): $EntityIngredient
public static "of"(arg0: integer, ...arg1: ($EntityType$Type<(any)>)[]): $EntityIngredient
public static "of"(arg0: $Stream$Type<($EntityType$Type<(any)>)>, arg1: integer, arg2: $CompoundTag$Type): $EntityIngredient
public "copy"(arg0: integer): $EntityIngredient
public "copy"(): $EntityIngredient
public "getCount"(): integer
public "toJson"(): $JsonElement
public static "fromJson"(arg0: $JsonElement$Type, arg1: boolean): $EntityIngredient
public static "fromJson"(arg0: $JsonElement$Type): $EntityIngredient
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getNbt"(): $CompoundTag
public "setNbt"(arg0: $CompoundTag$Type): void
public "getTypes"(): ($EntityType<(any)>)[]
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $EntityIngredient
public "setCount"(arg0: integer): void
public static "fromValues"(arg0: $Stream$Type<(any)>, arg1: integer, arg2: $CompoundTag$Type): $EntityIngredient
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Collection<($Entity)>)>
public "negate"(): $Predicate<($Collection<($Entity)>)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Collection<($Entity)>)>
public static "isEqual"<T>(arg0: any): $Predicate<($Collection<($Entity)>)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Collection<($Entity)>)>
get "empty"(): boolean
get "count"(): integer
get "nbt"(): $CompoundTag
set "nbt"(value: $CompoundTag$Type)
get "types"(): ($EntityType<(any)>)[]
set "count"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityIngredient$Type = ($EntityIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityIngredient_ = $EntityIngredient$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"

export class $ProgressTexture extends $TransformTexture {

constructor()
constructor(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type)

public "getEmptyBarArea"(): $IGuiTexture
public "getFillDirection"(): $ProgressTexture$FillDirection
public "getFilledBarArea"(): $IGuiTexture
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressTexture
public "setTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressTexture
public "getProgress"(): double
public "setProgress"(progress: double): void
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
get "emptyBarArea"(): $IGuiTexture
get "fillDirection"(): $ProgressTexture$FillDirection
get "filledBarArea"(): $IGuiTexture
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
get "progress"(): double
set "progress"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$Type = ($ProgressTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture_ = $ProgressTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"

export interface $IFluidTransfer {

 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "getTankCapacity"(arg0: integer): long
 "getFluidInTank"(arg0: integer): $FluidStack
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "getTanks"(): integer
 "supportsFill"(arg0: integer): boolean
 "supportsDrain"(arg0: integer): boolean
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "onContentsChanged"(): void
 "createSnapshot"(): any
 "restoreFromSnapshot"(arg0: any): void
}

export namespace $IFluidTransfer {
const EMPTY: $IFluidTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTransfer$Type = ($IFluidTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTransfer_ = $IFluidTransfer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineStateChangedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineStateChangedEvent extends $MachineEvent {
readonly "oldState": string
readonly "newState": string
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: string, arg2: string)

public "getOldState"(): string
public "getNewState"(): string
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "oldState"(): string
get "newState"(): string
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineStateChangedEvent$Type = ($MachineStateChangedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineStateChangedEvent_ = $MachineStateChangedEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineBeforeRecipeWorkingEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineBeforeRecipeWorkingEvent, $MachineBeforeRecipeWorkingEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineBeforeRecipeWorkingEvent"

export class $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<($MachineBeforeRecipeWorkingEvent)> {
readonly "event": E

constructor(arg0: $MachineBeforeRecipeWorkingEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS$Type = ($MBDMachineEvents$MachineBeforeRecipeWorkingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS_ = $MBDMachineEvents$MachineBeforeRecipeWorkingEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineUseCatalystEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineUseCatalystEvent, $MachineUseCatalystEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineUseCatalystEvent"

export class $MBDMachineEvents$MachineUseCatalystEventJS extends $MBDMachineEvents$MachineEventJS<($MachineUseCatalystEvent)> {
readonly "event": E

constructor(arg0: $MachineUseCatalystEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineUseCatalystEventJS$Type = ($MBDMachineEvents$MachineUseCatalystEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineUseCatalystEventJS_ = $MBDMachineEvents$MachineUseCatalystEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineFuelRecipeModifyEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineFuelRecipeModifyEvent extends $MachineEvent {
 "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)

public "getRecipe"(): $MBDRecipe
public "setRecipe"(arg0: $MBDRecipe$Type): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$Type)
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFuelRecipeModifyEvent$Type = ($MachineFuelRecipeModifyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFuelRecipeModifyEvent_ = $MachineFuelRecipeModifyEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$ConfigBlockPropertiesBuilder" {
import {$ConfigBlockProperties$BlockSound, $ConfigBlockProperties$BlockSound$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$BlockSound"
import {$RotationState, $RotationState$Type} from "packages/com/lowdragmc/mbd2/api/block/$RotationState"
import {$ConfigBlockProperties, $ConfigBlockProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties"
import {$ConfigBlockProperties$RenderTypes, $ConfigBlockProperties$RenderTypes$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$RenderTypes"

export class $ConfigBlockProperties$ConfigBlockPropertiesBuilder {


public "toString"(): string
public "build"(): $ConfigBlockProperties
public "isSuffocating"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "isAir"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "explosionResistance"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "rotationState"(arg0: $RotationState$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "emissive"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "destroyTime"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "canOcclude"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "ignitedByLava"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "forceSolid"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "blockSound"(arg0: $ConfigBlockProperties$BlockSound$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "noParticleOnBreak"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "speedFactor"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "hasCollision"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "friction"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "jumpFactor"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "replaceable"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "renderTypes"(arg0: $ConfigBlockProperties$RenderTypes$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "useAO"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "canBeWaterlogged"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "transparent"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBlockProperties$ConfigBlockPropertiesBuilder$Type = ($ConfigBlockProperties$ConfigBlockPropertiesBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBlockProperties$ConfigBlockPropertiesBuilder_ = $ConfigBlockProperties$ConfigBlockPropertiesBuilder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegisterClient" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"

export interface $ILDLRegisterClient extends $ILDLRegister {

 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
 "getRegisterUI"(): $LDLRegister
 "getRegisterUIClient"(): $LDLRegisterClient
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
}

export namespace $ILDLRegisterClient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILDLRegisterClient$Type = ($ILDLRegisterClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILDLRegisterClient_ = $ILDLRegisterClient$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ColorPattern" {
import {$ColorBorderTexture, $ColorBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorBorderTexture"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ColorRectTexture, $ColorRectTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture"

export class $ColorPattern extends $Enum<($ColorPattern)> {
static readonly "WHITE": $ColorPattern
static readonly "T_WHITE": $ColorPattern
static readonly "BLACK": $ColorPattern
static readonly "T_BLACK": $ColorPattern
static readonly "SEAL_BLACK": $ColorPattern
static readonly "T_SEAL_BLACK": $ColorPattern
static readonly "GRAY": $ColorPattern
static readonly "T_GRAY": $ColorPattern
static readonly "DARK_GRAY": $ColorPattern
static readonly "T_DARK_GRAY": $ColorPattern
static readonly "LIGHT_GRAY": $ColorPattern
static readonly "T_LIGHT_GRAY": $ColorPattern
static readonly "GREEN": $ColorPattern
static readonly "T_GREEN": $ColorPattern
static readonly "RED": $ColorPattern
static readonly "T_RED": $ColorPattern
static readonly "BRIGHT_RED": $ColorPattern
static readonly "T_BRIGHT_RED": $ColorPattern
static readonly "YELLOW": $ColorPattern
static readonly "T_YELLOW": $ColorPattern
static readonly "CYAN": $ColorPattern
static readonly "T_CYAN": $ColorPattern
static readonly "PURPLE": $ColorPattern
static readonly "T_PURPLE": $ColorPattern
static readonly "PINK": $ColorPattern
static readonly "T_PINK": $ColorPattern
static readonly "BLUE": $ColorPattern
static readonly "T_BLUE": $ColorPattern
static readonly "ORANGE": $ColorPattern
static readonly "T_ORANGE": $ColorPattern
static readonly "BROWN": $ColorPattern
static readonly "T_BROWN": $ColorPattern
static readonly "LIME": $ColorPattern
static readonly "T_LIME": $ColorPattern
static readonly "MAGENTA": $ColorPattern
static readonly "T_MAGENTA": $ColorPattern
static readonly "LIGHT_BLUE": $ColorPattern
static readonly "T_LIGHT_BLUE": $ColorPattern
readonly "color": integer


public static "values"(): ($ColorPattern)[]
public static "valueOf"(name: string): $ColorPattern
public "borderTexture"(border: integer): $ColorBorderTexture
public static "generateRainbowColor"(): integer
public static "generateRainbowColor"(tick: long): integer
public "rectTexture"(): $ColorRectTexture
public static "rainbowRectTexture"(border: integer): $ColorBorderTexture
public static "rainbowRectTexture"(): $ColorRectTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorPattern$Type = (("t_pink") | ("magenta") | ("pink") | ("yellow") | ("t_red") | ("cyan") | ("t_bright_red") | ("t_orange") | ("red") | ("gray") | ("t_gray") | ("white") | ("t_cyan") | ("bright_red") | ("seal_black") | ("dark_gray") | ("t_purple") | ("t_blue") | ("t_lime") | ("t_brown") | ("green") | ("t_magenta") | ("light_gray") | ("lime") | ("black") | ("t_green") | ("t_light_blue") | ("t_seal_black") | ("light_blue") | ("t_yellow") | ("brown") | ("orange") | ("t_black") | ("t_white") | ("blue") | ("t_dark_gray") | ("purple") | ("t_light_gray")) | ($ColorPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorPattern_ = $ColorPattern$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineStateChangedEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineStateChangedEvent, $MachineStateChangedEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineStateChangedEvent"

export class $MBDMachineEvents$MachineStateChangedEventJS extends $MBDMachineEvents$MachineEventJS<($MachineStateChangedEvent)> {
readonly "event": E

constructor(arg0: $MachineStateChangedEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineStateChangedEventJS$Type = ($MBDMachineEvents$MachineStateChangedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineStateChangedEventJS_ = $MBDMachineEvents$MachineStateChangedEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleMachineSound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$IToggleConfigurable, $IToggleConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IToggleConfigurable"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MachineSound, $MachineSound$Type} from "packages/com/lowdragmc/mbd2/client/$MachineSound"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ToggleMachineSound implements $IToggleConfigurable {

constructor()

public "isLoop"(): boolean
public "createSoundConfigurator"(arg0: string, arg1: $Consumer$Type<($ResourceLocation$Type)>, arg2: $Supplier$Type<($ResourceLocation$Type)>): $Configurator
public "getDelay"(): integer
public "getVolume"(): float
public "getSoundEvent"(): $SoundEvent
public "getSound"(): $ResourceLocation
public "isEnable"(): boolean
public "getSoundSource"(): $SoundSource
public "setDelay"(arg0: integer): void
public "createMachineSound"(arg0: $BlockPos$Type, arg1: $BooleanSupplier$Type): $MachineSound
public "isLoopWithShuffle"(): boolean
public "setSound"(arg0: $ResourceLocation$Type): void
public "setSoundSource"(arg0: $SoundSource$Type): void
public "setLoop"(arg0: boolean): void
public "setLoopWithShuffle"(arg0: boolean): void
public "setSoundEvent"(arg0: $SoundEvent$Type): void
public "setVolume"(arg0: float): void
public "setEnable"(arg0: boolean): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "setPitch"(arg0: float): void
public "getPitch"(): float
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "loop"(): boolean
get "delay"(): integer
get "volume"(): float
get "soundEvent"(): $SoundEvent
get "sound"(): $ResourceLocation
get "enable"(): boolean
get "soundSource"(): $SoundSource
set "delay"(value: integer)
get "loopWithShuffle"(): boolean
set "sound"(value: $ResourceLocation$Type)
set "soundSource"(value: $SoundSource$Type)
set "loop"(value: boolean)
set "loopWithShuffle"(value: boolean)
set "soundEvent"(value: $SoundEvent$Type)
set "volume"(value: float)
set "enable"(value: boolean)
set "pitch"(value: float)
get "pitch"(): float
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleMachineSound$Type = ($ToggleMachineSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleMachineSound_ = $ToggleMachineSound$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeSerializer" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Content, $Content$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$Content"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RecipeCondition, $RecipeCondition$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeCondition"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MBDRecipeSerializer implements $RecipeSerializer<($MBDRecipe)> {
static readonly "SERIALIZER": $MBDRecipeSerializer

constructor()

public "toJson"(arg0: $MBDRecipe$Type): $JsonObject
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $MBDRecipe
public "capabilitiesToJson"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>): $JsonObject
public static "tuplesToMap"(arg0: $List$Type<($Tuple$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>)>): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public static "conditionReader"(arg0: $FriendlyByteBuf$Type): $RecipeCondition
public static "conditionWriter"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeCondition$Type): void
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MBDRecipe$Type): void
public static "entryReader"(arg0: $FriendlyByteBuf$Type): $Tuple<($RecipeCapability<(any)>), ($List<($Content)>)>
public "capabilitiesToNBT"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>): $CompoundTag
public static "entryWriter"(arg0: $FriendlyByteBuf$Type, arg1: $Map$Entry$Type<($RecipeCapability$Type<(any)>), (any)>): void
public "capabilitiesFromNBT"(arg0: $CompoundTag$Type): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "capabilitiesFromJson"(arg0: $JsonObject$Type): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "fromNBT"(arg0: $ResourceLocation$Type, arg1: $CompoundTag$Type): $MBDRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MBDRecipe
public "toNBT"(arg0: $MBDRecipe$Type): $CompoundTag
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $MBDRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeSerializer$Type = ($MBDRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeSerializer_ = $MBDRecipeSerializer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldSceneRenderer, $WorldSceneRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BlockPosFace, $BlockPosFace$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$TrackedDummyWorld, $TrackedDummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SceneWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type, useFBO: boolean)
constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type)

public "getRange"(): float
public "setOnSelected"(onSelected: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>): $SceneWidget
public "isDraggable"(): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setRenderFacing"(renderFacing: boolean): $SceneWidget
public "createScene"(world: $Level$Type, useFBOSceneRenderer: boolean): void
public "createScene"(world: $Level$Type): void
public "setRenderSelect"(renderSelect: boolean): $SceneWidget
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>): $SceneWidget
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $SceneWidget
public "setBeforeWorldRender"(beforeWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "setCameraYawAndPitchAnima"(rotationYaw: float, rotationPitch: float, dur: integer): void
public "setCameraYawAndPitch"(rotationYaw: float, rotationPitch: float): $SceneWidget
public "getRenderer"(): $WorldSceneRenderer
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>): $SceneWidget
public "setDraggable"(draggable: boolean): $SceneWidget
public "setIntractable"(intractable: boolean): $SceneWidget
public "setScalable"(scalable: boolean): $SceneWidget
public "isDragging"(): boolean
public "setCenter"(center: $Vector3f$Type): $SceneWidget
public "setGui"(gui: $ModularUI$Type): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "useCacheBuffer"(): $SceneWidget
public "useCacheBuffer"(autoReleased: boolean): $SceneWidget
public "getClickPosFace"(): $BlockPosFace
public "getHoverPosFace"(): $BlockPosFace
public "getZoom"(): float
public "setZoom"(zoom: float): $SceneWidget
public "camZoom"(): float
public "getRotationPitch"(): float
public "getRotationYaw"(): float
public "useOrtho"(): $SceneWidget
public "useOrtho"(useOrtho: boolean): $SceneWidget
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer, inner: integer): void
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer): void
public "setClearColor"(color: integer): $SceneWidget
public "needCompileCache"(): void
public "getDummyWorld"(): $TrackedDummyWorld
public "setHoverTips"(hoverTips: boolean): $SceneWidget
public "renderBlockOverLay"(renderer: $WorldSceneRenderer$Type): void
public "releaseCacheBuffer"(): void
public "getSelectedPosFace"(): $BlockPosFace
public "getCurrentMouseX"(): integer
public "getHoverItem"(): $ItemStack
public "setOrthoRange"(range: float): $SceneWidget
public "isUseOrtho"(): boolean
public "isIntractable"(): boolean
public "isUseCache"(): boolean
public "isAutoReleased"(): boolean
public "isRenderFacing"(): boolean
public "isHoverTips"(): boolean
public "getCore"(): $Set<($BlockPos)>
public "isRenderSelect"(): boolean
public "isScalable"(): boolean
public "getCurrentMouseY"(): integer
public "getCenter"(): $Vector3f
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getOnSelected"(): $BiConsumer<($BlockPos), ($Direction)>
public "getParticleManager"(): $ParticleManager
public "setAfterWorldRender"(afterWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "range"(): float
set "onSelected"(value: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>)
get "draggable"(): boolean
set "renderFacing"(value: boolean)
set "renderSelect"(value: boolean)
set "renderedCore"(value: $Collection$Type<($BlockPos$Type)>)
set "beforeWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
get "renderer"(): $WorldSceneRenderer
set "onAddedTooltips"(value: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>)
set "draggable"(value: boolean)
set "intractable"(value: boolean)
set "scalable"(value: boolean)
get "dragging"(): boolean
set "center"(value: $Vector3f$Type)
set "gui"(value: $ModularUI$Type)
get "clickPosFace"(): $BlockPosFace
get "hoverPosFace"(): $BlockPosFace
get "zoom"(): float
set "zoom"(value: float)
get "rotationPitch"(): float
get "rotationYaw"(): float
set "clearColor"(value: integer)
get "dummyWorld"(): $TrackedDummyWorld
set "hoverTips"(value: boolean)
get "selectedPosFace"(): $BlockPosFace
get "currentMouseX"(): integer
get "hoverItem"(): $ItemStack
set "orthoRange"(value: float)
get "intractable"(): boolean
get "useCache"(): boolean
get "autoReleased"(): boolean
get "renderFacing"(): boolean
get "hoverTips"(): boolean
get "core"(): $Set<($BlockPos)>
get "renderSelect"(): boolean
get "scalable"(): boolean
get "currentMouseY"(): integer
get "center"(): $Vector3f
get "onSelected"(): $BiConsumer<($BlockPos), ($Direction)>
get "particleManager"(): $ParticleManager
set "afterWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneWidget$Type = ($SceneWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneWidget_ = $SceneWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$DummyWorld, $DummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackedDummyWorld extends $DummyWorld {
readonly "proxyWorld": $WeakReference<($Level)>
readonly "renderedBlocks": $Map<($BlockPos), ($BlockInfo)>
readonly "blockEntities": $Map<($BlockPos), ($BlockEntity)>
readonly "entities": $Map<(integer), ($Entity)>
readonly "minPos": $Vector3f
readonly "maxPos": $Vector3f
 "level": $WeakReference<($Level)>
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

constructor()
constructor(world: $Level$Type)

public "clear"(): void
public "getSize"(): $Vector3f
public "addBlock"(pos: $BlockPos$Type, blockInfo: $BlockInfo$Type): void
public "getChunkSource"(): $ChunkSource
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "setInnerBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public static "withUnsafeNBTDiscarded"(stack: $ItemStack$Type): $ItemStack
public "addFreshEntity"(entity: $Entity$Type): boolean
public "getMaxPos"(): $Vector3f
public "setBlock"(pos: $BlockPos$Type, state: $BlockState$Type, a: integer, b: integer): boolean
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "getEntity"(id: integer): $Entity
public "getBlockTint"(blockPos: $BlockPos$Type, colorResolver: $ColorResolver$Type): integer
public "getMinPos"(): $Vector3f
public "getParticleManager"(): $ParticleManager
public "removeBlock"(pos: $BlockPos$Type): $BlockInfo
public "getRenderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
public "getAllEntities"(): $List<($Entity)>
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "tickWorld"(): void
public "addBlocks"(renderedBlocks: $Map$Type<($BlockPos$Type), ($BlockInfo$Type)>): void
public static "isUnsafeItemNBTKey"(name: string): boolean
public "setRenderFilter"(renderFilter: $Predicate$Type<($BlockPos$Type)>): void
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getBiome"(pos: $BlockPos$Type): $Holder<($Biome)>
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "size"(): $Vector3f
get "chunkSource"(): $ChunkSource
set "innerBlockEntity"(value: $BlockEntity$Type)
get "maxPos"(): $Vector3f
set "blockEntity"(value: $BlockEntity$Type)
get "minPos"(): $Vector3f
get "particleManager"(): $ParticleManager
get "renderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
get "allEntities"(): $List<($Entity)>
set "particleManager"(value: $ParticleManager$Type)
set "renderFilter"(value: $Predicate$Type<($BlockPos$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDummyWorld$Type = ($TrackedDummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDummyWorld_ = $TrackedDummyWorld$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigItemProperties$ConfigItemPropertiesBuilder" {
import {$ToggleCreativeTab, $ToggleCreativeTab$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCreativeTab"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ToggleRenderer, $ToggleRenderer$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleRenderer"
import {$ConfigItemProperties, $ConfigItemProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigItemProperties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $ConfigItemProperties$ConfigItemPropertiesBuilder {


public "toString"(): string
public "build"(): $ConfigItemProperties
public "maxStackSize"(arg0: integer): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "creativeTab"(arg0: $ToggleCreativeTab$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "isGui3d"(arg0: boolean): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "itemTooltips"(arg0: $List$Type<($Component$Type)>): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "useBlockLight"(arg0: boolean): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "renderer"(arg0: $ToggleRenderer$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "rarity"(arg0: $Rarity$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigItemProperties$ConfigItemPropertiesBuilder$Type = ($ConfigItemProperties$ConfigItemPropertiesBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigItemProperties$ConfigItemPropertiesBuilder_ = $ConfigItemProperties$ConfigItemPropertiesBuilder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockInfo implements $IPersistedSerializable, $IConfigurable {
static readonly "EMPTY": $BlockInfo

constructor()
constructor(blockState: $BlockState$Type, hasBlockEntity: boolean, itemStack: $ItemStack$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(blockState: $BlockState$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(block: $Block$Type)
constructor(blockState: $BlockState$Type)
constructor(blockState: $BlockState$Type, hasBlockEntity: boolean)

public "apply"(world: $Level$Type, pos: $BlockPos$Type): void
public static "fromBlock"(block: $Block$Type): $BlockInfo
public "getItemStackForm"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ItemStack
public "getItemStackForm"(): $ItemStack
public static "fromBlockState"(state: $BlockState$Type): $BlockInfo
public "setTag"(tag: $CompoundTag$Type): void
public "setBlockState"(blockState: $BlockState$Type): void
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getBlockEntity"(level: $Level$Type, pos: $BlockPos$Type): $BlockEntity
public "setItemStack"(itemStack: $ItemStack$Type): void
public "getBlockState"(): $BlockState
public "clearBlockEntityCache"(): void
public "setHasBlockEntity"(hasBlockEntity: boolean): void
public "setPostCreate"(postCreate: $Consumer$Type<($BlockEntity$Type)>): void
public "hasBlockEntity"(): boolean
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "itemStackForm"(): $ItemStack
set "tag"(value: $CompoundTag$Type)
set "blockState"(value: $BlockState$Type)
set "itemStack"(value: $ItemStack$Type)
get "blockState"(): $BlockState
set "postCreate"(value: $Consumer$Type<($BlockEntity$Type)>)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInfo$Type = ($BlockInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInfo_ = $BlockInfo$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigMachineSettings$SignalConnection, $ConfigMachineSettings$SignalConnection$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$SignalConnection"
import {$TraitDefinition, $TraitDefinition$Type} from "packages/com/lowdragmc/mbd2/common/trait/$TraitDefinition"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ConfigMachineSettings$ConfigMachineSettingsBuilder, $ConfigMachineSettings$ConfigMachineSettingsBuilder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$ConfigMachineSettingsBuilder"

export class $ConfigMachineSettings implements $IPersistedSerializable, $IConfigurable {


public static "builder"(): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "dropMachineItem"(): boolean
public "signalConnection"(): $ConfigMachineSettings$SignalConnection
public "addTraitDefinition"(arg0: $TraitDefinition$Type): void
public "removeTraitDefinition"(arg0: $TraitDefinition$Type): void
public "machineLevel"(): integer
public "traitDefinitions"(): $List<($TraitDefinition)>
public "hasUI"(): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMachineSettings$Type = ($ConfigMachineSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMachineSettings_ = $ConfigMachineSettings$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$RPCSender, $RPCSender$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"

export class $RPCMethodMeta {

constructor(method: $Method$Type)

public "invoke"(instance: any, sender: $RPCSender$Type, payloads: ($ITypedPayload$Type<(any)>)[]): void
public "getName"(): string
public "serializeArgs"(args: (any)[]): ($ITypedPayload<(any)>)[]
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RPCMethodMeta$Type = ($RPCMethodMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RPCMethodMeta_ = $RPCMethodMeta$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$AnimationTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AnimationTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation

constructor(imageLocation: $ResourceLocation$Type)
constructor(imageLocation: string)
constructor()

public "setColor"(color: integer): $AnimationTexture
public "getFrom"(): integer
public "setCellSize"(cellSize: integer): $AnimationTexture
public "setAnimation"(from: integer, to: integer): $AnimationTexture
public "setAnimation"(animation: integer): $AnimationTexture
public "getCellSize"(): integer
public "getAnimation"(): integer
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setTexture"(imageLocation: string): $AnimationTexture
public "getColor"(): integer
public "getTo"(): integer
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
get "from"(): integer
set "cellSize"(value: integer)
set "animation"(value: integer)
get "cellSize"(): integer
get "animation"(): integer
set "texture"(value: string)
get "color"(): integer
get "to"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationTexture$Type = ($AnimationTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationTexture_ = $AnimationTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Position" {
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"

export class $Position {
static readonly "ORIGIN": $Position
readonly "x": integer
readonly "y": integer

constructor(x: integer, y: integer)

public "add"(size: $Size$Type): $Position
public "add"(x: integer, y: integer): $Position
public "add"(other: $Position$Type): $Position
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(x: integer, y: integer): $Position
public "subtract"(other: $Position$Type): $Position
public "getY"(): integer
public "vector2f"(): $Vector2f
public "getX"(): integer
public "addX"(x: integer): $Position
public "addY"(y: integer): $Position
public "vec2"(): $Vec2
get "y"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Type = ($Position);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position_ = $Position$Type;
}}
declare module "packages/com/lowdragmc/mbd2/core/mixins/$IngredientAccessor" {
import {$Ingredient$Value, $Ingredient$Value$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient$Value"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IngredientAccessor {

 "setValues"(arg0: ($Ingredient$Value$Type)[]): void
 "getValues"(): ($Ingredient$Value)[]
 "setItemStacks"(arg0: ($ItemStack$Type)[]): void
}

export namespace $IngredientAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientAccessor$Type = ($IngredientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientAccessor_ = $IngredientAccessor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/client/$MachineSound" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$AbstractTickableSoundInstance, $AbstractTickableSoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$AbstractTickableSoundInstance"

export class $MachineSound extends $AbstractTickableSoundInstance {
readonly "loop": boolean
readonly "loopWithShuffle": boolean
readonly "predicate": $BooleanSupplier

constructor(arg0: $SoundEvent$Type, arg1: $SoundSource$Type, arg2: $BooleanSupplier$Type, arg3: $BlockPos$Type, arg4: boolean, arg5: boolean, arg6: integer, arg7: float, arg8: float)

public "release"(): void
public "tick"(): void
public "play"(): void
public static "createUnseededRandom"(): $RandomSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineSound$Type = ($MachineSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineSound_ = $MachineSound$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleShape" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$ToggleObject, $ToggleObject$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ToggleShape extends $ToggleObject<($VoxelShape)> implements $ITagSerializable<($CompoundTag)> {
static readonly "BLOCK": $AABB

constructor()
constructor(arg0: boolean)
constructor(arg0: $VoxelShape$Type)
constructor(arg0: $VoxelShape$Type, arg1: boolean)

public "setValue"(arg0: $VoxelShape$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
set "value"(value: $VoxelShape$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleShape$Type = ($ToggleShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleShape_ = $ToggleShape$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/blockentity/$IMachineBlockEntity" {
import {$IAsyncAutoSyncBlockEntity, $IAsyncAutoSyncBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAsyncAutoSyncBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IMachine, $IMachine$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMachine"
import {$IAutoPersistBlockEntity, $IAutoPersistBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoPersistBlockEntity"
import {$IRPCBlockEntity, $IRPCBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IRPCBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RPCMethodMeta, $RPCMethodMeta$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SPacketRPCMethodPayload, $SPacketRPCMethodPayload$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketRPCMethodPayload"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IMachineBlockEntity extends $IAsyncAutoSyncBlockEntity, $IRPCBlockEntity, $IAutoPersistBlockEntity {

 "pos"(): $BlockPos
 "getOffset"(): long
 "self"(): $BlockEntity
 "level"(): $Level
 "getMetaMachine"(): $IMachine
 "getOffsetTimer"(): long
 "scheduleRenderUpdate"(): void
 "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
 "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
 "notifyBlockUpdate"(): void
 "asyncTick"(periodID: long): void
 "useAsyncThread"(): boolean
 "onInValid"(): void
 "onValid"(): void
 "isAsyncSyncing"(): boolean
 "setAsyncSyncing"(syncing: boolean): void
 "getRPCMethod"(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
 "generateRpcPacket"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
 "rpcToTracking"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): void
 "rpcToPlayer"(managed: $IManaged$Type, player: $ServerPlayer$Type, methodName: string, ...args: (any)[]): void
 "loadManagedPersistentData"(tag: $CompoundTag$Type): void
 "saveManagedPersistentData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "defaultServerTick"(): void
 "getSyncTag"(): string
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity
}

export namespace $IMachineBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineBlockEntity$Type = ($IMachineBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMachineBlockEntity_ = $IMachineBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MachineTickEvent extends $MachineEvent {
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTickEvent$Type = ($MachineTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineTickEvent_ = $MachineTickEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RPCMethodMeta, $RPCMethodMeta$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ManagedFieldHolder {

constructor(clazz: $Class$Type<(any)>, parent: $ManagedFieldHolder$Type)
constructor(clazz: $Class$Type<(any)>)

public "merge"(other: $ManagedFieldHolder$Type): void
public "getFields"(): ($ManagedKey)[]
public "getSyncedFieldIndex"(name: string): $ManagedKey
public "getRpcMethodMap"(): $Map<(string), ($RPCMethodMeta)>
get "fields"(): ($ManagedKey)[]
get "rpcMethodMap"(): $Map<(string), ($RPCMethodMeta)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagedFieldHolder$Type = ($ManagedFieldHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagedFieldHolder_ = $ManagedFieldHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $HsbColorWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setColor"(argb: integer): $HsbColorWidget
public "setBarWidth"(barWidth: integer): $HsbColorWidget
public "isMouseOverMain"(mouseX: double, mouseY: double): boolean
public "setShowRGB"(showRGB: boolean): $HsbColorWidget
public "isShowRGB"(): boolean
public "setGap"(gap: integer): $HsbColorWidget
public "isShowAlpha"(): boolean
public "setShowAlpha"(showAlpha: boolean): $HsbColorWidget
public "setOnChanged"(onChanged: $IntConsumer$Type): $HsbColorWidget
public "setColorSupplier"(colorSupplier: $IntSupplier$Type): $HsbColorWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "isMouseOverColorSlider"(mouseX: double, mouseY: double): boolean
public "isMouseOverAlphaSlider"(mouseX: double, mouseY: double): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "detectAndSendChanges"(): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "color"(value: integer)
set "barWidth"(value: integer)
set "showRGB"(value: boolean)
get "showRGB"(): boolean
set "gap"(value: integer)
get "showAlpha"(): boolean
set "showAlpha"(value: boolean)
set "onChanged"(value: $IntConsumer$Type)
set "colorSupplier"(value: $IntSupplier$Type)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HsbColorWidget$Type = ($HsbColorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HsbColorWidget_ = $HsbColorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot" {
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"

export interface $IRecipeIngredientSlot extends $IIngredientSlot {

 "self"(): $Widget
 "getXEIChance"(): float
 "getXEIIngredients"(): $List<(any)>
 "getIngredientIO"(): $IngredientIO
 "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
 "getFullTooltipTexts"(): $List<($Component)>
 "getXEICurrentIngredient"(): any

(): $Widget
}

export namespace $IRecipeIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeIngredientSlot$Type = ($IRecipeIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeIngredientSlot_ = $IRecipeIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigPartSettingsFactory" {
import {$ConfigPartSettings, $ConfigPartSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $MBDMachineDefinition$ConfigPartSettingsFactory extends $Supplier<($ConfigPartSettings)> {

 "get"(): $ConfigPartSettings

(): $ConfigPartSettings
}

export namespace $MBDMachineDefinition$ConfigPartSettingsFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineDefinition$ConfigPartSettingsFactory$Type = ($MBDMachineDefinition$ConfigPartSettingsFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineDefinition$ConfigPartSettingsFactory_ = $MBDMachineDefinition$ConfigPartSettingsFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $MenuWidget<K, T> extends $WidgetGroup {
static "NODE_TEXTURE": $IGuiTexture
static "LEAF_TEXTURE": $IGuiTexture
static "NODE_HOVER_TEXTURE": $IGuiTexture
static "BACKGROUND": $IGuiTexture
readonly "widgets": $List<($Widget)>

constructor(xPosition: integer, yPosition: integer, nodeHeight: integer, root: $TreeNode$Type<(K), (T)>)

public "close"(): void
public "setOnNodeClicked"(onNodeClicked: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $MenuWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $MenuWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $MenuWidget<(K), (T)>
public "initWidget"(): void
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setNodeHoverTexture"(nodeHoverTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setCrossLinePredicate"(crossLinePredicate: $Predicate$Type<(K)>): $MenuWidget<(K), (T)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setAutoClose"(autoClose: boolean): $MenuWidget<(K), (T)>
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "onNodeClicked"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "leafTexture"(value: $IGuiTexture$Type)
set "nodeHoverTexture"(value: $IGuiTexture$Type)
set "crossLinePredicate"(value: $Predicate$Type<(K)>)
set "autoClose"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuWidget$Type<K, T> = ($MenuWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuWidget_<K, T> = $MenuWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOnRecipeWaitingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineOnRecipeWaitingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)

public "getRecipe"(): $MBDRecipe
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "recipe"(): $MBDRecipe
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineOnRecipeWaitingEvent$Type = ($MachineOnRecipeWaitingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineOnRecipeWaitingEvent_ = $MachineOnRecipeWaitingEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties" {
import {$ConfigBlockProperties$BlockSound, $ConfigBlockProperties$BlockSound$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$BlockSound"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$RotationState, $RotationState$Type} from "packages/com/lowdragmc/mbd2/api/block/$RotationState"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfigBlockProperties$ConfigBlockPropertiesBuilder, $ConfigBlockProperties$ConfigBlockPropertiesBuilder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$ConfigBlockPropertiesBuilder"
import {$StateMachine, $StateMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$StateMachine"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ConfigBlockProperties$RenderTypes, $ConfigBlockProperties$RenderTypes$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$RenderTypes"

export class $ConfigBlockProperties implements $IPersistedSerializable, $IConfigurable {


public "apply"(arg0: $StateMachine$Type<(any)>, arg1: $BlockBehaviour$Properties$Type): $BlockBehaviour$Properties
public static "builder"(): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "isSuffocating"(): boolean
public "isAir"(): boolean
public "explosionResistance"(): float
public "rotationState"(): $RotationState
public "emissive"(): boolean
public "destroyTime"(): float
public "canOcclude"(): boolean
public "ignitedByLava"(): boolean
public "forceSolid"(): boolean
public "blockSound"(): $ConfigBlockProperties$BlockSound
public "noParticleOnBreak"(): boolean
public "speedFactor"(): float
public "hasCollision"(): boolean
public "friction"(): float
public "jumpFactor"(): float
public "replaceable"(): boolean
public "renderTypes"(): $ConfigBlockProperties$RenderTypes
public "useAO"(): boolean
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "canBeWaterlogged"(): boolean
public "transparent"(): boolean
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "suffocating"(): boolean
get "air"(): boolean
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBlockProperties$Type = ($ConfigBlockProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBlockProperties_ = $ConfigBlockProperties$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TextTexture, $TextTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$TextFieldWidget, $TextFieldWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ButtonWidget, $ButtonWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $DialogWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(parent: $WidgetGroup$Type, isClient: boolean)
constructor(x: integer, y: integer, width: integer, height: integer)

public "close"(): void
public "setClickClose"(clickClose: boolean): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $BooleanConsumer$Type): $DialogWidget
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public static "showStringEditorDialog"(parent: $WidgetGroup$Type, title: string, initial: string, predicate: $Predicate$Type<(string)>, result: $Consumer$Type<(string)>): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $Runnable$Type): $DialogWidget
public static "showFileDialog"(parent: $WidgetGroup$Type, title: string, dir: $File$Type, isSelector: boolean, valid: $Predicate$Type<($TreeNode$Type<($File$Type), ($File$Type)>)>, result: $Consumer$Type<($File$Type)>): $DialogWidget
public static "suffixFilter"(...suffixes: (string)[]): $Predicate<($TreeNode<($File), ($File)>)>
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "createContainer"(dialog: $DialogWidget$Type, x: integer, y: integer, width: integer, height: integer, titleText: string): $WidgetGroup
public static "createContainer"(dialog: $DialogWidget$Type, width: integer, height: integer, titleText: string): $WidgetGroup
public "setParentInVisible"(): $DialogWidget
public "setOnClosed"(onClosed: $Runnable$Type): $DialogWidget
public static "createTextField"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextFieldWidget
public static "createButton"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer, text: string, onClick: $Runnable$Type): $ButtonWidget
public static "showItemSelector"(parent: $WidgetGroup$Type, title: string, init: $ItemStack$Type, itemConsumer: $Consumer$Type<($Item$Type)>): $DialogWidget
public static "createText"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "clickClose"(value: boolean)
set "onClosed"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DialogWidget$Type = ($DialogWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DialogWidget_ = $DialogWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ToolPanel extends $WidgetGroup {
/**
 * 
 * @deprecated
 */
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "setSize"(size: $Size$Type): void
public "isShow"(): boolean
public "initWidget"(): void
public "clearAllWidgets"(): void
public "setTitle"(title: string): void
public "hide"(): void
public "hide"(animate: boolean): void
public "getEditor"(): $Editor
/**
 * 
 * @deprecated
 */
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBox: $WidgetGroup$Type): void
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBoxSupplier: $Function$Type<($Size$Type), ($WidgetGroup$Type)>): void
public "getToolBoxes"(): $List<($Widget)>
public "getTabContainer"(): $TabContainer
public "show"(): void
public "show"(animate: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "size"(value: $Size$Type)
set "title"(value: string)
get "editor"(): $Editor
get "toolBoxes"(): $List<($Widget)>
get "tabContainer"(): $TabContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolPanel$Type = ($ToolPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolPanel_ = $ToolPanel$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/geckolib/$AnimatableMachine" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$GeckolibRenderer, $GeckolibRenderer$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$GeckolibRenderer"

export class $AnimatableMachine implements $GeoAnimatable {

constructor(arg0: $MBDMachine$Type, arg1: $GeckolibRenderer$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getRenderer"(): $GeckolibRenderer
public "getTick"(arg0: any): double
public "getMachine"(): $MBDMachine
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "renderer"(): $GeckolibRenderer
get "machine"(): $MBDMachine
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableMachine$Type = ($AnimatableMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableMachine_ = $AnimatableMachine$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeModifyEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineRecipeModifyEvent extends $MachineEvent {
 "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)

public "getRecipe"(): $MBDRecipe
public "setRecipe"(arg0: $MBDRecipe$Type): void
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$Type)
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipeModifyEvent$Type = ($MachineRecipeModifyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRecipeModifyEvent_ = $MachineRecipeModifyEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Layout" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Layout extends $Enum<($Layout)> {
static readonly "NONE": $Layout
static readonly "VERTICAL_LEFT": $Layout
static readonly "VERTICAL_CENTER": $Layout
static readonly "VERTICAL_RIGHT": $Layout
static readonly "HORIZONTAL_TOP": $Layout
static readonly "HORIZONTAL_CENTER": $Layout
static readonly "HORIZONTAL_BOTTOM": $Layout


public static "values"(): ($Layout)[]
public static "valueOf"(name: string): $Layout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layout$Type = (("vertical_center") | ("horizontal_center") | ("vertical_left") | ("vertical_right") | ("horizontal_bottom") | ("none") | ("horizontal_top")) | ($Layout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layout_ = $Layout$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory$BlockAccess" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockUIJSFactory$BlockAccess extends $Record {

constructor(pos: $BlockPos$Type, uiName: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public "uiName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUIJSFactory$BlockAccess$Type = ($BlockUIJSFactory$BlockAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockUIJSFactory$BlockAccess_ = $BlockUIJSFactory$BlockAccess$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineDropsEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineDropsEvent extends $MachineEvent {
readonly "entity": $Entity
 "drops": $List<($ItemStack)>
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $Entity$Type, arg2: $List$Type<($ItemStack$Type)>)

public "getEntity"(): $Entity
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getDrops"(): $List<($ItemStack)>
get "entity"(): $Entity
get "listenerList"(): $ListenerList
get "drops"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineDropsEvent$Type = ($MachineDropsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineDropsEvent_ = $MachineDropsEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineTickEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineTickEvent, $MachineTickEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineTickEvent"

export class $MBDMachineEvents$MachineTickEventJS extends $MBDMachineEvents$MachineEventJS<($MachineTickEvent)> {
readonly "event": E

constructor(arg0: $MachineTickEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineTickEventJS$Type = ($MBDMachineEvents$MachineTickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineTickEventJS_ = $MBDMachineEvents$MachineTickEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$PacketIntLocation" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PacketIntLocation implements $IPacket {

constructor()
constructor(pos: $BlockPos$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketIntLocation$Type = ($PacketIntLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketIntLocation_ = $PacketIntLocation$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DraggableScrollableWidgetGroup$ISelected {

 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean
 "onUnSelected"(): void
 "onSelected"(): void

(arg0: double, arg1: double, arg2: integer): boolean
}

export namespace $DraggableScrollableWidgetGroup$ISelected {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$ISelected$Type = ($DraggableScrollableWidgetGroup$ISelected);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$ISelected_ = $DraggableScrollableWidgetGroup$ISelected$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/forge/$ISlotWidgetKJS" {
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"

export interface $ISlotWidgetKJS {

 "kjs$setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
 "kjs$self"(): $SlotWidget
}

export namespace $ISlotWidgetKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotWidgetKJS$Type = ($ISlotWidgetKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotWidgetKJS_ = $ISlotWidgetKJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextTexture$TextType extends $Enum<($TextTexture$TextType)> {
static readonly "NORMAL": $TextTexture$TextType
static readonly "HIDE": $TextTexture$TextType
static readonly "ROLL": $TextTexture$TextType
static readonly "ROLL_ALWAYS": $TextTexture$TextType
static readonly "LEFT": $TextTexture$TextType
static readonly "RIGHT": $TextTexture$TextType
static readonly "LEFT_HIDE": $TextTexture$TextType
static readonly "LEFT_ROLL": $TextTexture$TextType
static readonly "LEFT_ROLL_ALWAYS": $TextTexture$TextType


public static "values"(): ($TextTexture$TextType)[]
public static "valueOf"(name: string): $TextTexture$TextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$TextType$Type = (("normal") | ("hide") | ("left_hide") | ("left") | ("left_roll") | ("roll") | ("left_roll_always") | ("right") | ("roll_always")) | ($TextTexture$TextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture$TextType_ = $TextTexture$TextType$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineCustomDataUpdateEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineCustomDataUpdateEvent, $MachineCustomDataUpdateEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineCustomDataUpdateEvent"

export class $MBDMachineEvents$MachineCustomDataUpdateEventJS extends $MBDMachineEvents$MachineEventJS<($MachineCustomDataUpdateEvent)> {
readonly "event": E

constructor(arg0: $MachineCustomDataUpdateEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineCustomDataUpdateEventJS$Type = ($MBDMachineEvents$MachineCustomDataUpdateEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineCustomDataUpdateEventJS_ = $MBDMachineEvents$MachineCustomDataUpdateEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$SwitchWidget, $SwitchWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget"

export class $TabButton extends $SwitchWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer)

public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $TabButton
public "setContainer"(container: $TabContainer$Type): void
public "onPressed"(clickData: $ClickData$Type, isPressed: boolean): void
public "setHoverBorderTexture"(border: integer, color: integer): $TabButton
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "baseTexture"(value: ($IGuiTexture$Type)[])
set "container"(value: $TabContainer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabButton$Type = ($TabButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabButton_ = $TabButton$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ModelBakeryAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelBakeryAccessor {

 "getTopLevelModels"(): $Map<($ResourceLocation), ($UnbakedModel)>
 "invokeGetModel"(arg0: $ResourceLocation$Type): $UnbakedModel
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$Type = ($ModelBakeryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$BaseGraph$GraphChanges, $BaseGraph$GraphChanges$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph$GraphChanges"
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NodePort, $NodePort$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BaseGraph$ComputeOrderType, $BaseGraph$ComputeOrderType$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph$ComputeOrderType"

export class $BaseGraph implements $IPersistedSerializable {
readonly "usedGUIDs": $HashSet<($UUID)>
static readonly "loopComputeOrder": integer
static readonly "invalidComputeOrder": integer
readonly "nodes": $List<($BaseNode)>
readonly "nodesPerGUID": $Map<(string), ($BaseNode)>
readonly "edges": $List<($PortEdge)>
readonly "edgesPerGUID": $Map<(string), ($PortEdge)>
readonly "exposedParameters": $Map<(string), ($ExposedParameter)>
 "onParameterValueUpdated": $Consumer<($ExposedParameter)>
 "onGraphChanges": $Consumer<($BaseGraph$GraphChanges)>
readonly "graphOutputs": $Set<($BaseNode)>

constructor()
constructor(exposedParameters: $List$Type<($ExposedParameter$Type<(any)>)>)

public "initialize"(): void
public "connect"(inputPort: $NodePort$Type, outputPort: $NodePort$Type, autoDisconnectInputs: boolean): $PortEdge
public "connect"(inputPort: $NodePort$Type, outputPort: $NodePort$Type): $PortEdge
public "removeNode"(node: $BaseNode$Type): void
public "addNode"(node: $BaseNode$Type): $BaseNode
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "disconnect"(inputNode: $BaseNode$Type, inputFieldName: string, outputNode: $BaseNode$Type, outputFieldName: string): void
public "disconnect"(edgeGUID: string): void
public "disconnect"(edge: $PortEdge$Type): void
public "getDepth"(): integer
public "getExposedParameterFromIdentifier"(parameterIdentifier: string): $ExposedParameter<(any)>
public "updateExposedParameter"(identifier: string, input: any): void
public static "areTypesConnectable"(from: $Class$Type<(any)>, to: $Class$Type<(any)>): boolean
public "newGUID"(): $UUID
public "addGUID"(guid: $UUID$Type): void
public "addGUID"(guid: string): void
public "onAssetDeleted"(): void
public "resetNodes"(): void
public "updateComputeOrder"(type: $BaseGraph$ComputeOrderType$Type): void
public "notifyNodeChanged"(node: $BaseNode$Type): void
get "depth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGraph$Type = ($BaseGraph);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGraph_ = $BaseGraph$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HsbColorWidget, $HsbColorWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigPanel extends $WidgetGroup {
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type, tabs: $List$Type<($ConfigPanel$Tab$Type)>)
constructor(editor: $Editor$Type)

public "switchTag"(tab: $ConfigPanel$Tab$Type): void
public "clearAllConfigurators"(): void
public "clearAllConfigurators"(tab: $ConfigPanel$Tab$Type): void
public "computeLayout"(tab: $ConfigPanel$Tab$Type): void
public "getEditor"(): $Editor
public "openConfigurator"(tab: $ConfigPanel$Tab$Type, configurable: $IConfigurable$Type): void
public "getPalette"(): $HsbColorWidget
public "getFocus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
public "reloadTabs"(tabs: $List$Type<($ConfigPanel$Tab$Type)>): void
public "onConfiguratorChangeUpdate"(tab: $ConfigPanel$Tab$Type, configurator: $Configurator$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "editor"(): $Editor
get "palette"(): $HsbColorWidget
get "focus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Type = ($ConfigPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel_ = $ConfigPanel$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry$String" {
import {$MBDRegistry, $MBDRegistry$Type} from "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRegistry$String<V> extends $MBDRegistry<(string), (V)> {
static readonly "REGISTERED": $Map<($ResourceLocation), ($MBDRegistry<(any), (any)>)>

constructor(arg0: $ResourceLocation$Type)

public "saveToNBT"(arg0: V): $Tag
public "readBuf"(arg0: $FriendlyByteBuf$Type): V
public "loadFromNBT"(arg0: $Tag$Type): V
public "writeBuf"(arg0: V, arg1: $FriendlyByteBuf$Type): void
public "codec"(): $Codec<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRegistry$String$Type<V> = ($MBDRegistry$String<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRegistry$String_<V> = $MBDRegistry$String$Type<(V)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIngredientSlot {

 "getXEIIngredientOverMouse"(arg0: double, arg1: double): any

(arg0: double, arg1: double): any
}

export namespace $IIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSlot$Type = ($IIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSlot_ = $IIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IRPCBlockEntity" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RPCMethodMeta, $RPCMethodMeta$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SPacketRPCMethodPayload, $SPacketRPCMethodPayload$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketRPCMethodPayload"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IRPCBlockEntity extends $IManagedBlockEntity {

 "getRPCMethod"(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
 "generateRpcPacket"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
 "rpcToTracking"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): void
 "rpcToPlayer"(managed: $IManaged$Type, player: $ServerPlayer$Type, methodName: string, ...args: (any)[]): void
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity

(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
}

export namespace $IRPCBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRPCBlockEntity$Type = ($IRPCBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRPCBlockEntity_ = $IRPCBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$StateMachine" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$MachineState$Builder, $MachineState$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState$Builder"

export class $StateMachine<T extends $MachineState> implements $ITagSerializable<($CompoundTag)> {

constructor(arg0: T)

public "getState"(arg0: string): T
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public static "createDefault"<T extends $MachineState>(arg0: $Supplier$Type<($MachineState$Builder$Type<(T)>)>): T
public static "createSingleDefault"<T extends $MachineState>(arg0: $Supplier$Type<($MachineState$Builder$Type<(T)>)>, arg1: $IRenderer$Type): T
public "initStateMachine"(): void
public "hasState"(arg0: string): boolean
public "getRootState"(): T
public static "createMultiblockDefault"<T extends $MachineState>(arg0: $Supplier$Type<($MachineState$Builder$Type<(T)>)>, arg1: $IRenderer$Type): T
get "rootState"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateMachine$Type<T> = ($StateMachine<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateMachine_<T> = $StateMachine$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $LDLRegister extends $Annotation {

 "name"(): string
 "priority"(): integer
 "group"(): string
 "modID"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $LDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LDLRegister$Type = ($LDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LDLRegister_ = $LDLRegister$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ParticleEngineAccessor" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleEngineAccessor {

 "invokeMakeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
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
declare module "packages/com/lowdragmc/mbd2/api/block/$ProxyPartBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockRendererProvider, $IBlockRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ProxyPartBlock extends $Block implements $EntityBlock, $IBlockRendererProvider {
static readonly "BLOCK": $ProxyPartBlock
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

constructor()

public "getRenderer"(arg0: $BlockState$Type): $IRenderer
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public static "replaceOriginalBlock"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer
public "getModelState"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProxyPartBlock$Type = ($ProxyPartBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProxyPartBlock_ = $ProxyPartBlock$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/block/$RotationState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $RotationState extends $Enum<($RotationState)> implements $Predicate<($Direction)> {
static readonly "ALL": $RotationState
static readonly "NONE": $RotationState
static readonly "Y_AXIS": $RotationState
static readonly "NON_Y_AXIS": $RotationState
readonly "defaultDirection": $Direction
readonly "property": $Optional<($DirectionProperty)>


public static "values"(): ($RotationState)[]
public "test"(arg0: $Direction$Type): boolean
public static "valueOf"(arg0: string): $RotationState
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Direction)>
public "negate"(): $Predicate<($Direction)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Direction)>
public static "isEqual"<T>(arg0: any): $Predicate<($Direction)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationState$Type = (("all") | ("y_axis") | ("non_y_axis") | ("none")) | ($RotationState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationState_ = $RotationState$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineStructureInvalidEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MachineStructureInvalidEvent extends $MachineEvent {
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineStructureInvalidEvent$Type = ($MachineStructureInvalidEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineStructureInvalidEvent_ = $MachineStructureInvalidEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/trait/$TraitDefinition" {
import {$IAutoPersistedSerializable, $IAutoPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IAutoPersistedSerializable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$IMachine, $IMachine$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMachine"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$MachineTraitPanel, $MachineTraitPanel$Type} from "packages/com/lowdragmc/mbd2/common/gui/editor/machine/$MachineTraitPanel"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ITrait, $ITrait$Type} from "packages/com/lowdragmc/mbd2/common/trait/$ITrait"

export class $TraitDefinition implements $IConfigurable, $IAutoPersistedSerializable {

constructor()

public "getName"(): string
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "setName"(arg0: string): void
public "getIcon"(): $IGuiTexture
public "allowMultiple"(): boolean
public "renderAfterWorldInTraitPanel"(arg0: $MachineTraitPanel$Type): void
public static "deserializeDefinition"(arg0: $CompoundTag$Type): $TraitDefinition
public static "serializeDefinition"(arg0: $TraitDefinition$Type): $CompoundTag
public "getBESRenderer"(arg0: $IMachine$Type): $IRenderer
public "createTrait"(arg0: $MBDMachine$Type): $ITrait
public "getTranslateKey"(): string
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getRegisterUI"(): $LDLRegister
set "priority"(value: integer)
get "priority"(): integer
get "icon"(): $IGuiTexture
get "translateKey"(): string
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraitDefinition$Type = ($TraitDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraitDefinition_ = $TraitDefinition$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourcePanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "clear"(): void
public "getResources"(): $Resources
public "isShow"(): boolean
public "initWidget"(): void
public "setGui"(gui: $ModularUI$Type): void
public "loadResource"(resources: $Resources$Type, merge: boolean): void
public "hide"(): void
public "getEditor"(): $Editor
public "getContainerMap"(): $Map<($Resource), ($ResourceContainer)>
public "rebuildResource"(resourceName: string): void
public "show"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "resources"(): $Resources
set "gui"(value: $ModularUI$Type)
get "editor"(): $Editor
get "containerMap"(): $Map<($Resource), ($ResourceContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcePanel$Type = ($ResourcePanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcePanel_ = $ResourcePanel$Type;
}}
declare module "packages/com/lowdragmc/photon/core/mixins/accessor/$MinecraftAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftAccessor {

}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$Type = ($MinecraftAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccessor_ = $MinecraftAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UIFactory<T> {
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>

constructor(uiFactoryId: $ResourceLocation$Type)

public static "register"(factory: $UIFactory$Type<(any)>): void
public "initClientUI"(serializedHolder: $FriendlyByteBuf$Type, windowId: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIFactory$Type<T> = ($UIFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIFactory_<T> = $UIFactory$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable" {
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"

export interface $DraggableScrollableWidgetGroup$IDraggable extends $DraggableScrollableWidgetGroup$ISelected {

 "canDragOutRange"(): boolean
 "startDrag"(mouseX: double, mouseY: double): void
 "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
 "endDrag"(mouseX: double, mouseY: double): void
 "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean
 "onUnSelected"(): void
 "onSelected"(): void

(): boolean
}

export namespace $DraggableScrollableWidgetGroup$IDraggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$IDraggable$Type = ($DraggableScrollableWidgetGroup$IDraggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$IDraggable_ = $DraggableScrollableWidgetGroup$IDraggable$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/item/$MBDMachineItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$MBDMachineBlock, $MBDMachineBlock$Type} from "packages/com/lowdragmc/mbd2/common/block/$MBDMachineBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemRendererProvider, $IItemRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IItemRendererProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDMachineItem extends $BlockItem implements $IItemRendererProvider {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $MBDMachineBlock$Type, arg1: $Item$Properties$Type)

public "getDefinition"(): $MBDMachineDefinition
public "getBlock"(): $MBDMachineBlock
public "getRenderer"(arg0: $ItemStack$Type): $IRenderer
get "definition"(): $MBDMachineDefinition
get "block"(): $MBDMachineBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineItem$Type = ($MBDMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineItem_ = $MBDMachineItem$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFluidStorage, $IFluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TankWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor()

public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getTooltipTexts"(): $List<($Component)>
public "initTemplate"(): void
public "getXEIChance"(): float
public "getXEIIngredients"(): $List<(any)>
public "setDrawHoverTips"(drawHoverTips: boolean): $TankWidget
public "setChangeListener"(changeListener: $Runnable$Type): $TankWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>): $TankWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $TankWidget
public "setXEIChance"(XEIChance: float): $TankWidget
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "getIngredientIO"(): $IngredientIO
public "detectAndSendChanges"(): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $TankWidget
public "getFullTooltipTexts"(): $List<($Component)>
public "getXEICurrentIngredient"(): any
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "setAllowClickFilled"(allowClickFilled: boolean): $TankWidget
public "getLastTankCapacity"(): long
public "setAllowClickDrained"(allowClickDrained: boolean): $TankWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidStorage$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidTransfer$Type, tank: integer): $TankWidget
public "getFluidTank"(): $IFluidTransfer
public "getLastFluidInTank"(): $FluidStack
public "getTank"(): integer
public "setShowAmount"(showAmount: boolean): $TankWidget
public "setFluid"(fluidStack: $FluidStack$Type, notify: boolean): $TankWidget
public "setFluid"(fluidStack: $FluidStack$Type): $TankWidget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setBackground"(background: $IGuiTexture$Type): $TankWidget
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getFluid"(): $FluidStack
public "self"(): $Widget
public "widget"(): $Widget
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "tooltipTexts"(): $List<($Component)>
get "xEIChance"(): float
get "xEIIngredients"(): $List<(any)>
set "drawHoverTips"(value: boolean)
set "changeListener"(value: $Runnable$Type)
set "onAddedTooltips"(value: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>)
set "ingredientIO"(value: $IngredientIO$Type)
set "xEIChance"(value: float)
get "ingredientIO"(): $IngredientIO
set "drawHoverOverlay"(value: boolean)
get "fullTooltipTexts"(): $List<($Component)>
get "xEICurrentIngredient"(): any
set "allowClickFilled"(value: boolean)
get "lastTankCapacity"(): long
set "allowClickDrained"(value: boolean)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "fluidTank"(value: $IFluidStorage$Type)
get "fluidTank"(): $IFluidTransfer
get "lastFluidInTank"(): $FluidStack
get "tank"(): integer
set "showAmount"(value: boolean)
set "fluid"(value: $FluidStack$Type)
set "background"(value: $IGuiTexture$Type)
get "fluid"(): $FluidStack
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankWidget$Type = ($TankWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankWidget_ = $TankWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/custom/$ICustomPortBehaviorDelegate" {
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PortData, $PortData$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortData"

export interface $ICustomPortBehaviorDelegate {

 "handle"(arg0: $List$Type<($PortEdge$Type)>): $List<($PortData)>

(arg0: $List$Type<($PortEdge$Type)>): $List<($PortData)>
}

export namespace $ICustomPortBehaviorDelegate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomPortBehaviorDelegate$Type = ($ICustomPortBehaviorDelegate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomPortBehaviorDelegate_ = $ICustomPortBehaviorDelegate$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCreativeTab" {
import {$ToggleObject, $ToggleObject$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ToggleCreativeTab extends $ToggleObject<($ResourceLocation)> {
static readonly "DEFAULT": $ResourceLocation

constructor()
constructor(arg0: boolean)
constructor(arg0: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: boolean)

public "getValue"(): $ResourceLocation
public "setValue"(arg0: $ResourceLocation$Type): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
get "value"(): $ResourceLocation
set "value"(value: $ResourceLocation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleCreativeTab$Type = ($ToggleCreativeTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleCreativeTab_ = $ToggleCreativeTab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ClickData {
readonly "button": integer
readonly "isShiftClick": boolean
readonly "isCtrlClick": boolean
readonly "isRemote": boolean

constructor()

public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $ClickData
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickData$Type = ($ClickData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickData_ = $ClickData$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TabContainer extends $WidgetGroup {
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "initTemplate"(): void
public "clearAllWidgets"(): void
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "serializeInnerNBT"(): $CompoundTag
public "removeTab"(tabButton: $TabButton$Type): void
public "switchTag"(tabWidget: $WidgetGroup$Type): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabContainer$Type = ($TabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabContainer_ = $TabContainer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IToggleConfigurable, $IToggleConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IToggleConfigurable"

export class $ToggleObject<T> implements $IToggleConfigurable {

constructor()

public "getValue"(): T
public static "of"<T>(arg0: boolean, arg1: T): $ToggleObject<(T)>
public "setValue"(arg0: T): void
public "isEnable"(): boolean
public static "ofDisabled"<T>(arg0: T): $ToggleObject<(T)>
public static "ofDisabled"<T>(): $ToggleObject<(T)>
public "setEnable"(arg0: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "value"(): T
set "value"(value: T)
get "enable"(): boolean
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleObject$Type<T> = ($ToggleObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleObject_<T> = $ToggleObject$Type<(T)>;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateMachineState$Builder" {
import {$CreateMachineState, $CreateMachineState$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateMachineState"
import {$IModelRenderer, $IModelRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/impl/$IModelRenderer"
import {$MachineState$Builder, $MachineState$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState$Builder"

export class $CreateMachineState$Builder extends $MachineState$Builder<($CreateMachineState)> {

constructor()

public "rotationRenderer"(arg0: $IModelRenderer$Type): $CreateMachineState$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateMachineState$Builder$Type = ($CreateMachineState$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateMachineState$Builder_ = $CreateMachineState$Builder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation" {
import {$FloatConsumer, $FloatConsumer$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatConsumer"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IEase, $IEase$Type} from "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Animation {

constructor()

public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "delay"(delay: long): $Animation
public "duration"(duration: long): $Animation
public "appendOnFinish"(onFinish: $Runnable$Type): $Animation
public "setWidget"(widget: $Widget$Type): $Animation
public "isFinish"(): boolean
public "getOnFinish"(): $Runnable
public "onUpdate"(onUpdate: $FloatConsumer$Type): $Animation
public "getWidget"(): $Widget
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "ease"(ease: $IEase$Type): $Animation
set "widget"(value: $Widget$Type)
get "finish"(): boolean
get "widget"(): $Widget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/geckolib/$Animation" {
import {$AnimationStage, $AnimationStage$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$AnimationStage"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$RawAnimation, $RawAnimation$Type} from "packages/software/bernie/geckolib/core/animation/$RawAnimation"

export class $Animation implements $IConfigurable, $ITagSerializable<($CompoundTag)> {

constructor()

public "getName"(): string
public "setName"(arg0: string): $Animation
public "setStages"(arg0: $List$Type<($AnimationStage$Type)>): $Animation
public "getStages"(): $List<($AnimationStage)>
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "toRawAnimation"(): $RawAnimation
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "stages"(value: $List$Type<($AnimationStage$Type)>)
get "stages"(): $List<($AnimationStage)>
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleRenderer" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$ToggleObject, $ToggleObject$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject"

export class $ToggleRenderer extends $ToggleObject<($IRenderer)> {

constructor()
constructor(arg0: boolean)
constructor(arg0: $IRenderer$Type)
constructor(arg0: $IRenderer$Type, arg1: boolean)

public "setValue"(arg0: $IRenderer$Type): void
set "value"(value: $IRenderer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleRenderer$Type = ($ToggleRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleRenderer_ = $ToggleRenderer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateKineticMachineDefinition$Builder" {
import {$ConfigKineticMachineSettings, $ConfigKineticMachineSettings$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings"
import {$MBDMachineDefinition$Builder, $MBDMachineDefinition$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$Builder"

export class $CreateKineticMachineDefinition$Builder extends $MBDMachineDefinition$Builder {


public "kineticMachineSettings"(arg0: $ConfigKineticMachineSettings$Type): $CreateKineticMachineDefinition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateKineticMachineDefinition$Builder$Type = ($CreateKineticMachineDefinition$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateKineticMachineDefinition$Builder_ = $CreateKineticMachineDefinition$Builder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter$ParameterAccessor" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ExposedParameter$ParameterAccessor extends $Enum<($ExposedParameter$ParameterAccessor)> {
static readonly "Get": $ExposedParameter$ParameterAccessor
static readonly "Set": $ExposedParameter$ParameterAccessor


public static "values"(): ($ExposedParameter$ParameterAccessor)[]
public static "valueOf"(name: string): $ExposedParameter$ParameterAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExposedParameter$ParameterAccessor$Type = (("set") | ("get")) | ($ExposedParameter$ParameterAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExposedParameter$ParameterAccessor_ = $ExposedParameter$ParameterAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$DraggableScrollableWidgetGroup$ScrollWheelDirection, $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ScrollWheelDirection"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $DraggableScrollableWidgetGroup extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setSize"(size: $Size$Type): void
public "setScrollYOffset"(scrollYOffset: integer): void
public "setYBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setYScrollBarWidth"(yBar: integer): $DraggableScrollableWidgetGroup
public "setScrollXOffset"(scrollXOffset: integer): void
public "computeMax"(): void
public "setXBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "getScrollYOffset"(): integer
public "isUseScissor"(): boolean
public "isDraggable"(): boolean
public "getScrollXOffset"(): integer
public "setUseScissor"(useScissor: boolean): $DraggableScrollableWidgetGroup
public "getMoveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
public "setScrollable"(scrollable: boolean): $DraggableScrollableWidgetGroup
public "isScrollable"(): boolean
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initTemplate"(): void
public "removeWidget"(widget: $Widget$Type): void
public "clearAllWidgets"(): void
public "serializeInnerNBT"(): $CompoundTag
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "setXScrollBarHeight"(xBar: integer): $DraggableScrollableWidgetGroup
public "getScrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
public "getWidgetBottomHeight"(): integer
public "setScrollWheelDirection"(scrollWheelDirection: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type): $DraggableScrollableWidgetGroup
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "setDraggable"(draggable: boolean): $DraggableScrollableWidgetGroup
public "setSelected"(widget: $Widget$Type): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setBackground"(background: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "size"(value: $Size$Type)
set "scrollYOffset"(value: integer)
set "yScrollBarWidth"(value: integer)
set "scrollXOffset"(value: integer)
get "scrollYOffset"(): integer
get "useScissor"(): boolean
get "draggable"(): boolean
get "scrollXOffset"(): integer
set "useScissor"(value: boolean)
get "moveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
set "scrollable"(value: boolean)
get "scrollable"(): boolean
set "xScrollBarHeight"(value: integer)
get "scrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
get "widgetBottomHeight"(): integer
set "scrollWheelDirection"(value: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type)
set "draggable"(value: boolean)
set "selected"(value: $Widget$Type)
set "background"(value: $IGuiTexture$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$Type = ($DraggableScrollableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup_ = $DraggableScrollableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS$RecipeBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MBDRecipeSchema$MBDRecipeJS, $MBDRecipeSchema$MBDRecipeJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS"

export interface $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder extends $Consumer<($MBDRecipeSchema$MBDRecipeJS)> {

 "accept"(arg0: $MBDRecipeSchema$MBDRecipeJS$Type): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<($MBDRecipeSchema$MBDRecipeJS)>

(arg0: $MBDRecipeSchema$MBDRecipeJS$Type): void
}

export namespace $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type = ($MBDRecipeSchema$MBDRecipeJS$RecipeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder_ = $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort" {
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$NodePort$IPushDataDelegate, $NodePort$IPushDataDelegate$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort$IPushDataDelegate"
import {$ICustomPortIODelegate, $ICustomPortIODelegate$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/custom/$ICustomPortIODelegate"
import {$PortData, $PortData$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NodePort {
static readonly "customPortIODelegateTable": $Table<($Class<(any)>), (string), ($ICustomPortIODelegate)>
static "EMPTY": $ICustomPortIODelegate
 "fieldName": string
 "owner": $BaseNode
 "fieldInfo": $Field
 "fieldOwner": any
 "portData": $PortData

constructor(owner: $BaseNode$Type, fieldName: string, portData: $PortData$Type)
constructor(owner: $BaseNode$Type, fieldOwner: any, fieldName: string, portData: $PortData$Type)

public "add"(edge: $PortEdge$Type): void
public "remove"(edge: $PortEdge$Type): void
public "getEdgeWithRemoteCustomIO"(): $List<($PortEdge)>
public "getCustomPortIOMethod"(): $ICustomPortIODelegate
public "getPushDataDelegates"(): $Map<($PortEdge), ($NodePort$IPushDataDelegate)>
public "resetToDefault"(): void
public "getEdges"(): $List<($PortEdge)>
public "PullData"(): void
public "PushData"(): void
public static "setFieldDefault"(fieldInfo: $Field$Type, fieldOwner: any): void
get "edgeWithRemoteCustomIO"(): $List<($PortEdge)>
get "customPortIOMethod"(): $ICustomPortIODelegate
get "pushDataDelegates"(): $Map<($PortEdge), ($NodePort$IPushDataDelegate)>
get "edges"(): $List<($PortEdge)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodePort$Type = ($NodePort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodePort_ = $NodePort$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineUIEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"

export class $MachineUIEvent extends $MachineEvent {
 "root": $WidgetGroup
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $WidgetGroup$Type)

public "getRoot"(): $WidgetGroup
public "setRoot"(arg0: $WidgetGroup$Type): void
public "getListenerList"(): $ListenerList
get "root"(): $WidgetGroup
set "root"(value: $WidgetGroup$Type)
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineUIEvent$Type = ($MachineUIEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineUIEvent_ = $MachineUIEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorBorderTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ColorBorderTexture extends $TransformTexture {
 "color": integer
 "border": integer
 "radiusLTInner": float
 "radiusLBInner": float
 "radiusRTInner": float
 "radiusRBInner": float
 "radiusLTOuter": float
 "radiusLBOuter": float
 "radiusRTOuter": float
 "radiusRBOuter": float

constructor(border: integer, color: $Color$Type)
constructor(border: integer, color: integer)
constructor()

public "setTopRadius"(radius: float): $ColorBorderTexture
public "setLeftRadiusInner"(radius: float): $ColorBorderTexture
public "setRightRadius"(radius: float): $ColorBorderTexture
public "setLeftRadiusOuter"(radius: float): $ColorBorderTexture
public "setTopRadiusInner"(radius: float): $ColorBorderTexture
public "setTopRadiusOuter"(radius: float): $ColorBorderTexture
public "setBottomRadius"(radius: float): $ColorBorderTexture
public "setLeftRadius"(radius: float): $ColorBorderTexture
public "setRadiusRBOuter"(radiusRBOuter: float): void
public "setRadiusRBInner"(radiusRBInner: float): void
public "setRadiusLTInner"(radiusLTInner: float): void
public "setRadiusRTOuter"(radiusRTOuter: float): void
public "setRadiusRTInner"(radiusRTInner: float): void
public "setRadiusLTOuter"(radiusLTOuter: float): void
public "setRadiusLBOuter"(radiusLBOuter: float): void
public "setRadiusLBInner"(radiusLBInner: float): void
public "setBorder"(border: integer): $ColorBorderTexture
public "setBottomRadiusOuter"(radius: float): $ColorBorderTexture
public "setRightRadiusOuter"(radius: float): $ColorBorderTexture
public "setRightRadiusInner"(radius: float): $ColorBorderTexture
public "setBottomRadiusInner"(radius: float): $ColorBorderTexture
public "setRadius"(radius: float): $ColorBorderTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "topRadius"(value: float)
set "leftRadiusInner"(value: float)
set "rightRadius"(value: float)
set "leftRadiusOuter"(value: float)
set "topRadiusInner"(value: float)
set "topRadiusOuter"(value: float)
set "bottomRadius"(value: float)
set "leftRadius"(value: float)
set "radiusRBOuter"(value: float)
set "radiusRBInner"(value: float)
set "radiusLTInner"(value: float)
set "radiusRTOuter"(value: float)
set "radiusRTInner"(value: float)
set "radiusLTOuter"(value: float)
set "radiusLBOuter"(value: float)
set "radiusLBInner"(value: float)
set "border"(value: integer)
set "bottomRadiusOuter"(value: float)
set "rightRadiusOuter"(value: float)
set "rightRadiusInner"(value: float)
set "bottomRadiusInner"(value: float)
set "radius"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorBorderTexture$Type = ($ColorBorderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorBorderTexture_ = $ColorBorderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$ISerializableRenderer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ILDLRegisterClient, $ILDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegisterClient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$IAutoPersistedSerializable, $IAutoPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IAutoPersistedSerializable"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ISerializableRenderer extends $IConfigurable, $IRenderer, $IAutoPersistedSerializable, $ILDLRegisterClient {

 "createPreview"(father: $ConfiguratorGroup$Type): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "initRenderer"(): void
 "reBakeCustomQuadsOffset"(): float
 "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
 "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
 "isRaw"(): boolean
 "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
 "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
 "isGui3d"(): boolean
 "useBlockLight"(stack: $ItemStack$Type): boolean
 "useAO"(): boolean
 "useAO"(state: $BlockState$Type): boolean
 "getParticleTexture"(): $TextureAtlasSprite
 "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
 "getViewDistance"(): integer
 "reBakeCustomQuads"(): boolean
 "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
 "hasTESR"(blockEntity: $BlockEntity$Type): boolean
 "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
 "registerEvent"(): void
 "deserializeNBT"(tag: $CompoundTag$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
 "getRegisterUI"(): $LDLRegister
 "getRegisterUIClient"(): $LDLRegisterClient
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
}

export namespace $ISerializableRenderer {
function serializeWrapper(renderer: $ISerializableRenderer$Type): $CompoundTag
function deserializeWrapper(tag: $CompoundTag$Type): $ISerializableRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializableRenderer$Type = ($ISerializableRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISerializableRenderer_ = $ISerializableRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$BlockRenderDispatcher, $BlockRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PositionedRect, $PositionedRect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$PositionedRect"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ISceneEntityRenderHook, $ISceneEntityRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldSceneRenderer {
readonly "world": $Level
readonly "renderedBlocksMap": $Map<($Collection<($BlockPos)>), ($ISceneBlockRenderHook)>

constructor(world: $Level$Type)

public "setOnLookingAt"(onLookingAt: $Consumer$Type<($BlockHitResult$Type)>): $WorldSceneRenderer
public "setBeforeWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "getPositionRectRevert"(windowX: integer, windowY: integer, windowWidth: integer, windowHeight: integer): $PositionedRect
public "setSceneEntityRenderHook"(sceneEntityRenderHook: $ISceneEntityRenderHook$Type): void
public static "setDefaultRenderLayerState"(layer: $RenderType$Type): void
public "setEndBatchLast"(endBatchLast: boolean): void
public "useCacheBuffer"(useCache: boolean): $WorldSceneRenderer
public "setCameraOrtho"(x: float, y: float, z: float): void
public "setCameraOrtho"(minX: float, maxX: float, minY: float, maxY: float, minZ: float, maxZ: float): void
public "unProject"(mouseX: integer, mouseY: integer): $Vector3f
public "unProject"(mouseX: integer, mouseY: integer, checkDepth: boolean): $Vector3f
public "setCameraLookAt"(lookAt: $Vector3f$Type, radius: double, rotationPitch: double, rotationYaw: double): void
public "setCameraLookAt"(eyePos: $Vector3f$Type, lookAt: $Vector3f$Type, worldUp: $Vector3f$Type): void
public "useOrtho"(ortho: boolean): $WorldSceneRenderer
public "setClearColor"(clearColor: integer): void
public "needCompileCache"(): $WorldSceneRenderer
public "getEyePos"(): $Vector3f
public "setBeforeBatchEnd"(beforeBatchEnd: $BiConsumer$Type<($MultiBufferSource$Type), (float)>): void
public "deleteCacheBuffer"(): $WorldSceneRenderer
public "addRenderedBlocks"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $WorldSceneRenderer
public "getLastTraceResult"(): $BlockHitResult
public "getCompileProgress"(): double
public "isUseCache"(): boolean
public "isCompiling"(): boolean
public "project"(pos: $Vector3f$Type): $Vector3f
public "render"(poseStack: $PoseStack$Type, x: float, y: float, width: float, height: float, mouseX: integer, mouseY: integer): void
public "getFov"(): float
public "getParticleManager"(): $ParticleManager
public "setParticleManager"(particleManager: $ParticleManager$Type): $WorldSceneRenderer
public "setAfterWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "rayTrace"(hitPos: $Vector3f$Type): $BlockHitResult
public "getLookAt"(): $Vector3f
public "getWorldUp"(): $Vector3f
public "setBlocked"(blocked: $Set$Type<($BlockPos$Type)>): $WorldSceneRenderer
public "getPositionedRect"(x: integer, y: integer, width: integer, height: integer): $PositionedRect
public "setFov"(fov: float): void
public "isEndBatchLast"(): boolean
public "getLastHit"(): $Vector3f
public static "renderBlocksForge"(blockRenderDispatcher: $BlockRenderDispatcher$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $BlockAndTintGetter$Type, poseStack: $PoseStack$Type, consumer: $VertexConsumer$Type, random: $RandomSource$Type, renderType: $RenderType$Type): void
public static "canRenderInLayer"(state: $BlockState$Type, renderType: $RenderType$Type): boolean
set "onLookingAt"(value: $Consumer$Type<($BlockHitResult$Type)>)
set "beforeWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "sceneEntityRenderHook"(value: $ISceneEntityRenderHook$Type)
set "defaultRenderLayerState"(value: $RenderType$Type)
set "endBatchLast"(value: boolean)
set "clearColor"(value: integer)
get "eyePos"(): $Vector3f
set "beforeBatchEnd"(value: $BiConsumer$Type<($MultiBufferSource$Type), (float)>)
get "lastTraceResult"(): $BlockHitResult
get "compileProgress"(): double
get "useCache"(): boolean
get "compiling"(): boolean
get "fov"(): float
get "particleManager"(): $ParticleManager
set "particleManager"(value: $ParticleManager$Type)
set "afterWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
get "lookAt"(): $Vector3f
get "worldUp"(): $Vector3f
set "blocked"(value: $Set$Type<($BlockPos$Type)>)
set "fov"(value: float)
get "endBatchLast"(): boolean
get "lastHit"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$Type = ($WorldSceneRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer_ = $WorldSceneRenderer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineOnRecipeWorkingEventJS" {
import {$MachineOnRecipeWorkingEvent, $MachineOnRecipeWorkingEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOnRecipeWorkingEvent"
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MBDMachineEvents$MachineOnRecipeWorkingEventJS extends $MBDMachineEvents$MachineEventJS<($MachineOnRecipeWorkingEvent)> {
readonly "event": E

constructor(arg0: $MachineOnRecipeWorkingEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineOnRecipeWorkingEventJS$Type = ($MBDMachineEvents$MachineOnRecipeWorkingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineOnRecipeWorkingEventJS_ = $MBDMachineEvents$MachineOnRecipeWorkingEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/geckolib/$StaticAnimatable" {
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"

export class $StaticAnimatable implements $GeoAnimatable {

constructor()

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getTick"(arg0: any): double
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
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
export type $StaticAnimatable$Type = ($StaticAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaticAnimatable_ = $StaticAnimatable$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $ContentModifier implements $IConfigurable {
static readonly "IDENTITY": $ContentModifier

constructor(arg0: double, arg1: double)

public "apply"(arg0: number): number
public static "of"(arg0: double, arg1: double): $ContentModifier
public "merge"(arg0: $ContentModifier$Type): $ContentModifier
public static "identity"(): $ContentModifier
public "isIdentity"(): boolean
public static "multiplier"(arg0: double): $ContentModifier
public "getMultiplier"(): double
public "setMultiplier"(arg0: double): void
public static "addition"(arg0: double): $ContentModifier
public "getAddition"(): double
public "setAddition"(arg0: double): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentModifier$Type = ($ContentModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentModifier_ = $ContentModifier$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineOnLoadEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineOnLoadEvent, $MachineOnLoadEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOnLoadEvent"

export class $MBDMachineEvents$MachineOnLoadEventJS extends $MBDMachineEvents$MachineEventJS<($MachineOnLoadEvent)> {
readonly "event": E

constructor(arg0: $MachineOnLoadEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineOnLoadEventJS$Type = ($MBDMachineEvents$MachineOnLoadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineOnLoadEventJS_ = $MBDMachineEvents$MachineOnLoadEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $ITypedPayload<T> {

 "isPrimitive"(): boolean
 "getType"(): byte
 "getPayload"(): T
 "writePayload"(arg0: $FriendlyByteBuf$Type): void
 "readPayload"(arg0: $FriendlyByteBuf$Type): void
 "serializeNBT"(): $Tag
 "deserializeNBT"(arg0: $Tag$Type): void
 "copyForManaged"(value: any): any
}

export namespace $ITypedPayload {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedPayload$Type<T> = ($ITypedPayload<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedPayload_<T> = $ITypedPayload$Type<(T)>;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineStructureFormedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MachineStructureFormedEvent extends $MachineEvent {
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineStructureFormedEvent$Type = ($MachineStructureFormedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineStructureFormedEvent_ = $MachineStructureFormedEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory$ItemAccess" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $ItemUIJSFactory$ItemAccess extends $Record {

constructor(hand: $InteractionHand$Type, uiName: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "uiName"(): string
public "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUIJSFactory$ItemAccess$Type = ($ItemUIJSFactory$ItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUIJSFactory$ItemAccess_ = $ItemUIJSFactory$ItemAccess$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType$UICreator" {
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export interface $MBDRecipeType$UICreator {

 "create"(arg0: $MBDRecipe$Type): $WidgetGroup

(arg0: $MBDRecipe$Type): $WidgetGroup
}

export namespace $MBDRecipeType$UICreator {
const DEFAULT: $MBDRecipeType$UICreator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeType$UICreator$Type = ($MBDRecipeType$UICreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeType$UICreator_ = $MBDRecipeType$UICreator$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/block/$MBDMachineBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RotationState, $RotationState$Type} from "packages/com/lowdragmc/mbd2/api/block/$RotationState"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockRendererProvider, $IBlockRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $MBDMachineBlock extends $Block implements $EntityBlock, $IBlockRendererProvider, $SimpleWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $MBDMachineDefinition$Type)

public "getDefinition"(): $MBDMachineDefinition
public "getRotationState"(): $RotationState
public "getRenderer"(arg0: $BlockState$Type): $IRenderer
public "getLightMap"(arg0: $BlockAndTintGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): integer
public "getModelState"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ModelState
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getMachine"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MBDMachine)>
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
/**
 * 
 * @deprecated
 */
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getFrontFacing"(arg0: $BlockState$Type): $Optional<($Direction)>
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "definition"(): $MBDMachineDefinition
get "rotationState"(): $RotationState
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineBlock$Type = ($MBDMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineBlock_ = $MBDMachineBlock$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineCustomDataUpdateEvent" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineCustomDataUpdateEvent extends $MachineEvent {
readonly "oldValue": $CompoundTag
readonly "newValue": $CompoundTag
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type, arg1: $CompoundTag$Type, arg2: $CompoundTag$Type)
constructor()

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineCustomDataUpdateEvent$Type = ($MachineCustomDataUpdateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineCustomDataUpdateEvent_ = $MachineCustomDataUpdateEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/forge/$ItemTransferHelperImpl" {
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ItemTransferHelper, $ItemTransferHelper$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$ItemTransferHelper"

export class $ItemTransferHelperImpl extends $ItemTransferHelper {

constructor()

public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "toItemTransfer"(handler: $IItemHandler$Type): $IItemTransfer
public static "insertItem"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertItem"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "toItemHandler"(itemTransfer: $IItemTransfer$Type): $IItemHandler
public static "insertToEmpty"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertToEmpty"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransferHelperImpl$Type = ($ItemTransferHelperImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransferHelperImpl_ = $ItemTransferHelperImpl$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $IO extends $Enum<($IO)> {
static readonly "IN": $IO
static readonly "OUT": $IO
static readonly "BOTH": $IO
static readonly "NONE": $IO
readonly "name": string
readonly "icon": $IGuiTexture


public "getName"(): string
public static "values"(): ($IO)[]
public static "valueOf"(arg0: string): $IO
public "getTooltip"(): string
public "getIcon"(): $IGuiTexture
public "support"(arg0: $IO$Type): boolean
get "name"(): string
get "tooltip"(): string
get "icon"(): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IO$Type = (("in") | ("none") | ("out") | ("both")) | ($IO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IO_ = $IO$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TextTexture$TextType, $TextTexture$TextType$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextTexture extends $TransformTexture {
 "text": string
 "color": integer
 "backgroundColor": integer
 "width": integer
 "rollSpeed": float
 "dropShadow": boolean
 "type": $TextTexture$TextType
 "supplier": $Supplier<(string)>

constructor(text: $Supplier$Type<(string)>)
constructor(text: string)
constructor(text: string, color: integer)
constructor()

public "setColor"(color: integer): $TextTexture
public "setType"(type: $TextTexture$TextType$Type): $TextTexture
public "setWidth"(width: integer): $TextTexture
public "updateText"(text: string): void
public "setRollSpeed"(rollSpeed: float): void
public "setDropShadow"(dropShadow: boolean): $TextTexture
public "setSupplier"(supplier: $Supplier$Type<(string)>): $TextTexture
public "setBackgroundColor"(color: integer): $TextTexture
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "type"(value: $TextTexture$TextType$Type)
set "width"(value: integer)
set "rollSpeed"(value: float)
set "dropShadow"(value: boolean)
set "supplier"(value: $Supplier$Type<(string)>)
set "backgroundColor"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$Type = ($TextTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture_ = $TextTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextBoxWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextBoxWidget extends $Widget implements $IConfigurableWidget {
readonly "content": $List<(string)>
 "space": integer
 "fontSize": integer
 "fontColor": integer
 "isShadow": boolean
 "isCenter": boolean

constructor()
constructor(x: integer, y: integer, width: integer, content: $List$Type<(string)>)

public "setSize"(size: $Size$Type): void
public "setShadow"(shadow: boolean): $TextBoxWidget
public "initTemplate"(): void
public "handleDragging"(dragging: any): boolean
public "setFontSize"(fontSize: integer): $TextBoxWidget
public "setCenter"(center: boolean): $TextBoxWidget
public "getMaxContentWidth"(): integer
public "setFontColor"(fontColor: integer): $TextBoxWidget
public "setContent"(content: $List$Type<(string)>): $TextBoxWidget
public "setSpace"(space: integer): $TextBoxWidget
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "widget"(): $Widget
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "size"(value: $Size$Type)
set "shadow"(value: boolean)
set "fontSize"(value: integer)
set "center"(value: boolean)
get "maxContentWidth"(): integer
set "fontColor"(value: integer)
set "content"(value: $List$Type<(string)>)
set "space"(value: integer)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBoxWidget$Type = ($TextBoxWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBoxWidget_ = $TextBoxWidget$Type;
}}
declare module "packages/com/lowdragmc/mbd2/core/mixins/$LevelRendererAccessor" {
import {$RenderBuffers, $RenderBuffers$Type} from "packages/net/minecraft/client/renderer/$RenderBuffers"

export interface $LevelRendererAccessor {

 "getRenderBuffers"(): $RenderBuffers

(): $RenderBuffers
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$RecipeCondition" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeLogic, $RecipeLogic$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export class $RecipeCondition implements $IConfigurable {

constructor()

public "test"(arg0: $MBDRecipe$Type, arg1: $RecipeLogic$Type): boolean
public "getType"(): string
public "copy"(): $RecipeCondition
public static "create"(arg0: $Class$Type<(any)>): $RecipeCondition
public "serialize"(): $JsonObject
public "deserialize"(arg0: $JsonObject$Type): $RecipeCondition
public "isReverse"(): boolean
public "isOr"(): boolean
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getTooltips"(): $Component
public "getIcon"(): $IGuiTexture
public "fromNBT"(arg0: $CompoundTag$Type): $RecipeCondition
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $RecipeCondition
public "getTranslationKey"(): string
public "setReverse"(arg0: boolean): $RecipeCondition
public "toNBT"(): $CompoundTag
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "type"(): string
get "reverse"(): boolean
get "or"(): boolean
get "tooltips"(): $Component
get "icon"(): $IGuiTexture
get "translationKey"(): string
set "reverse"(value: boolean)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCondition$Type = ($RecipeCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCondition_ = $RecipeCondition$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ScrollWheelDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DraggableScrollableWidgetGroup$ScrollWheelDirection extends $Enum<($DraggableScrollableWidgetGroup$ScrollWheelDirection)> {
static readonly "VERTICAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection
static readonly "HORIZONTAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection


public static "values"(): ($DraggableScrollableWidgetGroup$ScrollWheelDirection)[]
public static "valueOf"(name: string): $DraggableScrollableWidgetGroup$ScrollWheelDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type = (("horizontal") | ("vertical")) | ($DraggableScrollableWidgetGroup$ScrollWheelDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$ScrollWheelDirection_ = $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineUIEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineUIEvent, $MachineUIEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineUIEvent"

export class $MBDMachineEvents$MachineUIEventJS extends $MBDMachineEvents$MachineEventJS<($MachineUIEvent)> {
readonly "event": E

constructor(arg0: $MachineUIEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineUIEventJS$Type = ($MBDMachineEvents$MachineUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineUIEventJS_ = $MBDMachineEvents$MachineUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOnLoadEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MachineOnLoadEvent extends $MachineEvent {
readonly "machine": $MBDMachine

constructor(arg0: $MBDMachine$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineOnLoadEvent$Type = ($MachineOnLoadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineOnLoadEvent_ = $MachineOnLoadEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$BaseNode$NodeFieldInformation, $BaseNode$NodeFieldInformation$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode$NodeFieldInformation"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Stack, $Stack$Type} from "packages/java/util/$Stack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$NodePort, $NodePort$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort"
import {$BaseNode$PortUpdate, $BaseNode$PortUpdate$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode$PortUpdate"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$NodePortContainer$NodeInputPortContainer, $NodePortContainer$NodeInputPortContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePortContainer$NodeInputPortContainer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$NodePortContainer$NodeOutputPortContainer, $NodePortContainer$NodeOutputPortContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePortContainer$NodeOutputPortContainer"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$BaseGraph, $BaseGraph$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph"
import {$PortData, $PortData$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseNode implements $IPersistedSerializable, $ILDLRegister, $IConfigurable {
 "position": $Position
 "expanded": boolean
 "canBeRemoved": boolean
readonly "inputPorts": $NodePortContainer$NodeInputPortContainer
readonly "outputPorts": $NodePortContainer$NodeOutputPortContainer
 "onProcessed": $Runnable
 "onAfterEdgeConnected": $Consumer<($PortEdge)>
 "onAfterEdgeDisconnected": $Consumer<($PortEdge)>
 "onPortsUpdated": $Consumer<(string)>


public "initialize"(graph: $BaseGraph$Type): void
public "copy"(): $BaseNode
public "getPort"(fieldName: string): $NodePort
public "getPort"(fieldName: string, identifier: string): $NodePort
public "getDisplayName"(): string
public "getPosition"(): $Position
public "getMinWidth"(): integer
public "setDisplayName"(displayName: string): void
public "newGuid"(graph: $BaseGraph$Type): void
public "updatePortsForField"(fieldName: string): boolean
public "updatePortsForField"(fieldName: string, sendPortUpdatedEvent: boolean): boolean
public "UpdateAllPortsLocal"(): boolean
public "updatePortsForFieldLocal"(fieldName: string, sendPortUpdatedEvent: boolean): boolean
public "updatePortsForFieldLocal"(fieldName: string): boolean
public "getOnAfterEdgeConnected"(): $Consumer<($PortEdge)>
public "getOnAfterEdgeDisconnected"(): $Consumer<($PortEdge)>
public "disableInternal"(): void
public "getAllFields"(): ($Field)[]
public static "createFromType"<T extends $BaseNode>(nodeType: $Class$Type<(T)>, position: $Position$Type): T
public "destroyInternal"(): void
public "getAllMethods"(): ($Method)[]
public static "createFromTag"(tag: $CompoundTag$Type): $BaseNode
public "InitializePorts"(): void
public "onEdgeConnected"(edge: $PortEdge$Type): void
public "resetNode"(): void
public "addPort"(input: boolean, fieldName: string, portData: $PortData$Type): void
public "onEdgeDisconnected"(edge: $PortEdge$Type): void
public "updateAllPorts"(): boolean
public "onProcess"(): void
public "isFieldInput"(fieldName: string): boolean
public "removePort"(input: boolean, port: $NodePort$Type): void
public "removePort"(input: boolean, fieldName: string): void
public "getAllEdges"(): $List<($PortEdge)>
public "getInputPorts"(): $NodePortContainer$NodeInputPortContainer
public "getTitleColor"(): integer
public "getComputeOrder"(): integer
public "getOnProcessed"(): $Runnable
public "getAllPorts"(): $List<($NodePort)>
public "getOutputPorts"(): $NodePortContainer$NodeOutputPortContainer
public "getNodeFields"(): $Map<(string), ($BaseNode$NodeFieldInformation)>
public "getInputNodes"(): $List<($BaseNode)>
public "findInDependencies"(condition: $Predicate$Type<($BaseNode$Type)>): $BaseNode
public "GetOutputNodes"(): $List<($BaseNode)>
public "isExpanded"(): boolean
public "isCanProcess"(): boolean
public "isCanBeRemoved"(): boolean
public "getGUID"(): string
public "getOnPortsUpdated"(): $Consumer<(string)>
public "getFieldsToUpdate"(): $Stack<($BaseNode$PortUpdate)>
public "setCanBeRemoved"(canBeRemoved: boolean): void
public "setExpanded"(expanded: boolean): void
public "getUpdatedFields"(): $HashSet<($BaseNode$PortUpdate)>
public "setPosition"(position: $Position$Type): void
public "getGraph"(): $BaseGraph
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
get "displayName"(): string
get "position"(): $Position
get "minWidth"(): integer
set "displayName"(value: string)
get "onAfterEdgeConnected"(): $Consumer<($PortEdge)>
get "onAfterEdgeDisconnected"(): $Consumer<($PortEdge)>
get "allFields"(): ($Field)[]
get "allMethods"(): ($Method)[]
get "allEdges"(): $List<($PortEdge)>
get "inputPorts"(): $NodePortContainer$NodeInputPortContainer
get "titleColor"(): integer
get "computeOrder"(): integer
get "onProcessed"(): $Runnable
get "allPorts"(): $List<($NodePort)>
get "outputPorts"(): $NodePortContainer$NodeOutputPortContainer
get "nodeFields"(): $Map<(string), ($BaseNode$NodeFieldInformation)>
get "inputNodes"(): $List<($BaseNode)>
get "expanded"(): boolean
get "canProcess"(): boolean
get "canBeRemoved"(): boolean
get "gUID"(): string
get "onPortsUpdated"(): $Consumer<(string)>
get "fieldsToUpdate"(): $Stack<($BaseNode$PortUpdate)>
set "canBeRemoved"(value: boolean)
set "expanded"(value: boolean)
get "updatedFields"(): $HashSet<($BaseNode$PortUpdate)>
set "position"(value: $Position$Type)
get "graph"(): $BaseGraph
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseNode$Type = ($BaseNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseNode_ = $BaseNode$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld" {
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
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $DummyWorld extends $Level {
 "level": $WeakReference<($Level)>
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

constructor(level: $Level$Type)

public "getLevel"(): $Level
public "getChunkSource"(): $ChunkSource
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "getScoreboard"(): $Scoreboard
public "registryAccess"(): $RegistryAccess
public "playSound"(pPlayer: $Player$Type, pX: double, pY: double, pZ: double, pSound: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "addParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "gameEvent"(event: $GameEvent$Type, position: $Vec3$Type, context: $GameEvent$Context$Type): void
public "getBlockState"(x: integer, y: integer, z: integer): $BlockState
public "destroyBlockProgress"(breakerId: integer, pos: $BlockPos$Type, progress: integer): void
public "setMapData"(pMapId: string, pData: $MapItemSavedData$Type): void
public "getFreeMapId"(): integer
public "getMapData"(mapName: string): $MapItemSavedData
public "setBlock"(pPos: $BlockPos$Type, pState: $BlockState$Type, pFlags: integer, pRecursionLeft: integer): boolean
public "sendBlockUpdated"(pos: $BlockPos$Type, oldState: $BlockState$Type, newState: $BlockState$Type, flags: integer): void
public "getLightEngine"(): $LevelLightEngine
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, sound: $Holder$Type<($SoundEvent$Type)>, source: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, soundEvent: $SoundEvent$Type, soundSource: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSound"(pPlayer: $Player$Type, pEntity: $Entity$Type, pEvent: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "playSeededSound"(player: $Player$Type, entity: $Entity$Type, sound: $Holder$Type<($SoundEvent$Type)>, category: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, ignoreRange: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addParticle"(particleData: $ParticleOptions$Type, forceAlwaysRender: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "isLoaded"(p_195588_1_: $BlockPos$Type): boolean
public "gatherChunkSourceStats"(): string
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "getEntity"(id: integer): $Entity
public "canSeeSky"(pos: $BlockPos$Type): boolean
public "players"(): $List<(any)>
public "getRecipeManager"(): $RecipeManager
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(pEntity: $Entity$Type, pEvent: $GameEvent$Type, pPos: $BlockPos$Type): void
public "getUncachedNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getRawBrightness"(pos: $BlockPos$Type, p_226659_2_: integer): integer
public "getBrightness"(pLightType: $LightLayer$Type, pBlockPos: $BlockPos$Type): integer
public "getShade"(direction: $Direction$Type, b: boolean): float
public "getParticleManager"(): $ParticleManager
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "getAsClientWorld"(): $Supplier<($ClientLevel)>
public "levelEvent"(pPlayer: $Player$Type, pType: integer, pPos: $BlockPos$Type, pData: integer): void
public "getBlockState"(pPos: $BlockPos$Type): $BlockState
public "enabledFeatures"(): $FeatureFlagSet
public "getBlockEntity"(pPos: $BlockPos$Type): $BlockEntity
public "getBiome"(pPos: $BlockPos$Type): $Holder<($Biome)>
public "getBiomeManager"(): $BiomeManager
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "level"(): $Level
get "chunkSource"(): $ChunkSource
get "scoreboard"(): $Scoreboard
get "freeMapId"(): integer
get "lightEngine"(): $LevelLightEngine
set "blockEntity"(value: $BlockEntity$Type)
get "recipeManager"(): $RecipeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "particleManager"(): $ParticleManager
set "particleManager"(value: $ParticleManager$Type)
get "asClientWorld"(): $Supplier<($ClientLevel)>
get "biomeManager"(): $BiomeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyWorld$Type = ($DummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyWorld_ = $DummyWorld$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineEvents" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$BaseGraph, $BaseGraph$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$MachineEventGraphProcessor, $MachineEventGraphProcessor$Type} from "packages/com/lowdragmc/mbd2/common/graphprocessor/$MachineEventGraphProcessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigMachineEvents implements $IConfigurable, $IPersistedSerializable {
readonly "machineEvents": $Map<(string), ($Class<(any)>)>
readonly "eventGraphs": $Map<($Class<(any)>), ($BaseGraph)>

constructor()

public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getMachineEvents"(): $Map<(string), ($Class<(any)>)>
public "getEventGraphs"(): $Map<($Class<(any)>), ($BaseGraph)>
public "getProcessorCache"(): $Map<($Class<(any)>), ($MachineEventGraphProcessor)>
public "postGraphEvent"(arg0: $MachineEvent$Type): void
public "registerEventGroup"(arg0: string): $ConfigMachineEvents
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "machineEvents"(): $Map<(string), ($Class<(any)>)>
get "eventGraphs"(): $Map<($Class<(any)>), ($BaseGraph)>
get "processorCache"(): $Map<($Class<(any)>), ($MachineEventGraphProcessor)>
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMachineEvents$Type = ($ConfigMachineEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMachineEvents_ = $ConfigMachineEvents$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged" {
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IManaged {

 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "getSyncStorage"(): $IManagedStorage
 "onChanged"(): void
 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
 "getFieldHolder"(): $ManagedFieldHolder
 "markDirty"(name: string): void
}

export namespace $IManaged {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManaged$Type = ($IManaged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManaged_ = $IManaged$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOnRecipeWorkingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineOnRecipeWorkingEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe
readonly "progress": integer
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type, arg2: integer)

public "getRecipe"(): $MBDRecipe
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getProgress"(): integer
get "recipe"(): $MBDRecipe
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "progress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineOnRecipeWorkingEvent$Type = ($MachineOnRecipeWorkingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineOnRecipeWorkingEvent_ = $MachineOnRecipeWorkingEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/processor/$TriggerProcessor" {
import {$BaseGraph, $BaseGraph$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph"
import {$GraphProcessor, $GraphProcessor$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/processor/$GraphProcessor"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $TriggerProcessor extends $GraphProcessor {

constructor(graph: $BaseGraph$Type)

public "iterator"(): $Iterator<($BaseNode)>
public "updateComputeOrder"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriggerProcessor$Type = ($TriggerProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriggerProcessor_ = $TriggerProcessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $TreeNode<T, K> {
readonly "dimension": integer

constructor(dimension: integer, key: T)

public "toString"(): string
public "getKey"(): T
public "getContent"(): K
public "getChildren"(): $List<($TreeNode<(T), (K)>)>
public "isLeaf"(): boolean
public "getChild"(key: T): $TreeNode<(T), (K)>
public "removeChild"(key: T): void
public "setValid"(valid: $Predicate$Type<($TreeNode$Type<(T), (K)>)>): $TreeNode<(T), (K)>
public "getOrCreateChild"(childKey: T): $TreeNode<(T), (K)>
public "createChild"(childKey: T): $TreeNode<(T), (K)>
public "addContent"(key: T, content: K): void
get "key"(): T
get "content"(): K
get "children"(): $List<($TreeNode<(T), (K)>)>
get "leaf"(): boolean
set "valid"(value: $Predicate$Type<($TreeNode$Type<(T), (K)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeNode$Type<T, K> = ($TreeNode<(T), (K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeNode_<T, K> = $TreeNode$Type<(T), (K)>;
}}
declare module "packages/com/lowdragmc/mbd2/common/trait/$CapabilityIO" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export class $CapabilityIO {

constructor()

public "getInternal"(): $IO
public "getIO"(arg0: $Direction$Type, arg1: $Direction$Type): $IO
public "setTopIO"(arg0: $IO$Type): void
public "setBottomIO"(arg0: $IO$Type): void
public "getBottomIO"(): $IO
public "getLeftIO"(): $IO
public "getRightIO"(): $IO
public "setFrontIO"(arg0: $IO$Type): void
public "getFrontIO"(): $IO
public "setInternal"(arg0: $IO$Type): void
public "setRightIO"(arg0: $IO$Type): void
public "getTopIO"(): $IO
public "setLeftIO"(arg0: $IO$Type): void
public "getBackIO"(): $IO
public "setBackIO"(arg0: $IO$Type): void
get "internal"(): $IO
set "topIO"(value: $IO$Type)
set "bottomIO"(value: $IO$Type)
get "bottomIO"(): $IO
get "leftIO"(): $IO
get "rightIO"(): $IO
set "frontIO"(value: $IO$Type)
get "frontIO"(): $IO
set "internal"(value: $IO$Type)
set "rightIO"(value: $IO$Type)
get "topIO"(): $IO
set "leftIO"(value: $IO$Type)
get "backIO"(): $IO
set "backIO"(value: $IO$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityIO$Type = ($CapabilityIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityIO_ = $CapabilityIO$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph$GraphChanges" {
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"

export class $BaseGraph$GraphChanges {
 "removedEdge": $PortEdge
 "addedEdge": $PortEdge
 "removedNode": $BaseNode
 "addedNode": $BaseNode
 "nodeChanged": $BaseNode

constructor()

public "removedNode"(removedNode: $BaseNode$Type): $BaseGraph$GraphChanges
public "addedNode"(addedNode: $BaseNode$Type): $BaseGraph$GraphChanges
public "addedEdge"(addedEdge: $PortEdge$Type): $BaseGraph$GraphChanges
public "removedEdge"(removedEdge: $PortEdge$Type): $BaseGraph$GraphChanges
public "nodeChanged"(nodeChanged: $BaseNode$Type): $BaseGraph$GraphChanges
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGraph$GraphChanges$Type = ($BaseGraph$GraphChanges);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGraph$GraphChanges_ = $BaseGraph$GraphChanges$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/custom/$ICustomPortIODelegate" {
import {$PortEdge, $PortEdge$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NodePort, $NodePort$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort"

export interface $ICustomPortIODelegate {

 "handle"(arg0: $BaseNode$Type, arg1: $List$Type<($PortEdge$Type)>, arg2: $NodePort$Type): void

(arg0: $BaseNode$Type, arg1: $List$Type<($PortEdge$Type)>, arg2: $NodePort$Type): void
}

export namespace $ICustomPortIODelegate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomPortIODelegate$Type = ($ICustomPortIODelegate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomPortIODelegate_ = $ICustomPortIODelegate$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemTransfer {

 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "getSlots"(): integer
 "onContentsChanged"(): void
 "createSnapshot"(): any
 "restoreFromSnapshot"(arg0: any): void
 "setStackInSlot"(index: integer, stack: $ItemStack$Type): void
}

export namespace $IItemTransfer {
const EMPTY: $IItemTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTransfer$Type = ($IItemTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTransfer_ = $IItemTransfer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeModifyEvent$Before" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineRecipeModifyEvent, $MachineRecipeModifyEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeModifyEvent"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export class $MachineRecipeModifyEvent$Before extends $MachineRecipeModifyEvent {
 "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipeModifyEvent$Before$Type = ($MachineRecipeModifyEvent$Before);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRecipeModifyEvent$Before_ = $MachineRecipeModifyEvent$Before$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor" {
import {$DialogWidget, $DialogWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget"
import {$ToolPanel, $ToolPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$StringTabContainer, $StringTabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$MenuPanel, $MenuPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor$HistoryItem, $Editor$HistoryItem$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor$HistoryItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$MenuWidget, $MenuWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget"

export class $Editor extends $WidgetGroup implements $ILDLRegister {
static "INSTANCE": $Editor
readonly "widgets": $List<($Widget)>

constructor(modID: string)
constructor(workSpace: $File$Type)

public "askToSaveProject"(result: $BooleanConsumer$Type): void
public "addAutoHistory"(name: string, source: any): void
public "saveAsProject"(result: $BooleanConsumer$Type): void
public "setCopy"(copyType: string, copied: any): void
public "ifCopiedPresent"(copyType: string, consumer: $Consumer$Type<(any)>): void
public "jumpToHistory"(historyItem: $Editor$HistoryItem$Type): void
public "saveProject"(result: $BooleanConsumer$Type): void
public "addRawHistory"(name: string, date: $CompoundTag$Type, source: any): void
public "addRawHistory"(name: string, date: $CompoundTag$Type): void
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "openDialog"(dialog: $DialogWidget$Type): $DialogWidget
public "openMenu"<T, C>(posX: double, posY: double, menuNode: $TreeNode$Type<(T), (C)>): $MenuWidget<(T), (C)>
public "openMenu"(posX: double, posY: double, menuBuilder: $TreeBuilder$Menu$Type): void
public "initEditorViews"(): void
public "isWaitingForSave"(): boolean
public "loadProject"(project: $IProject$Type): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "setGui"(gui: $ModularUI$Type): void
public "setCurrentProjectFile"(currentProjectFile: $File$Type): void
public "isCurrentProjectSaved"(): boolean
public "getCurrentProjectFile"(): $File
public "getHistory"(): $List<($Editor$HistoryItem)>
public "getMenuPanel"(): $MenuPanel
public "getConfigPanel"(): $ConfigPanel
public "getToolPanel"(): $ToolPanel
public "getCurrentProject"(): $IProject
public "getResourcePanel"(): $ResourcePanel
public "getFloatView"(): $WidgetGroup
public "getCopied"(): any
public "getTabPages"(): $StringTabContainer
public "getCopyType"(): string
public "getCurrentHistory"(): $Editor$HistoryItem
public "getWorkSpace"(): $File
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "waitingForSave"(): boolean
set "gui"(value: $ModularUI$Type)
set "currentProjectFile"(value: $File$Type)
get "currentProjectSaved"(): boolean
get "currentProjectFile"(): $File
get "history"(): $List<($Editor$HistoryItem)>
get "menuPanel"(): $MenuPanel
get "configPanel"(): $ConfigPanel
get "toolPanel"(): $ToolPanel
get "currentProject"(): $IProject
get "resourcePanel"(): $ResourcePanel
get "floatView"(): $WidgetGroup
get "copied"(): any
get "tabPages"(): $StringTabContainer
get "copyType"(): string
get "currentHistory"(): $Editor$HistoryItem
get "workSpace"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Editor$Type = ($Editor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Editor_ = $Editor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineCustomKeyframeEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$CustomInstructionKeyframeEvent, $CustomInstructionKeyframeEvent$Type} from "packages/software/bernie/geckolib/core/keyframe/event/$CustomInstructionKeyframeEvent"
import {$AnimatableMachine, $AnimatableMachine$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$AnimatableMachine"

export class $MachineCustomKeyframeEvent extends $MachineEvent {
 "event": $CustomInstructionKeyframeEvent<($AnimatableMachine)>
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $CustomInstructionKeyframeEvent$Type<($AnimatableMachine$Type)>)

public "getListenerList"(): $ListenerList
public "setEvent"(arg0: $CustomInstructionKeyframeEvent$Type<($AnimatableMachine$Type)>): void
public "getEvent"(): $CustomInstructionKeyframeEvent<($AnimatableMachine)>
get "listenerList"(): $ListenerList
set "event"(value: $CustomInstructionKeyframeEvent$Type<($AnimatableMachine$Type)>)
get "event"(): $CustomInstructionKeyframeEvent<($AnimatableMachine)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineCustomKeyframeEvent$Type = ($MachineCustomKeyframeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineCustomKeyframeEvent_ = $MachineCustomKeyframeEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $HeldItemUIFactory$HeldItemHolder implements $IUIHolder {
 "player": $Player
 "hand": $InteractionHand
 "held": $ItemStack

constructor(player: $Player$Type, hand: $InteractionHand$Type)

public "isInvalid"(): boolean
public "getHeld"(): $ItemStack
public "markAsDirty"(): void
public "createUI"(entityPlayer: $Player$Type): $ModularUI
public "isRemote"(): boolean
public "getPlayer"(): $Player
public "getHand"(): $InteractionHand
get "invalid"(): boolean
get "held"(): $ItemStack
get "remote"(): boolean
get "player"(): $Player
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeldItemUIFactory$HeldItemHolder$Type = ($HeldItemUIFactory$HeldItemHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeldItemUIFactory$HeldItemHolder_ = $HeldItemUIFactory$HeldItemHolder$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$RecipeModifier" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$RecipeCondition, $RecipeCondition$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeCondition"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export class $RecipeModifier implements $IConfigurable, $IPersistedSerializable {
readonly "contentModifier": $ContentModifier
readonly "targetContent": $IO
readonly "durationModifier": $ContentModifier
readonly "recipeConditions": $List<($RecipeCondition)>

constructor()

public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModifier$Type = ($RecipeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeModifier_ = $RecipeModifier$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IManagedVar" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IManagedVar<T> {

 "value"(): T
 "isPrimitive"(): boolean
 "set"(arg0: T): void
 "getType"(): $Class<(T)>
}

export namespace $IManagedVar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedVar$Type<T> = ($IManagedVar<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedVar_<T> = $IManagedVar$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {

constructor(builder: $VertexConsumer$Type)

public "setColor"(r: float, g: float, b: float, a: float): void
public "setOffsetX"(offsetX: double): void
public "setOffsetY"(offsetY: double): void
public "setOffsetZ"(offsetZ: double): void
public "vertex"(x: double, y: double, z: double): $VertexConsumer
public "endVertex"(): void
public "uv"(u: float, v: float): $VertexConsumer
public "color"(red: integer, green: integer, blue: integer, alpha: integer): $VertexConsumer
public "overlayCoords"(u: integer, v: integer): $VertexConsumer
public "uv2"(u: integer, v: integer): $VertexConsumer
public "normal"(x: float, y: float, z: float): $VertexConsumer
public "addOffset"(offsetX: double, offsetY: double, offsetZ: double): void
public "clearColor"(): void
public "defaultColor"(defaultR: integer, defaultG: integer, defaultB: integer, defaultA: integer): void
public "unsetDefaultColor"(): void
public "clerOffset"(): void
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "color"(arg0: integer): $VertexConsumer
public "overlayCoords"(arg0: integer): $VertexConsumer
public "uv2"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
set "offsetX"(value: double)
set "offsetY"(value: double)
set "offsetZ"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$VertexConsumerWrapper$Type = ($WorldSceneRenderer$VertexConsumerWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer$VertexConsumerWrapper_ = $WorldSceneRenderer$VertexConsumerWrapper$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState$Builder" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $MachineState$Builder<T extends $MachineState> {


public "name"(arg0: string): $MachineState$Builder<(T)>
public "build"(): T
public "child"(arg0: $MachineState$Type): $MachineState$Builder<(T)>
public "shape"(arg0: $VoxelShape$Type): $MachineState$Builder<(T)>
public "children"(arg0: $List$Type<($MachineState$Type)>): $MachineState$Builder<(T)>
public "renderingBox"(arg0: $AABB$Type): $MachineState$Builder<(T)>
public "modelRenderer"(arg0: $ResourceLocation$Type): $MachineState$Builder<(T)>
public "lightLevel"(arg0: integer): $MachineState$Builder<(T)>
public "renderer"(arg0: $IRenderer$Type): $MachineState$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineState$Builder$Type<T> = ($MachineState$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineState$Builder_<T> = $MachineState$Builder$Type<(T)>;
}}
declare module "packages/com/lowdragmc/mbd2/core/mixins/$RecipeManagerAccessor" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecipeManagerAccessor {

 "getRawRecipes"(): $Map<($RecipeType<(any)>), ($Map<($ResourceLocation), ($Recipe<(any)>)>)>

(): $Map<($RecipeType<(any)>), ($Map<($ResourceLocation), ($Recipe<(any)>)>)>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccessor$Type = ($RecipeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccessor_ = $RecipeManagerAccessor$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/trait/$ITrait" {
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TraitDefinition, $TraitDefinition$Type} from "packages/com/lowdragmc/mbd2/common/trait/$TraitDefinition"
import {$ICapabilityProviderTrait, $ICapabilityProviderTrait$Type} from "packages/com/lowdragmc/mbd2/common/trait/$ICapabilityProviderTrait"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IRecipeHandlerTrait, $IRecipeHandlerTrait$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandlerTrait"

export interface $ITrait {

 "getDefinition"(): $TraitDefinition
 "onMachineRemoved"(): void
 "getMachine"(): $MBDMachine
 "onNeighborChanged"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: boolean): void
 "onMachineUnLoad"(): void
 "onMachineLoad"(): void
 "getCapabilityProviderTraits"(): $List<($ICapabilityProviderTrait<(any)>)>
 "getRecipeHandlerTraits"(): $List<($IRecipeHandlerTrait<(any)>)>
 "onLoadingTraitInPreview"(): void
 "clientTick"(): void
 "serverTick"(): void
}

export namespace $ITrait {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrait$Type = ($ITrait);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrait_ = $ITrait$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextFieldWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textSupplier: $Supplier$Type<(string)>, textResponder: $Consumer$Type<(string)>)

public "setCurrentString"(currentString: any): $TextFieldWidget
public "setNumbersOnlyFloat"(minValue: float, maxValue: float): $TextFieldWidget
public "setNumbersOnlyLong"(minValue: long, maxValue: long): $TextFieldWidget
public "setNumbersOnlyInt"(minValue: integer, maxValue: integer): $TextFieldWidget
public "setWheelDur"(digits: integer, wheelDur: float): $TextFieldWidget
public "setWheelDur"(wheelDur: float): $TextFieldWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): $TextFieldWidget
public "setTextResponder"(textResponder: $Consumer$Type<(string)>): $TextFieldWidget
public "getCurrentString"(): string
public "setTextColor"(textColor: integer): $TextFieldWidget
public "setMaxStringLength"(maxStringLength: integer): $TextFieldWidget
public "setValidator"(validator: $Function$Type<(string), (string)>): $TextFieldWidget
public "setResourceLocationOnly"(): $TextFieldWidget
public "detectAndSendChanges"(): void
public "setCompoundTagOnly"(): $TextFieldWidget
public "setBordered"(bordered: boolean): $TextFieldWidget
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setBackground"(background: $IGuiTexture$Type): $TextFieldWidget
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getRawCurrentString"(): string
public "widget"(): $Widget
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "currentString"(value: any)
set "wheelDur"(value: float)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textResponder"(value: $Consumer$Type<(string)>)
get "currentString"(): string
set "textColor"(value: integer)
set "maxStringLength"(value: integer)
set "validator"(value: $Function$Type<(string), (string)>)
set "bordered"(value: boolean)
set "background"(value: $IGuiTexture$Type)
get "rawCurrentString"(): string
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextFieldWidget$Type = ($TextFieldWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextFieldWidget_ = $TextFieldWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"

export class $TreeBuilder<K, V> {

constructor(key: K)

public "remove"(key: K): $TreeBuilder<(K), (V)>
public static "start"<K, V>(key: K): $TreeBuilder<(K), (V)>
public "build"(): $TreeNode<(K), (V)>
public "branch"(key: K, builderConsumer: $Consumer$Type<($TreeBuilder$Type<(K), (V)>)>): $TreeBuilder<(K), (V)>
public "leaf"(key: K, content: V): $TreeBuilder<(K), (V)>
public "endBranch"(): $TreeBuilder<(K), (V)>
public "startBranch"(key: K): $TreeBuilder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Type<K, V> = ($TreeBuilder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder_<K, V> = $TreeBuilder$Type<(K), (V)>;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder, $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ConfigKineticMachineSettings$RotationFacing, $ConfigKineticMachineSettings$RotationFacing$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings$RotationFacing"

export class $ConfigKineticMachineSettings implements $IConfigurable, $IPersistedSerializable {
 "isGenerator": boolean
 "torque": float
 "frontRotation": $ConfigKineticMachineSettings$RotationFacing
 "hasBackRotation": boolean
 "maxRPM": integer
 "useFlywheel": boolean


public static "builder"(): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "getCapacity"(): float
public "frontRotation"(): $ConfigKineticMachineSettings$RotationFacing
public "hasBackRotation"(): boolean
public "getImpact"(): float
public "maxRPM"(): integer
public "torque"(): float
public "isGenerator"(): boolean
public "hasShaftTowards"(arg0: $Direction$Type, arg1: $Direction$Type): boolean
public "getRotationFacing"(arg0: $Direction$Type): $Direction
public "useFlywheel"(): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "capacity"(): float
get "impact"(): float
get "generator"(): boolean
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigKineticMachineSettings$Type = ($ConfigKineticMachineSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigKineticMachineSettings_ = $ConfigKineticMachineSettings$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$IMachine, $IMachine$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMachine"
import {$TraitDefinition, $TraitDefinition$Type} from "packages/com/lowdragmc/mbd2/common/trait/$TraitDefinition"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MachineSound, $MachineSound$Type} from "packages/com/lowdragmc/mbd2/client/$MachineSound"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeLogic, $RecipeLogic$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$IMachineBlockEntity, $IMachineBlockEntity$Type} from "packages/com/lowdragmc/mbd2/api/blockentity/$IMachineBlockEntity"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$RecipeLogic$Status, $RecipeLogic$Status$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$ITrait, $ITrait$Type} from "packages/com/lowdragmc/mbd2/common/trait/$ITrait"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IEnhancedManaged, $IEnhancedManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IEnhancedManaged"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDMachine implements $IMachine, $IEnhancedManaged, $ICapabilityProvider, $IUIHolder {

constructor(arg0: $IMachineBlockEntity$Type, arg1: $MBDMachineDefinition$Type, ...arg2: (any)[])

public "getDefinition"(): $MBDMachineDefinition
public "getOffset"(): long
public "isInvalid"(): boolean
public "detach"(): void
public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "doModifyRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
public "onDrops"(arg0: $Entity$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "markAsDirty"(): void
public "onLoad"(): void
public "getAnimatableMachine"(): $Map<($IRenderer), (any)>
public "notifyRecipeStatusChanged"(arg0: $RecipeLogic$Status$Type, arg1: $RecipeLogic$Status$Type): void
public "alwaysTryModifyRecipe"(): boolean
public "onUse"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "openUI"(arg0: $Player$Type): $InteractionResult
public "createUI"(arg0: $Player$Type): $ModularUI
public "setOutputDirectSignal"(arg0: integer, arg1: $Direction$Type): void
public "setAnalogOutputSignal"(arg0: integer): void
public "onChanged"(): void
public "updateSignal"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCurrentSound"(): $MachineSound
public "onMachinePlaced"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getOutputSignal"(): (byte)[]
public "getOutputSignal"(arg0: $Direction$Type): integer
public "onMachineRemoved"(): void
public "getDropItem"(): $ItemStack
public "shouldOpenUI"(arg0: $InteractionHand$Type, arg1: $BlockHitResult$Type): boolean
public "getMachineHolder"(): $IMachineBlockEntity
public "getPhotonFXs"(): $Map<(string), (any)>
public "afterWorking"(): void
public "getModifiedRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
public "beforeWorking"(arg0: $MBDRecipe$Type): boolean
public "getMaxParallel"(arg0: $MBDRecipe$Type): $ContentModifier
public "onWorking"(): boolean
public "onWaiting"(): void
public "runRecipeLogic"(): boolean
public "modifyFuelRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
public "setFrontFacing"(arg0: $Direction$Type): void
public "onUnload"(): void
public "getMachineLevel"(): integer
public "isFacingValid"(arg0: $Direction$Type): boolean
public "setOutputSignal"(arg0: integer, arg1: $Direction$Type): void
public "setMachineState"(arg0: string): void
public "setCustomData"(arg0: $CompoundTag$Type): void
public "setMachineLevel"(arg0: integer): void
public "getMachineState"(): $MachineState
public "getCustomData"(): $CompoundTag
public "triggerGeckolibAnim"(arg0: string, arg1: string, arg2: float): void
public "triggerGeckolibAnim"(arg0: string, arg1: float): void
public "getRenderBoundingBox"(): $AABB
public "killPhotonFx"(arg0: string, arg1: boolean): void
public "emitPhotonFx"(arg0: string, arg1: $ResourceLocation$Type, arg2: $Vector3f$Type, arg3: $Vector3f$Type, arg4: integer, arg5: boolean): void
public "updateState"(arg0: string, arg1: string): void
public "onNeighborChanged"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public "getAppearance"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): $BlockState
public "getTraitByDefinition"(arg0: $TraitDefinition$Type): $ITrait
public "getRecipeType"(): $MBDRecipeType
public "getRecipeLogic"(): $RecipeLogic
public "isRemote"(): boolean
public "isDisableRendering"(): boolean
public "getFieldHolder"(): $ManagedFieldHolder
public "getTraitByName"(arg0: string): $ITrait
public "getTraitByName"<T>(arg0: $Class$Type<(T)>, arg1: string): T
public "playStateSound"(arg0: string): void
public "updateCustomData"(arg0: $CompoundTag$Type, arg1: $CompoundTag$Type): void
public "getFrontFacing"(): $Optional<($Direction)>
public "onFuelBurningFinish"(arg0: $MBDRecipe$Type): void
public "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
public "scheduleRenderUpdate"(): void
public "alwaysReSearchRecipe"(): boolean
public "getRecipeDampingValue"(): integer
public "getOutputDirectSignal"(): (byte)[]
public "getOutputDirectSignal"(arg0: $Direction$Type): integer
public "getDynamicMachineLevel"(): integer
public "getAnalogOutputSignal"(): byte
public "getMachineStateName"(): string
public "initCapabilitiesProxy"(): void
public "getHolder"(): $BlockEntity
public "loadAdditionalTraits"(): void
public "getAdditionalTraits"(): $List<($ITrait)>
public "clientTick"(): void
public "animateTick"(arg0: $RandomSource$Type): void
public "serverTick"(): void
public "getLevel"(): $Level
public static "ofMachine"(arg0: $BlockEntity$Type): $Optional<($IMachine)>
public static "ofMachine"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMachine)>
public "hasFrontFacing"(): boolean
public "getOffsetTimer"(): long
public "onRotated"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "isInValid"(): boolean
public "applyParallel"(arg0: $MBDRecipe$Type, arg1: integer): $MBDRecipe
public "getChanceTier"(): integer
public "dampingWhenWaiting"(): boolean
public "getPos"(): $BlockPos
public "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
public "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getBlockState"(): $BlockState
public "notifyBlockUpdate"(): void
public "markDirty"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "hasProxies"(): boolean
public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
public "markDirty"(name: string): void
get "definition"(): $MBDMachineDefinition
get "offset"(): long
get "invalid"(): boolean
get "animatableMachine"(): $Map<($IRenderer), (any)>
set "analogOutputSignal"(value: integer)
get "currentSound"(): $MachineSound
get "outputSignal"(): (byte)[]
get "dropItem"(): $ItemStack
get "machineHolder"(): $IMachineBlockEntity
get "photonFXs"(): $Map<(string), (any)>
set "frontFacing"(value: $Direction$Type)
get "machineLevel"(): integer
set "machineState"(value: string)
set "customData"(value: $CompoundTag$Type)
set "machineLevel"(value: integer)
get "machineState"(): $MachineState
get "customData"(): $CompoundTag
get "renderBoundingBox"(): $AABB
get "recipeType"(): $MBDRecipeType
get "recipeLogic"(): $RecipeLogic
get "remote"(): boolean
get "disableRendering"(): boolean
get "fieldHolder"(): $ManagedFieldHolder
get "frontFacing"(): $Optional<($Direction)>
get "recipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
get "recipeDampingValue"(): integer
get "outputDirectSignal"(): (byte)[]
get "dynamicMachineLevel"(): integer
get "analogOutputSignal"(): byte
get "machineStateName"(): string
get "holder"(): $BlockEntity
get "additionalTraits"(): $List<($ITrait)>
get "level"(): $Level
get "offsetTimer"(): long
get "inValid"(): boolean
get "chanceTier"(): integer
get "pos"(): $BlockPos
get "blockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachine$Type = ($MBDMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachine_ = $MBDMachine$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IToggleConfigurable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export interface $IToggleConfigurable extends $IConfigurable {

 "isEnable"(): boolean
 "setEnable"(arg0: boolean): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
}

export namespace $IToggleConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToggleConfigurable$Type = ($IToggleConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToggleConfigurable_ = $IToggleConfigurable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketRPCMethodPayload" {
import {$PacketIntLocation, $PacketIntLocation$Type} from "packages/com/lowdragmc/lowdraglib/networking/$PacketIntLocation"
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RPCSender, $RPCSender$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IRPCBlockEntity, $IRPCBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IRPCBlockEntity"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SPacketRPCMethodPayload extends $PacketIntLocation implements $IPacket {

constructor()
constructor(managedId: integer, type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, methodName: string, payloads: ($ITypedPayload$Type<(any)>)[])
constructor(buffer: $FriendlyByteBuf$Type)

public "decode"(buffer: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public static "of"(managed: $IManaged$Type, tile: $IRPCBlockEntity$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
public "execute"(handler: $IHandlerContext$Type): void
public "processPacket"(blockEntity: $BlockEntity$Type, sender: $RPCSender$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPacketRPCMethodPayload$Type = ($SPacketRPCMethodPayload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPacketRPCMethodPayload_ = $SPacketRPCMethodPayload$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachinePlacedEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachinePlacedEvent, $MachinePlacedEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachinePlacedEvent"

export class $MBDMachineEvents$MachinePlacedEventJS extends $MBDMachineEvents$MachineEventJS<($MachinePlacedEvent)> {
readonly "event": E

constructor(arg0: $MachinePlacedEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachinePlacedEventJS$Type = ($MBDMachineEvents$MachinePlacedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachinePlacedEventJS_ = $MBDMachineEvents$MachinePlacedEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CPacketUIClientAction, $CPacketUIClientAction$Type} from "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $ModularUIContainer extends $AbstractContainerMenu implements $WidgetUIAccess {
static readonly "MENUTYPE": $MenuType<($ModularUIContainer)>
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

constructor(modularUI: $ModularUI$Type, windowID: integer)

public "handleClientAction"(packet: $CPacketUIClientAction$Type): void
public "canTakeItemForPickAll"(stack: $ItemStack$Type, slotIn: $Slot$Type): boolean
public "stillValid"(playerIn: $Player$Type): boolean
public "removed"(playerIn: $Player$Type): void
public "m_38897_"(slotHandle: $Slot$Type): $Slot
public "quickMoveStack"(player: $Player$Type, index: integer): $ItemStack
public "clicked"(slotId: integer, dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): void
public "getModularUI"(): $ModularUI
public "removeSlot"(slotHandle: $Slot$Type): void
public "attemptMergeStack"(itemStack: $ItemStack$Type, fromContainer: boolean, simulate: boolean): boolean
public static "mergeItemStack"(itemStack: $ItemStack$Type, slots: $List$Type<($Slot$Type)>, simulate: boolean): boolean
public "writeUpdateInfo"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "writeClientAction"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "addSlotListener"(pListener: $ContainerListener$Type): void
public "broadcastChanges"(): void
get "modularUI"(): $ModularUI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIContainer$Type = ($ModularUIContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIContainer_ = $ModularUIContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidTransferHelper" {
import {$ItemStackTransfer, $ItemStackTransfer$Type} from "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$FluidActionResult, $FluidActionResult$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidActionResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidTransferHelper {

constructor()

public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, handler: $IFluidTransfer$Type): boolean
public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): boolean
public static "destroyBlockOnFluidPlacement"(level: $Level$Type, pos: $BlockPos$Type): void
public static "tryEmptyContainerAndStow"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "tryFillContainerAndStow"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, doTransfer: boolean): $FluidStack
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type, doTransfer: boolean): $FluidStack
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
/**
 * 
 * @deprecated
 */
public static "getFluidTransfer"(itemStack: $ItemStack$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
public static "tryFillContainer"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "tryEmptyContainer"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "getFluidContained"(container: $ItemStack$Type): $FluidStack
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type): boolean
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, container: $ItemStack$Type, resource: $FluidStack$Type): $FluidActionResult
public static "tryPickUpFluid"(emptyContainer: $ItemStack$Type, playerIn: $Player$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): $FluidActionResult
public static "transferFluids"(sourceHandler: $IFluidTransfer$Type, destHandler: $IFluidTransfer$Type, transferLimit: long, fluidFilter: $Predicate$Type<($FluidStack$Type)>): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTransferHelper$Type = ($FluidTransferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTransferHelper_ = $FluidTransferHelper$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineOpenUIEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineOpenUIEvent extends $MachineEvent {
readonly "player": $Player
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $Player$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getPlayer"(): $Player
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineOpenUIEvent$Type = ($MachineOpenUIEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineOpenUIEvent_ = $MachineOpenUIEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConfiguratorContainer {

 "computeLayout"(): void

(): void
}

export namespace $IConfiguratorContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfiguratorContainer$Type = ($IConfiguratorContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfiguratorContainer_ = $IConfiguratorContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $ConfigPanel$Tab {
static readonly "WIDGET": $ConfigPanel$Tab
static readonly "RESOURCE": $ConfigPanel$Tab
readonly "icon": $ResourceTexture
readonly "tooltip": $Component
readonly "configurable": $Consumer<($ConfiguratorGroup)>


public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type): $ConfigPanel$Tab
public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type, configurable: $Consumer$Type<($ConfiguratorGroup$Type)>): $ConfigPanel$Tab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Tab$Type = ($ConfigPanel$Tab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel$Tab_ = $ConfigPanel$Tab$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineRightClickEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineRightClickEvent, $MachineRightClickEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRightClickEvent"

export class $MBDMachineEvents$MachineRightClickEventJS extends $MBDMachineEvents$MachineEventJS<($MachineRightClickEvent)> {
readonly "event": E

constructor(arg0: $MachineRightClickEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineRightClickEventJS$Type = ($MBDMachineEvents$MachineRightClickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineRightClickEventJS_ = $MBDMachineEvents$MachineRightClickEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISceneEntityRenderHook {

 "applyEntity"(world: $Level$Type, entity: $Entity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
}

export namespace $ISceneEntityRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneEntityRenderHook$Type = ($ISceneEntityRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneEntityRenderHook_ = $ISceneEntityRenderHook$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineUseCatalystEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineUseCatalystEvent extends $MachineEvent {
readonly "catalyst": $ItemStack
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $ItemStack$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineUseCatalystEvent$Type = ($MachineUseCatalystEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineUseCatalystEvent_ = $MachineUseCatalystEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$MBDRecipeBuilder, $MBDRecipeBuilder$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeBuilder"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$MBDRecipeType$UICreator, $MBDRecipeType$UICreator$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType$UICreator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$IRecipeCapabilityHolder, $IRecipeCapabilityHolder$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRecipeType implements $RecipeType<($MBDRecipe)>, $ITagSerializable<($CompoundTag)>, $IConfigurable {
static readonly "DUMMY": $MBDRecipeType

constructor(arg0: $ResourceLocation$Type, ...arg1: ($RecipeType$Type<(any)>)[])

public "toString"(): string
public "copyFrom"(arg0: $MBDRecipeBuilder$Type): $MBDRecipeBuilder
public "setIcon"(arg0: $IGuiTexture$Type): $MBDRecipeType
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "loadProductiveTag"(arg0: $File$Type, arg1: $CompoundTag$Type, arg2: $Deque$Type<($Runnable$Type)>): $MBDRecipeType
public static "createDefault"(): $MBDRecipeType
public "getBuiltinRecipes"(): $Map<($ResourceLocation), ($MBDRecipe)>
public "recipeBuilder"(arg0: $ItemLike$Type, ...arg1: (any)[]): $MBDRecipeBuilder
public "recipeBuilder"(arg0: $Supplier$Type<(any)>, ...arg1: (any)[]): $MBDRecipeBuilder
public "recipeBuilder"(arg0: $ResourceLocation$Type, ...arg1: (any)[]): $MBDRecipeBuilder
public "recipeBuilder"(arg0: string, ...arg1: (any)[]): $MBDRecipeBuilder
public "toMBDrecipe"(arg0: $ResourceLocation$Type, arg1: $Recipe$Type<(any)>): $MBDRecipe
public "prepareBuilder"(arg0: $Consumer$Type<($MBDRecipeBuilder$Type)>): $MBDRecipeType
public "searchFuelRecipe"(arg0: $RecipeManager$Type, arg1: $IRecipeCapabilityHolder$Type): $List<($MBDRecipe)>
public "searchRecipe"(arg0: $RecipeManager$Type, arg1: $IRecipeCapabilityHolder$Type): $List<($MBDRecipe)>
public "onRecipeBuild"(arg0: $BiConsumer$Type<($MBDRecipeBuilder$Type), ($Consumer$Type<($FinishedRecipe$Type)>)>): $MBDRecipeType
public "setUiCreator"(arg0: $MBDRecipeType$UICreator$Type): $MBDRecipeType
public "getUiCreator"(): $MBDRecipeType$UICreator
public "setFuelIcon"(arg0: $IGuiTexture$Type): $MBDRecipeType
public "setUiSize"(arg0: $Size$Type): $MBDRecipeType
public "getUiSize"(): $Size
public "setFuelUICreator"(arg0: $MBDRecipeType$UICreator$Type): $MBDRecipeType
public "bindXEIRecipeUI"(arg0: $WidgetGroup$Type, arg1: $MBDRecipe$Type): void
public "setXEIVisible"(arg0: boolean): $MBDRecipeType
public "getFuelIcon"(): $IGuiTexture
public "setRecipeBuilder"(arg0: $MBDRecipeBuilder$Type): $MBDRecipeType
public "getProxyRecipes"(): $Map<($RecipeType<(any)>), ($List<($MBDRecipe)>)>
public "getFuelUISize"(): $Size
public "setFuelUISize"(arg0: $Size$Type): $MBDRecipeType
public "setProjectFile"(arg0: $File$Type): $MBDRecipeType
public "getFuelUICreator"(): $MBDRecipeType$UICreator
public "getProjectFile"(): $File
public "getIcon"(): $IGuiTexture
public "isRequireFuelForWorking"(): boolean
public "reloadFromProjectFile"(): void
public "isCreatedFromProjectFile"(): boolean
public "isXEIVisible"(): boolean
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "getRegistryName"(): $ResourceLocation
public "setRequireFuelForWorking"(arg0: boolean): $MBDRecipeType
public "isProxyRecipesLoaded"(): boolean
public "getFuelRegistryName"(): $ResourceLocation
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<($MBDRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<($MBDRecipe)>
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "icon"(value: $IGuiTexture$Type)
get "builtinRecipes"(): $Map<($ResourceLocation), ($MBDRecipe)>
set "uiCreator"(value: $MBDRecipeType$UICreator$Type)
get "uiCreator"(): $MBDRecipeType$UICreator
set "fuelIcon"(value: $IGuiTexture$Type)
set "uiSize"(value: $Size$Type)
get "uiSize"(): $Size
set "fuelUICreator"(value: $MBDRecipeType$UICreator$Type)
set "xEIVisible"(value: boolean)
get "fuelIcon"(): $IGuiTexture
get "proxyRecipes"(): $Map<($RecipeType<(any)>), ($List<($MBDRecipe)>)>
get "fuelUISize"(): $Size
set "fuelUISize"(value: $Size$Type)
set "projectFile"(value: $File$Type)
get "fuelUICreator"(): $MBDRecipeType$UICreator
get "projectFile"(): $File
get "icon"(): $IGuiTexture
get "requireFuelForWorking"(): boolean
get "createdFromProjectFile"(): boolean
get "xEIVisible"(): boolean
get "registryName"(): $ResourceLocation
set "requireFuelForWorking"(value: boolean)
get "proxyRecipesLoaded"(): boolean
get "fuelRegistryName"(): $ResourceLocation
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRecipeType$Type = ($MBDRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRecipeType_ = $MBDRecipeType$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleLightValue" {
import {$ToggleObject, $ToggleObject$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject"

export class $ToggleLightValue extends $ToggleObject<(integer)> {

constructor()
constructor(arg0: boolean)
constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean)

public "setValue"(arg0: integer): void
set "value"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleLightValue$Type = ($ToggleLightValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleLightValue_ = $ToggleLightValue$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MBDRegistry<K, V> implements $Iterable<(V)> {
static readonly "REGISTERED": $Map<($ResourceLocation), ($MBDRegistry<(any), (any)>)>

constructor(arg0: $ResourceLocation$Type)

public "remove"(arg0: K): boolean
public "get"(arg0: K): V
public "values"(): $Set<(V)>
public "replace"(arg0: K, arg1: V): V
public "iterator"(): $Iterator<(V)>
public "getKey"(arg0: V): K
public "register"(arg0: K, arg1: V): void
public "keys"(): $Set<(K)>
public "getOrDefault"(arg0: K, arg1: V): V
public "entries"(): $Set<($Map$Entry<(K), (V)>)>
public "isFrozen"(): boolean
public "freeze"(): void
public "registry"(): $Map<(K), (V)>
public "getOrDefaultKey"(arg0: V, arg1: K): K
public "containKey"(arg0: K): boolean
public "saveToNBT"(arg0: V): $Tag
public "containValue"(arg0: V): boolean
public "readBuf"(arg0: $FriendlyByteBuf$Type): V
public "loadFromNBT"(arg0: $Tag$Type): V
public "writeBuf"(arg0: V, arg1: $FriendlyByteBuf$Type): void
public "registerOrOverride"(arg0: K, arg1: V): V
public "unfreeze"(): void
public "getRegistryName"(): $ResourceLocation
public "codec"(): $Codec<(V)>
public "spliterator"(): $Spliterator<(V)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<V>;
get "frozen"(): boolean
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDRegistry$Type<K, V> = ($MBDRegistry<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDRegistry_<K, V> = $MBDRegistry$Type<(K), (V)>;
}}
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineRecipeStatusChangedEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineRecipeStatusChangedEvent, $MachineRecipeStatusChangedEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeStatusChangedEvent"

export class $MBDMachineEvents$MachineRecipeStatusChangedEventJS extends $MBDMachineEvents$MachineEventJS<($MachineRecipeStatusChangedEvent)> {
readonly "event": E

constructor(arg0: $MachineRecipeStatusChangedEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineRecipeStatusChangedEventJS$Type = ($MBDMachineEvents$MachineRecipeStatusChangedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineRecipeStatusChangedEventJS_ = $MBDMachineEvents$MachineRecipeStatusChangedEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $SPacketUIWidgetUpdate implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPacketUIWidgetUpdate$Type = ($SPacketUIWidgetUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPacketUIWidgetUpdate_ = $SPacketUIWidgetUpdate$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IAccessor" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$IManagedVar, $IManagedVar$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IManagedVar"
import {$AccessorOp, $AccessorOp$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$AccessorOp"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export interface $IAccessor extends $Predicate<($Class<(any)>)> {

 "test"(type: $Class$Type<(any)>): boolean
 "readField"(arg0: $AccessorOp$Type, arg1: $IRef$Type): $ITypedPayload<(any)>
 "getDefaultType"(): byte
 "writeToReadonlyField"(op: $AccessorOp$Type, obj: any, payload: $ITypedPayload$Type<(any)>): void
 "readFromReadonlyField"(op: $AccessorOp$Type, obj: any): $ITypedPayload<(any)>
 "hasPredicate"(): boolean
 "operandTypes"(): ($Class<(any)>)[]
 "setDefaultType"(arg0: byte): void
 "copyForManaged"(value: any): any
 "readManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>): $ITypedPayload<(any)>
 "isManaged"(): boolean
 "writeManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>, payload: $ITypedPayload$Type<(any)>): void
 "writeField"(arg0: $AccessorOp$Type, arg1: $IRef$Type, arg2: $ITypedPayload$Type<(any)>): void
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
 "negate"(): $Predicate<($Class<(any)>)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
}

export namespace $IAccessor {
function isEqual<T>(arg0: any): $Predicate<($Class<(any)>)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAccessor$Type = ($IAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAccessor_ = $IAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidgetGroup extends $IConfigurableWidget {

 "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
 "acceptWidget"(widget: $IConfigurableWidget$Type): void
 "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
 "initTemplate"(): void
 "serializeWrapper"(): $CompoundTag
 "serializeInnerNBT"(): $CompoundTag
 "canDragIn"(dragging: any): boolean
 "handleDragging"(dragging: any): boolean
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
}

export namespace $IConfigurableWidgetGroup {
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidgetGroup$Type = ($IConfigurableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidgetGroup_ = $IConfigurableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$ConfigMachineSettingsBuilder" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ConfigMachineSettings, $ConfigMachineSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings"
import {$ConfigMachineSettings$SignalConnection, $ConfigMachineSettings$SignalConnection$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$SignalConnection"
import {$TraitDefinition, $TraitDefinition$Type} from "packages/com/lowdragmc/mbd2/common/trait/$TraitDefinition"

export class $ConfigMachineSettings$ConfigMachineSettingsBuilder {


public "toString"(): string
public "build"(): $ConfigMachineSettings
public "dropMachineItem"(arg0: boolean): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "signalConnection"(arg0: $ConfigMachineSettings$SignalConnection$Type): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "clearTraitDefinitions"(): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "machineLevel"(arg0: integer): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "traitDefinition"(arg0: $TraitDefinition$Type): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "traitDefinitions"(arg0: $Collection$Type<(any)>): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "hasUI"(arg0: boolean): $ConfigMachineSettings$ConfigMachineSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMachineSettings$ConfigMachineSettingsBuilder$Type = ($ConfigMachineSettings$ConfigMachineSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMachineSettings$ConfigMachineSettingsBuilder_ = $ConfigMachineSettings$ConfigMachineSettingsBuilder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StringTabContainer extends $TabContainer {
static readonly "TAB_HEIGHT": integer
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public "clearAllWidgets"(): void
public "getTabIndex"(): integer
public "getTabIndex"(group: $WidgetGroup$Type): integer
public "switchTabIndex"(index: integer): void
public "removeTab"(tabButton: $TabButton$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type): void
public "addTab"(icon: $IGuiTexture$Type, name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type, onRemoved: $Runnable$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "getEditor"(): $Editor
public "calculateTabSize"(): void
public "getTabGroups"(): $List<($WidgetGroup)>
public "getOnDeselected"(): $Map<($WidgetGroup), ($Runnable)>
public "getOnChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
public "getOnSelected"(): $Map<($WidgetGroup), ($Runnable)>
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
get "tabIndex"(): integer
get "editor"(): $Editor
get "tabGroups"(): $List<($WidgetGroup)>
get "onDeselected"(): $Map<($WidgetGroup), ($Runnable)>
get "onChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
get "onSelected"(): $Map<($WidgetGroup), ($Runnable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringTabContainer$Type = ($StringTabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringTabContainer_ = $StringTabContainer$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/content/$Content" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Content {
 "content": any
 "perTick": boolean
 "chance": float
 "tierChanceBoost": float
 "slotName": string
 "uiName": string

constructor(arg0: any, arg1: boolean, arg2: float, arg3: float, arg4: string, arg5: string)
constructor(arg0: any, arg1: boolean, arg2: float, arg3: float)

public "copy"(arg0: $RecipeCapability$Type<(any)>, arg1: $ContentModifier$Type): $Content
public "getContent"(): any
public "deepCopy"(arg0: $RecipeCapability$Type<(any)>, arg1: $ContentModifier$Type): $Content
public "drawSmallString"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: integer, arg6: string, arg7: integer): void
public "appendTooltip"(arg0: $List$Type<($Component$Type)>): void
public "createOverlay"(): $IGuiTexture
get "content"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Content$Type = ($Content);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Content_ = $Content$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$EntityIngredient$Value" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $EntityIngredient$Value {

 "copy"(): $EntityIngredient$Value
 "serialize"(): $JsonObject
 "getTypes"(): $Collection<($EntityType<(any)>)>
}

export namespace $EntityIngredient$Value {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityIngredient$Value$Type = ($EntityIngredient$Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityIngredient$Value_ = $EntityIngredient$Value$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $RPCSender {

 "isServer"(): boolean

(): $RPCSender
}

export namespace $RPCSender {
function ofServer(): $RPCSender
function ofClient(player: $Player$Type): $RPCSender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RPCSender$Type = ($RPCSender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RPCSender_ = $RPCSender$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ToggleAABB, $ToggleAABB$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleAABB"
import {$MachineState$Builder, $MachineState$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState$Builder"
import {$MachineSound, $MachineSound$Type} from "packages/com/lowdragmc/mbd2/client/$MachineSound"
import {$StateMachine, $StateMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$StateMachine"
import {$ToggleLightValue, $ToggleLightValue$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleLightValue"
import {$ToggleRenderer, $ToggleRenderer$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleRenderer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ToggleMachineSound, $ToggleMachineSound$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleMachineSound"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ToggleShape, $ToggleShape$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleShape"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineState implements $IConfigurable, $IPersistedSerializable, $Comparable<($MachineState)> {

constructor(arg0: string, arg1: $List$Type<($MachineState$Type)>, arg2: $IRenderer$Type, arg3: $VoxelShape$Type, arg4: integer, arg5: $AABB$Type)

public "name"(): string
public "parent"(): $MachineState
public "compareTo"(arg0: $MachineState$Type): integer
public static "builder"(): $MachineState$Builder<(any)>
public "shape"(): $ToggleShape
public "children"(): $List<($MachineState)>
public "isRoot"(): boolean
public "getShape"(arg0: $Direction$Type): $VoxelShape
public "removeChild"(arg0: $MachineState$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getRenderer"(): $IRenderer
public "getDepth"(): integer
public "getRenderingBox"(arg0: $Direction$Type): $AABB
public "shapeCache"(): $Map<($Direction), ($VoxelShape)>
public "renderingBox"(): $ToggleAABB
public "machineSound"(): $ToggleMachineSound
public "createMachineSound"(arg0: $BlockPos$Type, arg1: $BooleanSupplier$Type): $MachineSound
public "renderingBoxCache"(): $Map<($Direction), ($AABB)>
public "addChild"(arg0: string): $MachineState
public "stateMachine"(): $StateMachine<(any)>
public "getRealRenderer"(): $IRenderer
public "getLightLevel"(): integer
public "lightLevel"(): $ToggleLightValue
public "renderer"(): $ToggleRenderer
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "root"(): boolean
get "depth"(): integer
get "realRenderer"(): $IRenderer
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineState$Type = ($MachineState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineState_ = $MachineState$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomSlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $PhantomSlotWidget extends $SlotWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean

constructor()
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)

public "setMaxStackSize"(maxStackSize: integer): void
public "slotClickPhantom"(slot: $Slot$Type, mouseButton: integer, clickTypeIn: $ClickType$Type, stackHeld: $ItemStack$Type): $ItemStack
public "areItemsEqual"(itemStack1: $ItemStack$Type, itemStack2: $ItemStack$Type): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getMaxStackSize"(): integer
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "setClearSlotOnRightClick"(clearSlotOnRightClick: boolean): $PhantomSlotWidget
public "isClearSlotOnRightClick"(): boolean
public "setCanPutItems"(v: boolean): $PhantomSlotWidget
public "setCanTakeItems"(v: boolean): $PhantomSlotWidget
public "canPutStack"(stack: $ItemStack$Type): boolean
public "canTakeStack"(player: $Player$Type): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
set "maxStackSize"(value: integer)
get "maxStackSize"(): integer
set "clearSlotOnRightClick"(value: boolean)
get "clearSlotOnRightClick"(): boolean
set "canPutItems"(value: boolean)
set "canTakeItems"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomSlotWidget$Type = ($PhantomSlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomSlotWidget_ = $PhantomSlotWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$EntityAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "invokeSetLevel"(arg0: $Level$Type): void

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
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $ParticleManager {
 "level": $Level

constructor()

public "setLevel"(level: $Level$Type): void
public "tick"(): void
public static "makeParticleRenderTypeComparator"(renderOrder: $List$Type<($ParticleRenderType$Type)>): $Comparator<($ParticleRenderType)>
public "clearAllParticles"(): void
public "render"(pMatrixStack: $PoseStack$Type, pActiveRenderInfo: $Camera$Type, pPartialTicks: float): void
public "getParticleAmount"(): integer
public "addParticle"(particle: $Particle$Type): void
set "level"(value: $Level$Type)
get "particleAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManager$Type = ($ParticleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleManager_ = $ParticleManager$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineFuelBurningFinishEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineFuelBurningFinishEvent extends $MachineEvent {
readonly "recipe": $MBDRecipe
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)

public "getRecipe"(): $MBDRecipe
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "recipe"(): $MBDRecipe
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFuelBurningFinishEvent$Type = ($MachineFuelBurningFinishEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFuelBurningFinishEvent_ = $MachineFuelBurningFinishEvent$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder$ItemUI" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$HeldItemUIFactory$HeldItemHolder, $HeldItemUIFactory$HeldItemHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder"

export interface $IUIHolder$ItemUI {

 "createUI"(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI

(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI
}

export namespace $IUIHolder$ItemUI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUIHolder$ItemUI$Type = ($IUIHolder$ItemUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUIHolder$ItemUI_ = $IUIHolder$ItemUI$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ButtonWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, buttonTexture: $IGuiTexture$Type, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor()

public "setClickedTexture"(...clickedTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "isClicked"(): boolean
public "setButtonTexture"(...buttonTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "initTemplate"(): void
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "setOnPressCallback"(onPressCallback: $Consumer$Type<($ClickData$Type)>): $ButtonWidget
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setHoverBorderTexture"(border: integer, color: integer): $ButtonWidget
public "widget"(): $Widget
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
set "clickedTexture"(value: ($IGuiTexture$Type)[])
get "clicked"(): boolean
set "buttonTexture"(value: ($IGuiTexture$Type)[])
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "onPressCallback"(value: $Consumer$Type<($ClickData$Type)>)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonWidget$Type = ($ButtonWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonWidget_ = $ButtonWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TransformTexture implements $IGuiTexture {

constructor()

public "scale"(scale: float): $TransformTexture
public "transform"(xOffset: float, yOffset: float): $TransformTexture
public "getXOffset"(): float
public "getYOffset"(): float
public "draw"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, x: float, y: float, width: integer, height: integer): void
public "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
public "getScale"(): float
public "getRotation"(): float
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
public "copy"(): $IGuiTexture
public "setColor"(color: integer): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "updateTick"(): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "xOffset"(): float
get "yOffset"(): float
get "rotation"(): float
set "color"(value: integer)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformTexture$Type = ($TransformTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformTexture_ = $TransformTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$BlockSelectorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $BlockSelectorWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, isState: boolean)

public "getBlock"(): $BlockState
public "setOnBlockStateUpdate"(onBlockStateUpdate: $Consumer$Type<($BlockState$Type)>): $BlockSelectorWidget
public "setBlock"(blockState: $BlockState$Type): $BlockSelectorWidget
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
get "block"(): $BlockState
set "onBlockStateUpdate"(value: $Consumer$Type<($BlockState$Type)>)
set "block"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSelectorWidget$Type = ($BlockSelectorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSelectorWidget_ = $BlockSelectorWidget$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineEvent extends $Event implements $ILDLRegister {
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type)

public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public static "getExposedParameters"(arg0: $Class$Type<(any)>): $List<($ExposedParameter<(any)>)>
public "postCustomEvent"(): $MachineEvent
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "postKubeJSEvent"(): $MachineEvent
public "getMachine"(): $MBDMachine
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "machine"(): $MBDMachine
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineEvent$Type = ($MachineEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineEvent_ = $MachineEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/geckolib/$GeckolibRendererModel" {
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$GeoModel, $GeoModel$Type} from "packages/software/bernie/geckolib/model/$GeoModel"
import {$GeckolibRenderer, $GeckolibRenderer$Type} from "packages/com/lowdragmc/mbd2/integration/geckolib/$GeckolibRenderer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $GeckolibRendererModel extends $GeoModel<($GeoAnimatable)> {

constructor(arg0: $GeckolibRenderer$Type)

public "getAnimationResource"(arg0: $GeoAnimatable$Type): $ResourceLocation
public "getRenderType"(arg0: $GeoAnimatable$Type, arg1: $ResourceLocation$Type): $RenderType
public "getModelResource"(arg0: $GeoAnimatable$Type): $ResourceLocation
public "getTextureResource"(arg0: $GeoAnimatable$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeckolibRendererModel$Type = ($GeckolibRendererModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeckolibRendererModel_ = $GeckolibRendererModel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortData" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"

export class $PortData {
 "displayName": string
 "portColor": integer
 "identifier": string
 "displayType": $Class<(any)>
 "acceptMultipleEdges": boolean
 "tooltip": $List<(string)>

constructor()

public "equals"(otherObject: any): boolean
public "displayName"(displayName: string): $PortData
public "displayType"(displayType: $Class$Type<(any)>): $PortData
public "identifier"(identifier: string): $PortData
public "tooltip"(tooltip: $List$Type<(string)>): $PortData
public "acceptMultipleEdges"(acceptMultipleEdges: boolean): $PortData
public "portColor"(portColor: integer): $PortData
public "CopyFrom"(other: $PortData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortData$Type = ($PortData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortData_ = $PortData$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IProject extends $ILDLRegister, $ITagSerializable<($CompoundTag)> {

 "getResources"(): $Resources
 "getSuffix"(): string
 "onLoad"(editor: $Editor$Type): void
 "saveProject"(file: $File$Type): void
 "loadProject"(file: $File$Type): $IProject
 "getProjectWorkSpace"(editor: $Editor$Type): $File
 "newEmptyProject"(): $IProject
 "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
 "onClosed"(editor: $Editor$Type): void
 "loadResources"(tag: $CompoundTag$Type): $Resources
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getChatComponent"(): $Component
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IProject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProject$Type = ($IProject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProject_ = $IProject$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder" {
import {$ConfigRecipeLogicSettings, $ConfigRecipeLogicSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigRecipeLogicSettings"
import {$RecipeModifier$RecipeModifiers, $RecipeModifier$RecipeModifiers$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$RecipeModifier$RecipeModifiers"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder {


public "toString"(): string
public "build"(): $ConfigRecipeLogicSettings
public "enable"(arg0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeModifiers"(arg0: $RecipeModifier$RecipeModifiers$Type): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "alwaysSearchRecipe"(arg0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeDampingValue"(arg0: integer): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "alwaysModifyRecipe"(arg0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeType"(arg0: $ResourceLocation$Type): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder$Type = ($ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder_ = $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getActiveButton"(): integer

(): integer
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $WidgetUIAccess {

 "attemptMergeStack"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): boolean
 "writeUpdateInfo"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
 "writeClientAction"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
}

export namespace $WidgetUIAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetUIAccess$Type = ($WidgetUIAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetUIAccess_ = $WidgetUIAccess$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export interface $IRecipeCapabilityHolder {

 "getChanceTier"(): integer
 "hasProxies"(): boolean
 "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>

(): integer
}

export namespace $IRecipeCapabilityHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCapabilityHolder$Type = ($IRecipeCapabilityHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCapabilityHolder_ = $IRecipeCapabilityHolder$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineRecipeStatusChangedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$RecipeLogic$Status, $RecipeLogic$Status$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status"
import {$ExposedParameter, $ExposedParameter$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/parameter/$ExposedParameter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MachineRecipeStatusChangedEvent extends $MachineEvent {
readonly "oldStatus": $RecipeLogic$Status
readonly "newStatus": $RecipeLogic$Status
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $RecipeLogic$Status$Type, arg2: $RecipeLogic$Status$Type)

public "getNewStatus"(): $RecipeLogic$Status
public "getOldStatus"(): $RecipeLogic$Status
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "newStatus"(): $RecipeLogic$Status
get "oldStatus"(): $RecipeLogic$Status
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipeStatusChangedEvent$Type = ($MachineRecipeStatusChangedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineRecipeStatusChangedEvent_ = $MachineRecipeStatusChangedEvent$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$MBDKineticMachineBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IRotate, $IRotate$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CreateKineticMachineDefinition, $CreateKineticMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$CreateKineticMachineDefinition"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$MBDMachineBlock, $MBDMachineBlock$Type} from "packages/com/lowdragmc/mbd2/common/block/$MBDMachineBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MBDKineticMachineBlock extends $MBDMachineBlock implements $IRotate {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $CreateKineticMachineDefinition$Type)

public "areStatesKineticallyEquivalent"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "updateIndirectNeighbourShapes"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getRotationFacing"(arg0: $BlockState$Type): $Direction
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "hideStressImpact"(): boolean
public "showCapacityWithAnnotation"(): boolean
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDKineticMachineBlock$Type = ($MBDKineticMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDKineticMachineBlock_ = $MBDKineticMachineBlock$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$PortEdge" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$BaseGraph, $BaseGraph$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph"
import {$BaseNode, $BaseNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseNode"
import {$NodePort, $NodePort$Type} from "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$NodePort"

export class $PortEdge implements $IPersistedSerializable {
 "GUID": string
 "inputNodeGUID": string
 "outputNodeGUID": string
 "inputFieldName": string
 "outputFieldName": string
 "inputPortIdentifier": string
 "outputPortIdentifier": string
 "inputNode": $BaseNode
 "inputPort": $NodePort
 "outputPort": $NodePort
 "passThroughBuffer": any
 "outputNode": $BaseNode

constructor()

public "toString"(): string
public "initialize"(owner: $BaseGraph$Type): void
public "copy"(): $PortEdge
public "deserializeNBT"(tag: $CompoundTag$Type): void
public static "createNewEdge"(graph: $BaseGraph$Type, inputPort: $NodePort$Type, outputPort: $NodePort$Type): $PortEdge
public "onBeforeSerialize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortEdge$Type = ($PortEdge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortEdge_ = $PortEdge$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/trait/$ToggleAutoIO" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$AutoIO, $AutoIO$Type} from "packages/com/lowdragmc/mbd2/common/trait/$AutoIO"
import {$IToggleConfigurable, $IToggleConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IToggleConfigurable"

export class $ToggleAutoIO extends $AutoIO implements $IToggleConfigurable {

constructor()

public "isEnable"(): boolean
public "setEnable"(arg0: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getChatComponent"(): $Component
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
get "enable"(): boolean
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "chatComponent"(): $Component
get "translateKey"(): string
get "registerUI"(): $LDLRegister
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleAutoIO$Type = ($ToggleAutoIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleAutoIO_ = $ToggleAutoIO$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/graphprocessor/data/$BaseGraph$ComputeOrderType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BaseGraph$ComputeOrderType extends $Enum<($BaseGraph$ComputeOrderType)> {
static readonly "DepthFirst": $BaseGraph$ComputeOrderType
static readonly "BreadthFirst": $BaseGraph$ComputeOrderType


public static "values"(): ($BaseGraph$ComputeOrderType)[]
public static "valueOf"(name: string): $BaseGraph$ComputeOrderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGraph$ComputeOrderType$Type = (("depthfirst") | ("breadthfirst")) | ($BaseGraph$ComputeOrderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGraph$ComputeOrderType_ = $BaseGraph$ComputeOrderType$Type;
}}
