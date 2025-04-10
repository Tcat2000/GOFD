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
import {$Layout, $Layout$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Layout"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $WidgetGroup extends $Widget implements $IGhostIngredientTarget, $IIngredientSlot, $IConfigurableWidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "setLayout"(layout: $Layout$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "isChild"(widget: $Widget$Type): boolean
public "setAllowXEIIngredientOverMouse"(allowXEIIngredientOverMouse: boolean): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "getContainedWidgets"(includeHidden: boolean): $List<($Widget)>
public "setClientSideWidget"(): $WidgetGroup
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "getLayout"(): $Layout
public "isAllowXEIIngredientOverMouse"(): boolean
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setGui"(gui: $ModularUI$Type): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "initWidget"(): void
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "waitToAdded"(widget: $Widget$Type): void
public "isDynamicSized"(): boolean
public "initTemplate"(): void
public "waitToRemoved"(widget: $Widget$Type): void
public "setDynamicSized"(dynamicSized: boolean): void
public "getFirstWidgetById"(regex: string): $Widget
public "getWidgetsById"(regex: string): $List<($Widget)>
public "getWidgetsByType"<T extends $Widget>(clazz: $Class$Type<(T)>): $List<(T)>
public "setLayoutPadding"(layoutPadding: integer): void
public "addWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "getAllWidgetSize"(): integer
public "clearAllWidgets"(): void
public "removeWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "removeWidget"(widget: $Widget$Type): void
public "addWidgets"(...widgets: ($Widget$Type)[]): $WidgetGroup
public "serializeInnerNBT"(): $CompoundTag
public "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
public "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
public "getLayoutPadding"(): integer
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "addWidget"<T extends $Widget>(widget: T, callback: $Consumer$Type<(T)>): $WidgetGroup
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "addWidget"(widget: $Widget$Type): $WidgetGroup
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setVisible"(visible: boolean): $WidgetGroup
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "layout"(value: $Layout$Type)
set "allowXEIIngredientOverMouse"(value: boolean)
get "layout"(): $Layout
get "allowXEIIngredientOverMouse"(): boolean
set "gui"(value: $ModularUI$Type)
get "dynamicSized"(): boolean
set "dynamicSized"(value: boolean)
set "layoutPadding"(value: integer)
get "allWidgetSize"(): integer
get "layoutPadding"(): integer
set "visible"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ConfiguratorGroup extends $Configurator {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor(name: string, isCollapse: boolean)

public "init"(width: integer): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
public "removeAllConfigurators"(): void
public "addConfigurators"(...configurators: ($Configurator$Type)[]): void
public "computeHeight"(): void
public "addConfigurator"(index: integer, configurator: $Configurator$Type): void
public "removeConfigurator"(configurator: $Configurator$Type): void
public "setCollapse"(collapse: boolean): void
public "setCanCollapse"(canCollapse: boolean): void
public "isCollapse"(): boolean
public "getConfigurators"(): $List<($Configurator)>
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
set "collapse"(value: boolean)
set "canCollapse"(value: boolean)
get "collapse"(): boolean
get "configurators"(): $List<($Configurator)>
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
public "isDrawRenderingBoxFrameLines"(): boolean
public "setDrawRenderingBoxFrameLines"(arg0: boolean): void
public "isDrawShapeFrameLines"(): boolean
public "reloadAdditionalTraits"(): void
public "setDrawShapeFrameLines"(arg0: boolean): void
public "refreshButtonGroupPosition"(): void
public "getButtonGroup"(): $WidgetGroup
public "addSwitch"(arg0: $IGuiTexture$Type, arg1: $IGuiTexture$Type, arg2: string, arg3: $BooleanSupplier$Type, arg4: $BooleanConsumer$Type): void
public "getEditor"(): $MachineEditor
public "resetScene"(): void
public "prepareButtonGroup"(): void
public "getPreviewMachine"(): $MBDMachine
public "renderAfterWorld"(arg0: $SceneWidget$Type): void
public "getScene"(): $SceneWidget
public "addButton"(arg0: $IGuiTexture$Type, arg1: string, arg2: $Runnable$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "level"(): $TrackedDummyWorld
get "drawRenderingBoxFrameLines"(): boolean
set "drawRenderingBoxFrameLines"(value: boolean)
get "drawShapeFrameLines"(): boolean
set "drawShapeFrameLines"(value: boolean)
get "buttonGroup"(): $WidgetGroup
get "editor"(): $MachineEditor
get "previewMachine"(): $MBDMachine
get "scene"(): $SceneWidget
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
 "setOnSyncListener"(arg0: $BooleanConsumer$Type): void
 "isPersistedDirty"(): boolean
 "isLazy"(): boolean
 "clearSyncDirty"(): void
 "isSyncDirty"(): boolean
 "clearPersistedDirty"(): void
 "setPersistedPrefixName"(arg0: string): void
 "markAsDirty"(): void
 "readRaw"<T>(): T
 "getPersistedKey"(): string
 "setOnPersistedListener"(arg0: $BooleanConsumer$Type): void
 "getPersistedPrefixName"(): string
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
public "bottomConnection"(): boolean
public "bottomConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "rightConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "rightConnection"(): boolean
public "topConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "topConnection"(): boolean
public "leftConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "leftConnection"(): boolean
public "backConnection"(): boolean
public "backConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "frontConnection"(arg0: boolean): $ConfigMachineSettings$SignalConnection
public "frontConnection"(): boolean
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

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $BiConsumer$Type<($ClickData$Type), (boolean)>)

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "isPressed"(): boolean
public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setPressedTexture"(...pressedTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setOnPressCallback"(onPressCallback: $BiConsumer$Type<($ClickData$Type), (boolean)>): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setPressed"(isPressed: boolean): $SwitchWidget
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $SwitchWidget
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "initTemplate"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setSupplier"(supplier: $Supplier$Type<(boolean)>): $SwitchWidget
public "setHoverBorderTexture"(border: integer, color: integer): $SwitchWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "pressed"(): boolean
set "baseTexture"(value: ($IGuiTexture$Type)[])
set "pressedTexture"(value: ($IGuiTexture$Type)[])
set "onPressCallback"(value: $BiConsumer$Type<($ClickData$Type), (boolean)>)
set "pressed"(value: boolean)
set "supplier"(value: $Supplier$Type<(boolean)>)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $MBDRecipe$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getRecipe"(): $MBDRecipe
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "recipe"(): $MBDRecipe
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

public "getPlayer"(): $LivingEntity
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getItemStack"(): $ItemStack
get "player"(): $LivingEntity
get "listenerList"(): $ListenerList
get "itemStack"(): $ItemStack
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
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$HeldItemUIFactory$HeldItemHolder, $HeldItemUIFactory$HeldItemHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder"
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
 "craftingRemainingItem": $Item

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "isMultiblockBuilder"(arg0: $ItemStack$Type): boolean
public "isMultiblockDebugger"(arg0: $ItemStack$Type): boolean
public "createUI"(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI
public "getRecipe"(arg0: $ItemStack$Type): $ResourceLocation
public "setRecipe"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "isRecipeDebugger"(arg0: $ItemStack$Type): boolean
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

constructor()
constructor(stack: $ItemStack$Type)
constructor(size: integer)
constructor(stacks: $NonNullList$Type<($ItemStack$Type)>)

public "getSlots"(): integer
public "copy"(): $ItemStackTransfer
public "setSize"(size: integer): void
public "setFilter"(filter: $Function$Type<($ItemStack$Type), (boolean)>): void
public "restoreFromSnapshot"(snapshot: any): void
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean, notifyChanges: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean, notifyChanges: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getOnContentsChanged"(): $Runnable
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "createSnapshot"(): any
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "onContentsChanged"(): void
public "onContentsChanged"(slot: integer): void
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
get "slots"(): integer
set "size"(value: integer)
set "filter"(value: $Function$Type<($ItemStack$Type), (boolean)>)
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

constructor(capacity: long)
constructor(capacity: long, validator: $Predicate$Type<($FluidStack$Type)>)
constructor(fluidStack: $FluidStack$Type)

public "drain"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): $FluidStack
public "getCapacity"(): long
public "setCapacity"(capacity: long): void
public "fill"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): long
public "copy"(): $FluidStorage
public "restoreFromSnapshot"(snapshot: any): void
public "setValidator"(validator: $Predicate$Type<($FluidStack$Type)>): void
public "setFluid"(fluid: $FluidStack$Type): void
public "supportsDrain"(tank: integer): boolean
public "supportsFill"(tank: integer): boolean
public "getOnContentsChanged"(): $Runnable
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "getFluid"(): $FluidStack
public "createSnapshot"(): any
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "onContentsChanged"(): void
public "isFluidValid"(stack: $FluidStack$Type): boolean
public "getFluidAmount"(): long
public "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
public "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
public "getTanks"(): integer
public "getFluidInTank"(tank: integer): $FluidStack
public "getTankCapacity"(tank: integer): long
public "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean): $FluidStack
public "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
public "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
public "fill"(resource: $FluidStack$Type, simulate: boolean): long
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
public "saveToTag"(nbt: $CompoundTag$Type): $CompoundTag
public "setTag"(tag: $CompoundTag$Type): void
public "setFluid"(fluid: $Fluid$Type): void
public "getAmount"(): long
public "isFluidEqual"(other: $FluidStack$Type): boolean
public "setAmount"(amount: long): void
public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $FluidStack
public "getRawFluid"(): $Fluid
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
public "isFluidStackEqual"(other: $FluidStack$Type): boolean
public "shrink"(amount: long): void
public "getFluid"(): $Fluid
public "hasTag"(): boolean
public static "loadFromTag"(nbt: $CompoundTag$Type): $FluidStack
get "tag"(): $CompoundTag
get "displayName"(): $Component
set "tag"(value: $CompoundTag$Type)
set "fluid"(value: $Fluid$Type)
get "amount"(): long
set "amount"(value: long)
get "rawFluid"(): $Fluid
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
 "createPreview"(father: $ConfiguratorGroup$Type): void
 "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
 "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer): void
 "updateTick"(): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component

(scale: float): $IGuiTexture
}

export namespace $IGuiTexture {
const EMPTY: $IGuiTexture
const MISSING_TEXTURE: $IGuiTexture
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IGuiTexture)>)>
function deserializeWrapper(tag: $CompoundTag$Type): $IGuiTexture
function serializeWrapper(texture: $IGuiTexture$Type): $CompoundTag
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/$PatternPreviewWidget$MBPattern" {
import {$TraceabilityPredicate, $TraceabilityPredicate$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$TraceabilityPredicate"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMultiController, $IMultiController$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMultiController"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PatternPreviewWidget$MBPattern {

constructor(arg0: $Map$Type<($BlockPos$Type), ($BlockInfo$Type)>, arg1: $List$Type<($List$Type<($ItemStack$Type)>)>, arg2: $Map$Type<($BlockPos$Type), ($TraceabilityPredicate$Type)>, arg3: $IMultiController$Type, arg4: $List$Type<(string)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternPreviewWidget$MBPattern$Type = ($PatternPreviewWidget$MBPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternPreviewWidget$MBPattern_ = $PatternPreviewWidget$MBPattern$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties$RenderTypes" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"

export class $ConfigBlockProperties$RenderTypes implements $IPersistedSerializable {

constructor()

public "solid"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "solid"(): boolean
public "cutout"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "cutout"(): boolean
public "cutoutMipped"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "cutoutMipped"(): boolean
public "translucent"(arg0: boolean): $ConfigBlockProperties$RenderTypes
public "translucent"(): boolean
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
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
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
 "getBlockState"(): $BlockState
 "alwaysTryModifyRecipe"(): boolean
 "notifyRecipeStatusChanged"(arg0: $RecipeLogic$Status$Type, arg1: $RecipeLogic$Status$Type): void
 "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
 "scheduleRenderUpdate"(): void
 "getRecipeDampingValue"(): integer
 "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
 "onFuelBurningFinish"(arg0: $MBDRecipe$Type): void
 "alwaysReSearchRecipe"(): boolean
 "getFrontFacing"(): $Optional<($Direction)>
 "getMaxParallel"(arg0: $MBDRecipe$Type): $ContentModifier
 "getModifiedRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "onRotated"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "hasFrontFacing"(): boolean
 "onWaiting"(): void
 "isInValid"(): boolean
 "onWorking"(): boolean
 "setFrontFacing"(arg0: $Direction$Type): void
 "afterWorking"(): void
 "getOffsetTimer"(): long
 "beforeWorking"(arg0: $MBDRecipe$Type): boolean
 "isFacingValid"(arg0: $Direction$Type): boolean
 "runRecipeLogic"(): boolean
 "getChanceTier"(): integer
 "dampingWhenWaiting"(): boolean
 "onUnload"(): void
 "getMachineLevel"(): integer
 "modifyFuelRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "applyParallel"(arg0: $MBDRecipe$Type, arg1: integer): $MBDRecipe
 "getRecipeLogic"(): $RecipeLogic
 "getRecipeType"(): $MBDRecipeType
 "notifyBlockUpdate"(): void
 "onLoad"(): void
 "getHolder"(): $BlockEntity
 "getPos"(): $BlockPos
 "markDirty"(): void
 "doModifyRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
 "hasProxies"(): boolean
}

export namespace $IMachine {
function ofMachine(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMachine)>
function ofMachine(arg0: $BlockEntity$Type): $Optional<($IMachine)>
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

 "loadCustomPersistedData"(tag: $CompoundTag$Type): void
 "saveCustomPersistedData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "loadManagedPersistentData"(tag: $CompoundTag$Type): void
 "saveManagedPersistentData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "getCurrentPos"(): $BlockPos
 "getSelf"(): $BlockEntity
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]

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
declare module "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineClientSetupEventJS" {
import {$MBDMachineEvents$MachineEventJS, $MBDMachineEvents$MachineEventJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/events/$MBDMachineEvents$MachineEventJS"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$MachineClientSetupEvent, $MachineClientSetupEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineClientSetupEvent"

export class $MBDMachineEvents$MachineClientSetupEventJS extends $MBDMachineEvents$MachineEventJS<($MachineClientSetupEvent)> {
readonly "event": E

constructor(arg0: $MachineClientSetupEvent$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMachineEvents$MachineClientSetupEventJS$Type = ($MBDMachineEvents$MachineClientSetupEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMachineEvents$MachineClientSetupEventJS_ = $MBDMachineEvents$MachineClientSetupEventJS$Type;
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
 "setFluid"(arg0: $FluidStack$Type): void
 "getFluidAmount"(): long
 "getFluid"(): $FluidStack
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
 "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
 "getTanks"(): integer
 "getFluidInTank"(tank: integer): $FluidStack
 "getTankCapacity"(tank: integer): long
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "restoreFromSnapshot"(arg0: any): void
 "supportsDrain"(arg0: integer): boolean
 "supportsFill"(arg0: integer): boolean
 "createSnapshot"(): any
 "onContentsChanged"(): void
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
public "rarity"(): $Rarity
public "creativeTab"(): $ToggleCreativeTab
public "isGui3d"(): boolean
public "useBlockLight"(): boolean
public "itemTooltips"(): $List<($Component)>
public "renderer"(): $ToggleRenderer
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "gui3d"(): boolean
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
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
 "getServer"(): $MinecraftServer
 "getPlayer"(): $ServerPlayer
 "isClient"(): boolean
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
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$ISceneObject" {
import {$IScene, $IScene$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$IScene"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/data/$Transform"

export interface $ISceneObject {

 "transform"(): $Transform
 "id"(): $UUID
 "destroy"(): void
 "children"(): $List<($ISceneObject)>
 "updateTick"(): void
 "getScene"(): $IScene
 "setSceneInternal"(arg0: $IScene$Type): void
 "onParentChanged"(): void
 "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>, before: $Consumer$Type<($ISceneObject$Type)>, after: $Consumer$Type<($ISceneObject$Type)>): void
 "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>): void
 "updateFrame"(partialTicks: float): void
 "setScene"(scene: $IScene$Type): void
 "onTransformChanged"(): void
 "onChildChanged"(): void
 "setTransform"(transform: $Transform$Type): void
 "awake"(): void
}

export namespace $ISceneObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneObject$Type = ($ISceneObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneObject_ = $ISceneObject$Type;
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition" {
import {$ConfigRecipeLogicSettings, $ConfigRecipeLogicSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigRecipeLogicSettings"
import {$MBDMachineDefinition, $MBDMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition"
import {$IMultiPart, $IMultiPart$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMultiPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MBDMultiblockMachine, $MBDMultiblockMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMultiblockMachine"
import {$ConfigMachineEvents, $ConfigMachineEvents$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineEvents"
import {$MultiblockMachineDefinition$Builder, $MultiblockMachineDefinition$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition$Builder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ConfigMultiblockSettings, $ConfigMultiblockSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMultiblockSettings"
import {$MultiblockMachineDefinition$ConfigMultiblockSettingsFactory, $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition$ConfigMultiblockSettingsFactory"
import {$BlockPattern, $BlockPattern$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$BlockPattern"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ConfigItemProperties, $ConfigItemProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigItemProperties"
import {$MBDMachineDefinition$ConfigMachineSettingsFactory, $MBDMachineDefinition$ConfigMachineSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigMachineSettingsFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MultiblockShapeInfo, $MultiblockShapeInfo$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockShapeInfo"
import {$ConfigBlockProperties, $ConfigBlockProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiblockMachineDefinition extends $MBDMachineDefinition {
static readonly "CATALYST_CANDIDATES": $Map<($Block), ($Set<($MultiblockMachineDefinition)>)>

constructor(arg0: $ResourceLocation$Type, arg1: $MachineState$Type, arg2: $ConfigBlockProperties$Type, arg3: $ConfigItemProperties$Type, arg4: $MBDMachineDefinition$ConfigMachineSettingsFactory$Type, arg5: $ConfigRecipeLogicSettings$Type, arg6: $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory$Type)

public "getPattern"(arg0: $MBDMultiblockMachine$Type): $BlockPattern
public static "builder"(): $MultiblockMachineDefinition$Builder
public "blockPatternFactory"(): $Function<($MBDMultiblockMachine), ($BlockPattern)>
public "blockPatternFactory"(arg0: $Function$Type<($MBDMultiblockMachine$Type), ($BlockPattern$Type)>): $MultiblockMachineDefinition
public "multiblockSettingsFactory"(): $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory
public static "createDefault"(): $MultiblockMachineDefinition
public "loadFactory"(): void
public "createMachineEvents"(): $ConfigMachineEvents
public "allowPartSettings"(): boolean
public "sortParts"(arg0: $List$Type<($IMultiPart$Type)>): void
public "shapeInfoFactory"(): $Function<($MultiblockMachineDefinition), (($MultiblockShapeInfo)[])>
public "shapeInfoFactory"(arg0: $Function$Type<($MultiblockMachineDefinition$Type), (($MultiblockShapeInfo$Type)[])>): $MultiblockMachineDefinition
public "multiblockSettings"(): $ConfigMultiblockSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockMachineDefinition$Type = ($MultiblockMachineDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockMachineDefinition_ = $MultiblockMachineDefinition$Type;
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
public "getRealRenderer"(): $IRenderer
public "getRotationRenderer"(): $IRenderer
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
get "realRenderer"(): $IRenderer
get "rotationRenderer"(): $IRenderer
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
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "setComponent"(component: $Component$Type): void
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): void
public "setTextProvider"(textProvider: $Supplier$Type<(string)>): void
/**
 * 
 * @deprecated
 */
public "setTextColor"(color: integer): $LabelWidget
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
/**
 * 
 * @deprecated
 */
public "setDropShadow"(dropShadow: boolean): $LabelWidget
public "detectAndSendChanges"(): void
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "color"(value: integer)
set "text"(value: string)
set "component"(value: $Component$Type)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textProvider"(value: $Supplier$Type<(string)>)
set "textColor"(value: integer)
set "dropShadow"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "setLeftRadius"(radius: float): $ColorRectTexture
public "setRightRadius"(radius: float): $ColorRectTexture
public "setTopRadius"(radius: float): $ColorRectTexture
public "setBottomRadius"(radius: float): $ColorRectTexture
public "setRadiusLB"(radiusLB: float): $ColorRectTexture
public "setRadiusLT"(radiusLT: float): $ColorRectTexture
public "setRadiusRB"(radiusRB: float): $ColorRectTexture
public "setRadiusRT"(radiusRT: float): $ColorRectTexture
public "setRadius"(radius: float): $ColorRectTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "color"(value: integer)
set "leftRadius"(value: float)
set "rightRadius"(value: float)
set "topRadius"(value: float)
set "bottomRadius"(value: float)
set "radiusLB"(value: float)
set "radiusLT"(value: float)
set "radiusRB"(value: float)
set "radiusRT"(value: float)
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
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
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
public "getSubTexture"(offsetX: float, offsetY: float, width: float, height: float): $ResourceTexture
public "getSubTexture"(offsetX: double, offsetY: double, width: double, height: double): $ResourceTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setDynamicColor"(color: $IntSupplier$Type): $ResourceTexture
public static "fromSpirit"(texture: $ResourceLocation$Type): $ResourceTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "dynamicColor"(value: $IntSupplier$Type)
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
import {$MBDMachineDefinition$ConfigMachineSettingsFactory, $MBDMachineDefinition$ConfigMachineSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigMachineSettingsFactory"
import {$MBDMachineDefinition$ConfigPartSettingsFactory, $MBDMachineDefinition$ConfigPartSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$ConfigPartSettingsFactory"
import {$ConfigBlockProperties, $ConfigBlockProperties$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigBlockProperties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"

export class $MBDMachineDefinition$Builder {


public "id"(arg0: $ResourceLocation$Type): $MBDMachineDefinition$Builder
public "build"(): $MBDMachineDefinition
public "itemProperties"(arg0: $ConfigItemProperties$Type): $MBDMachineDefinition$Builder
public "recipeLogicSettings"(arg0: $ConfigRecipeLogicSettings$Type): $MBDMachineDefinition$Builder
public "rootState"(arg0: $MachineState$Type): $MBDMachineDefinition$Builder
public "machineSettings"(arg0: $MBDMachineDefinition$ConfigMachineSettingsFactory$Type): $MBDMachineDefinition$Builder
public "partSettings"(arg0: $MBDMachineDefinition$ConfigPartSettingsFactory$Type): $MBDMachineDefinition$Builder
public "blockProperties"(arg0: $ConfigBlockProperties$Type): $MBDMachineDefinition$Builder
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

public "getInterval"(): integer
public "getFrontIO"(): $IO
public "getBackIO"(): $IO
public "setRightIO"(arg0: $IO$Type): void
public "setBottomIO"(arg0: $IO$Type): void
public "getLeftIO"(): $IO
public "getBottomIO"(): $IO
public "getRightIO"(): $IO
public "setFrontIO"(arg0: $IO$Type): void
public "setBackIO"(arg0: $IO$Type): void
public "setLeftIO"(arg0: $IO$Type): void
public "getTopIO"(): $IO
public "setTopIO"(arg0: $IO$Type): void
public "getIO"(arg0: $Direction$Type, arg1: $Direction$Type): $IO
public "setInterval"(arg0: integer): void
get "interval"(): integer
get "frontIO"(): $IO
get "backIO"(): $IO
set "rightIO"(value: $IO$Type)
set "bottomIO"(value: $IO$Type)
get "leftIO"(): $IO
get "bottomIO"(): $IO
get "rightIO"(): $IO
set "frontIO"(value: $IO$Type)
set "backIO"(value: $IO$Type)
set "leftIO"(value: $IO$Type)
get "topIO"(): $IO
set "topIO"(value: $IO$Type)
set "interval"(value: integer)
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/$TraceabilityPredicate" {
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MultiblockState, $MultiblockState$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockState"
import {$SimplePredicate, $SimplePredicate$Type} from "packages/com/lowdragmc/mbd2/api/pattern/predicates/$SimplePredicate"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export class $TraceabilityPredicate {
 "common": $List<($SimplePredicate)>
 "limited": $List<($SimplePredicate)>
 "isController": boolean

constructor(arg0: $SimplePredicate$Type)
constructor(arg0: $Predicate$Type<($MultiblockState$Type)>, arg1: $Supplier$Type<(($BlockInfo$Type)[])>)
constructor(arg0: $TraceabilityPredicate$Type)
constructor()

public "test"(arg0: $MultiblockState$Type): boolean
public "setIO"(arg0: $IO$Type): $TraceabilityPredicate
public "sort"(): $TraceabilityPredicate
public "or"(arg0: $TraceabilityPredicate$Type): $TraceabilityPredicate
public "setPreviewCount"(arg0: integer): $TraceabilityPredicate
public "addTooltips"(...arg0: ($Component$Type)[]): $TraceabilityPredicate
public "setMinLayerLimited"(arg0: integer): $TraceabilityPredicate
public "setMinLayerLimited"(arg0: integer, arg1: integer): $TraceabilityPredicate
public "addCache"(): boolean
public "setSlotName"(arg0: string): $TraceabilityPredicate
public "setMaxLayerLimited"(arg0: integer, arg1: integer): $TraceabilityPredicate
public "setMaxLayerLimited"(arg0: integer): $TraceabilityPredicate
public "setExactLimit"(arg0: integer): $TraceabilityPredicate
public "setNBT"(arg0: $CompoundTag$Type): $TraceabilityPredicate
public "isSingle"(): boolean
public "hasAir"(): boolean
public "setMaxGlobalLimited"(arg0: integer): $TraceabilityPredicate
public "setMaxGlobalLimited"(arg0: integer, arg1: integer): $TraceabilityPredicate
public "setMinGlobalLimited"(arg0: integer, arg1: integer): $TraceabilityPredicate
public "setMinGlobalLimited"(arg0: integer): $TraceabilityPredicate
public "disableRenderFormed"(): $TraceabilityPredicate
public "isAny"(): boolean
public "isAir"(): boolean
public "setController"(): $TraceabilityPredicate
set "iO"(value: $IO$Type)
set "previewCount"(value: integer)
set "minLayerLimited"(value: integer)
set "slotName"(value: string)
set "maxLayerLimited"(value: integer)
set "exactLimit"(value: integer)
set "nBT"(value: $CompoundTag$Type)
get "single"(): boolean
set "maxGlobalLimited"(value: integer)
set "minGlobalLimited"(value: integer)
get "any"(): boolean
get "air"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TraceabilityPredicate$Type = ($TraceabilityPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TraceabilityPredicate_ = $TraceabilityPredicate$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry$RL" {
import {$MBDRegistry, $MBDRegistry$Type} from "packages/com/lowdragmc/mbd2/api/registry/$MBDRegistry"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRegistry$RL<V> extends $MBDRegistry<($ResourceLocation), (V)> {
static readonly "REGISTERED": $Map<($ResourceLocation), ($MBDRegistry<(any), (any)>)>

constructor(arg0: $ResourceLocation$Type)

public "readBuf"(arg0: $FriendlyByteBuf$Type): V
public "writeBuf"(arg0: V, arg1: $FriendlyByteBuf$Type): void
public "saveToNBT"(arg0: V): $Tag
public "loadFromNBT"(arg0: $Tag$Type): V
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
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export interface $ICapabilityProviderTrait<T> {

 "getCapability"(): $Capability<(any)>
 "getCapabilityIO"(arg0: $Direction$Type): $IO
 "getCapContent"(arg0: $IO$Type): T
 "mergeContents"(arg0: $List$Type<(T)>): T
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

 "defaultServerTick"(): void
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "getSyncTag"(): string
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "getCurrentPos"(): $BlockPos
 "getSelf"(): $BlockEntity
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]

(): void
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
public "enable"(arg0: boolean): $ConfigPartSettings
public "enable"(): boolean
public "isEnable"(): boolean
public "proxyControllerCapabilities"(): $List<($ConfigPartSettings$ProxyCapability)>
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "setEnable"(arg0: boolean): void
public "recipeModifiers"(): $RecipeModifier$RecipeModifiers
public "canShare"(): boolean
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "toFluidTransfer"(handler: $IFluidHandler$Type): $IFluidTransfer
public static "toFluidHandler"(fluidTransfer: $IFluidTransfer$Type): $IFluidHandler
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
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
public "getTips"(): $List<(string)>
public "setTips"(tips: $List$Type<(string)>): $ExposedParameter<(T)>
public "deserializeNBT"(tag: $CompoundTag$Type): void
get "value"(): T
set "value"(value: any)
get "accessor"(): $ExposedParameter$ParameterAccessor
get "displayName"(): string
set "displayName"(value: string)
set "accessor"(value: $ExposedParameter$ParameterAccessor$Type)
get "tips"(): $List<(string)>
set "tips"(value: $List$Type<(string)>)
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
declare module "packages/com/lowdragmc/mbd2/integration/photon/$MachineFX" {
import {$FX, $FX$Type} from "packages/com/lowdragmc/photon/client/fx/$FX"
import {$FXEffect, $FXEffect$Type} from "packages/com/lowdragmc/photon/client/fx/$FXEffect"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$IParticleEmitter, $IParticleEmitter$Type} from "packages/com/lowdragmc/photon/client/gameobject/emitter/$IParticleEmitter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $MachineFX extends $FXEffect {
readonly "identifier": string
readonly "machine": $MBDMachine
readonly "fx": $FX
readonly "level": $Level

constructor(arg0: $FX$Type, arg1: string, arg2: $MBDMachine$Type)

public "start"(): void
public "kill"(arg0: boolean): void
public "updateEmitter"(arg0: $IParticleEmitter$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFX$Type = ($MachineFX);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineFX_ = $MachineFX$Type;
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
public "getRegisterUIClient"(): $LDLRegisterClient
public "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
public "getRegisterUI"(): $LDLRegister
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "registerUIClient"(): $LDLRegisterClient
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
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
import {$EntityRenderersEvent$RegisterRenderers, $EntityRenderersEvent$RegisterRenderers$Type} from "packages/net/minecraftforge/client/event/$EntityRenderersEvent$RegisterRenderers"
import {$BlockEntityRendererProvider, $BlockEntityRendererProvider$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider"
import {$ConfigPartSettings, $ConfigPartSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigPartSettings"
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
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
public "itemProperties"(): $ConfigItemProperties
public "onRegistry"(arg0: $RegisterEvent$Type): void
public static "createDefault"(): $MBDMachineDefinition
public "loadProductiveTag"(arg0: $File$Type, arg1: $CompoundTag$Type, arg2: $Deque$Type<($Runnable$Type)>): $MBDMachineDefinition
public "loadFactory"(): void
public "projectFile"(): $File
public "createItem"(arg0: $Block$Type): $Item
public "createBlock"(): $Block
public "initRenderer"(arg0: $EntityRenderersEvent$RegisterRenderers$Type): void
public "createItemRenderer"(): $IRenderer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "createMachine"(arg0: $IMachineBlockEntity$Type): $MBDMachine
public "createBESRR"(): $BlockEntityRendererProvider<($BlockEntity)>
public "asStack"(): $ItemStack
public "asStack"(arg0: integer): $ItemStack
public "createDefaultRootState"(): $MachineState
public "createMachineEvents"(): $ConfigMachineEvents
public "machineSettingsFactory"(): $MBDMachineDefinition$ConfigMachineSettingsFactory
public "partSettingsFactory"(): $MBDMachineDefinition$ConfigPartSettingsFactory
public "recipeLogicSettings"(): $ConfigRecipeLogicSettings
public "blockEntityType"(): $BlockEntityType<(any)>
public "isCreatedFromProjectFile"(): boolean
public "createBlockRenderer"(): $IRenderer
public "reloadFromProjectFile"(): void
public "itemRenderer"(): $IRenderer
public "uiCreator"(): $Function<($MBDMachine), ($WidgetGroup)>
public "machineEvents"(): $ConfigMachineEvents
public "allowPartSettings"(): boolean
public "machineSettings"(): $ConfigMachineSettings
public "partSettings"(): $ConfigPartSettings
public "stateMachine"(): $StateMachine<(any)>
public "blockProperties"(): $ConfigBlockProperties
public "getDescriptionId"(): string
public "blockRenderer"(): $IRenderer
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "createdFromProjectFile"(): boolean
get "descriptionId"(): string
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
 "getUniformMap"(): $Map<(string), ($Uniform)>
 "getBlend"(): $BlendMode
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

public "capabilityIO"(): $CapabilityIO
public "autoIO"(): $ToggleAutoIO
public "traitNameFilter"(): string
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public static "insertItem"(dest: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type): void
public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type, preferredSlot: integer): void
public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "canItemStacksStack"(first: $ItemStack$Type, second: $ItemStack$Type): boolean
public static "canItemStacksStackRelaxed"(a: $ItemStack$Type, b: $ItemStack$Type): boolean
public static "copyStackWithSize"(stack: $ItemStack$Type, size: integer): $ItemStack
public static "insertItemStacked"(inventory: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
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
public "chance"(arg0: float): $MBDRecipeBuilder
public "recipeType"(arg0: $MBDRecipeType$Type): $MBDRecipeBuilder
public "addCondition"(arg0: $RecipeCondition$Type): $MBDRecipeBuilder
public "slotName"(arg0: string): $MBDRecipeBuilder
public "dimension"(arg0: $ResourceLocation$Type, arg1: boolean): $MBDRecipeBuilder
public "dimension"(arg0: $ResourceLocation$Type): $MBDRecipeBuilder
public "thunder"(arg0: float, arg1: float): $MBDRecipeBuilder
public "thunder"(arg0: float, arg1: float, arg2: boolean): $MBDRecipeBuilder
public "inputs"<T>(arg0: $RecipeCapability$Type<(T)>, ...arg1: (any)[]): $MBDRecipeBuilder
public "uiName"(arg0: string): $MBDRecipeBuilder
public "isFuel"(arg0: boolean): $MBDRecipeBuilder
public "biome"(arg0: $ResourceLocation$Type, arg1: boolean): $MBDRecipeBuilder
public "biome"(arg0: $ResourceLocation$Type): $MBDRecipeBuilder
public "posY"(arg0: integer, arg1: integer): $MBDRecipeBuilder
public "posY"(arg0: integer, arg1: integer, arg2: boolean): $MBDRecipeBuilder
public "onSave"(arg0: $BiConsumer$Type<($MBDRecipeBuilder$Type), ($Consumer$Type<($FinishedRecipe$Type)>)>): $MBDRecipeBuilder
public "buildRawRecipe"(): $MBDRecipe
public "inputItems"(arg0: $TagKey$Type<($Item$Type)>): $MBDRecipeBuilder
public "inputItems"(arg0: $Item$Type, arg1: integer): $MBDRecipeBuilder
public "inputItems"(arg0: $Item$Type): $MBDRecipeBuilder
public "inputItems"(arg0: $Supplier$Type<(any)>): $MBDRecipeBuilder
public "inputItems"(...arg0: ($Ingredient$Type)[]): $MBDRecipeBuilder
public "inputItems"(...arg0: ($ItemStack$Type)[]): $MBDRecipeBuilder
public "inputItems"(arg0: $TagKey$Type<($Item$Type)>, arg1: integer): $MBDRecipeBuilder
public "inputItems"(arg0: $Supplier$Type<(any)>, arg1: integer): $MBDRecipeBuilder
public "outputItems"(arg0: $Supplier$Type<(any)>): $MBDRecipeBuilder
public "outputItems"(...arg0: ($ItemStack$Type)[]): $MBDRecipeBuilder
public "outputItems"(arg0: $Supplier$Type<(any)>, arg1: integer): $MBDRecipeBuilder
public "outputItems"(arg0: $Item$Type, arg1: integer): $MBDRecipeBuilder
public "outputItems"(arg0: $Item$Type): $MBDRecipeBuilder
public "tierChanceBoost"(arg0: float): $MBDRecipeBuilder
public "outputFluids"(...arg0: ($FluidStack$Type)[]): $MBDRecipeBuilder
public "outputFluids"(...arg0: ($FluidIngredient$Type)[]): $MBDRecipeBuilder
public "perTick"(arg0: boolean): $MBDRecipeBuilder
public "outputs"<T>(arg0: $RecipeCapability$Type<(T)>, ...arg1: (any)[]): $MBDRecipeBuilder
public "saveAsBuiltinRecipe"(): $MBDRecipe
public "disableDistilleryRecipes"(arg0: boolean): $MBDRecipeBuilder
public "rain"(arg0: float, arg1: float): $MBDRecipeBuilder
public "rain"(arg0: float, arg1: float, arg2: boolean): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: string): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: long): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: float): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: integer): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: $Tag$Type): $MBDRecipeBuilder
public "addData"(arg0: string, arg1: boolean): $MBDRecipeBuilder
public static "ofRaw"(): $MBDRecipeBuilder
public "fusionStartEU"(arg0: long): $MBDRecipeBuilder
public "explosivesAmount"(arg0: integer): $MBDRecipeBuilder
public "itemOutputs"(...arg0: ($ItemStack$Type)[]): $MBDRecipeBuilder
public "blastFurnaceTemp"(arg0: integer): $MBDRecipeBuilder
public "explosivesType"(arg0: $ItemStack$Type): $MBDRecipeBuilder
public "notConsumable"(arg0: $ItemStack$Type): $MBDRecipeBuilder
public "notConsumable"(arg0: $Supplier$Type<(any)>): $MBDRecipeBuilder
public "notConsumable"(arg0: $Item$Type): $MBDRecipeBuilder
public "inputFluids"(...arg0: ($FluidStack$Type)[]): $MBDRecipeBuilder
public "inputFluids"(...arg0: ($FluidIngredient$Type)[]): $MBDRecipeBuilder
public "solderMultiplier"(arg0: integer): $MBDRecipeBuilder
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

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "updateScreen"(): void
public "getImage"(): $IGuiTexture
public "getBorderColor"(): integer
public "getBorder"(): integer
public "setBorder"(border: integer, color: integer): $ImageWidget
public "setImage"(textureSupplier: $Supplier$Type<($IGuiTexture$Type)>): $ImageWidget
public "setImage"(area: $IGuiTexture$Type): $ImageWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "image"(): $IGuiTexture
get "borderColor"(): integer
get "border"(): integer
set "image"(value: $Supplier$Type<($IGuiTexture$Type)>)
set "image"(value: $IGuiTexture$Type)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public "getTab"<T extends $MenuTab>(name: string): T
public "initWidget"(): void
public "getEditor"(): $Editor
public "getTabs"(): $Map<(string), ($MenuTab)>
public "saveMenuData"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "editor"(): $Editor
get "tabs"(): $Map<(string), ($MenuTab)>
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
public "chance"(): float
public "chance"(arg0: float, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "chance"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "deserialize"(arg0: boolean): void
public "addCondition"(arg0: $RecipeCondition$Type): $MBDRecipeSchema$MBDRecipeJS
public "redstoneSignal"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "machineLevel"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "slotName"(): string
public "slotName"(arg0: string, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "slotName"(arg0: string): $MBDRecipeSchema$MBDRecipeJS
public "dimension"(arg0: $ResourceLocation$Type): $MBDRecipeSchema$MBDRecipeJS
public "conditions"(): $List<($RecipeCondition)>
public "inputs"(): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "inputs"(arg0: $RecipeCapability$Type<(any)>, ...arg1: (any)[]): $MBDRecipeSchema$MBDRecipeJS
public "uiName"(arg0: string): $MBDRecipeSchema$MBDRecipeJS
public "uiName"(arg0: string, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "uiName"(): string
public "thundering"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "raining"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "isFuel"(arg0: boolean): $MBDRecipeSchema$MBDRecipeJS
public "isFuel"(): boolean
public "serialize"(): void
public "machineData"(arg0: $CompoundTag$Type, arg1: boolean): $MBDRecipeSchema$MBDRecipeJS
public "biome"(arg0: $ResourceLocation$Type): $MBDRecipeSchema$MBDRecipeJS
public "positionY"(arg0: integer, arg1: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputItems"(...arg0: ($InputItem$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputItems"(...arg0: ($InputItem$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "tierChanceBoost"(): float
public "tierChanceBoost"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "tierChanceBoost"(arg0: float, arg1: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "outputFluids"(...arg0: ($MBDRecipeSchema$FluidIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "perTick"(arg0: $MBDRecipeSchema$MBDRecipeJS$RecipeBuilder$Type): $MBDRecipeSchema$MBDRecipeJS
public "perTick"(arg0: boolean): $MBDRecipeSchema$MBDRecipeJS
public "perTick"(): boolean
public "outputs"(arg0: $RecipeCapability$Type<(any)>, ...arg1: (any)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputs"(): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "inputEntities"(...arg0: ($MBDRecipeSchema$EntityIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputFE"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputFE"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputMana"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "addDataNumber"(arg0: string, arg1: double): $MBDRecipeSchema$MBDRecipeJS
public "outputEntities"(...arg0: ($MBDRecipeSchema$EntityIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "addDataString"(arg0: string, arg1: string): $MBDRecipeSchema$MBDRecipeJS
public "addDataBoolean"(arg0: string, arg1: boolean): $MBDRecipeSchema$MBDRecipeJS
public "inputSlurries"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputRPM"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "outputSlurries"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputInfusions"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputAura"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "outputAura"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "inputEmber"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "outputStress"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "outputPNCAir"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "outputMana"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "outputPNCHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "inputHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "inputPNCPressure"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "outputEU"(arg0: long): $MBDRecipeSchema$MBDRecipeJS
public "inputPNCHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "inputPNCAir"(arg0: integer): $MBDRecipeSchema$MBDRecipeJS
public "outputHeat"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "inputEU"(arg0: long): $MBDRecipeSchema$MBDRecipeJS
public "inputRPM"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "outputEmber"(arg0: double): $MBDRecipeSchema$MBDRecipeJS
public "outputPNCPressure"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "inputGases"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "inputStress"(arg0: float): $MBDRecipeSchema$MBDRecipeJS
public "outputGases"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "dayLight"(arg0: boolean): $MBDRecipeSchema$MBDRecipeJS
public "rotationCondition"(arg0: float, arg1: float, arg2: float, arg3: float): $MBDRecipeSchema$MBDRecipeJS
public "inputPigments"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputPigments"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "outputInfusions"(...arg0: (string)[]): $MBDRecipeSchema$MBDRecipeJS
public "blocksInStructure"(arg0: integer, arg1: integer, ...arg2: ($Block$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "addData"(arg0: string, arg1: $Tag$Type): $MBDRecipeSchema$MBDRecipeJS
public "inputFluids"(...arg0: ($MBDRecipeSchema$FluidIngredientJS$Type)[]): $MBDRecipeSchema$MBDRecipeJS
public "pncTemperatureCondition"(arg0: float, arg1: float): $MBDRecipeSchema$MBDRecipeJS
public "mekTemperatureCondition"(arg0: double, arg1: double): $MBDRecipeSchema$MBDRecipeJS
public "inputItemsDurability"(...arg0: ($InputItem$Type)[]): $MBDRecipeSchema$MBDRecipeJS
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
public static "fromJson"(arg0: $JsonElement$Type, arg1: boolean): $FluidIngredient
public static "fromJson"(arg0: $JsonElement$Type): $FluidIngredient
public "setNbt"(arg0: $CompoundTag$Type): void
public "getNbt"(): $CompoundTag
public "getStacks"(): ($FluidStack)[]
public "getAmount"(): long
public "setAmount"(arg0: long): void
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $FluidIngredient
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public static "fromValues"(arg0: $Stream$Type<(any)>, arg1: long, arg2: $CompoundTag$Type): $FluidIngredient
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($FluidStack)>
get "empty"(): boolean
set "nbt"(value: $CompoundTag$Type)
get "nbt"(): $CompoundTag
get "stacks"(): ($FluidStack)[]
get "amount"(): long
set "amount"(value: long)
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

public "createSoundType"(): $ForgeSoundType
public "fallSoundEvent"(): $SoundEvent
public "fallSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "stepSoundEvent"(): $SoundEvent
public "stepSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "getFallSoundEvent"(): $SoundEvent
public "getBreakSoundEvent"(): $SoundEvent
public "getStepSoundEvent"(): $SoundEvent
public "getPlaceSoundEvent"(): $SoundEvent
public "getHitSoundEvent"(): $SoundEvent
public "hitSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "hitSoundEvent"(): $SoundEvent
public "breakSoundEvent"(): $SoundEvent
public "breakSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "placeSoundEvent"(): $SoundEvent
public "placeSoundEvent"(arg0: $SoundEvent$Type): $ConfigBlockProperties$BlockSound
public "createSoundConfigurator"(arg0: string, arg1: $Consumer$Type<($ResourceLocation$Type)>, arg2: $Supplier$Type<($ResourceLocation$Type)>): $Configurator
public "placeSound"(): $ResourceLocation
public "placeSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "pitchIn"(): float
public "pitchIn"(arg0: float): $ConfigBlockProperties$BlockSound
public "fallSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "fallSound"(): $ResourceLocation
public "breakSound"(): $ResourceLocation
public "breakSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "hitSound"(): $ResourceLocation
public "hitSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "stepSound"(arg0: $ResourceLocation$Type): $ConfigBlockProperties$BlockSound
public "stepSound"(): $ResourceLocation
public "volumeIn"(): float
public "volumeIn"(arg0: float): $ConfigBlockProperties$BlockSound
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setOnSelected"(onSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $SelectableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $SelectableWidgetGroup
public "onSelected"(): void
public "onUnSelected"(): void
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "setPrefab"(prefab: any): void
public "getPrefab"<T>(): T
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "selected"(): boolean
set "selectedTexture"(value: $IGuiTexture$Type)
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
public "getRecipeManager"(): $RecipeManager
public "onChanged"(): void
public "setDuration"(arg0: integer): void
public "scheduleRenderUpdate"(): void
public "inValid"(): void
public "getLastRecipe"(): $MBDRecipe
public "isWorking"(): boolean
public "handleTickRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe$ActionResult
public "setupRecipe"(arg0: $MBDRecipe$Type): void
public "setWaiting"(arg0: $Component$Type): void
public "handleFuelRecipe"(): boolean
public "onRecipeFinish"(): void
public "isSuspend"(): boolean
public "interruptRecipe"(): void
public "setLastFuelRecipe"(arg0: $MBDRecipe$Type): void
public "isRecipeDirty"(): boolean
public "setLastRecipe"(arg0: $MBDRecipe$Type): void
public "getLastFuelRecipe"(): $MBDRecipe
public "setWorkingEnabled"(arg0: boolean): void
public "setFuelTime"(arg0: integer): void
public "setFuelMaxTime"(arg0: integer): void
public "getFuelProgressPercent"(): double
public "getStatus"(): $RecipeLogic$Status
public "serverTick"(): void
public "getProgress"(): integer
public "getMachine"(): $IMachine
public "isIdle"(): boolean
public "setStatus"(arg0: $RecipeLogic$Status$Type): void
public "getFuelMaxTime"(): integer
public "getWaitingReason"(): $Component
public "isWaiting"(): boolean
public "needFuel"(): boolean
public "getFuelTime"(): integer
public "getProgressPercent"(): double
public "setProgress"(arg0: integer): void
public "getMaxProgress"(): integer
public "getFieldHolder"(): $ManagedFieldHolder
public "resetRecipeLogic"(): void
public "handleRecipeWorking"(): void
/**
 * 
 * @deprecated
 */
public "isHasNotEnoughEnergy"(): boolean
public "findAndHandleRecipe"(): void
public "getLastOriginRecipe"(): $MBDRecipe
public "markLastRecipeDirty"(): void
public "getTotalContinuousRunningTime"(): long
public "setTotalContinuousRunningTime"(arg0: long): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "markDirty"(name: string): void
public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
get "active"(): boolean
get "duration"(): integer
get "recipeManager"(): $RecipeManager
set "duration"(value: integer)
get "lastRecipe"(): $MBDRecipe
get "working"(): boolean
set "upRecipe"(value: $MBDRecipe$Type)
set "waiting"(value: $Component$Type)
get "suspend"(): boolean
set "lastFuelRecipe"(value: $MBDRecipe$Type)
get "recipeDirty"(): boolean
set "lastRecipe"(value: $MBDRecipe$Type)
get "lastFuelRecipe"(): $MBDRecipe
set "workingEnabled"(value: boolean)
set "fuelTime"(value: integer)
set "fuelMaxTime"(value: integer)
get "fuelProgressPercent"(): double
get "status"(): $RecipeLogic$Status
get "progress"(): integer
get "machine"(): $IMachine
get "idle"(): boolean
set "status"(value: $RecipeLogic$Status$Type)
get "fuelMaxTime"(): integer
get "waitingReason"(): $Component
get "waiting"(): boolean
get "fuelTime"(): integer
get "progressPercent"(): double
set "progress"(value: integer)
get "maxProgress"(): integer
get "fieldHolder"(): $ManagedFieldHolder
get "hasNotEnoughEnergy"(): boolean
get "lastOriginRecipe"(): $MBDRecipe
get "totalContinuousRunningTime"(): long
set "totalContinuousRunningTime"(value: long)
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
public static "of"(...resources: ($Resource$Type<(any)>)[]): $Resources
public "merge"(resources: $Resources$Type): void
public "dispose"(): void
/**
 * 
 * @deprecated
 */
public static "defaultResource"(): $Resources
public static "fromNBT"(tag: $CompoundTag$Type): $Resources
public static "emptyResource"(): $Resources
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
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
public "recipeType"(): $ResourceLocation
public "isEnable"(): boolean
public "getRecipeType"(): $MBDRecipeType
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "setEnable"(arg0: boolean): void
public "recipeModifiers"(): $RecipeModifier$RecipeModifiers
public "alwaysModifyRecipe"(): boolean
public "alwaysSearchRecipe"(): boolean
public "recipeDampingValue"(): integer
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "enable"(): boolean
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
 "markAllDirty"(): void
 "getManaged"(): ($IManaged)[]
 "getSyncFields"(): ($IRef)[]
 "hasDirtyPersistedFields"(): boolean
 "removeAllSyncUpdateListener"(arg0: $ManagedKey$Type): void
 "markDirty"(key: $ManagedKey$Type): void
 "addSyncUpdateListener"<T>(arg0: $ManagedKey$Type, arg1: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "getPersistedFields"(): ($IRef)[]
 "hasSyncListener"(arg0: $ManagedKey$Type): boolean
 "notifyFieldUpdate"<T>(arg0: $ManagedKey$Type, arg1: T, arg2: T): void
 "hasDirtySyncFields"(): boolean
 "getNonLazyFields"(): ($IRef)[]
 "getFieldByKey"(arg0: $ManagedKey$Type): $IRef
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
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
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

constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor()

public "getHandler"(): $Slot
public "getItem"(): $ItemStack
public "setSize"(size: $Size$Type): void
public "isEnabled"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$Type): $SlotWidget
public "getFullTooltipTexts"(): $List<($Component)>
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $SlotWidget
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "getXEICurrentIngredient"(): any
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "detectAndSendChanges"(): void
public "setItem"(stack: $ItemStack$Type, notify: boolean): void
public "setItem"(stack: $ItemStack$Type): void
public "setGui"(gui: $ModularUI$Type): void
public "getTooltipTexts"(): $List<($Component)>
public "initTemplate"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "setHandlerSlot"(itemHandler: $IItemTransfer$Type, slotIndex: integer): $SlotWidget
public "canPutStack"(stack: $ItemStack$Type): boolean
public "setContainerSlot"(inventory: $Container$Type, slotIndex: integer): $SlotWidget
public "setLocationInfo"(isPlayerContainer: boolean, isPlayerHotBar: boolean): $SlotWidget
public "getIngredientIO"(): $IngredientIO
public "canTakeStack"(player: $Player$Type): boolean
public "onSlotChanged"(): void
public "getRealStack"(itemStack: $ItemStack$Type): $ItemStack
public "getXEIIngredients"(): $List<(any)>
public "getXEIChance"(): float
public "setChangeListener"(changeListener: $Runnable$Type): $SlotWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>): $SlotWidget
public "setCanPutItems"(canPutItems: boolean): $SlotWidget
public "setDrawHoverTips"(drawHoverTips: boolean): $SlotWidget
public "setCanTakeItems"(canTakeItems: boolean): $SlotWidget
public "setItemHook"(itemHook: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>): $SlotWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
public "getLastItem"(): $ItemStack
public "setXEIChance"(XEIChance: float): $SlotWidget
public "self"(): $Widget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "kjs$self"(): $SlotWidget
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "handler"(): $Slot
get "item"(): $ItemStack
set "size"(value: $Size$Type)
get "enabled"(): boolean
set "backgroundTexture"(value: $IGuiTexture$Type)
get "fullTooltipTexts"(): $List<($Component)>
set "drawHoverOverlay"(value: boolean)
get "xEICurrentIngredient"(): any
set "item"(value: $ItemStack$Type)
set "gui"(value: $ModularUI$Type)
get "tooltipTexts"(): $List<($Component)>
get "ingredientIO"(): $IngredientIO
get "xEIIngredients"(): $List<(any)>
get "xEIChance"(): float
set "changeListener"(value: $Runnable$Type)
set "onAddedTooltips"(value: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>)
set "canPutItems"(value: boolean)
set "drawHoverTips"(value: boolean)
set "canTakeItems"(value: boolean)
set "itemHook"(value: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>)
set "ingredientIO"(value: $IngredientIO$Type)
get "lastItem"(): $ItemStack
set "xEIChance"(value: float)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public "getRecipeType"(arg0: $ResourceLocation$Type): $MBDRecipeType
public "createRecipeType"(arg0: $ResourceLocation$Type): $MBDRecipeType
public "removeRecipeType"(arg0: $ResourceLocation$Type): void
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

public "isWait"(): boolean
public "setLoopType"(arg0: $AnimationStage$LoopType$Type): $AnimationStage
public "setAnimationName"(arg0: string): $AnimationStage
public "getLoopType"(): $AnimationStage$LoopType
public "getAnimationName"(): string
public "getAdditionalTicks"(): integer
public "setWait"(arg0: boolean): $AnimationStage
public "setAdditionalTicks"(arg0: integer): $AnimationStage
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "wait"(): boolean
set "loopType"(value: $AnimationStage$LoopType$Type)
set "animationName"(value: string)
get "loopType"(): $AnimationStage$LoopType
get "animationName"(): string
get "additionalTicks"(): integer
set "wait"(value: boolean)
set "additionalTicks"(value: integer)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public "setImageSize"(width: integer, height: integer): $ResourceBorderTexture
public "setBorderSize"(width: integer, height: integer): $ResourceBorderTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
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

constructor(x: integer, y: integer, width: integer, height: integer)
constructor(position: $Position$Type, size: $Size$Type)
constructor(pos1: $Position$Type, pos2: $Position$Type)

public "intersects"(other: $Position$Type): boolean
public "intersects"(other: $PositionedRect$Type): boolean
public "getPosition"(): $Position
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Size
get "position"(): $Position
get "size"(): $Size
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
 "callNextContainerCounter"(): void
 "getContainerCounter"(): integer
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
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
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
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"

export interface $IContentSerializer<T> {

 "of"(arg0: any): T
 "toJson"(arg0: T): $JsonElement
 "fromJson"(arg0: $JsonElement$Type): T
 "toNBT"(arg0: $Content$Type): $CompoundTag
 "toNBT"(arg0: T): $Tag
 "toJsonContent"(arg0: $Content$Type): $JsonElement
 "fromNetwork"(arg0: $FriendlyByteBuf$Type): T
 "fromNetworkContent"(arg0: $FriendlyByteBuf$Type): $Content
 "toNetworkContent"(arg0: $FriendlyByteBuf$Type, arg1: $Content$Type): void
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromJsonContent"(arg0: $JsonElement$Type): $Content
 "copyInner"(arg0: T): T
 "copyWithModifier"(arg0: T, arg1: $ContentModifier$Type): T
 "fromNBT"(arg0: $CompoundTag$Type): $Content
 "fromNBT"(arg0: $Tag$Type): T
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

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $Block$Type, arg2: $BlockPos$Type)

public "getBlock"(): $Block
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getFromPos"(): $BlockPos
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/util/$PatternMatchContext" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $PatternMatchContext {

constructor()

public "getOrCreate"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
public "get"<T>(arg0: string): T
public "getInt"(arg0: string): integer
public "entrySet"(): $Set<($Map$Entry<(string), (any)>)>
public "increment"(arg0: string, arg1: integer): void
public "set"(arg0: string, arg1: any): void
public "containsKey"(arg0: string): boolean
public "getOrDefault"<T>(arg0: string, arg1: T): T
public "reset"(): void
public "getOrPut"<T>(arg0: string, arg1: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternMatchContext$Type = ($PatternMatchContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternMatchContext_ = $PatternMatchContext$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/pattern/predicates/$SimplePredicate" {
import {$IAutoPersistedSerializable, $IAutoPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IAutoPersistedSerializable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$MultiblockState, $MultiblockState$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockState"
import {$ToggleDirection, $ToggleDirection$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleDirection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TraceabilityPredicate, $TraceabilityPredicate$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$TraceabilityPredicate"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export class $SimplePredicate implements $IAutoPersistedSerializable, $IConfigurable {
static "ANY": $SimplePredicate
static "AIR": $SimplePredicate
 "candidates": $Supplier<(($BlockInfo)[])>
 "predicate": $Predicate<($MultiblockState)>
 "previewTexture": $Supplier<($IGuiTexture)>
 "minCount": integer
 "maxCount": integer
 "minLayerCount": integer
 "maxLayerCount": integer
 "previewCount": integer
 "disableRenderFormed": boolean
 "io": $IO
 "slotName": string
 "nbt": $CompoundTag
 "controllerNbt": $CompoundTag
 "controllerFront": $ToggleDirection
readonly "toolTips": $List<($Component)>
 "allowOpenUI": boolean

constructor(arg0: $Predicate$Type<($MultiblockState$Type)>, arg1: $Supplier$Type<(($BlockInfo$Type)[])>)

public "name"(): string
public "test"(arg0: $MultiblockState$Type): boolean
public "getCandidates"(): $List<($ItemStack)>
public "getPreviewTexture"(): $IGuiTexture
public "buildPredicate"(): $SimplePredicate
public "testGlobal"(arg0: $MultiblockState$Type): boolean
public "testLimited"(arg0: $MultiblockState$Type): boolean
public "testLayer"(arg0: $MultiblockState$Type): boolean
public "getToolTips"(arg0: $TraceabilityPredicate$Type): $List<($Component)>
public static "deserializeWrapper"(arg0: $CompoundTag$Type): $SimplePredicate
public static "serializeWrapper"(arg0: $SimplePredicate$Type): $CompoundTag
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "getTranslateKey"(): string
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "candidates"(): $List<($ItemStack)>
get "previewTexture"(): $IGuiTexture
get "translateKey"(): string
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplePredicate$Type = ($SimplePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplePredicate_ = $SimplePredicate$Type;
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCatalyst$CatalystType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ToggleCatalyst$CatalystType extends $Enum<($ToggleCatalyst$CatalystType)> {
static readonly "CONSUME_ITEM": $ToggleCatalyst$CatalystType
static readonly "CONSUME_DURABILITY": $ToggleCatalyst$CatalystType
readonly "translateKey": string


public static "values"(): ($ToggleCatalyst$CatalystType)[]
public static "valueOf"(arg0: string): $ToggleCatalyst$CatalystType
public "getTranslateKey"(): string
get "translateKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleCatalyst$CatalystType$Type = (("consume_durability") | ("consume_item")) | ($ToggleCatalyst$CatalystType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleCatalyst$CatalystType_ = $ToggleCatalyst$CatalystType$Type;
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
 "isRemote"(): boolean
 "createUI"(arg0: $Player$Type): $ModularUI
 "markAsDirty"(): void
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
public "getManaged"(): ($IManaged)[]
public "getSyncFields"(): ($IRef)[]
public "hasDirtyPersistedFields"(): boolean
public "removeAllSyncUpdateListener"(key: $ManagedKey$Type): void
public "initEnhancedFeature"(): void
public "addSyncUpdateListener"<T>(key: $ManagedKey$Type, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "getPersistedFields"(): ($IRef)[]
public "hasSyncListener"(key: $ManagedKey$Type): boolean
public "notifyFieldUpdate"<T>(key: $ManagedKey$Type, newVal: T, oldVal: T): void
public "hasDirtySyncFields"(): boolean
public "getNonLazyFields"(): ($IRef)[]
public "getFieldByKey"(key: $ManagedKey$Type): $IRef
public "markAllDirty"(): void
public "markDirty"(key: $ManagedKey$Type): void
get "managed"(): ($IManaged)[]
get "syncFields"(): ($IRef)[]
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
public "createDefaultContent"(): T
public "copyInner"(arg0: T): T
public "deepCopyContent"(arg0: any): T
public "deepCopyContent"(arg0: any, arg1: $ContentModifier$Type): T
public "copyWithModifier"(arg0: T, arg1: $ContentModifier$Type): T
public "createXEITemplate"(): $Widget
public "calculateAmount"(arg0: $List$Type<(T)>): double
public "createContentConfigurator"(arg0: $ConfiguratorGroup$Type, arg1: $Supplier$Type<(T)>, arg2: $Consumer$Type<(T)>): void
public "createPreviewWidget"(arg0: T): $Widget
public "getTraslateComponent"(): $Component
public "bindXEIWidget"(arg0: $Widget$Type, arg1: $Content$Type, arg2: $IngredientIO$Type): void
public "copyContent"(arg0: any): T
public "copyContent"(arg0: any, arg1: $ContentModifier$Type): T
public "getLeftErrorInfo"(arg0: $List$Type<(T)>): $Component
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
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
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

public "getMaxParallel"(arg0: $RecipeLogic$Type, arg1: $MBDRecipe$Type): $ContentModifier
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "applyModifiers"(arg0: $RecipeLogic$Type, arg1: $MBDRecipe$Type): $MBDRecipe
public "deserializeNBT"(arg0: $ListTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/photon/client/gameobject/emitter/$IParticleEmitter" {
import {$Emitter, $Emitter$Type} from "packages/com/lowdragmc/photon/client/gameobject/emitter/$Emitter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/data/$Transform"
import {$IEffect, $IEffect$Type} from "packages/com/lowdragmc/photon/client/fx/$IEffect"
import {$IScene, $IScene$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$IScene"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"
import {$ISceneObject, $ISceneObject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$ISceneObject"

export interface $IParticleEmitter extends $IFXObject, $IConfigurable {

 "self"(): $Emitter
 "getVelocity"(): $Vector3f
 "setAge"(arg0: integer): void
 "getRandomSource"(): $RandomSource
 "setRGBAColor"(arg0: $Vector4f$Type): void
 "getMemRandom"(arg0: any): float
 "getMemRandom"(arg0: any, arg1: $Function$Type<($RandomSource$Type), (float)>): float
 "getAge"(): integer
 "getT"(arg0: float): float
 "getT"(): float
 "isLooping"(): boolean
 "getCullBox"(partialTicks: float): $AABB
 "getLightColor"(arg0: $BlockPos$Type): integer
 "getRGBAColor"(): $Vector4f
 "getParticleAmount"(): integer
 "isDev"(): boolean
 "getName"(): string
 "remove"(arg0: boolean): void
 "setName"(arg0: string): void
 "copy"(deep: boolean): $IFXObject
 "reset"(): void
 "getLevel"(): $Level
 "setLevel"(arg0: $Level$Type): void
 "deepCopy"(): $IFXObject
 "m_107276_"(): boolean
 "getEffect"(): $IEffect
 "updatePos"(newPos: $Vector3f$Type): void
 "emmit"(effect: $IEffect$Type): void
 "emmit"(effect: $IEffect$Type, position: $Vector3f$Type, rotation: $Quaternionf$Type, scale: $Vector3f$Type): void
 "updateRotation"(newRot: $Vector3f$Type): void
 "updateRotation"(newRot: $Quaternionf$Type): void
 "updateScale"(newScale: $Vector3f$Type): void
 "copyTransformFrom"(fxObject: $IFXObject$Type): void
 "copyTransformFrom"(fxObject: $IFXObject$Type, local: boolean, copyParent: boolean): void
 "shallowCopy"(): $IFXObject
 "setEffect"(arg0: $IEffect$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
 "deserializeNBT"(tag: $CompoundTag$Type): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "transform"(): $Transform
 "id"(): $UUID
 "destroy"(): void
 "children"(): $List<($ISceneObject)>
 "updateTick"(): void
 "getScene"(): $IScene
 "setSceneInternal"(arg0: $IScene$Type): void
 "onParentChanged"(): void
 "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>, before: $Consumer$Type<($ISceneObject$Type)>, after: $Consumer$Type<($ISceneObject$Type)>): void
 "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>): void
 "updateFrame"(partialTicks: float): void
 "setScene"(scene: $IScene$Type): void
 "onTransformChanged"(): void
 "onChildChanged"(): void
 "setTransform"(transform: $Transform$Type): void
 "awake"(): void
 "name"(): string
 "group"(): string
 "getRegisterUIClient"(): $LDLRegisterClient
 "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
}

export namespace $IParticleEmitter {
function deserializeWrapper(tag: $CompoundTag$Type): $IFXObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParticleEmitter$Type = ($IParticleEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IParticleEmitter_ = $IParticleEmitter$Type;
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
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $FluidIngredient$Value {

 "copy"(): $FluidIngredient$Value
 "getStacks"(): $Collection<($Fluid)>
 "serialize"(): $JsonObject
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

 "getDraggingItem"(): $ItemStack
 "setSnapbackItem"(arg0: $ItemStack$Type): void
 "getSnapbackItem"(): $ItemStack
 "isSplittingStack"(): boolean
 "getSnapbackTime"(): long
 "getSnapbackEnd"(): $Slot
 "getSnapbackStartY"(): integer
 "getSnapbackStartX"(): integer
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
declare module "packages/com/lowdragmc/photon/client/fx/$FXData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"

export class $FXData extends $Record implements $ITagSerializable<($CompoundTag)> {

constructor()
constructor(objects: $List$Type<($IFXObject$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "objects"(): $List<($IFXObject)>
public "deserializeNBT"(tag: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FXData$Type = ($FXData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FXData_ = $FXData$Type;
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
public static "clearCache"(): void
public static "createRawShader"(rawShader: string): $ShaderTexture
public "getRawShader"(): string
public static "createShader"(location: $ResourceLocation$Type): $ShaderTexture
public "setResolution"(resolution: float): $ShaderTexture
public "getResolution"(): float
public "updateShader"(location: $ResourceLocation$Type): void
public "setUniformCache"(uniformCache: $Consumer$Type<($UniformCache$Type)>): $ShaderTexture
public "updateRawShader"(rawShader: string): void
public "bindTexture"(samplerName: string, location: $ResourceLocation$Type): void
public "bindTexture"(samplerName: string, id: integer): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
get "rawShader"(): string
set "resolution"(value: float)
get "resolution"(): float
set "uniformCache"(value: $Consumer$Type<($UniformCache$Type)>)
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
public static "getIcon"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): $IGuiTexture
public static "isCrossLine"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): boolean
public "crossLine"(): $TreeBuilder$Menu
public "leaf"(name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public "leaf"(icon: $IGuiTexture$Type, name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
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
declare module "packages/com/lowdragmc/photon/client/gameobject/emitter/$Emitter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ConcurrentHashMap, $ConcurrentHashMap$Type} from "packages/java/util/concurrent/$ConcurrentHashMap"
import {$PhotonParticleRenderType, $PhotonParticleRenderType$Type} from "packages/com/lowdragmc/photon/client/gameobject/emitter/$PhotonParticleRenderType"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/data/$Transform"
import {$FXObject, $FXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$FXObject"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IParticleEmitter, $IParticleEmitter$Type} from "packages/com/lowdragmc/photon/client/gameobject/emitter/$IParticleEmitter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Emitter extends $FXObject implements $IParticleEmitter {
 "name": string
readonly "transform": $Transform
static "NO_RENDER_RENDER_TYPE": $ParticleRenderType


public "reset"(): void
public "setDelay"(delay: integer): void
public "isAlive"(): boolean
public "tick"(): void
public "getVelocity"(): $Vector3f
public "setAge"(age: integer): void
public "getRandomSource"(): $RandomSource
public "setRGBAColor"(color: $Vector4f$Type): void
public "getMemRandom"(object: any, randomFunc: $Function$Type<($RandomSource$Type), (float)>): float
public "getMemRandom"(object: any): float
public "getMemRandom"(): $ConcurrentHashMap<(any), (float)>
public "getAge"(): integer
public "getDelay"(): integer
public "getThreadSafeRandomSource"(): $RandomSource
public "getT"(): float
public "getT"(partialTicks: float): float
public "isLooping"(): boolean
public "setPos"(x: double, y: double, z: double): void
public "getLightColor"(pos: $BlockPos$Type): integer
public "getRGBAColor"(): $Vector4f
public "getRenderType"(): $PhotonParticleRenderType
public "self"(): $Emitter
public "getCullBox"(partialTicks: float): $AABB
public "getParticleAmount"(): integer
public "isDev"(): boolean
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IFXObject
set "delay"(value: integer)
get "alive"(): boolean
get "velocity"(): $Vector3f
set "age"(value: integer)
get "randomSource"(): $RandomSource
set "rGBAColor"(value: $Vector4f$Type)
get "memRandom"(): $ConcurrentHashMap<(any), (float)>
get "age"(): integer
get "delay"(): integer
get "threadSafeRandomSource"(): $RandomSource
get "t"(): float
get "looping"(): boolean
get "rGBAColor"(): $Vector4f
get "renderType"(): $PhotonParticleRenderType
get "particleAmount"(): integer
get "dev"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emitter$Type = ($Emitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emitter_ = $Emitter$Type;
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
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Rect, $Rect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Rect"
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

public "getPosition"(): $Position
public "getParent"(): $WidgetGroup
public "getId"(): string
public "getSize"(): $Size
public "isActive"(): boolean
public "setSize"(width: integer, height: integer): void
public "setSize"(size: $Size$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "setFocus"(focus: boolean): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "isClientSideWidget"(): boolean
public "setUiAccess"(uiAccess: $WidgetUIAccess$Type): $Widget
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "toRectangleBox"(): $Rect2i
public "setId"(id: string): $Widget
public "getOverlay"(): $IGuiTexture
public "getGui"(): $ModularUI
public "isInitialized"(): boolean
public "animation"(animation: $Animation$Type): void
public "isRemote"(): boolean
public "setDraggingProvider"<T>(draggingProvider: $Supplier$Type<(T)>, draggingRenderer: $BiFunction$Type<(T), ($Position$Type), ($IGuiTexture$Type)>): $Widget
public "setDraggingConsumer"(draggingAccept: $Predicate$Type<(any)>, draggingIn: $Consumer$Type<(any)>, draggingOut: $Consumer$Type<(any)>, draggingSuccess: $Consumer$Type<(any)>): $Widget
public static "playButtonClickSound"(): void
public "setHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "appendHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "appendHoverTooltips"(...tooltipText: (string)[]): $Widget
public "appendHoverTooltips"(tooltipText: $List$Type<($Component$Type)>): $Widget
public "setDrawBackgroundWhenHover"(drawBackgroundWhenHover: boolean): $Widget
public "setClientSideWidget"(): $Widget
public "getBackgroundTexture"(): $IGuiTexture
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setActive"(isActive: boolean): $Widget
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "isFocus"(): boolean
public "inAnimate"(): boolean
public "setSelfPosition"(x: integer, y: integer): void
public "setSelfPosition"(selfPosition: $Position$Type): void
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $Widget
public "setGui"(gui: $ModularUI$Type): void
public "isParent"(widgetGroup: $WidgetGroup$Type): boolean
public "setParentPosition"(parentPosition: $Position$Type): void
public "getPositionY"(): integer
public "getSizeWidth"(): integer
public "getSizeHeight"(): integer
public "getSelfPosition"(): $Position
public "getSelfPositionY"(): integer
public "setSizeHeight"(height: integer): void
public static "isMouseOver"(x: integer, y: integer, width: integer, height: integer, mouseX: double, mouseY: double): boolean
public "getPositionX"(): integer
public "setSizeWidth"(width: integer): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "initWidget"(): void
public "addSelfPosition"(addX: integer, addY: integer): $Position
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setSelfPositionX"(x: integer): void
public "setSelfPositionY"(y: integer): void
public "getRect"(): $Rect
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "getSelfPositionX"(): integer
public static "isKeyDown"(keyCode: integer): boolean
public "setAlign"(align: $Align$Type): $Widget
public "getTooltipTexts"(): $List<($Component)>
public "getAnimation"(): $Animation
public "getAlign"(): $Align
public "getParentPosition"(): $Position
public static "isShiftDown"(): boolean
public static "isAltDown"(): boolean
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public static "isCtrlDown"(): boolean
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "isMouseDown"(button: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setOverlay"(overlay: $IGuiTexture$Type): $Widget
public "setVisible"(isVisible: boolean): $Widget
public "setBackground"(...backgroundTexture: ($IGuiTexture$Type)[]): $Widget
public "isVisible"(): boolean
get "position"(): $Position
get "parent"(): $WidgetGroup
get "id"(): string
get "size"(): $Size
get "active"(): boolean
set "size"(value: $Size$Type)
set "focus"(value: boolean)
get "clientSideWidget"(): boolean
set "uiAccess"(value: $WidgetUIAccess$Type)
set "id"(value: string)
get "overlay"(): $IGuiTexture
get "gui"(): $ModularUI
get "initialized"(): boolean
get "remote"(): boolean
set "hoverTooltips"(value: ($Component$Type)[])
set "drawBackgroundWhenHover"(value: boolean)
get "backgroundTexture"(): $IGuiTexture
set "active"(value: boolean)
get "focus"(): boolean
set "selfPosition"(value: $Position$Type)
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "gui"(value: $ModularUI$Type)
set "parentPosition"(value: $Position$Type)
get "positionY"(): integer
get "sizeWidth"(): integer
get "sizeHeight"(): integer
get "selfPosition"(): $Position
get "selfPositionY"(): integer
set "sizeHeight"(value: integer)
get "positionX"(): integer
set "sizeWidth"(value: integer)
set "selfPositionX"(value: integer)
set "selfPositionY"(value: integer)
get "rect"(): $Rect
get "selfPositionX"(): integer
set "align"(value: $Align$Type)
get "tooltipTexts"(): $List<($Component)>
get "align"(): $Align
get "parentPosition"(): $Position
get "shiftDown"(): boolean
get "altDown"(): boolean
get "ctrlDown"(): boolean
set "overlay"(value: $IGuiTexture$Type)
set "visible"(value: boolean)
set "background"(value: ($IGuiTexture$Type)[])
get "visible"(): boolean
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
public "getWidth"(): integer
public "getHeight"(): integer
public "addHeight"(height: integer): $Size
public "addWidth"(width: integer): $Size
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

public "onPanelDeselected"(): void
public "onPanelSelected"(): void
public "renderAfterWorld"(arg0: $SceneWidget$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineClientSetupEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MachineClientSetupEvent extends $MachineEvent {
readonly "machine": $MBDMachine
readonly "pos": $BlockPos
readonly "blockState": $BlockState
 "instruction": string

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getBlockState"(): $BlockState
public "getListenerList"(): $ListenerList
public "getPos"(): $BlockPos
public "getMachine"(): $MBDMachine
public "getInstruction"(): string
public "setInstruction"(arg0: string): void
get "blockState"(): $BlockState
get "listenerList"(): $ListenerList
get "pos"(): $BlockPos
get "machine"(): $MBDMachine
get "instruction"(): string
set "instruction"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineClientSetupEvent$Type = ($MachineClientSetupEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineClientSetupEvent_ = $MachineClientSetupEvent$Type;
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
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"

export class $CreateKineticMachineDefinition extends $MBDMachineDefinition {


public static "builder"(): $CreateKineticMachineDefinition$Builder
public static "createDefault"(): $CreateKineticMachineDefinition
public "loadProductiveTag"(arg0: $File$Type, arg1: $CompoundTag$Type, arg2: $Deque$Type<($Runnable$Type)>): $MBDMachineDefinition
public "createBlock"(): $Block
public "initRenderer"(arg0: $EntityRenderersEvent$RegisterRenderers$Type): void
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "createDefaultRootState"(): $MachineState
public "kineticMachineSettings"(): $ConfigKineticMachineSettings
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
public "updateTick"(): void
public "getColor"(): integer
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
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
declare module "packages/com/lowdragmc/mbd2/common/machine/$MBDMultiblockMachine" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMachine, $IMachine$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMachine"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$BlockPattern, $BlockPattern$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$BlockPattern"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MultiblockState, $MultiblockState$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockState"
import {$IMachineBlockEntity, $IMachineBlockEntity$Type} from "packages/com/lowdragmc/mbd2/api/blockentity/$IMachineBlockEntity"
import {$IMultiPart, $IMultiPart$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Lock, $Lock$Type} from "packages/java/util/concurrent/locks/$Lock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IMultiController, $IMultiController$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMultiController"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$RecipeLogic$Status, $RecipeLogic$Status$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status"
import {$MultiblockMachineDefinition, $MultiblockMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MBDMultiblockMachine extends $MBDMachine implements $IMultiController {

constructor(arg0: $IMachineBlockEntity$Type, arg1: $MultiblockMachineDefinition$Type, ...arg2: (any)[])

public "getPattern"(): $BlockPattern
public "getDefinition"(): $MultiblockMachineDefinition
public "alwaysTryModifyRecipe"(): boolean
public "notifyRecipeStatusChanged"(arg0: $RecipeLogic$Status$Type, arg1: $RecipeLogic$Status$Type): void
public "onStructureInvalid"(arg0: boolean): void
public "isFormedValid"(): boolean
public "getMaxParallel"(arg0: $MBDRecipe$Type): $ContentModifier
public "setOriginalBlock"(arg0: $BlockState$Type): void
public "getModifiedRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
public "onCatalystUsed"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type): boolean
public "onStructureFormed"(): void
public "getPatternLock"(): $Lock
public "onRotated"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "onWaiting"(): void
public "onWorking"(): boolean
public "onPartUnload"(): void
public "afterWorking"(): void
public "beforeWorking"(arg0: $MBDRecipe$Type): boolean
public "runRecipeLogic"(): boolean
public "onUnload"(): void
public "onLoad"(): void
public "serverTick"(): void
public "getOriginalBlock"(): $BlockState
public "getRenderingDisabledPositions"(): $Set<($BlockPos)>
public "initCapabilitiesProxy"(): void
public "getMultiblockState"(): $MultiblockState
public "isFormed"(): boolean
public "onUse"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getParts"(): $List<($IMultiPart)>
public "shouldOpenUI"(arg0: $InteractionHand$Type, arg1: $BlockHitResult$Type): boolean
public "getFieldHolder"(): $ManagedFieldHolder
public "getDropItem"(): $ItemStack
public "setFormed"(arg0: boolean): void
public "getPartPositions"(): ($BlockPos)[]
public "checkPattern"(): boolean
public "checkPatternWithLock"(): boolean
public "shouldAddPartToController"(arg0: $IMultiPart$Type): boolean
public "checkPatternWithTryLock"(): boolean
public "onStructureInvalid"(): void
public "asyncCheckPattern"(arg0: long): void
public "getPartAppearance"(arg0: $IMultiPart$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): $BlockState
public static "ofController"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMultiController)>
public static "ofController"(arg0: $BlockEntity$Type): $Optional<($IMultiController)>
public static "ofMachine"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMachine)>
public static "ofMachine"(arg0: $BlockEntity$Type): $Optional<($IMachine)>
get "pattern"(): $BlockPattern
get "definition"(): $MultiblockMachineDefinition
get "formedValid"(): boolean
set "originalBlock"(value: $BlockState$Type)
get "patternLock"(): $Lock
get "originalBlock"(): $BlockState
get "renderingDisabledPositions"(): $Set<($BlockPos)>
get "multiblockState"(): $MultiblockState
get "formed"(): boolean
get "parts"(): $List<($IMultiPart)>
get "fieldHolder"(): $ManagedFieldHolder
get "dropItem"(): $ItemStack
set "formed"(value: boolean)
get "partPositions"(): ($BlockPos)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MBDMultiblockMachine$Type = ($MBDMultiblockMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MBDMultiblockMachine_ = $MBDMultiblockMachine$Type;
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
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
public "getConfiguratorContainer"(): $IConfiguratorContainer
/**
 * 
 * @deprecated
 */
public "getTab"(): $ConfigPanel$Tab
public "addListener"(listener: $Consumer$Type<($Configurator$Type)>): void
public "getListeners"(): $List<($Consumer<($Configurator)>)>
public "getWidth"(): integer
/**
 * 
 * @deprecated
 */
public "getConfigPanel"(): $ConfigPanel
/**
 * 
 * @deprecated
 */
public "setConfigPanel"(configPanel: $ConfigPanel$Type, tab: $ConfigPanel$Tab$Type): void
public "getNameWidget"(): $LabelWidget
public "notifyChanges"(source: $Configurator$Type): void
public "notifyChanges"(): void
public "computeLayout"(): void
public "getLeftWidth"(): integer
public "getRightWidth"(): integer
public "computeHeight"(): void
public "isInit"(): boolean
public "setTips"(...tips: (string)[]): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "name"(): string
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
get "configuratorContainer"(): $IConfiguratorContainer
get "tab"(): $ConfigPanel$Tab
get "listeners"(): $List<($Consumer<($Configurator)>)>
get "width"(): integer
get "configPanel"(): $ConfigPanel
get "nameWidget"(): $LabelWidget
get "leftWidth"(): integer
get "rightWidth"(): integer
set "tips"(value: (string)[])
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

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "drainFrom"(ingredient: any): $FluidStack
public static "checkJEIIngredient"(ingredient: any): any
public "setAllowClickDrained"(v: boolean): $PhantomFluidWidget
public "setPhantomFluidGetter"(phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>): void
public "getLastPhantomStack"(): $FluidStack
public "setPhantomFluidSetter"(phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>): void
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "allowClickDrained"(value: boolean)
set "phantomFluidGetter"(value: $Supplier$Type<($FluidStack$Type)>)
get "lastPhantomStack"(): $FluidStack
set "phantomFluidSetter"(value: $Consumer$Type<($FluidStack$Type)>)
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

public "getContentType"(): $Type
public "getName"(): string
public "getAccessor"(): $IAccessor
public "setPersistentKey"(persistentKey: string): void
public "setRedOnlyManaged"(onDirtyMethod: $Method$Type, serializeMethod: $Method$Type, deserializeMethod: $Method$Type): void
public "isPersist"(): boolean
public "isReadOnlyManaged"(): boolean
public "isDestSync"(): boolean
public "getOnDirtyMethod"(): $Method
public "getRawField"(): $Field
public "getPersistentKey"(): string
public "getSerializeMethod"(): $Method
public "isLazy"(): boolean
public "readSyncedField"(field: $IRef$Type, force: boolean): $ITypedPayload<(any)>
public "writePersistedField"(field: $IRef$Type, nbt: $Tag$Type): void
public "readPersistedField"(field: $IRef$Type): $Tag
public "writeSyncedField"(field: $IRef$Type, payload: $ITypedPayload$Type<(any)>): void
public "getDeserializeMethod"(): $Method
public "createRef"(instance: any): $IRef
public "isDrop"(): boolean
get "contentType"(): $Type
get "name"(): string
get "accessor"(): $IAccessor
set "persistentKey"(value: string)
get "persist"(): boolean
get "readOnlyManaged"(): boolean
get "destSync"(): boolean
get "onDirtyMethod"(): $Method
get "rawField"(): $Field
get "persistentKey"(): string
get "serializeMethod"(): $Method
get "lazy"(): boolean
get "deserializeMethod"(): $Method
get "drop"(): boolean
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
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourceContainer<T, C extends $Widget> extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(resource: $Resource$Type<(T)>, panel: $ResourcePanel$Type)

public "getResource"(): $Resource<(T)>
public "updateScreen"(): void
public "getPanel"(): $ResourcePanel
public "setOnAdd"(onAdd: $Function$Type<(string), (T)>): $ResourceContainer<(T), (C)>
public "getWidgets"(): $Map<($Either<(string), ($File)>), (C)>
public "initWidget"(): void
public "setOnRemove"(onRemove: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnEdit"(onEdit: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<($Either$Type<(string), ($File$Type)>), (D)>, draggingRenderer: $Function$Type<(D), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<($Either$Type<(string), ($File$Type)>), (D)>, draggingRenderer: $TriFunction$Type<($Either$Type<(string), ($File$Type)>), (D), ($Position$Type), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setWidgetSupplier"(widgetSupplier: $Function$Type<($Either$Type<(string), ($File$Type)>), (C)>): $ResourceContainer<(T), (C)>
public "reBuild"(): void
public "getWidgetSupplier"(): $Function<($Either<(string), ($File)>), (C)>
public "setRenamePredicate"(renamePredicate: $Predicate$Type<(string)>): $ResourceContainer<(T), (C)>
public "setNameSupplier"(nameSupplier: $Supplier$Type<(string)>): $ResourceContainer<(T), (C)>
public "getSelected"(): $Either<(string), ($File)>
public "setOnGlobalChange"(onGlobalChange: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setOnMenu"(onMenu: $BiConsumer$Type<($Either$Type<(string), ($File$Type)>), ($TreeBuilder$Menu$Type)>): $ResourceContainer<(T), (C)>
public "setCanRemove"(canRemove: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setCanGlobalChange"(canGlobalChange: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setCanEdit"(canEdit: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "resource"(): $Resource<(T)>
get "panel"(): $ResourcePanel
set "onAdd"(value: $Function$Type<(string), (T)>)
get "widgets"(): $Map<($Either<(string), ($File)>), (C)>
set "onRemove"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
set "onEdit"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
set "widgetSupplier"(value: $Function$Type<($Either$Type<(string), ($File$Type)>), (C)>)
get "widgetSupplier"(): $Function<($Either<(string), ($File)>), (C)>
set "renamePredicate"(value: $Predicate$Type<(string)>)
set "nameSupplier"(value: $Supplier$Type<(string)>)
get "selected"(): $Either<(string), ($File)>
set "onGlobalChange"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
set "onMenu"(value: $BiConsumer$Type<($Either$Type<(string), ($File$Type)>), ($TreeBuilder$Menu$Type)>)
set "canRemove"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "canGlobalChange"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "canEdit"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
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
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
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
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>

constructor(modularUI: $ModularUI$Type, windowId: integer)

public "render"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseMoved"(mouseX: double, mouseY: double): void
public "mouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseClicked"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, pButton: integer, pDragX: double, pDragY: double): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "m_7856_"(): void
public "setHoverTooltip"(tooltipTexts: $List$Type<($Component$Type)>, tooltipStack: $ItemStack$Type, tooltipFont: $Font$Type, tooltipComponent: $TooltipComponent$Type): void
public "getDraggingElement"(): any
public "setDraggingElement"(element: any, renderer: $IGuiTexture$Type): boolean
public "renderFloatingItem"(graphics: $GuiGraphics$Type, stack: $ItemStack$Type, x: integer, y: integer, amountText: string): void
public "superMouseClicked"(mouseX: double, mouseY: double, mouseButton: integer): void
public "setHoveredSlot"(hoveredSlot: $Slot$Type): void
public "isButtonPressed"(button: integer): boolean
public "superMouseDragged"(pMouseX: double, pMouseY: double, pButton: integer, pDragX: double, pDragY: double): void
public "getQuickCrafting"(): boolean
public "switchFocus"(widget: $Widget$Type): boolean
public "getQuickCraftSlots"(): $Set<($Slot)>
public "getGuiExtraAreas"(): $List<($Rect2i)>
public "superMouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "superKeyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superMouseMoved"(mouseX: double, mouseY: double): void
public "superKeyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superCharTyped"(codePoint: character, modifiers: integer): boolean
public "superMouseReleased"(mouseX: double, mouseY: double, state: integer): void
public "removed"(): void
public "handleWidgetUpdate"(packet: $SPacketUIWidgetUpdate$Type): void
public "m_181908_"(): void
get "draggingElement"(): any
set "hoveredSlot"(value: $Slot$Type)
get "quickCrafting"(): boolean
get "quickCraftSlots"(): $Set<($Slot)>
get "guiExtraAreas"(): $List<($Rect2i)>
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCatalyst$ToggleCandidates" {
import {$ToggleObject, $ToggleObject$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ToggleCatalyst$ToggleCandidates extends $ToggleObject<(($Block)[])> {

constructor()
constructor(arg0: boolean)
constructor(arg0: ($Block$Type)[])
constructor(arg0: ($Block$Type)[], arg1: boolean)

public "setValue"(arg0: ($Block$Type)[]): void
set "value"(value: ($Block$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleCatalyst$ToggleCandidates$Type = ($ToggleCatalyst$ToggleCandidates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleCatalyst$ToggleCandidates_ = $ToggleCatalyst$ToggleCandidates$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IEnhancedManaged" {
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IEnhancedManaged extends $IManaged {

 "scheduleRenderUpdate"(): void
 "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
 "onChanged"(): void
 "markDirty"(name: string): void
 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "getSyncStorage"(): $IManagedStorage
 "getFieldHolder"(): $ManagedFieldHolder
 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
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

public "getBlock"(): $BlockContainerJS
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
get "block"(): $BlockContainerJS
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
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
 "getSelf"(): $BlockEntity
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]

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
public "getMachine"(arg0: $ResourceLocation$Type): $MBDMachineDefinition
public "removeMachine"(arg0: $ResourceLocation$Type): void
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

public "setInteractionResult"(arg0: $InteractionResult$Type): void
public "getInteractionResult"(): $InteractionResult
public "getHand"(): $InteractionHand
public "getPlayer"(): $Player
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getHeldItem"(): $ItemStack
public "getHit"(): $BlockHitResult
set "interactionResult"(value: $InteractionResult$Type)
get "interactionResult"(): $InteractionResult
get "hand"(): $InteractionHand
get "player"(): $Player
get "listenerList"(): $ListenerList
get "heldItem"(): $ItemStack
get "hit"(): $BlockHitResult
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
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$List, $List$Type} from "packages/java/util/$List"
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
public "updateScreenSize"(screenWidth: integer, screenHeight: integer): void
public "setModularUIGui"(modularUIGuiContainer: $ModularUIGuiContainer$Type): void
public "getModularUIContainer"(): $ModularUIContainer
public "toScreenCoords"(widgetRect: $Rectangle$Type): $Rectangle
public "setFullScreen"(): void
public "isFullScreen"(): boolean
public "getSlotMap"(): $HashMap<($Slot), ($SlotWidget)>
public "registerCloseListener"(runnable: $Runnable$Type): void
public "initWidgets"(): void
public "background"(...textures: ($IGuiTexture$Type)[]): $ModularUI
public "triggerCloseListeners"(): void
public "setModularUIContainer"(container: $ModularUIContainer$Type): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getModularUIGui"(): $ModularUIGuiContainer
public "getFirstWidgetById"(regex: string): $Widget
public "getWidgetsById"(regex: string): $List<($Widget)>
public "getFlatVisibleWidgetCollection"(): $List<($Widget)>
public "getFlatWidgetCollection"(): $List<($Widget)>
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "widget"(widget: $Widget$Type): $ModularUI
public "getTickCount"(): long
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "addNativeSlot"(slotHandle: $Slot$Type, slotWidget: $SlotWidget$Type): void
public "removeNativeSlot"(slotHandle: $Slot$Type): void
set "modularUIGui"(value: $ModularUIGuiContainer$Type)
get "modularUIContainer"(): $ModularUIContainer
get "fullScreen"(): boolean
get "slotMap"(): $HashMap<($Slot), ($SlotWidget)>
set "modularUIContainer"(value: $ModularUIContainer$Type)
get "width"(): integer
get "height"(): integer
get "modularUIGui"(): $ModularUIGuiContainer
get "flatVisibleWidgetCollection"(): $List<($Widget)>
get "flatWidgetCollection"(): $List<($Widget)>
get "guiLeft"(): integer
get "guiTop"(): integer
get "tickCount"(): long
get "screenWidth"(): integer
get "screenHeight"(): integer
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
declare module "packages/com/lowdragmc/mbd2/common/trait/item/$ItemFilterSettings" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IToggleConfigurable, $IToggleConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IToggleConfigurable"

export class $ItemFilterSettings implements $IToggleConfigurable, $Predicate<($ItemStack)> {

constructor()

public "test"(arg0: $ItemStack$Type): boolean
public "setMatchNBT"(arg0: boolean): void
public "isMatchNBT"(): boolean
public "isEnable"(): boolean
public "getFilterItems"(): $List<($ItemStack)>
public "getFilterTags"(): $List<($ResourceLocation)>
public "setWhitelist"(arg0: boolean): void
public "setFilterItems"(arg0: $List$Type<($ItemStack$Type)>): void
public "isWhitelist"(): boolean
public "setFilterTags"(arg0: $List$Type<($ResourceLocation$Type)>): void
public "setEnable"(arg0: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($ItemStack)>
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "matchNBT"(value: boolean)
get "matchNBT"(): boolean
get "enable"(): boolean
get "filterItems"(): $List<($ItemStack)>
get "filterTags"(): $List<($ResourceLocation)>
set "whitelist"(value: boolean)
set "filterItems"(value: $List$Type<($ItemStack$Type)>)
get "whitelist"(): boolean
set "filterTags"(value: $List$Type<($ResourceLocation$Type)>)
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilterSettings$Type = ($ItemFilterSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilterSettings_ = $ItemFilterSettings$Type;
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

public "getHand"(): $InteractionHand
public "getPlayer"(): $Player
public "getHeld"(): $ItemStack
get "hand"(): $InteractionHand
get "player"(): $Player
get "held"(): $ItemStack
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
declare module "packages/com/lowdragmc/photon/client/gameobject/$IFXObject" {
import {$IAutoPersistedSerializable, $IAutoPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IAutoPersistedSerializable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ILDLRegisterClient, $ILDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegisterClient"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/data/$Transform"
import {$IEffect, $IEffect$Type} from "packages/com/lowdragmc/photon/client/fx/$IEffect"
import {$IScene, $IScene$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$IScene"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"
import {$ISceneObject, $ISceneObject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$ISceneObject"

export interface $IFXObject extends $ISceneObject, $IAutoPersistedSerializable, $IConfigurable, $ILDLRegisterClient {

 "getName"(): string
 "remove"(arg0: boolean): void
 "setName"(arg0: string): void
 "copy"(deep: boolean): $IFXObject
 "reset"(): void
 "getLevel"(): $Level
 "setLevel"(arg0: $Level$Type): void
 "deepCopy"(): $IFXObject
 "m_107276_"(): boolean
 "getEffect"(): $IEffect
 "updatePos"(newPos: $Vector3f$Type): void
 "emmit"(effect: $IEffect$Type): void
 "emmit"(effect: $IEffect$Type, position: $Vector3f$Type, rotation: $Quaternionf$Type, scale: $Vector3f$Type): void
 "updateRotation"(newRot: $Vector3f$Type): void
 "updateRotation"(newRot: $Quaternionf$Type): void
 "updateScale"(newScale: $Vector3f$Type): void
 "copyTransformFrom"(fxObject: $IFXObject$Type): void
 "copyTransformFrom"(fxObject: $IFXObject$Type, local: boolean, copyParent: boolean): void
 "shallowCopy"(): $IFXObject
 "setEffect"(arg0: $IEffect$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
 "deserializeNBT"(tag: $CompoundTag$Type): void
 "transform"(): $Transform
 "id"(): $UUID
 "destroy"(): void
 "children"(): $List<($ISceneObject)>
 "updateTick"(): void
 "getScene"(): $IScene
 "setSceneInternal"(arg0: $IScene$Type): void
 "onParentChanged"(): void
 "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>, before: $Consumer$Type<($ISceneObject$Type)>, after: $Consumer$Type<($ISceneObject$Type)>): void
 "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>): void
 "updateFrame"(partialTicks: float): void
 "setScene"(scene: $IScene$Type): void
 "onTransformChanged"(): void
 "onChildChanged"(): void
 "setTransform"(transform: $Transform$Type): void
 "awake"(): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "getRegisterUIClient"(): $LDLRegisterClient
 "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
}

export namespace $IFXObject {
function deserializeWrapper(tag: $CompoundTag$Type): $IFXObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFXObject$Type = ($IFXObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFXObject_ = $IFXObject$Type;
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
declare module "packages/com/lowdragmc/photon/client/fx/$FXRuntime" {
import {$FX, $FX$Type} from "packages/com/lowdragmc/photon/client/fx/$FX"
import {$IScene, $IScene$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$IScene"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FXData, $FXData$Type} from "packages/com/lowdragmc/photon/client/fx/$FXData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IEffect, $IEffect$Type} from "packages/com/lowdragmc/photon/client/fx/$IEffect"
import {$ISceneObject, $ISceneObject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$ISceneObject"

export class $FXRuntime implements $IScene {
readonly "fx": $FX
readonly "fxData": $FXData
readonly "objects": $Map<($UUID), ($IFXObject)>
readonly "root": $IFXObject

constructor(fx: $FX$Type, fxData: $FXData$Type, copy: boolean, deepCopy: boolean)

public "isAlive"(): boolean
public "destroy"(force: boolean): void
public "getRoot"(): $IFXObject
public "isCopy"(): boolean
public "getFx"(): $FX
public "getObjects"(): $Map<($UUID), ($IFXObject)>
public "emmit"(effect: $IEffect$Type): void
public "removeSceneObjectInternal"(sceneObject: $ISceneObject$Type): void
public "getFxData"(): $FXData
public "addSceneObject"(sceneObject: $ISceneObject$Type): void
public "addSceneObjectInternal"(sceneObject: $ISceneObject$Type): void
public "findObject"(name: string): $IFXObject
public "findObjects"(name: string): $List<($IFXObject)>
public "getSceneObject"(uuid: $UUID$Type): $ISceneObject
public "removeSceneObject"(sceneObject: $ISceneObject$Type): void
public "getAllSceneObjects"(): $Collection<($ISceneObject)>
public "awake"(): void
get "alive"(): boolean
get "root"(): $IFXObject
get "copy"(): boolean
get "fx"(): $FX
get "objects"(): $Map<($UUID), ($IFXObject)>
get "fxData"(): $FXData
get "allSceneObjects"(): $Collection<($ISceneObject)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FXRuntime$Type = ($FXRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FXRuntime_ = $FXRuntime$Type;
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
public "expand"(x: integer, y: integer): $Rect
public "expand"(expand: integer): $Rect
public "withDownFixedHeight"(height: integer): $Rect
public "withRightFixedWidth"(width: integer): $Rect
public static "ofRelative"(left: integer, width: integer, up: integer, height: integer): $Rect
public "withLeft"(left: integer): $Rect
public "withRight"(right: integer): $Rect
public "getWidth"(): integer
public "getHeight"(): integer
public static "ofAbsolute"(left: integer, right: integer, up: integer, down: integer): $Rect
public "toLeftUp"(): $Position
public "toLeftCenter"(): $Position
public "verticalExpand"(up: integer, down: integer): $Rect
public "verticalExpand"(y: integer): $Rect
public "withUpFixedHeight"(height: integer): $Rect
public "expandLeft"(expand: integer): $Rect
public "expandRight"(expand: integer): $Rect
public "isCollide"(rect: $Rect$Type): boolean
public "leftAnd"(y: integer): $Position
public "withLeftFixedWidth"(width: integer): $Rect
public "toLeftDown"(): $Position
public "moveHorizontal"(delta: integer): $Rect
public "horizontalExpand"(x: integer): $Rect
public "horizontalExpand"(left: integer, right: integer): $Rect
public "downAnd"(x: integer): $Position
public "toUpCenter"(): $Position
public "expandDown"(expand: integer): $Rect
public "withDown"(down: integer): $Rect
public "toRightDown"(): $Position
public "expandUp"(expand: integer): $Rect
public "upAnd"(x: integer): $Position
public "toDownCenter"(): $Position
public "rightAnd"(y: integer): $Position
public "toRightUp"(): $Position
public "withUp"(up: integer): $Rect
public "toRightCenter"(): $Position
public "moveVertical"(delta: integer): $Rect
public "getHeightCenter"(): integer
public "getWidthCenter"(): integer
get "width"(): integer
get "height"(): integer
get "heightCenter"(): integer
get "widthCenter"(): integer
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

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setOverlayTexture"(overlayTexture: $IGuiTexture$Type): $ProgressWidget
public "setProgressTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressWidget
public "setProgressTexture"(progressTexture: $IGuiTexture$Type): $ProgressWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressWidget
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setProgressSupplier"(progressSupplier: $DoubleSupplier$Type): $ProgressWidget
public "setDynamicHoverTips"(dynamicHoverTips: $Function$Type<(double), (string)>): $ProgressWidget
public "detectAndSendChanges"(): void
public "initWidget"(): void
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "getLastProgressValue"(): double
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "overlayTexture"(value: $IGuiTexture$Type)
set "progressTexture"(value: $IGuiTexture$Type)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "progressSupplier"(value: $DoubleSupplier$Type)
set "dynamicHoverTips"(value: $Function$Type<(double), (string)>)
get "lastProgressValue"(): double
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "glUniformBoolean"(location: string, value: boolean): void
public "glUniform1I"(location: string, v0: integer): void
public "glUniform4F"(location: string, v0: float, v1: float, v2: float, v3: float): void
public "glUniform4I"(location: string, v0: integer, v1: integer, v2: integer, v3: integer): void
public "glUniform3F"(location: string, v0: float, v1: float, v2: float): void
public "fillRGBAColor"(location: string, color: integer): void
public "glUniformMatrix"(location: string, callback: $IntConsumer$Type, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniform3I"(location: string, v0: integer, v1: integer, v2: integer): void
public "glUniform2I"(location: string, v0: integer, v1: integer): void
public "glUniformMatrix4F"(location: string, matrix4f: $Matrix4f$Type): void
public "glUniform1F"(location: string, v0: float): void
public "glUniform2F"(location: string, v0: float, v1: float): void
public "glUniformMatrix2"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformMatrix4"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
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
import {$File, $File$Type} from "packages/java/io/$File"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$StaticResource, $StaticResource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$StaticResource"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Resource<T> {

constructor()
constructor(staticLocation: $File$Type)

public "name"(): string
public "toString"(): string
public "getResource"(key: $Either$Type<(string), ($File$Type)>): T
public "merge"(resource: $Resource$Type<(T)>): void
public "getStaticResourceFile"(name: string): $File
public "getStaticResourceSuffix"(): string
public "getBuiltinResources"(): $Map<(string), (T)>
public "getStaticResourceName"(file: $File$Type): string
public "loadAndUpdateStaticResource"(): boolean
public "supportStaticResource"(): boolean
public "supportBuiltInResource"(): boolean
public "getStaticResourceOrDefault"(file: $File$Type, defaultValue: T): T
public "getBuiltinResourceOrDefault"(key: string, defaultValue: T): T
public "removeStaticResource"(file: $File$Type): T
public "getResourceOrDefault"(key: $Either$Type<(string), ($File$Type)>, defaultValue: T): T
public "removeBuiltinResource"(key: string): T
public "deserialize"(arg0: $Tag$Type): T
public "onLoad"(): void
public "addResource"(key: $Either$Type<(string), ($File$Type)>, resource: T): void
public "serialize"(arg0: T): $Tag
public "getResourceName"(key: $Either$Type<(string), ($File$Type)>): string
public "buildDefault"(): void
public "hasResource"(key: $Either$Type<(string), ($File$Type)>): boolean
public "hasStaticResource"(file: $File$Type): boolean
public "addBuiltinResource"(key: string, resource: T): void
public "removeResource"(key: $Either$Type<(string), ($File$Type)>): T
public "hasBuiltinResource"(key: string): boolean
public "unLoad"(): void
public "getStaticResource"(file: $File$Type): T
public "getStaticResource"(): $StaticResource<(T)>
public "addStaticResource"(file: $File$Type, resource: T): void
public "getStaticLocation"(): $File
public "createContainer"(arg0: $ResourcePanel$Type): $ResourceContainer<(T), (any)>
public "getBuiltinResource"(key: string): T
public "allResources"(): $Stream<($Map$Entry<($Either<(string), ($File)>), (T)>)>
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
get "staticResourceSuffix"(): string
get "builtinResources"(): $Map<(string), (T)>
get "staticResource"(): $StaticResource<(T)>
get "staticLocation"(): $File
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

 "isAsyncSyncing"(): boolean
 "setAsyncSyncing"(syncing: boolean): void
 "onInValid"(): void
 "onValid"(): void
 "useAsyncThread"(): boolean
 "asyncTick"(periodID: long): void
 "defaultServerTick"(): void
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "getSyncTag"(): string
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "getCurrentPos"(): $BlockPos
 "getSelf"(): $BlockEntity
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]

(): boolean
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

 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "initTemplate"(): void
 "serializeInnerNBT"(): $CompoundTag
 "canDragIn"(dragging: any): boolean
 "serializeWrapper"(): $CompoundTag
 "handleDragging"(dragging: any): boolean
 "widget"(): $Widget
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
}

export namespace $IConfigurableWidget {
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IConfigurableWidget)>)>
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
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


public "appendMenu"(menu: $TreeBuilder$Menu$Type): $TreeBuilder$Menu
public "createTabWidget"(): $Widget
public static "registerMenuHook"(menuName: string, consumer: $BiConsumer$Type<($MenuTab$Type), ($TreeBuilder$Menu$Type)>): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setOnSelected"(onSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $DraggableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $DraggableWidgetGroup
public "onSelected"(): void
public "onUnSelected"(): void
public "endDrag"(mouseX: double, mouseY: double): void
public "startDrag"(mouseX: double, mouseY: double): void
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnDragging"(onDragging: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnEndDrag"(onEndDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnStartDrag"(onStartDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
public "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
public "canDragOutRange"(): boolean
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "selected"(): boolean
set "selectedTexture"(value: $IGuiTexture$Type)
set "onDragging"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onEndDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onStartDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
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
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/data/$Transform" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$ISceneObject, $ISceneObject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$ISceneObject"

export class $Transform implements $IPersistedSerializable, $IConfigurable {

constructor(sceneObject: $ISceneObject$Type)

public "parent"(): $Transform
public "parent"(parent: $Transform$Type, keepWorldTransform: boolean): void
public "parent"(parent: $Transform$Type): void
public "scale"(): $Vector3f
public "scale"(scale: $Vector3f$Type): void
public "position"(): $Vector3f
public "position"(position: $Vector3f$Type): void
public "id"(): $UUID
public "set"(transform: $Transform$Type, local: boolean): $Transform
public "set"(transform: $Transform$Type): $Transform
public "children"(): $List<($Transform)>
public "rotation"(): $Quaternionf
public "rotation"(rotation: $Quaternionf$Type): void
public "sceneObject"(): $ISceneObject
public "awake"(): void
public "_setInternalParentID"(uuid: $UUID$Type): void
public "localTransformMatrix"(): $Matrix4f
public "worldToLocalMatrix"(): $Matrix4f
public "localRotation"(localRotation: $Quaternionf$Type): void
public "localRotation"(): $Quaternionf
public "localPosition"(): $Vector3f
public "localPosition"(localPosition: $Vector3f$Type): void
public "localScale"(): $Vector3f
public "localScale"(localScale: $Vector3f$Type): void
public "_refreshInternalID"(): void
public "isInheritedParent"(parent: $Transform$Type): boolean
public "_setInternalID"(uuid: $UUID$Type): void
public "localToWorldMatrix"(): $Matrix4f
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public "getListenerList"(): $ListenerList
public "getRecipe"(): $MBDRecipe
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "listenerList"(): $ListenerList
get "recipe"(): $MBDRecipe
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
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public static "accurateParallel"(arg0: $IRecipeCapabilityHolder$Type, arg1: $MBDRecipe$Type, arg2: integer, arg3: boolean): $Pair<($MBDRecipe), (integer)>
public "isFuel"(): boolean
public "matchRecipe"(arg0: boolean, arg1: $IO$Type, arg2: $IRecipeCapabilityHolder$Type, arg3: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg4: boolean): $MBDRecipe$ActionResult
public "matchRecipe"(arg0: $IRecipeCapabilityHolder$Type): $MBDRecipe$ActionResult
public "checkConditions"(arg0: $RecipeLogic$Type): $MBDRecipe$ActionResult
public "matchTickRecipe"(arg0: $IRecipeCapabilityHolder$Type): $MBDRecipe$ActionResult
public "getId"(): $ResourceLocation
public "hasTick"(): boolean
public "deepCopied"(arg0: $ResourceLocation$Type): $MBDRecipe
public "getInputContents"(arg0: $RecipeCapability$Type<(any)>): $List<($Content)>
public "handlePre"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg1: $IRecipeCapabilityHolder$Type, arg2: $IO$Type): void
public "handleTickRecipeIO"(arg0: $IO$Type, arg1: $IRecipeCapabilityHolder$Type): boolean
public "postWorking"(arg0: $IRecipeCapabilityHolder$Type): void
public "getOutputContents"(arg0: $RecipeCapability$Type<(any)>): $List<($Content)>
public "handleRecipeIO"(arg0: $IO$Type, arg1: $IRecipeCapabilityHolder$Type): boolean
public "preWorking"(arg0: $IRecipeCapabilityHolder$Type): void
public "handleRecipe"(arg0: boolean, arg1: $IO$Type, arg2: $IRecipeCapabilityHolder$Type, arg3: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>): boolean
public "handlePost"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg1: $IRecipeCapabilityHolder$Type, arg2: $IO$Type): void
public "copyContents"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>, arg1: boolean, arg2: $ContentModifier$Type): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getMod"(): string
public "getType"(): $ResourceLocation
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getGroup"(): string
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
get "fuel"(): boolean
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "mod"(): string
get "type"(): $ResourceLocation
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "group"(): string
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
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
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

 "isRaw"(): boolean
 "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
 "reBakeCustomQuadsOffset"(): float
 "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
 "hasTESR"(blockEntity: $BlockEntity$Type): boolean
 "getViewDistance"(): integer
 "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
 "getParticleTexture"(): $TextureAtlasSprite
 "reBakeCustomQuads"(): boolean
 "isGui3d"(): boolean
 "useBlockLight"(stack: $ItemStack$Type): boolean
 "useAO"(): boolean
 "useAO"(state: $BlockState$Type): boolean
 "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
 "registerEvent"(): void
 "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
 "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
 "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
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
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "isOut"(): boolean
public "ease"(ease: $IEase$Type): $Transform
public "isIn"(): boolean
get "out"(): boolean
get "in"(): boolean
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCatalyst" {
import {$ToggleCatalyst$CatalystType, $ToggleCatalyst$CatalystType$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCatalyst$CatalystType"
import {$ToggleCatalyst$ToggleCandidates, $ToggleCatalyst$ToggleCandidates$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCatalyst$ToggleCandidates"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ItemFilterSettings, $ItemFilterSettings$Type} from "packages/com/lowdragmc/mbd2/common/trait/item/$ItemFilterSettings"

export class $ToggleCatalyst extends $ItemFilterSettings {

constructor()

public "getCandidates"(): $ToggleCatalyst$ToggleCandidates
public "isEnable"(): boolean
public "getConsumeItemAmount"(): integer
public "getConsumeDurabilityValue"(): integer
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "setEnable"(arg0: boolean): void
public "getCatalystType"(): $ToggleCatalyst$CatalystType
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
get "candidates"(): $ToggleCatalyst$ToggleCandidates
get "enable"(): boolean
get "consumeItemAmount"(): integer
get "consumeDurabilityValue"(): integer
set "enable"(value: boolean)
get "catalystType"(): $ToggleCatalyst$CatalystType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleCatalyst$Type = ($ToggleCatalyst);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleCatalyst_ = $ToggleCatalyst$Type;
}}
declare module "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder" {
import {$ConfigKineticMachineSettings, $ConfigKineticMachineSettings$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings"
import {$ConfigKineticMachineSettings$RotationFacing, $ConfigKineticMachineSettings$RotationFacing$Type} from "packages/com/lowdragmc/mbd2/integration/create/machine/$ConfigKineticMachineSettings$RotationFacing"

export class $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder {


public "toString"(): string
public "build"(): $ConfigKineticMachineSettings
public "useFlywheel"(arg0: boolean): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "isGenerator"(arg0: boolean): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "maxRPM"(arg0: integer): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "torque"(arg0: float): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "hasBackRotation"(arg0: boolean): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "frontRotation"(arg0: $ConfigKineticMachineSettings$RotationFacing$Type): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/util/$RelativeDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $RelativeDirection extends $Enum<($RelativeDirection)> {
static readonly "UP": $RelativeDirection
static readonly "DOWN": $RelativeDirection
static readonly "LEFT": $RelativeDirection
static readonly "RIGHT": $RelativeDirection
static readonly "FRONT": $RelativeDirection
static readonly "BACK": $RelativeDirection
readonly "axis": $Direction$Axis


public static "values"(): ($RelativeDirection)[]
public static "valueOf"(arg0: string): $RelativeDirection
public "getActualFacing"(arg0: $Direction$Type): $Direction
public "isSameAxis"(arg0: $RelativeDirection$Type): boolean
public static "getSliceXDirection"(arg0: $Direction$Axis$Type, arg1: $Direction$Type): $RelativeDirection
public static "getSliceYDirection"(arg0: $Direction$Axis$Type, arg1: $Direction$Type): $RelativeDirection
public static "getAisleDirection"(arg0: $Direction$Axis$Type, arg1: $Direction$Type): $RelativeDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeDirection$Type = (("left") | ("back") | ("up") | ("right") | ("front") | ("down")) | ($RelativeDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeDirection_ = $RelativeDirection$Type;
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
public "ingredient"(): $FluidIngredient
public "getAmount"(): long
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
public "newEmptyProject"(): $UIProject
public static "loadUIFromFile"(location: $ResourceLocation$Type): $Supplier<($WidgetGroup)>
public static "loadUIFromTag"(tag: $CompoundTag$Type): $Supplier<($WidgetGroup)>
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "getSuffix"(): string
public "getProjectWorkSpace"(editor: $Editor$Type): $File
public "loadProject"(file: $File$Type): $IProject
public "onClosed"(editor: $Editor$Type): void
public "saveProject"(file: $File$Type): void
public "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
public "loadResources"(tag: $CompoundTag$Type): $Resources
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "resources"(): $Resources
get "suffix"(): string
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition$Builder" {
import {$MultiblockMachineDefinition$ConfigMultiblockSettingsFactory, $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition$ConfigMultiblockSettingsFactory"
import {$MBDMachineDefinition$Builder, $MBDMachineDefinition$Builder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MBDMachineDefinition$Builder"

export class $MultiblockMachineDefinition$Builder extends $MBDMachineDefinition$Builder {


public "multiblockSettings"(arg0: $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory$Type): $MultiblockMachineDefinition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockMachineDefinition$Builder$Type = ($MultiblockMachineDefinition$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockMachineDefinition$Builder_ = $MultiblockMachineDefinition$Builder$Type;
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
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "setTextures"(...textures: ($IGuiTexture$Type)[]): $GuiTextureGroup
public "updateTick"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "color"(value: integer)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "textures"(value: ($IGuiTexture$Type)[])
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

 "getLastSlots"(): $NonNullList<($ItemStack)>
 "getRemoteSlots"(): $NonNullList<($ItemStack)>
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
import {$IRecipeCapabilityHolder, $IRecipeCapabilityHolder$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export interface $IRecipeHandlerTrait<K> extends $IRecipeHandler<(K)> {

 "getHandlerIO"(): $IO
 "addChangedListener"(arg0: $Runnable$Type): $ISubscription
 "compatibleWith"(arg0: $IO$Type): boolean
 "getSlotNames"(): $Set<(string)>
 "isDistinct"(): boolean
 "getRecipeCapability"(): $RecipeCapability<(K)>
 "postWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "preWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "handleRecipe"(arg0: $IO$Type, arg1: $MBDRecipe$Type, arg2: $List$Type<(any)>, arg3: string, arg4: boolean): $List<(K)>
 "copyContent"(arg0: any): K
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

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "updateScreen"(): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setContentIconSupplier"(contentIconSupplier: $Function$Type<(T), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setOnDoubleClickLeaf"(onDoubleClickLeaf: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setOnSelected"(onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setContentNameSupplier"(contentNameSupplier: $Function$Type<(T), (string)>): $TreeListWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $TreeListWidget<(K), (T)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "jumpTo"(path: $List$Type<(K)>): $TreeNode<(K), (T)>
public "setLineHeight"(lineHeight: integer): $TreeListWidget<(K), (T)>
public "canSelectNode"(canSelectNode: boolean): $TreeListWidget<(K), (T)>
public "setBackground"(background: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
set "contentIconSupplier"(value: $Function$Type<(T), ($IGuiTexture$Type)>)
set "onDoubleClickLeaf"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "onSelected"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "contentNameSupplier"(value: $Function$Type<(T), (string)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "leafTexture"(value: $IGuiTexture$Type)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "lineHeight"(value: integer)
set "background"(value: $IGuiTexture$Type)
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

public static "FAKE_MACHINE"(): $MBDMachineDefinition
public static "GADGETS_ITEM"(): $MBDGadgetsItem
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
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
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
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GeckolibRenderer implements $ISerializableRenderer, $GeoRenderer<($GeoAnimatable)> {
static readonly "DEFAULT_MODEL_PATH": $ResourceLocation
static readonly "DEFAULT_TEXTURE_PATH": $ResourceLocation
static readonly "DEFAULT_ANIMATION_PATH": $ResourceLocation
static readonly "DEFAULT_ITEM_TRANSFORM_MODEL": $ResourceLocation

constructor()
constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type)

public "checkModelAvailable"(): boolean
public "checkAnimationAvailable"(): boolean
public "checkTextureAvailable"(): boolean
public "getAnimatableFromMachine"(arg0: $MBDMachine$Type): $GeoAnimatable
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$Type): void
public "fireCompileRenderLayersEvent"(): void
public "setItemTransformModel"(arg0: $ResourceLocation$Type): void
public "doPostRenderCleanup"(): void
public "isUseEntityGuiLighting"(): boolean
public "getCurrentItemStack"(): $ItemStack
public "getRenderPerspective"(): $ItemDisplayContext
public "getStaticAnimatable"(): $StaticAnimatable
public "getBlockRenderTranslations"(): $Matrix4f
public "getModelRenderTranslations"(): $Matrix4f
public "isScheduleStateAnimation"(): boolean
public "firePostRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): void
public "getModel"(): $GeckolibRendererModel
public "initRenderer"(): void
public "onPrepareTextureAtlas"(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<($ResourceLocation$Type)>): void
public "renderItem"(arg0: $ItemStack$Type, arg1: $ItemDisplayContext$Type, arg2: boolean, arg3: $PoseStack$Type, arg4: $MultiBufferSource$Type, arg5: integer, arg6: integer, arg7: $BakedModel$Type): void
public "hasTESR"(arg0: $BlockEntity$Type): boolean
public "getParticleTexture"(): $TextureAtlasSprite
public "render"(arg0: $BlockEntity$Type, arg1: float, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: integer): void
public "getTexturePath"(): $ResourceLocation
public "getGeoModel"(): $GeoModel<($GeoAnimatable)>
public "getAnimationPath"(): $ResourceLocation
public "preRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "getModelPath"(): $ResourceLocation
public "getInstanceId"(arg0: $GeoAnimatable$Type): long
public "getRawAnimation"(arg0: string): $RawAnimation
public "actuallyRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "hasAnimation"(arg0: string): boolean
public "renderRecursively"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "firePreRenderEvent"(arg0: $PoseStack$Type, arg1: $BakedGeoModel$Type, arg2: $MultiBufferSource$Type, arg3: float, arg4: integer): boolean
public "getAnimatable"(): $GeoAnimatable
public "getScaleHeight"(): float
public "isUseGlowingLayer"(): boolean
public "isUseTranslucent"(): boolean
public "getItemModel"(): $BakedModel
public "getAnimations"(): $List<($Animation)>
public "getAnimationCache"(): $Map<(string), ($RawAnimation)>
public "setModelPath"(arg0: $ResourceLocation$Type): void
public "getScaleWidth"(): float
public "setTexturePath"(arg0: $ResourceLocation$Type): void
public "setAnimationPath"(arg0: $ResourceLocation$Type): void
public "getRenderLayers"(): $List<($GeoRenderLayer<($GeoAnimatable)>)>
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "createPreview"(father: $ConfiguratorGroup$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $ISerializableRenderer
public static "serializeWrapper"(renderer: $ISerializableRenderer$Type): $CompoundTag
public "getMotionAnimThreshold"(arg0: $GeoAnimatable$Type): float
public "createVerticesOfQuad"(arg0: $GeoQuad$Type, arg1: $Matrix4f$Type, arg2: $Vector3f$Type, arg3: $VertexConsumer$Type, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public "preApplyRenderLayers"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$Type, arg3: $GeoAnimatable$Type, arg4: $BakedGeoModel$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getTextureLocation"(arg0: $GeoAnimatable$Type): $ResourceLocation
public "defaultRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $MultiBufferSource$Type, arg3: $RenderType$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: float, arg7: integer): void
public "getPackedOverlay"(arg0: $GeoAnimatable$Type, arg1: float, arg2: float): integer
/**
 * 
 * @deprecated
 */
public "getPackedOverlay"(arg0: $GeoAnimatable$Type, arg1: float): integer
public "renderCube"(arg0: $PoseStack$Type, arg1: $GeoCube$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "renderChildBones"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $GeoBone$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float): void
public "renderFinal"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
public "renderCubesOfBone"(arg0: $PoseStack$Type, arg1: $GeoBone$Type, arg2: $VertexConsumer$Type, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
public "reRender"(arg0: $BakedGeoModel$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $GeoAnimatable$Type, arg4: $RenderType$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "postRender"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $MultiBufferSource$Type, arg4: $VertexConsumer$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: float, arg10: float, arg11: float, arg12: float): void
public "applyRenderLayers"(arg0: $PoseStack$Type, arg1: $GeoAnimatable$Type, arg2: $BakedGeoModel$Type, arg3: $RenderType$Type, arg4: $MultiBufferSource$Type, arg5: $VertexConsumer$Type, arg6: float, arg7: integer, arg8: integer): void
public "getRenderColor"(arg0: $GeoAnimatable$Type, arg1: float, arg2: integer): $Color
public "getRenderType"(arg0: $GeoAnimatable$Type, arg1: $ResourceLocation$Type, arg2: $MultiBufferSource$Type, arg3: float): $RenderType
public "isRaw"(): boolean
public "reBakeCustomQuadsOffset"(): float
public "getViewDistance"(): integer
public "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
public "reBakeCustomQuads"(): boolean
public "isGui3d"(): boolean
public "useBlockLight"(stack: $ItemStack$Type): boolean
public "useAO"(): boolean
public "useAO"(state: $BlockState$Type): boolean
public "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
public "registerEvent"(): void
public "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
public "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
public "name"(): string
public "group"(): string
public "getRegisterUIClient"(): $LDLRegisterClient
public "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
set "itemTransformModel"(value: $ResourceLocation$Type)
get "useEntityGuiLighting"(): boolean
get "currentItemStack"(): $ItemStack
get "renderPerspective"(): $ItemDisplayContext
get "staticAnimatable"(): $StaticAnimatable
get "blockRenderTranslations"(): $Matrix4f
get "modelRenderTranslations"(): $Matrix4f
get "scheduleStateAnimation"(): boolean
get "model"(): $GeckolibRendererModel
get "particleTexture"(): $TextureAtlasSprite
get "texturePath"(): $ResourceLocation
get "geoModel"(): $GeoModel<($GeoAnimatable)>
get "animationPath"(): $ResourceLocation
get "modelPath"(): $ResourceLocation
get "animatable"(): $GeoAnimatable
get "scaleHeight"(): float
get "useGlowingLayer"(): boolean
get "useTranslucent"(): boolean
get "itemModel"(): $BakedModel
get "animations"(): $List<($Animation)>
get "animationCache"(): $Map<(string), ($RawAnimation)>
set "modelPath"(value: $ResourceLocation$Type)
get "scaleWidth"(): float
set "texturePath"(value: $ResourceLocation$Type)
set "animationPath"(value: $ResourceLocation$Type)
get "renderLayers"(): $List<($GeoRenderLayer<($GeoAnimatable)>)>
get "raw"(): boolean
get "viewDistance"(): integer
get "gui3d"(): boolean
get "registerUIClient"(): $LDLRegisterClient
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/mbd2/common/capability/recipe/$ForgeEnergyRecipeCapability" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$Content, $Content$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$Content"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IContentSerializer, $IContentSerializer$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$IContentSerializer"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeEnergyRecipeCapability extends $RecipeCapability<(integer)> {
static readonly "CAP": $ForgeEnergyRecipeCapability
static readonly "ENERGY_BAR": $ResourceTexture
static readonly "ENERGY_BASE": $ResourceBorderTexture
readonly "name": string
readonly "serializer": $IContentSerializer<(T)>


public "createXEITemplate"(): $Widget
public "createContentConfigurator"(arg0: $ConfiguratorGroup$Type, arg1: $Supplier$Type<(integer)>, arg2: $Consumer$Type<(integer)>): void
public "createPreviewWidget"(arg0: integer): $Widget
public "bindXEIWidget"(arg0: $Widget$Type, arg1: $Content$Type, arg2: $IngredientIO$Type): void
public "getLeftErrorInfo"(arg0: $List$Type<(integer)>): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEnergyRecipeCapability$Type = ($ForgeEnergyRecipeCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEnergyRecipeCapability_ = $ForgeEnergyRecipeCapability$Type;
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
public "getDrawnU"(progress: double): double
public "getDrawnHeight"(progress: double): double
public "getDrawnWidth"(progress: double): double
public "getDrawnV"(progress: double): double
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
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
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

public "initRenderer"(): void
public "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
public "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
public "getParticleTexture"(): $TextureAtlasSprite
public "isGui3d"(): boolean
public "useBlockLight"(stack: $ItemStack$Type): boolean
public "useAO"(): boolean
public "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
public "updateModelWithReloadingResource"(modelLocation: $ResourceLocation$Type): void
public "getModelLocation"(): $ResourceLocation
public "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
/**
 * 
 * @deprecated
 */
public "getRotatedModel"(frontFacing: $Direction$Type): $BakedModel
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "updateModelWithoutReloadingResource"(modelLocation: $ResourceLocation$Type): void
public "createPreview"(father: $ConfiguratorGroup$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $ISerializableRenderer
public static "serializeWrapper"(renderer: $ISerializableRenderer$Type): $CompoundTag
public "isRaw"(): boolean
public "reBakeCustomQuadsOffset"(): float
public "hasTESR"(blockEntity: $BlockEntity$Type): boolean
public "getViewDistance"(): integer
public "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
public "reBakeCustomQuads"(): boolean
public "useAO"(state: $BlockState$Type): boolean
public "registerEvent"(): void
public "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
public "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUIClient"(): $LDLRegisterClient
public "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
get "particleTexture"(): $TextureAtlasSprite
get "gui3d"(): boolean
get "modelLocation"(): $ResourceLocation
get "raw"(): boolean
get "viewDistance"(): integer
get "registerUIClient"(): $LDLRegisterClient
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
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
import {$IRecipeCapabilityHolder, $IRecipeCapabilityHolder$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"

export interface $IRecipeHandler<K> {

 "getSlotNames"(): $Set<(string)>
 "isDistinct"(): boolean
 "getRecipeCapability"(): $RecipeCapability<(K)>
 "postWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "preWorking"(arg0: $IRecipeCapabilityHolder$Type, arg1: $IO$Type, arg2: $MBDRecipe$Type): void
 "handleRecipe"(arg0: $IO$Type, arg1: $MBDRecipe$Type, arg2: $List$Type<(any)>, arg3: string, arg4: boolean): $List<(K)>
 "copyContent"(arg0: any): K
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
public static "of"(): $EntityIngredient
public static "of"(arg0: integer, ...arg1: ($EntityType$Type<(any)>)[]): $EntityIngredient
public static "of"(arg0: $Stream$Type<($EntityType$Type<(any)>)>, arg1: integer, arg2: $CompoundTag$Type): $EntityIngredient
public static "of"(arg0: $TagKey$Type<($EntityType$Type<(any)>)>, arg1: integer): $EntityIngredient
public static "of"(arg0: $TagKey$Type<($EntityType$Type<(any)>)>, arg1: integer, arg2: $CompoundTag$Type): $EntityIngredient
public "copy"(arg0: integer): $EntityIngredient
public "copy"(): $EntityIngredient
public "getCount"(): integer
public "toJson"(): $JsonElement
public static "fromJson"(arg0: $JsonElement$Type, arg1: boolean): $EntityIngredient
public static "fromJson"(arg0: $JsonElement$Type): $EntityIngredient
public "setNbt"(arg0: $CompoundTag$Type): void
public "getNbt"(): $CompoundTag
public "getTypes"(): ($EntityType<(any)>)[]
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $EntityIngredient
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public static "fromValues"(arg0: $Stream$Type<(any)>, arg1: integer, arg2: $CompoundTag$Type): $EntityIngredient
public "setCount"(arg0: integer): void
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Collection<($Entity)>)>
public "negate"(): $Predicate<($Collection<($Entity)>)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Collection<($Entity)>)>
public static "isEqual"<T>(arg0: any): $Predicate<($Collection<($Entity)>)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Collection<($Entity)>)>
get "empty"(): boolean
get "count"(): integer
set "nbt"(value: $CompoundTag$Type)
get "nbt"(): $CompoundTag
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

public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressTexture
public "getFillDirection"(): $ProgressTexture$FillDirection
public "getEmptyBarArea"(): $IGuiTexture
public "getFilledBarArea"(): $IGuiTexture
public "setTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressTexture
public "updateTick"(): void
public "getProgress"(): double
public "setProgress"(progress: double): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
get "fillDirection"(): $ProgressTexture$FillDirection
get "emptyBarArea"(): $IGuiTexture
get "filledBarArea"(): $IGuiTexture
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

 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "restoreFromSnapshot"(arg0: any): void
 "supportsDrain"(arg0: integer): boolean
 "supportsFill"(arg0: integer): boolean
 "createSnapshot"(): any
 "onContentsChanged"(): void
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "getTankCapacity"(arg0: integer): long
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

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getOldState"(): string
public "getNewState"(): string
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "oldState"(): string
get "newState"(): string
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
declare module "packages/com/lowdragmc/lowdraglib/$Platform" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $Platform {
static "FROZEN_REGISTRY_ACCESS": $RegistryAccess

constructor()

public static "getGamePath"(): $Path
public static "isClient"(): boolean
public static "isDevEnv"(): boolean
public static "platformName"(): string
public static "isDatagen"(): boolean
public static "getFrozenRegistry"(): $RegistryAccess
public static "isServerNotSafe"(): boolean
public static "getMinecraftServer"(): $MinecraftServer
public static "isForge"(): boolean
public static "isModLoaded"(modId: string): boolean
get "gamePath"(): $Path
get "client"(): boolean
get "devEnv"(): boolean
get "datagen"(): boolean
get "frozenRegistry"(): $RegistryAccess
get "serverNotSafe"(): boolean
get "minecraftServer"(): $MinecraftServer
get "forge"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Platform$Type = ($Platform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Platform_ = $Platform$Type;
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

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getRecipe"(): $MBDRecipe
public "setRecipe"(arg0: $MBDRecipe$Type): void
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$Type)
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
public "replaceable"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "canOcclude"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "blockSound"(arg0: $ConfigBlockProperties$BlockSound$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "emissive"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "ignitedByLava"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "destroyTime"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "forceSolid"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "noParticleOnBreak"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "rotationState"(arg0: $RotationState$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "useAO"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "renderTypes"(arg0: $ConfigBlockProperties$RenderTypes$Type): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "friction"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "hasCollision"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "jumpFactor"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "speedFactor"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "transparent"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "isSuffocating"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "canBeWaterlogged"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "isAir"(arg0: boolean): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
public "explosionResistance"(arg0: float): $ConfigBlockProperties$ConfigBlockPropertiesBuilder
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
 "getRegisterUIClient"(): $LDLRegisterClient
 "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
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
public static "generateRainbowColor"(): integer
public static "generateRainbowColor"(tick: long): integer
public static "rainbowRectTexture"(border: integer): $ColorBorderTexture
public static "rainbowRectTexture"(): $ColorRectTexture
public "rectTexture"(): $ColorRectTexture
public "borderTexture"(border: integer): $ColorBorderTexture
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
public "setDelay"(arg0: integer): void
public "isEnable"(): boolean
public "getSound"(): $ResourceLocation
public "setSound"(arg0: $ResourceLocation$Type): void
public "createSoundConfigurator"(arg0: string, arg1: $Consumer$Type<($ResourceLocation$Type)>, arg2: $Supplier$Type<($ResourceLocation$Type)>): $Configurator
public "getPitch"(): float
public "setPitch"(arg0: float): void
public "getDelay"(): integer
public "getSoundSource"(): $SoundSource
public "getSoundEvent"(): $SoundEvent
public "setVolume"(arg0: float): void
public "getVolume"(): float
public "createMachineSound"(arg0: $BlockPos$Type, arg1: $BooleanSupplier$Type): $MachineSound
public "setLoopWithShuffle"(arg0: boolean): void
public "setSoundSource"(arg0: $SoundSource$Type): void
public "isLoopWithShuffle"(): boolean
public "setSoundEvent"(arg0: $SoundEvent$Type): void
public "setLoop"(arg0: boolean): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "setEnable"(arg0: boolean): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "loop"(): boolean
set "delay"(value: integer)
get "enable"(): boolean
get "sound"(): $ResourceLocation
set "sound"(value: $ResourceLocation$Type)
get "pitch"(): float
set "pitch"(value: float)
get "delay"(): integer
get "soundSource"(): $SoundSource
get "soundEvent"(): $SoundEvent
set "volume"(value: float)
get "volume"(): float
set "loopWithShuffle"(value: boolean)
set "soundSource"(value: $SoundSource$Type)
get "loopWithShuffle"(): boolean
set "soundEvent"(value: $SoundEvent$Type)
set "loop"(value: boolean)
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "toNBT"(arg0: $MBDRecipe$Type): $CompoundTag
public "capabilitiesToNBT"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>): $CompoundTag
public "capabilitiesFromNBT"(arg0: $CompoundTag$Type): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "capabilitiesFromJson"(arg0: $JsonObject$Type): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $MBDRecipe
public static "conditionReader"(arg0: $FriendlyByteBuf$Type): $RecipeCondition
public static "entryReader"(arg0: $FriendlyByteBuf$Type): $Tuple<($RecipeCapability<(any)>), ($List<($Content)>)>
public static "entryWriter"(arg0: $FriendlyByteBuf$Type, arg1: $Map$Entry$Type<($RecipeCapability$Type<(any)>), (any)>): void
public static "conditionWriter"(arg0: $FriendlyByteBuf$Type, arg1: $RecipeCondition$Type): void
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $MBDRecipe$Type): void
public "capabilitiesToJson"(arg0: $Map$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>): $JsonObject
public static "tuplesToMap"(arg0: $List$Type<($Tuple$Type<($RecipeCapability$Type<(any)>), ($List$Type<($Content$Type)>)>)>): $Map<($RecipeCapability<(any)>), ($List<($Content)>)>
public "fromNBT"(arg0: $ResourceLocation$Type, arg1: $CompoundTag$Type): $MBDRecipe
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
import {$TrackedDummyWorld, $TrackedDummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
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
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "updateScreen"(): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getCenter"(): $Vector3f
public "setCameraYawAndPitchAnima"(rotationYaw: float, rotationPitch: float, dur: integer): void
public "setCameraYawAndPitch"(rotationYaw: float, rotationPitch: float): $SceneWidget
public "setBeforeWorldRender"(beforeWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "setAfterWorldRender"(afterWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "setDraggable"(draggable: boolean): $SceneWidget
public "setIntractable"(intractable: boolean): $SceneWidget
public "setScalable"(scalable: boolean): $SceneWidget
public "isDragging"(): boolean
public "setCenter"(center: $Vector3f$Type): $SceneWidget
public "setOnSelected"(onSelected: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>): $SceneWidget
public "getRenderer"(): $WorldSceneRenderer
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>): $SceneWidget
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $SceneWidget
public "createScene"(world: $Level$Type): void
public "createScene"(world: $Level$Type, useFBOSceneRenderer: boolean): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "isDraggable"(): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setGui"(gui: $ModularUI$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "setRenderFacing"(renderFacing: boolean): $SceneWidget
public "setRenderSelect"(renderSelect: boolean): $SceneWidget
public "getParticleManager"(): $ParticleManager
public "getOnSelected"(): $BiConsumer<($BlockPos), ($Direction)>
public "useCacheBuffer"(autoReleased: boolean): $SceneWidget
public "useCacheBuffer"(): $SceneWidget
public "getHoverPosFace"(): $BlockPosFace
public "getClickPosFace"(): $BlockPosFace
public "getZoom"(): float
public "setZoom"(zoom: float): $SceneWidget
public "getRotationYaw"(): float
public "getRotationPitch"(): float
public "camZoom"(): float
public "useOrtho"(): $SceneWidget
public "useOrtho"(useOrtho: boolean): $SceneWidget
public "getDummyWorld"(): $TrackedDummyWorld
public "setHoverTips"(hoverTips: boolean): $SceneWidget
public "needCompileCache"(): void
public "renderBlockOverLay"(renderer: $WorldSceneRenderer$Type): void
public "setClearColor"(color: integer): $SceneWidget
public "releaseCacheBuffer"(): void
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer, inner: integer): void
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer): void
public "isHoverTips"(): boolean
public "getHoverItem"(): $ItemStack
public "isAutoReleased"(): boolean
public "isRenderFacing"(): boolean
public "isRenderSelect"(): boolean
public "isUseCache"(): boolean
public "isUseOrtho"(): boolean
public "isIntractable"(): boolean
public "setOrthoRange"(range: float): $SceneWidget
public "isScalable"(): boolean
public "getCurrentMouseX"(): integer
public "getCurrentMouseY"(): integer
public "getSelectedPosFace"(): $BlockPosFace
public "getCore"(): $Set<($BlockPos)>
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>): $SceneWidget
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "range"(): float
get "center"(): $Vector3f
set "beforeWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
set "draggable"(value: boolean)
set "intractable"(value: boolean)
set "scalable"(value: boolean)
get "dragging"(): boolean
set "center"(value: $Vector3f$Type)
set "onSelected"(value: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>)
get "renderer"(): $WorldSceneRenderer
set "renderedCore"(value: $Collection$Type<($BlockPos$Type)>)
get "draggable"(): boolean
set "gui"(value: $ModularUI$Type)
set "renderFacing"(value: boolean)
set "renderSelect"(value: boolean)
get "particleManager"(): $ParticleManager
get "onSelected"(): $BiConsumer<($BlockPos), ($Direction)>
get "hoverPosFace"(): $BlockPosFace
get "clickPosFace"(): $BlockPosFace
get "zoom"(): float
set "zoom"(value: float)
get "rotationYaw"(): float
get "rotationPitch"(): float
get "dummyWorld"(): $TrackedDummyWorld
set "hoverTips"(value: boolean)
set "clearColor"(value: integer)
get "hoverTips"(): boolean
get "hoverItem"(): $ItemStack
get "autoReleased"(): boolean
get "renderFacing"(): boolean
get "renderSelect"(): boolean
get "useCache"(): boolean
get "intractable"(): boolean
set "orthoRange"(value: float)
get "scalable"(): boolean
get "currentMouseX"(): integer
get "currentMouseY"(): integer
get "selectedPosFace"(): $BlockPosFace
get "core"(): $Set<($BlockPos)>
set "onAddedTooltips"(value: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>)
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
public "setBlock"(pos: $BlockPos$Type, state: $BlockState$Type, a: integer, b: integer): boolean
public "getMaxPos"(): $Vector3f
public "getRenderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
public static "withUnsafeNBTDiscarded"(stack: $ItemStack$Type): $ItemStack
public "setInnerBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "addFreshEntity"(entity: $Entity$Type): boolean
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public "getMinPos"(): $Vector3f
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "getEntity"(id: integer): $Entity
public "getBlockTint"(blockPos: $BlockPos$Type, colorResolver: $ColorResolver$Type): integer
public "getParticleManager"(): $ParticleManager
public "addBlocks"(renderedBlocks: $Map$Type<($BlockPos$Type), ($BlockInfo$Type)>): void
public "removeBlock"(pos: $BlockPos$Type): $BlockInfo
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public static "isUnsafeItemNBTKey"(name: string): boolean
public "tickWorld"(): void
public "setRenderFilter"(renderFilter: $Predicate$Type<($BlockPos$Type)>): void
public "getAllEntities"(): $List<($Entity)>
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getBiome"(pos: $BlockPos$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "size"(): $Vector3f
get "maxPos"(): $Vector3f
get "renderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
set "innerBlockEntity"(value: $BlockEntity$Type)
get "minPos"(): $Vector3f
set "blockEntity"(value: $BlockEntity$Type)
get "particleManager"(): $ParticleManager
set "particleManager"(value: $ParticleManager$Type)
set "renderFilter"(value: $Predicate$Type<($BlockPos$Type)>)
get "allEntities"(): $List<($Entity)>
get "chunkSource"(): $ChunkSource
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
public "rarity"(arg0: $Rarity$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "creativeTab"(arg0: $ToggleCreativeTab$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "isGui3d"(arg0: boolean): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "useBlockLight"(arg0: boolean): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "itemTooltips"(arg0: $List$Type<($Component$Type)>): $ConfigItemProperties$ConfigItemPropertiesBuilder
public "renderer"(arg0: $ToggleRenderer$Type): $ConfigItemProperties$ConfigItemPropertiesBuilder
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
public "getBlockState"(): $BlockState
public "clearBlockEntityCache"(): void
public "hasBlockEntity"(): boolean
public "setPostCreate"(postCreate: $Consumer$Type<($BlockEntity$Type)>): void
public "setHasBlockEntity"(hasBlockEntity: boolean): void
public "getItemStackForm"(): $ItemStack
public "getItemStackForm"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ItemStack
public static "fromBlockState"(state: $BlockState$Type): $BlockInfo
public "setTag"(tag: $CompoundTag$Type): void
public "setBlockState"(blockState: $BlockState$Type): void
public "getBlockEntity"(level: $Level$Type, pos: $BlockPos$Type): $BlockEntity
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "setItemStack"(itemStack: $ItemStack$Type): void
public static "fromBlock"(block: $Block$Type): $BlockInfo
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "blockState"(): $BlockState
set "postCreate"(value: $Consumer$Type<($BlockEntity$Type)>)
get "itemStackForm"(): $ItemStack
set "tag"(value: $CompoundTag$Type)
set "blockState"(value: $BlockState$Type)
set "itemStack"(value: $ItemStack$Type)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
import {$TraitDefinition, $TraitDefinition$Type} from "packages/com/lowdragmc/mbd2/common/trait/$TraitDefinition"
import {$ConfigMachineSettings$SignalConnection, $ConfigMachineSettings$SignalConnection$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$SignalConnection"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ConfigMachineSettings$ConfigMachineSettingsBuilder, $ConfigMachineSettings$ConfigMachineSettingsBuilder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$ConfigMachineSettingsBuilder"

export class $ConfigMachineSettings implements $IPersistedSerializable, $IConfigurable {


public static "builder"(): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "machineLevel"(): integer
public "traitDefinitions"(): $List<($TraitDefinition)>
public "hasUI"(): boolean
public "removeTraitDefinition"(arg0: $TraitDefinition$Type): void
public "signalConnection"(): $ConfigMachineSettings$SignalConnection
public "dropMachineItem"(): boolean
public "addTraitDefinition"(arg0: $TraitDefinition$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

constructor()
constructor(imageLocation: $ResourceLocation$Type)
constructor(imageLocation: string)

public "getTo"(): integer
public "setColor"(color: integer): $AnimationTexture
public "getFrom"(): integer
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setCellSize"(cellSize: integer): $AnimationTexture
public "getCellSize"(): integer
public "setAnimation"(animation: integer): $AnimationTexture
public "setAnimation"(from: integer, to: integer): $AnimationTexture
public "setTexture"(imageLocation: string): $AnimationTexture
public "updateTick"(): void
public "getAnimation"(): integer
public "getColor"(): integer
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
get "to"(): integer
set "color"(value: integer)
get "from"(): integer
set "cellSize"(value: integer)
get "cellSize"(): integer
set "animation"(value: integer)
set "texture"(value: string)
get "animation"(): integer
get "color"(): integer
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

public "getY"(): integer
public "add"(other: $Position$Type): $Position
public "add"(size: $Size$Type): $Position
public "add"(x: integer, y: integer): $Position
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(x: integer, y: integer): $Position
public "subtract"(other: $Position$Type): $Position
public "vec2"(): $Vec2
public "getX"(): integer
public "addY"(y: integer): $Position
public "addX"(x: integer): $Position
public "vector2f"(): $Vector2f
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

 "setItemStacks"(arg0: ($ItemStack$Type)[]): void
 "getValues"(): ($Ingredient$Value)[]
 "setValues"(arg0: ($Ingredient$Value$Type)[]): void
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
public "play"(): void
public "tick"(): void
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
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
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
 "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
 "scheduleRenderUpdate"(): void
 "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
 "getOffsetTimer"(): long
 "notifyBlockUpdate"(): void
 "getMetaMachine"(): $IMachine
 "isAsyncSyncing"(): boolean
 "setAsyncSyncing"(syncing: boolean): void
 "onInValid"(): void
 "onValid"(): void
 "useAsyncThread"(): boolean
 "asyncTick"(periodID: long): void
 "getRPCMethod"(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
 "rpcToTracking"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): void
 "generateRpcPacket"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
 "rpcToPlayer"(managed: $IManaged$Type, player: $ServerPlayer$Type, methodName: string, ...args: (any)[]): void
 "loadManagedPersistentData"(tag: $CompoundTag$Type): void
 "saveManagedPersistentData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "defaultServerTick"(): void
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "getSyncTag"(): string
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "getCurrentPos"(): $BlockPos
 "getSelf"(): $BlockEntity
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]
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
declare module "packages/com/lowdragmc/photon/client/fx/$FXHelper" {
import {$FX, $FX$Type} from "packages/com/lowdragmc/photon/client/fx/$FX"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FXHelper {
static readonly "FX_PATH": string

constructor()

public static "clearCache"(): integer
public static "getFX"(fxLocation: $ResourceLocation$Type): $FX
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FXHelper$Type = ($FXHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FXHelper_ = $FXHelper$Type;
}}
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MBDMachine, $MBDMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/$MBDMachine"
import {$MachineEvent, $MachineEvent$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/event/$MachineEvent"

export class $MachineTickEvent extends $MachineEvent {
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
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
declare module "packages/com/lowdragmc/photon/client/fx/$FX" {
import {$FXRuntime, $FXRuntime$Type} from "packages/com/lowdragmc/photon/client/fx/$FXRuntime"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FXData, $FXData$Type} from "packages/com/lowdragmc/photon/client/fx/$FXData"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FX implements $ITagSerializable<($CompoundTag)> {

constructor()

public "getFxLocation"(): $ResourceLocation
public "createSubFXRuntime"(name: string): $FXRuntime
public "getSubFXs"(): $Map<(string), ($FXData)>
public "getMainFX"(): $FXData
public "createInternalRuntime"(): $FXRuntime
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "createRuntime"(): $FXRuntime
public "createRuntime"(deepCopy: boolean): $FXRuntime
public "setFxLocation"(fxLocation: $ResourceLocation$Type): void
get "fxLocation"(): $ResourceLocation
get "subFXs"(): $Map<(string), ($FXData)>
get "mainFX"(): $FXData
set "fxLocation"(value: $ResourceLocation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FX$Type = ($FX);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FX_ = $FX$Type;
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
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "setShowAlpha"(showAlpha: boolean): $HsbColorWidget
public "setGap"(gap: integer): $HsbColorWidget
public "setShowRGB"(showRGB: boolean): $HsbColorWidget
public "isShowRGB"(): boolean
public "setBarWidth"(barWidth: integer): $HsbColorWidget
public "isMouseOverMain"(mouseX: double, mouseY: double): boolean
public "isShowAlpha"(): boolean
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setOnChanged"(onChanged: $IntConsumer$Type): $HsbColorWidget
public "setColorSupplier"(colorSupplier: $IntSupplier$Type): $HsbColorWidget
public "isMouseOverAlphaSlider"(mouseX: double, mouseY: double): boolean
public "isMouseOverColorSlider"(mouseX: double, mouseY: double): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "color"(value: integer)
set "showAlpha"(value: boolean)
set "gap"(value: integer)
set "showRGB"(value: boolean)
get "showRGB"(): boolean
set "barWidth"(value: integer)
get "showAlpha"(): boolean
set "onChanged"(value: $IntConsumer$Type)
set "colorSupplier"(value: $IntSupplier$Type)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"

export interface $IRecipeIngredientSlot extends $IIngredientSlot {

 "self"(): $Widget
 "getFullTooltipTexts"(): $List<($Component)>
 "getXEICurrentIngredient"(): any
 "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
 "getIngredientIO"(): $IngredientIO
 "getXEIIngredients"(): $List<(any)>
 "getXEIChance"(): float

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
declare module "packages/com/lowdragmc/mbd2/api/pattern/$PatternPreviewWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$ImageWidget, $ImageWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$MultiblockMachineDefinition, $MultiblockMachineDefinition$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition"
import {$PatternPreviewWidget$MBPattern, $PatternPreviewWidget$MBPattern$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$PatternPreviewWidget$MBPattern"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PatternPreviewWidget extends $WidgetGroup {
readonly "controllerDefinition": $MultiblockMachineDefinition
readonly "descriptionWidget": $ImageWidget
readonly "patterns": ($PatternPreviewWidget$MBPattern)[]
 "layer": integer
 "candidatePage": integer
readonly "widgets": $List<($Widget)>


public "drawInBackground"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "updateScreen"(): void
public "setPage"(arg0: integer): void
public static "getPatternWidget"(arg0: $MultiblockMachineDefinition$Type): $PatternPreviewWidget
public static "locateNextRegion"(arg0: integer): $BlockPos
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "page"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternPreviewWidget$Type = ($PatternPreviewWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternPreviewWidget_ = $PatternPreviewWidget$Type;
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
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "setAutoClose"(autoClose: boolean): $MenuWidget<(K), (T)>
public "setNodeHoverTexture"(nodeHoverTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setCrossLinePredicate"(crossLinePredicate: $Predicate$Type<(K)>): $MenuWidget<(K), (T)>
public "initWidget"(): void
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $MenuWidget<(K), (T)>
public "setOnNodeClicked"(onNodeClicked: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $MenuWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $MenuWidget<(K), (T)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "autoClose"(value: boolean)
set "nodeHoverTexture"(value: $IGuiTexture$Type)
set "crossLinePredicate"(value: $Predicate$Type<(K)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "leafTexture"(value: $IGuiTexture$Type)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "onNodeClicked"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
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

public "getListenerList"(): $ListenerList
public "getRecipe"(): $MBDRecipe
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "listenerList"(): $ListenerList
get "recipe"(): $MBDRecipe
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder" {
import {$ToggleCatalyst, $ToggleCatalyst$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCatalyst"
import {$ConfigMultiblockSettings, $ConfigMultiblockSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMultiblockSettings"

export class $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder {


public "toString"(): string
public "build"(): $ConfigMultiblockSettings
public "catalyst"(arg0: $ToggleCatalyst$Type): $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder
public "showUIWhenClickStructure"(arg0: boolean): $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder
public "showUIOnlyFormed"(arg0: boolean): $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder$Type = ($ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder_ = $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder$Type;
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
public "replaceable"(): boolean
public "canOcclude"(): boolean
public "blockSound"(): $ConfigBlockProperties$BlockSound
public "emissive"(): boolean
public "ignitedByLava"(): boolean
public "destroyTime"(): float
public "forceSolid"(): boolean
public "noParticleOnBreak"(): boolean
public "rotationState"(): $RotationState
public "useAO"(): boolean
public "renderTypes"(): $ConfigBlockProperties$RenderTypes
public "friction"(): float
public "hasCollision"(): boolean
public "jumpFactor"(): float
public "speedFactor"(): float
public "transparent"(): boolean
public "isSuffocating"(): boolean
public "canBeWaterlogged"(): boolean
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "isAir"(): boolean
public "explosionResistance"(): float
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "suffocating"(): boolean
get "air"(): boolean
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/$MultiblockMachineDefinition$ConfigMultiblockSettingsFactory" {
import {$ConfigMultiblockSettings, $ConfigMultiblockSettings$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMultiblockSettings"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory extends $Supplier<($ConfigMultiblockSettings)> {

 "get"(): $ConfigMultiblockSettings

(): $ConfigMultiblockSettings
}

export namespace $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory$Type = ($MultiblockMachineDefinition$ConfigMultiblockSettingsFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory_ = $MultiblockMachineDefinition$ConfigMultiblockSettingsFactory$Type;
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
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
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
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public static "showStringEditorDialog"(parent: $WidgetGroup$Type, title: string, initial: string, predicate: $Predicate$Type<(string)>, result: $Consumer$Type<(string)>): $DialogWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $Runnable$Type): $DialogWidget
public static "suffixFilter"(...suffixes: (string)[]): $Predicate<($TreeNode<($File), ($File)>)>
public static "showFileDialog"(parent: $WidgetGroup$Type, title: string, dir: $File$Type, isSelector: boolean, valid: $Predicate$Type<($TreeNode$Type<($File$Type), ($File$Type)>)>, result: $Consumer$Type<($File$Type)>): $DialogWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public static "createContainer"(dialog: $DialogWidget$Type, width: integer, height: integer, titleText: string): $WidgetGroup
public static "createContainer"(dialog: $DialogWidget$Type, x: integer, y: integer, width: integer, height: integer, titleText: string): $WidgetGroup
public static "showItemSelector"(parent: $WidgetGroup$Type, title: string, init: $ItemStack$Type, itemConsumer: $Consumer$Type<($Item$Type)>): $DialogWidget
public static "createTextField"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextFieldWidget
public "setParentInVisible"(): $DialogWidget
public static "createButton"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer, text: string, onClick: $Runnable$Type): $ButtonWidget
public "setOnClosed"(onClosed: $Runnable$Type): $DialogWidget
public static "createText"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextTexture
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setClickClose"(clickClose: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "onClosed"(value: $Runnable$Type)
set "clickClose"(value: boolean)
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
public "hide"(): void
public "hide"(animate: boolean): void
public "isShow"(): boolean
public "setTitle"(title: string): void
public "show"(): void
public "show"(animate: boolean): void
public "initWidget"(): void
public "clearAllWidgets"(): void
public "getEditor"(): $Editor
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBoxSupplier: $Function$Type<($Size$Type), ($WidgetGroup$Type)>): void
/**
 * 
 * @deprecated
 */
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBox: $WidgetGroup$Type): void
public "getTabContainer"(): $TabContainer
public "getToolBoxes"(): $List<($Widget)>
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "size"(value: $Size$Type)
set "title"(value: string)
get "editor"(): $Editor
get "tabContainer"(): $TabContainer
get "toolBoxes"(): $List<($Widget)>
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

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getRenderer"(): $GeckolibRenderer
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getMachine"(): $MBDMachine
public "getTick"(arg0: any): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "renderer"(): $GeckolibRenderer
get "machine"(): $MBDMachine
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

public "getListenerList"(): $ListenerList
public "getRecipe"(): $MBDRecipe
public "setRecipe"(arg0: $MBDRecipe$Type): void
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "listenerList"(): $ListenerList
get "recipe"(): $MBDRecipe
set "recipe"(value: $MBDRecipe$Type)
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

public "getDrops"(): $List<($ItemStack)>
public "getListenerList"(): $ListenerList
public "getEntity"(): $Entity
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "drops"(): $List<($ItemStack)>
get "listenerList"(): $ListenerList
get "entity"(): $Entity
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

 "onSelected"(): void
 "onUnSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean

(): void
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

 "kjs$self"(): $SlotWidget
 "kjs$setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
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

public "setContainer"(container: $TabContainer$Type): void
public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $TabButton
public "onPressed"(clickData: $ClickData$Type, isPressed: boolean): void
public "setPressedTexture"(...pressedTexture: ($IGuiTexture$Type)[]): $TabButton
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $TabButton
public "setHoverBorderTexture"(border: integer, color: integer): $TabButton
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "container"(value: $TabContainer$Type)
set "baseTexture"(value: ($IGuiTexture$Type)[])
set "pressedTexture"(value: ($IGuiTexture$Type)[])
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
public "connect"(inputPort: $NodePort$Type, outputPort: $NodePort$Type): $PortEdge
public "connect"(inputPort: $NodePort$Type, outputPort: $NodePort$Type, autoDisconnectInputs: boolean): $PortEdge
public "removeNode"(node: $BaseNode$Type): void
public "updateExposedParameter"(identifier: string, input: any): void
public "getExposedParameterFromIdentifier"(parameterIdentifier: string): $ExposedParameter<(any)>
public "addNode"(node: $BaseNode$Type): $BaseNode
public "newGUID"(): $UUID
public "addGUID"(guid: $UUID$Type): void
public "addGUID"(guid: string): void
public static "areTypesConnectable"(from: $Class$Type<(any)>, to: $Class$Type<(any)>): boolean
public "getDepth"(): integer
public "disconnect"(edgeGUID: string): void
public "disconnect"(inputNode: $BaseNode$Type, inputFieldName: string, outputNode: $BaseNode$Type, outputFieldName: string): void
public "disconnect"(edge: $PortEdge$Type): void
public "onAssetDeleted"(): void
public "resetNodes"(): void
public "updateComputeOrder"(type: $BaseGraph$ComputeOrderType$Type): void
public "notifyNodeChanged"(node: $BaseNode$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
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

public "onConfiguratorChangeUpdate"(tab: $ConfigPanel$Tab$Type, configurator: $Configurator$Type): void
public "switchTag"(tab: $ConfigPanel$Tab$Type): void
public "clearAllConfigurators"(tab: $ConfigPanel$Tab$Type): void
public "clearAllConfigurators"(): void
public "getEditor"(): $Editor
public "openConfigurator"(tab: $ConfigPanel$Tab$Type, configurable: $IConfigurable$Type): void
public "getFocus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
public "reloadTabs"(tabs: $List$Type<($ConfigPanel$Tab$Type)>): void
public "getPalette"(): $HsbColorWidget
public "computeLayout"(tab: $ConfigPanel$Tab$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "editor"(): $Editor
get "focus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
get "palette"(): $HsbColorWidget
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
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MBDRegistry$String<V> extends $MBDRegistry<(string), (V)> {
static readonly "REGISTERED": $Map<($ResourceLocation), ($MBDRegistry<(any), (any)>)>

constructor(arg0: $ResourceLocation$Type)

public "readBuf"(arg0: $FriendlyByteBuf$Type): V
public "writeBuf"(arg0: V, arg1: $FriendlyByteBuf$Type): void
public "saveToNBT"(arg0: V): $Tag
public "loadFromNBT"(arg0: $Tag$Type): V
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
 "rpcToTracking"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): void
 "generateRpcPacket"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
 "rpcToPlayer"(managed: $IManaged$Type, player: $ServerPlayer$Type, methodName: string, ...args: (any)[]): void
 "getCurrentPos"(): $BlockPos
 "getSelf"(): $BlockEntity
 "getRootStorage"(): $IManagedStorage
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getNonLazyFields"(): ($IRef)[]

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
public static "createMultiblockDefault"<T extends $MachineState>(arg0: $Supplier$Type<($MachineState$Builder$Type<(T)>)>, arg1: $IRenderer$Type): T
public static "createDefault"<T extends $MachineState>(arg0: $Supplier$Type<($MachineState$Builder$Type<(T)>)>): T
public "getRootState"(): T
public static "createSingleDefault"<T extends $MachineState>(arg0: $Supplier$Type<($MachineState$Builder$Type<(T)>)>, arg1: $IRenderer$Type): T
public "initStateMachine"(): void
public "hasState"(arg0: string): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
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
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "replaceOriginalBlock"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
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
public static "serializeDefinition"(arg0: $TraitDefinition$Type): $CompoundTag
public static "deserializeDefinition"(arg0: $CompoundTag$Type): $TraitDefinition
public "renderAfterWorldInTraitPanel"(arg0: $MachineTraitPanel$Type): void
public "allowMultiple"(): boolean
public "createTrait"(arg0: $MBDMachine$Type): $ITrait
public "getBESRenderer"(arg0: $IMachine$Type): $IRenderer
public "getTranslateKey"(): string
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "priority"(value: integer)
get "priority"(): integer
get "icon"(): $IGuiTexture
get "translateKey"(): string
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "hide"(): void
public "isShow"(): boolean
public "show"(): void
public "setGui"(gui: $ModularUI$Type): void
public "initWidget"(): void
public "loadResource"(resources: $Resources$Type, merge: boolean): void
public "getEditor"(): $Editor
public "rebuildResource"(resourceName: string): void
public "getContainerMap"(): $Map<($Resource), ($ResourceContainer)>
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMultiblockSettings" {
import {$ToggleCatalyst, $ToggleCatalyst$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleCatalyst"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder, $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder"

export class $ConfigMultiblockSettings implements $IConfigurable, $IPersistedSerializable {


public static "builder"(): $ConfigMultiblockSettings$ConfigMultiblockSettingsBuilder
public "catalyst"(): $ToggleCatalyst
public "showUIWhenClickStructure"(): boolean
public "showUIOnlyFormed"(): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMultiblockSettings$Type = ($ConfigMultiblockSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMultiblockSettings_ = $ConfigMultiblockSettings$Type;
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
declare module "packages/com/lowdragmc/lowdraglib/utils/$Builder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Builder<T, B extends $Builder<(T), (B)>> {

constructor()

public "where"(symbol: character, value: T): B
public "shallowCopy"(): B
public "aisle"(...data: (string)[]): B
public "bakeArray"(clazz: $Class$Type<(T)>, defaultValue: T): (((T)[])[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Builder$Type<T, B> = ($Builder<(T), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Builder_<T, B> = $Builder$Type<(T), (B)>;
}}
declare module "packages/com/lowdragmc/photon/client/gameobject/$FXObject" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/data/$Transform"
import {$IEffect, $IEffect$Type} from "packages/com/lowdragmc/photon/client/fx/$IEffect"
import {$IScene, $IScene$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$IScene"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$LDLRegisterClient, $LDLRegisterClient$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegisterClient"
import {$ISceneObject, $ISceneObject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$ISceneObject"

export class $FXObject extends $Particle implements $IFXObject {
 "name": string
readonly "transform": $Transform
static "NO_RENDER_RENDER_TYPE": $ParticleRenderType


public "getName"(): string
public "remove"(force: boolean): void
public "transform"(): $Transform
public "setName"(name: string): void
public "copy"(deep: boolean): $IFXObject
public "getLevel"(): $Level
public "setLevel"(level: $Level$Type): void
public "deepCopy"(): $IFXObject
public "getRenderType"(): $ParticleRenderType
public "isAlive"(): boolean
public "tick"(): void
public "render"(pBuffer: $VertexConsumer$Type, pRenderInfo: $Camera$Type, pPartialTicks: float): void
public "shouldCull"(): boolean
public "getEffect"(): $IEffect
public "updateTick"(): void
public "getScene"(): $IScene
public "move"(x: double, y: double, z: double): void
public "setSceneInternal"(scene: $IScene$Type): void
public "getRealLevel"(): $Level
public "updateFrame"(partialTicks: float): void
public "setEffect"(effect: $IEffect$Type): void
public "setVisible"(visible: boolean): void
public "isVisible"(): boolean
public "reset"(): void
public "updatePos"(newPos: $Vector3f$Type): void
public "emmit"(effect: $IEffect$Type): void
public "emmit"(effect: $IEffect$Type, position: $Vector3f$Type, rotation: $Quaternionf$Type, scale: $Vector3f$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IFXObject
public "updateRotation"(newRot: $Vector3f$Type): void
public "updateRotation"(newRot: $Quaternionf$Type): void
public "updateScale"(newScale: $Vector3f$Type): void
public "copyTransformFrom"(fxObject: $IFXObject$Type): void
public "copyTransformFrom"(fxObject: $IFXObject$Type, local: boolean, copyParent: boolean): void
public "shallowCopy"(): $IFXObject
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "id"(): $UUID
public "destroy"(): void
public "children"(): $List<($ISceneObject)>
public "onParentChanged"(): void
public "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>, before: $Consumer$Type<($ISceneObject$Type)>, after: $Consumer$Type<($ISceneObject$Type)>): void
public "executeAll"(consumer: $Consumer$Type<($ISceneObject$Type)>): void
public "setScene"(scene: $IScene$Type): void
public "onTransformChanged"(): void
public "onChildChanged"(): void
public "setTransform"(transform: $Transform$Type): void
public "awake"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUIClient"(): $LDLRegisterClient
public "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
get "level"(): $Level
set "level"(value: $Level$Type)
get "renderType"(): $ParticleRenderType
get "alive"(): boolean
get "effect"(): $IEffect
get "scene"(): $IScene
set "sceneInternal"(value: $IScene$Type)
get "realLevel"(): $Level
set "effect"(value: $IEffect$Type)
set "visible"(value: boolean)
get "visible"(): boolean
set "scene"(value: $IScene$Type)
get "registerUIClient"(): $LDLRegisterClient
get "lDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FXObject$Type = ($FXObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FXObject_ = $FXObject$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable" {
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"

export interface $DraggableScrollableWidgetGroup$IDraggable extends $DraggableScrollableWidgetGroup$ISelected {

 "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
 "endDrag"(mouseX: double, mouseY: double): void
 "startDrag"(mouseX: double, mouseY: double): void
 "canDragOutRange"(): boolean
 "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
 "onSelected"(): void
 "onUnSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean

(mouseX: double, mouseY: double, button: integer): boolean
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/error/$PatternError" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MultiblockState, $MultiblockState$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PatternError {

constructor()

public "getCandidates"(): $List<($List<($ItemStack)>)>
public "getPos"(): $BlockPos
public "getWorld"(): $Level
public "getErrorInfo"(): $Component
public "setWorldState"(arg0: $MultiblockState$Type): void
get "candidates"(): $List<($List<($ItemStack)>)>
get "pos"(): $BlockPos
get "world"(): $Level
get "errorInfo"(): $Component
set "worldState"(value: $MultiblockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternError$Type = ($PatternError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternError_ = $PatternError$Type;
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
 "craftingRemainingItem": $Item

constructor(arg0: $MBDMachineBlock$Type, arg1: $Item$Properties$Type)

public "getBlock"(): $MBDMachineBlock
public "getDefinition"(): $MBDMachineDefinition
public "getRenderer"(arg0: $ItemStack$Type): $IRenderer
get "block"(): $MBDMachineBlock
get "definition"(): $MBDMachineDefinition
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
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
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

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getFullTooltipTexts"(): $List<($Component)>
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $TankWidget
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "getXEICurrentIngredient"(): any
public "setFluid"(fluidStack: $FluidStack$Type, notify: boolean): $TankWidget
public "setFluid"(fluidStack: $FluidStack$Type): $TankWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidStorage$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidTransfer$Type, tank: integer): $TankWidget
public "setShowAmount"(showAmount: boolean): $TankWidget
public "getTank"(): integer
public "getLastFluidInTank"(): $FluidStack
public "setAllowClickDrained"(allowClickDrained: boolean): $TankWidget
public "getLastTankCapacity"(): long
public "setAllowClickFilled"(allowClickFilled: boolean): $TankWidget
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getTooltipTexts"(): $List<($Component)>
public "initTemplate"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "getFluid"(): $FluidStack
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "setBackground"(background: $IGuiTexture$Type): $TankWidget
public "getIngredientIO"(): $IngredientIO
public "getXEIIngredients"(): $List<(any)>
public "getXEIChance"(): float
public "setChangeListener"(changeListener: $Runnable$Type): $TankWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>): $TankWidget
public "setDrawHoverTips"(drawHoverTips: boolean): $TankWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $TankWidget
public "setXEIChance"(XEIChance: float): $TankWidget
public "getFluidTank"(): $IFluidTransfer
public "self"(): $Widget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "fullTooltipTexts"(): $List<($Component)>
set "drawHoverOverlay"(value: boolean)
get "xEICurrentIngredient"(): any
set "fluid"(value: $FluidStack$Type)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "fluidTank"(value: $IFluidStorage$Type)
set "showAmount"(value: boolean)
get "tank"(): integer
get "lastFluidInTank"(): $FluidStack
set "allowClickDrained"(value: boolean)
get "lastTankCapacity"(): long
set "allowClickFilled"(value: boolean)
get "tooltipTexts"(): $List<($Component)>
get "fluid"(): $FluidStack
set "background"(value: $IGuiTexture$Type)
get "ingredientIO"(): $IngredientIO
get "xEIIngredients"(): $List<(any)>
get "xEIChance"(): float
set "changeListener"(value: $Runnable$Type)
set "onAddedTooltips"(value: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>)
set "drawHoverTips"(value: boolean)
set "ingredientIO"(value: $IngredientIO$Type)
set "xEIChance"(value: float)
get "fluidTank"(): $IFluidTransfer
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/photon/client/gameobject/emitter/data/$RendererSetting$Layer" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RendererSetting$Layer extends $Enum<($RendererSetting$Layer)> {
static readonly "Opaque": $RendererSetting$Layer
static readonly "Translucent": $RendererSetting$Layer


public static "values"(): ($RendererSetting$Layer)[]
public static "valueOf"(name: string): $RendererSetting$Layer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendererSetting$Layer$Type = (("translucent") | ("opaque")) | ($RendererSetting$Layer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendererSetting$Layer_ = $RendererSetting$Layer$Type;
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockShapeInfo" {
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$MultiblockShapeInfo$ShapeInfoBuilder, $MultiblockShapeInfo$ShapeInfoBuilder$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockShapeInfo$ShapeInfoBuilder"

export class $MultiblockShapeInfo implements $IConfigurable, $ITagSerializable<($CompoundTag)> {

constructor(arg0: ((($BlockInfo$Type)[])[])[])
constructor(arg0: ((($BlockInfo$Type)[])[])[], arg1: $List$Type<(string)>)

public "getDescription"(): $List<(string)>
public static "builder"(): $MultiblockShapeInfo$ShapeInfoBuilder
public "setDescription"(arg0: $List$Type<(string)>): void
public "setBlocks"(arg0: ((($BlockInfo$Type)[])[])[]): void
public "getBlocks"(): ((($BlockInfo)[])[])[]
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public static "loadFromTag"(arg0: $CompoundTag$Type): $MultiblockShapeInfo
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "description"(): $List<(string)>
set "description"(value: $List$Type<(string)>)
set "blocks"(value: ((($BlockInfo$Type)[])[])[])
get "blocks"(): ((($BlockInfo)[])[])[]
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockShapeInfo$Type = ($MultiblockShapeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockShapeInfo_ = $MultiblockShapeInfo$Type;
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

public "switchTag"(tabWidget: $WidgetGroup$Type): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "initTemplate"(): void
public "clearAllWidgets"(): void
public "serializeInnerNBT"(): $CompoundTag
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "removeTab"(tabButton: $TabButton$Type): void
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
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
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "value"(): T
set "value"(value: T)
get "enable"(): boolean
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "onUpdate"(onUpdate: $FloatConsumer$Type): $Animation
public "getWidget"(): $Widget
public "isFinish"(): boolean
public "setWidget"(widget: $Widget$Type): $Animation
public "getOnFinish"(): $Runnable
public "appendOnFinish"(onFinish: $Runnable$Type): $Animation
public "ease"(ease: $IEase$Type): $Animation
get "widget"(): $Widget
get "finish"(): boolean
set "widget"(value: $Widget$Type)
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
public "getStages"(): $List<($AnimationStage)>
public "setStages"(arg0: $List$Type<($AnimationStage$Type)>): $Animation
public "toRawAnimation"(): $RawAnimation
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "stages"(): $List<($AnimationStage)>
set "stages"(value: $List$Type<($AnimationStage$Type)>)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/mbd2/api/machine/$IMultiController" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MultiblockState, $MultiblockState$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockState"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$IMultiPart, $IMultiPart$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMultiPart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMachine, $IMachine$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMachine"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$Lock, $Lock$Type} from "packages/java/util/concurrent/locks/$Lock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$BlockPattern, $BlockPattern$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$BlockPattern"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RecipeLogic$Status, $RecipeLogic$Status$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeLogic, $RecipeLogic$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export interface $IMultiController extends $IMachine {

 "getPattern"(): $BlockPattern
 "checkPattern"(): boolean
 "checkPatternWithLock"(): boolean
 "alwaysTryModifyRecipe"(): boolean
 "shouldAddPartToController"(arg0: $IMultiPart$Type): boolean
 "checkPatternWithTryLock"(): boolean
 "notifyRecipeStatusChanged"(arg0: $RecipeLogic$Status$Type, arg1: $RecipeLogic$Status$Type): void
 "onStructureInvalid"(arg0: boolean): void
 "onStructureInvalid"(): void
 "isFormedValid"(): boolean
 "getMaxParallel"(arg0: $MBDRecipe$Type): $ContentModifier
 "getModifiedRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "onStructureFormed"(): void
 "getPatternLock"(): $Lock
 "asyncCheckPattern"(arg0: long): void
 "onWaiting"(): void
 "onWorking"(): boolean
 "getPartAppearance"(arg0: $IMultiPart$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): $BlockState
 "onPartUnload"(): void
 "afterWorking"(): void
 "beforeWorking"(arg0: $MBDRecipe$Type): boolean
 "getMultiblockState"(): $MultiblockState
 "isFormed"(): boolean
 "getParts"(): $List<($IMultiPart)>
 "getOffset"(): long
 "getLevel"(): $Level
 "getBlockState"(): $BlockState
 "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
 "scheduleRenderUpdate"(): void
 "getRecipeDampingValue"(): integer
 "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
 "onFuelBurningFinish"(arg0: $MBDRecipe$Type): void
 "alwaysReSearchRecipe"(): boolean
 "getFrontFacing"(): $Optional<($Direction)>
 "onRotated"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "hasFrontFacing"(): boolean
 "isInValid"(): boolean
 "setFrontFacing"(arg0: $Direction$Type): void
 "getOffsetTimer"(): long
 "isFacingValid"(arg0: $Direction$Type): boolean
 "runRecipeLogic"(): boolean
 "getChanceTier"(): integer
 "dampingWhenWaiting"(): boolean
 "onUnload"(): void
 "getMachineLevel"(): integer
 "modifyFuelRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "applyParallel"(arg0: $MBDRecipe$Type, arg1: integer): $MBDRecipe
 "getRecipeLogic"(): $RecipeLogic
 "getRecipeType"(): $MBDRecipeType
 "notifyBlockUpdate"(): void
 "onLoad"(): void
 "getHolder"(): $BlockEntity
 "getPos"(): $BlockPos
 "markDirty"(): void
 "doModifyRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
 "hasProxies"(): boolean
}

export namespace $IMultiController {
function ofController(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMultiController)>
function ofController(arg0: $BlockEntity$Type): $Optional<($IMultiController)>
function ofMachine(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMachine)>
function ofMachine(arg0: $BlockEntity$Type): $Optional<($IMachine)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiController$Type = ($IMultiController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiController_ = $IMultiController$Type;
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
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$DraggableScrollableWidgetGroup$ScrollWheelDirection, $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ScrollWheelDirection"

export class $DraggableScrollableWidgetGroup extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setSize"(size: $Size$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "getWidgetBottomHeight"(): integer
public "setScrollWheelDirection"(scrollWheelDirection: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type): $DraggableScrollableWidgetGroup
public "getScrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
public "setXScrollBarHeight"(xBar: integer): $DraggableScrollableWidgetGroup
public "setDraggable"(draggable: boolean): $DraggableScrollableWidgetGroup
public "setYBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setScrollYOffset"(scrollYOffset: integer): void
public "setYScrollBarWidth"(yBar: integer): $DraggableScrollableWidgetGroup
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "setScrollXOffset"(scrollXOffset: integer): void
public "computeMax"(): void
public "setXBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setScrollable"(scrollable: boolean): $DraggableScrollableWidgetGroup
public "getScrollYOffset"(): integer
public "getScrollXOffset"(): integer
public "isDraggable"(): boolean
public "isScrollable"(): boolean
public "isUseScissor"(): boolean
public "setUseScissor"(useScissor: boolean): $DraggableScrollableWidgetGroup
public "getMoveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initTemplate"(): void
public "clearAllWidgets"(): void
public "removeWidget"(widget: $Widget$Type): void
public "serializeInnerNBT"(): $CompoundTag
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "setBackground"(background: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setSelected"(widget: $Widget$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "size"(value: $Size$Type)
get "widgetBottomHeight"(): integer
set "scrollWheelDirection"(value: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type)
get "scrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
set "xScrollBarHeight"(value: integer)
set "draggable"(value: boolean)
set "scrollYOffset"(value: integer)
set "yScrollBarWidth"(value: integer)
set "scrollXOffset"(value: integer)
set "scrollable"(value: boolean)
get "scrollYOffset"(): integer
get "scrollXOffset"(): integer
get "draggable"(): boolean
get "scrollable"(): boolean
get "useScissor"(): boolean
set "useScissor"(value: boolean)
get "moveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
set "background"(value: $IGuiTexture$Type)
set "selected"(value: $Widget$Type)
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
public "getPushDataDelegates"(): $Map<($PortEdge), ($NodePort$IPushDataDelegate)>
public "getEdgeWithRemoteCustomIO"(): $List<($PortEdge)>
public "getCustomPortIOMethod"(): $ICustomPortIODelegate
public "resetToDefault"(): void
public "getEdges"(): $List<($PortEdge)>
public "PushData"(): void
public "PullData"(): void
public static "setFieldDefault"(fieldInfo: $Field$Type, fieldOwner: any): void
get "pushDataDelegates"(): $Map<($PortEdge), ($NodePort$IPushDataDelegate)>
get "edgeWithRemoteCustomIO"(): $List<($PortEdge)>
get "customPortIOMethod"(): $ICustomPortIODelegate
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

public "setRightRadiusInner"(radius: float): $ColorBorderTexture
public "setBottomRadiusOuter"(radius: float): $ColorBorderTexture
public "setBottomRadiusInner"(radius: float): $ColorBorderTexture
public "setRightRadiusOuter"(radius: float): $ColorBorderTexture
public "setLeftRadius"(radius: float): $ColorBorderTexture
public "setRightRadius"(radius: float): $ColorBorderTexture
public "setTopRadius"(radius: float): $ColorBorderTexture
public "setBottomRadius"(radius: float): $ColorBorderTexture
public "setLeftRadiusOuter"(radius: float): $ColorBorderTexture
public "setRadiusLTInner"(radiusLTInner: float): void
public "setRadiusLBInner"(radiusLBInner: float): void
public "setRadiusLBOuter"(radiusLBOuter: float): void
public "setTopRadiusOuter"(radius: float): $ColorBorderTexture
public "setTopRadiusInner"(radius: float): $ColorBorderTexture
public "setRadiusRTInner"(radiusRTInner: float): void
public "setRadiusRTOuter"(radiusRTOuter: float): void
public "setRadiusRBOuter"(radiusRBOuter: float): void
public "setRadiusRBInner"(radiusRBInner: float): void
public "setRadiusLTOuter"(radiusLTOuter: float): void
public "setLeftRadiusInner"(radius: float): $ColorBorderTexture
public "setRadius"(radius: float): $ColorBorderTexture
public "setBorder"(border: integer): $ColorBorderTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "rightRadiusInner"(value: float)
set "bottomRadiusOuter"(value: float)
set "bottomRadiusInner"(value: float)
set "rightRadiusOuter"(value: float)
set "leftRadius"(value: float)
set "rightRadius"(value: float)
set "topRadius"(value: float)
set "bottomRadius"(value: float)
set "leftRadiusOuter"(value: float)
set "radiusLTInner"(value: float)
set "radiusLBInner"(value: float)
set "radiusLBOuter"(value: float)
set "topRadiusOuter"(value: float)
set "topRadiusInner"(value: float)
set "radiusRTInner"(value: float)
set "radiusRTOuter"(value: float)
set "radiusRBOuter"(value: float)
set "radiusRBInner"(value: float)
set "radiusLTOuter"(value: float)
set "leftRadiusInner"(value: float)
set "radius"(value: float)
set "border"(value: integer)
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
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ISerializableRenderer extends $IConfigurable, $IRenderer, $IAutoPersistedSerializable, $ILDLRegisterClient {

 "initRenderer"(): void
 "createPreview"(father: $ConfiguratorGroup$Type): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "isRaw"(): boolean
 "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
 "reBakeCustomQuadsOffset"(): float
 "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
 "hasTESR"(blockEntity: $BlockEntity$Type): boolean
 "getViewDistance"(): integer
 "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
 "getParticleTexture"(): $TextureAtlasSprite
 "reBakeCustomQuads"(): boolean
 "isGui3d"(): boolean
 "useBlockLight"(stack: $ItemStack$Type): boolean
 "useAO"(): boolean
 "useAO"(state: $BlockState$Type): boolean
 "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
 "registerEvent"(): void
 "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
 "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
 "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
 "deserializeNBT"(tag: $CompoundTag$Type): void
 "name"(): string
 "group"(): string
 "getRegisterUIClient"(): $LDLRegisterClient
 "isLDLRegister"(): boolean
/**
 * 
 * @deprecated
 */
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
}

export namespace $ISerializableRenderer {
function deserializeWrapper(tag: $CompoundTag$Type): $ISerializableRenderer
function serializeWrapper(renderer: $ISerializableRenderer$Type): $CompoundTag
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
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldSceneRenderer {
readonly "world": $Level
readonly "renderedBlocksMap": $Map<($Collection<($BlockPos)>), ($ISceneBlockRenderHook)>

constructor(world: $Level$Type)

public "getFov"(): float
public "setBeforeWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "setAfterWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "setOnLookingAt"(onLookingAt: $Consumer$Type<($BlockHitResult$Type)>): $WorldSceneRenderer
public static "setDefaultRenderLayerState"(layer: $RenderType$Type): void
public "setSceneEntityRenderHook"(sceneEntityRenderHook: $ISceneEntityRenderHook$Type): void
public "getPositionRectRevert"(windowX: integer, windowY: integer, windowWidth: integer, windowHeight: integer): $PositionedRect
public "render"(poseStack: $PoseStack$Type, x: float, y: float, width: float, height: float, mouseX: integer, mouseY: integer): void
public "rayTrace"(hitPos: $Vector3f$Type): $BlockHitResult
public "setBlocked"(blocked: $Set$Type<($BlockPos$Type)>): $WorldSceneRenderer
public "getPositionedRect"(x: integer, y: integer, width: integer, height: integer): $PositionedRect
public "getLookAt"(): $Vector3f
public "getWorldUp"(): $Vector3f
public "setFov"(fov: float): void
public "isEndBatchLast"(): boolean
public static "canRenderInLayer"(state: $BlockState$Type, renderType: $RenderType$Type): boolean
public static "renderBlocksForge"(blockRenderDispatcher: $BlockRenderDispatcher$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $BlockAndTintGetter$Type, poseStack: $PoseStack$Type, consumer: $VertexConsumer$Type, random: $RandomSource$Type, renderType: $RenderType$Type): void
public "getLastHit"(): $Vector3f
public "project"(pos: $Vector3f$Type): $Vector3f
public "getParticleManager"(): $ParticleManager
public "setParticleManager"(particleManager: $ParticleManager$Type): $WorldSceneRenderer
public "setEndBatchLast"(endBatchLast: boolean): void
public "useCacheBuffer"(useCache: boolean): $WorldSceneRenderer
public "unProject"(mouseX: integer, mouseY: integer, checkDepth: boolean): $Vector3f
public "unProject"(mouseX: integer, mouseY: integer): $Vector3f
public "setCameraOrtho"(minX: float, maxX: float, minY: float, maxY: float, minZ: float, maxZ: float): void
public "setCameraOrtho"(x: float, y: float, z: float): void
public "setCameraLookAt"(eyePos: $Vector3f$Type, lookAt: $Vector3f$Type, worldUp: $Vector3f$Type): void
public "setCameraLookAt"(lookAt: $Vector3f$Type, radius: double, rotationPitch: double, rotationYaw: double): void
public "useOrtho"(ortho: boolean): $WorldSceneRenderer
public "setBeforeBatchEnd"(beforeBatchEnd: $BiConsumer$Type<($MultiBufferSource$Type), (float)>): void
public "deleteCacheBuffer"(): $WorldSceneRenderer
public "needCompileCache"(): $WorldSceneRenderer
public "addRenderedBlocks"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $WorldSceneRenderer
public "setClearColor"(clearColor: integer): void
public "getEyePos"(): $Vector3f
public "getLastTraceResult"(): $BlockHitResult
public "isUseCache"(): boolean
public "getCompileProgress"(): double
public "isCompiling"(): boolean
get "fov"(): float
set "beforeWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "onLookingAt"(value: $Consumer$Type<($BlockHitResult$Type)>)
set "defaultRenderLayerState"(value: $RenderType$Type)
set "sceneEntityRenderHook"(value: $ISceneEntityRenderHook$Type)
set "blocked"(value: $Set$Type<($BlockPos$Type)>)
get "lookAt"(): $Vector3f
get "worldUp"(): $Vector3f
set "fov"(value: float)
get "endBatchLast"(): boolean
get "lastHit"(): $Vector3f
get "particleManager"(): $ParticleManager
set "particleManager"(value: $ParticleManager$Type)
set "endBatchLast"(value: boolean)
set "beforeBatchEnd"(value: $BiConsumer$Type<($MultiBufferSource$Type), (float)>)
set "clearColor"(value: integer)
get "eyePos"(): $Vector3f
get "lastTraceResult"(): $BlockHitResult
get "useCache"(): boolean
get "compileProgress"(): double
get "compiling"(): boolean
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

public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "getTick"(arg0: any): double
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
public "setAddition"(arg0: double): void
public "getAddition"(): double
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/photon/client/gameobject/emitter/$PhotonParticleRenderType" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Tesselator, $Tesselator$Type} from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$RendererSetting$Layer, $RendererSetting$Layer$Type} from "packages/com/lowdragmc/photon/client/gameobject/emitter/data/$RendererSetting$Layer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$Frustum, $Frustum$Type} from "packages/net/minecraft/client/renderer/culling/$Frustum"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$TextureManager, $TextureManager$Type} from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export class $PhotonParticleRenderType implements $ParticleRenderType {
static "bloomMark": boolean

constructor()

public "end"(builder: $BufferBuilder$Type): void
public "begin"(builder: $BufferBuilder$Type): void
public "isParallel"(): boolean
/**
 * 
 * @deprecated
 */
public "end"(tesselator: $Tesselator$Type): void
/**
 * 
 * @deprecated
 */
public "begin"(builder: $BufferBuilder$Type, textureManager: $TextureManager$Type): void
public static "getLAYER"(): $RendererSetting$Layer
public static "finishRender"(): void
public static "prepareForParticleRendering"(cullingFrustum: $Frustum$Type): void
public static "makeParticleRenderTypeComparator"(renderOrder: $List$Type<($ParticleRenderType$Type)>): $Comparator<($ParticleRenderType)>
public static "checkFrustum"(aabb: $AABB$Type): boolean
public static "checkLayer"(layer: $RendererSetting$Layer$Type): boolean
public "beginBloom"(): void
public "prepareStatus"(): void
public static "getFRUSTUM"(): $Frustum
public static "renderBloom"(): void
public "releaseStatus"(): void
public "endBloom"(): void
get "parallel"(): boolean
get "lAYER"(): $RendererSetting$Layer
get "fRUSTUM"(): $Frustum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhotonParticleRenderType$Type = ($PhotonParticleRenderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhotonParticleRenderType_ = $PhotonParticleRenderType$Type;
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
 "readPayload"(arg0: $FriendlyByteBuf$Type): void
 "writePayload"(arg0: $FriendlyByteBuf$Type): void
 "copyForManaged"(value: any): any
 "serializeNBT"(): $Tag
 "deserializeNBT"(arg0: $Tag$Type): void
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
declare module "packages/com/lowdragmc/mbd2/api/machine/$IMultiPart" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IMachine, $IMachine$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMachine"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IMultiController, $IMultiController$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMultiController"
import {$MBDRecipe, $MBDRecipe$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipe"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$MBDRecipeType, $MBDRecipeType$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$MBDRecipeType"
import {$ContentModifier, $ContentModifier$Type} from "packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RecipeLogic$Status, $RecipeLogic$Status$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic$Status"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeLogic, $RecipeLogic$Type} from "packages/com/lowdragmc/mbd2/api/recipe/$RecipeLogic"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IRecipeHandlerTrait, $IRecipeHandlerTrait$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandlerTrait"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export interface $IMultiPart extends $IMachine {

 "getControllers"(): $List<($IMultiController)>
 "getMaxControllerParallel"(arg0: $MBDRecipe$Type, arg1: $RecipeLogic$Type): $ContentModifier
 "modifyControllerRecipe"(arg0: $MBDRecipe$Type, arg1: $RecipeLogic$Type): $MBDRecipe
 "beforeControllerWorking"(arg0: $IMultiController$Type): boolean
 "onControllerWaiting"(arg0: $IMultiController$Type): void
 "afterControllerWorking"(arg0: $IMultiController$Type): void
 "onControllerWorking"(arg0: $IMultiController$Type): boolean
 "alwaysTryModifyControllerRecipe"(): boolean
 "removedFromController"(arg0: $IMultiController$Type): void
 "notifyControllerRecipeStatusChanged"(arg0: $IMultiController$Type, arg1: $RecipeLogic$Status$Type, arg2: $RecipeLogic$Status$Type): void
 "isFormed"(): boolean
 "hasController"(arg0: $BlockPos$Type): boolean
 "getRecipeHandlers"(): $List<($IRecipeHandlerTrait<(any)>)>
 "canShared"(): boolean
 "addedToController"(arg0: $IMultiController$Type): void
 "getOffset"(): long
 "getLevel"(): $Level
 "getBlockState"(): $BlockState
 "alwaysTryModifyRecipe"(): boolean
 "notifyRecipeStatusChanged"(arg0: $RecipeLogic$Status$Type, arg1: $RecipeLogic$Status$Type): void
 "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
 "scheduleRenderUpdate"(): void
 "getRecipeDampingValue"(): integer
 "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
 "onFuelBurningFinish"(arg0: $MBDRecipe$Type): void
 "alwaysReSearchRecipe"(): boolean
 "getFrontFacing"(): $Optional<($Direction)>
 "getMaxParallel"(arg0: $MBDRecipe$Type): $ContentModifier
 "getModifiedRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "onRotated"(arg0: $Direction$Type, arg1: $Direction$Type): void
 "hasFrontFacing"(): boolean
 "onWaiting"(): void
 "isInValid"(): boolean
 "onWorking"(): boolean
 "setFrontFacing"(arg0: $Direction$Type): void
 "afterWorking"(): void
 "getOffsetTimer"(): long
 "beforeWorking"(arg0: $MBDRecipe$Type): boolean
 "isFacingValid"(arg0: $Direction$Type): boolean
 "runRecipeLogic"(): boolean
 "getChanceTier"(): integer
 "dampingWhenWaiting"(): boolean
 "onUnload"(): void
 "getMachineLevel"(): integer
 "modifyFuelRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "applyParallel"(arg0: $MBDRecipe$Type, arg1: integer): $MBDRecipe
 "getRecipeLogic"(): $RecipeLogic
 "getRecipeType"(): $MBDRecipeType
 "notifyBlockUpdate"(): void
 "onLoad"(): void
 "getHolder"(): $BlockEntity
 "getPos"(): $BlockPos
 "markDirty"(): void
 "doModifyRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
 "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
 "hasProxies"(): boolean
}

export namespace $IMultiPart {
function ofPart(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMultiPart)>
function ofPart(arg0: $BlockEntity$Type): $Optional<($IMultiPart)>
function ofMachine(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMachine)>
function ofMachine(arg0: $BlockEntity$Type): $Optional<($IMachine)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiPart$Type = ($IMultiPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiPart_ = $IMultiPart$Type;
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockShapeInfo$ShapeInfoBuilder" {
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$MultiblockShapeInfo, $MultiblockShapeInfo$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockShapeInfo"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Builder, $Builder$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Builder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MultiblockShapeInfo$ShapeInfoBuilder extends $Builder<($BlockInfo), ($MultiblockShapeInfo$ShapeInfoBuilder)> {

constructor()

public "build"(): $MultiblockShapeInfo
public "where"(arg0: character, arg1: $Block$Type): $MultiblockShapeInfo$ShapeInfoBuilder
public "where"(arg0: character, arg1: $Supplier$Type<(any)>): $MultiblockShapeInfo$ShapeInfoBuilder
public "where"(arg0: character, arg1: $BlockState$Type): $MultiblockShapeInfo$ShapeInfoBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockShapeInfo$ShapeInfoBuilder$Type = ($MultiblockShapeInfo$ShapeInfoBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockShapeInfo$ShapeInfoBuilder_ = $MultiblockShapeInfo$ShapeInfoBuilder$Type;
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
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
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
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getRotationState"(): $RotationState
public "getFrontFacing"(arg0: $BlockState$Type): $Optional<($Direction)>
public "getRenderer"(arg0: $BlockState$Type): $IRenderer
public "getLightMap"(arg0: $BlockAndTintGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getModelState"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ModelState
public "getMachine"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MBDMachine)>
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
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

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
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
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemTransferHelper, $ItemTransferHelper$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$ItemTransferHelper"

export class $ItemTransferHelperImpl extends $ItemTransferHelper {

constructor()

public static "insertItem"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertItem"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "toItemHandler"(itemTransfer: $IItemTransfer$Type): $IItemHandler
public static "insertToEmpty"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertToEmpty"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "toItemTransfer"(handler: $IItemHandler$Type): $IItemTransfer
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockState" {
import {$SimplePredicate, $SimplePredicate$Type} from "packages/com/lowdragmc/mbd2/api/pattern/predicates/$SimplePredicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IMultiController, $IMultiController$Type} from "packages/com/lowdragmc/mbd2/api/machine/$IMultiController"
import {$TraceabilityPredicate, $TraceabilityPredicate$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$TraceabilityPredicate"
import {$PatternError, $PatternError$Type} from "packages/com/lowdragmc/mbd2/api/pattern/error/$PatternError"
import {$LongOpenHashSet, $LongOpenHashSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongOpenHashSet"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PatternMatchContext, $PatternMatchContext$Type} from "packages/com/lowdragmc/mbd2/api/pattern/util/$PatternMatchContext"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultiblockState {
static readonly "UNLOAD_ERROR": $PatternError
static readonly "UNINIT_ERROR": $PatternError
 "predicate": $TraceabilityPredicate
 "io": $IO
 "error": $PatternError
readonly "world": $Level
readonly "controllerPos": $BlockPos
 "lastController": $IMultiController
 "cache": $LongOpenHashSet

constructor(arg0: $Level$Type, arg1: $BlockPos$Type)

public "setError"(arg0: $PatternError$Type): void
public "getCache"(): $Collection<($BlockPos)>
public "getBlockState"(): $BlockState
public "hasError"(): boolean
public "addPosCache"(arg0: $BlockPos$Type): void
public "getOffsetState"(arg0: $Direction$Type): $BlockState
public "getLayerCount"(): $Map<($SimplePredicate), (integer)>
public "getGlobalCount"(): $Map<($SimplePredicate), (integer)>
public "onBlockStateChanged"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "isPosInCache"(arg0: $BlockPos$Type): boolean
public "getMatchContext"(): $PatternMatchContext
public "getController"(): $IMultiController
public "isInternalStructureForming"(): boolean
public "isInternalStructureInvaliding"(): boolean
public "getPos"(): $BlockPos
public "getWorld"(): $Level
public "getTileEntity"(): $BlockEntity
set "error"(value: $PatternError$Type)
get "cache"(): $Collection<($BlockPos)>
get "blockState"(): $BlockState
get "layerCount"(): $Map<($SimplePredicate), (integer)>
get "globalCount"(): $Map<($SimplePredicate), (integer)>
get "matchContext"(): $PatternMatchContext
get "controller"(): $IMultiController
get "internalStructureForming"(): boolean
get "internalStructureInvaliding"(): boolean
get "pos"(): $BlockPos
get "world"(): $Level
get "tileEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockState$Type = ($MultiblockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockState_ = $MultiblockState$Type;
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
public "getIcon"(): $IGuiTexture
public "getTooltip"(): string
public "support"(arg0: $IO$Type): boolean
get "name"(): string
get "icon"(): $IGuiTexture
get "tooltip"(): string
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

public "setType"(type: $TextTexture$TextType$Type): $TextTexture
public "setColor"(color: integer): $TextTexture
public "updateText"(text: string): void
public "setDropShadow"(dropShadow: boolean): $TextTexture
public "setRollSpeed"(rollSpeed: float): void
public "getLines"(): integer
public "updateTick"(): void
public "setBackgroundColor"(color: integer): $TextTexture
public "setWidth"(width: integer): $TextTexture
public "setSupplier"(supplier: $Supplier$Type<(string)>): $TextTexture
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
set "type"(value: $TextTexture$TextType$Type)
set "color"(value: integer)
set "dropShadow"(value: boolean)
set "rollSpeed"(value: float)
get "lines"(): integer
set "backgroundColor"(value: integer)
set "width"(value: integer)
set "supplier"(value: $Supplier$Type<(string)>)
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

public "setShadow"(shadow: boolean): $TextBoxWidget
public "setSize"(size: $Size$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setContent"(content: $List$Type<(string)>): $TextBoxWidget
public "setFontSize"(fontSize: integer): $TextBoxWidget
public "setCenter"(center: boolean): $TextBoxWidget
public "setFontColor"(fontColor: integer): $TextBoxWidget
public "setSpace"(space: integer): $TextBoxWidget
public "getMaxContentWidth"(): integer
public "initTemplate"(): void
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "shadow"(value: boolean)
set "size"(value: $Size$Type)
set "content"(value: $List$Type<(string)>)
set "fontSize"(value: integer)
set "center"(value: boolean)
set "fontColor"(value: integer)
set "space"(value: integer)
get "maxContentWidth"(): integer
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
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
public "toNBT"(): $CompoundTag
public "deserialize"(arg0: $JsonObject$Type): $RecipeCondition
public "getIcon"(): $IGuiTexture
public "fromNetwork"(arg0: $FriendlyByteBuf$Type): $RecipeCondition
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "serialize"(): $JsonObject
public "setReverse"(arg0: boolean): $RecipeCondition
public "fromNBT"(arg0: $CompoundTag$Type): $RecipeCondition
public "getTooltips"(): $Component
public "isReverse"(): boolean
public "isOr"(): boolean
public "getTranslationKey"(): string
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "type"(): string
get "icon"(): $IGuiTexture
set "reverse"(value: boolean)
get "tooltips"(): $Component
get "reverse"(): boolean
get "or"(): boolean
get "translationKey"(): string
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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


public "getPosition"(): $Position
public "initialize"(graph: $BaseGraph$Type): void
public "copy"(): $BaseNode
public "getPort"(fieldName: string, identifier: string): $NodePort
public "getPort"(fieldName: string): $NodePort
public "getDisplayName"(): string
public "setDisplayName"(displayName: string): void
public static "createFromTag"(tag: $CompoundTag$Type): $BaseNode
public static "createFromType"<T extends $BaseNode>(nodeType: $Class$Type<(T)>, position: $Position$Type): T
public "updateAllPorts"(): boolean
public "getAllFields"(): ($Field)[]
public "onEdgeDisconnected"(edge: $PortEdge$Type): void
public "destroyInternal"(): void
public "getAllMethods"(): ($Method)[]
public "disableInternal"(): void
public "onEdgeConnected"(edge: $PortEdge$Type): void
public "resetNode"(): void
public "InitializePorts"(): void
public "onProcess"(): void
public "addPort"(input: boolean, fieldName: string, portData: $PortData$Type): void
public "removePort"(input: boolean, fieldName: string): void
public "removePort"(input: boolean, port: $NodePort$Type): void
public "GetOutputNodes"(): $List<($BaseNode)>
public "findInDependencies"(condition: $Predicate$Type<($BaseNode$Type)>): $BaseNode
public "isFieldInput"(fieldName: string): boolean
public "getInputNodes"(): $List<($BaseNode)>
public "getFieldsToUpdate"(): $Stack<($BaseNode$PortUpdate)>
public "getOnProcessed"(): $Runnable
public "isCanBeRemoved"(): boolean
public "getOutputPorts"(): $NodePortContainer$NodeOutputPortContainer
public "getComputeOrder"(): integer
public "getUpdatedFields"(): $HashSet<($BaseNode$PortUpdate)>
public "setExpanded"(expanded: boolean): void
public "getOnPortsUpdated"(): $Consumer<(string)>
public "getInputPorts"(): $NodePortContainer$NodeInputPortContainer
public "getTitleColor"(): integer
public "setCanBeRemoved"(canBeRemoved: boolean): void
public "getAllEdges"(): $List<($PortEdge)>
public "getGUID"(): string
public "isCanProcess"(): boolean
public "getNodeFields"(): $Map<(string), ($BaseNode$NodeFieldInformation)>
public "setPosition"(position: $Position$Type): void
public "getAllPorts"(): $List<($NodePort)>
public "isExpanded"(): boolean
public "getOnAfterEdgeDisconnected"(): $Consumer<($PortEdge)>
public "getOnAfterEdgeConnected"(): $Consumer<($PortEdge)>
public "updatePortsForField"(fieldName: string): boolean
public "updatePortsForField"(fieldName: string, sendPortUpdatedEvent: boolean): boolean
public "UpdateAllPortsLocal"(): boolean
public "updatePortsForFieldLocal"(fieldName: string, sendPortUpdatedEvent: boolean): boolean
public "updatePortsForFieldLocal"(fieldName: string): boolean
public "getGraph"(): $BaseGraph
public "newGuid"(graph: $BaseGraph$Type): void
public "getMinWidth"(): integer
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
get "position"(): $Position
get "displayName"(): string
set "displayName"(value: string)
get "allFields"(): ($Field)[]
get "allMethods"(): ($Method)[]
get "inputNodes"(): $List<($BaseNode)>
get "fieldsToUpdate"(): $Stack<($BaseNode$PortUpdate)>
get "onProcessed"(): $Runnable
get "canBeRemoved"(): boolean
get "outputPorts"(): $NodePortContainer$NodeOutputPortContainer
get "computeOrder"(): integer
get "updatedFields"(): $HashSet<($BaseNode$PortUpdate)>
set "expanded"(value: boolean)
get "onPortsUpdated"(): $Consumer<(string)>
get "inputPorts"(): $NodePortContainer$NodeInputPortContainer
get "titleColor"(): integer
set "canBeRemoved"(value: boolean)
get "allEdges"(): $List<($PortEdge)>
get "gUID"(): string
get "canProcess"(): boolean
get "nodeFields"(): $Map<(string), ($BaseNode$NodeFieldInformation)>
set "position"(value: $Position$Type)
get "allPorts"(): $List<($NodePort)>
get "expanded"(): boolean
get "onAfterEdgeDisconnected"(): $Consumer<($PortEdge)>
get "onAfterEdgeConnected"(): $Consumer<($PortEdge)>
get "graph"(): $BaseGraph
get "minWidth"(): integer
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
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
public "getLightEngine"(): $LevelLightEngine
public "setBlock"(pPos: $BlockPos$Type, pState: $BlockState$Type, pFlags: integer, pRecursionLeft: integer): boolean
public "sendBlockUpdated"(pos: $BlockPos$Type, oldState: $BlockState$Type, newState: $BlockState$Type, flags: integer): void
public "getBlockState"(x: integer, y: integer, z: integer): $BlockState
public "levelEvent"(pPlayer: $Player$Type, pType: integer, pPos: $BlockPos$Type, pData: integer): void
public "gameEvent"(event: $GameEvent$Type, position: $Vec3$Type, context: $GameEvent$Context$Type): void
public "getScoreboard"(): $Scoreboard
public "getBiomeManager"(): $BiomeManager
public "getBlockState"(pPos: $BlockPos$Type): $BlockState
public "enabledFeatures"(): $FeatureFlagSet
public "registryAccess"(): $RegistryAccess
public "playSound"(pPlayer: $Player$Type, pX: double, pY: double, pZ: double, pSound: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "addParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, soundEvent: $SoundEvent$Type, soundSource: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, sound: $Holder$Type<($SoundEvent$Type)>, source: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSound"(pPlayer: $Player$Type, pEntity: $Entity$Type, pEvent: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "playSeededSound"(player: $Player$Type, entity: $Entity$Type, sound: $Holder$Type<($SoundEvent$Type)>, category: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, ignoreRange: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addParticle"(particleData: $ParticleOptions$Type, forceAlwaysRender: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "isLoaded"(p_195588_1_: $BlockPos$Type): boolean
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "gatherChunkSourceStats"(): string
public "getEntity"(id: integer): $Entity
public "setMapData"(pMapId: string, pData: $MapItemSavedData$Type): void
public "getMapData"(mapName: string): $MapItemSavedData
public "canSeeSky"(pos: $BlockPos$Type): boolean
public "getFreeMapId"(): integer
public "destroyBlockProgress"(breakerId: integer, pos: $BlockPos$Type, progress: integer): void
public "getRecipeManager"(): $RecipeManager
public "players"(): $List<(any)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(pEntity: $Entity$Type, pEvent: $GameEvent$Type, pPos: $BlockPos$Type): void
public "getNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getUncachedNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getRawBrightness"(pos: $BlockPos$Type, p_226659_2_: integer): integer
public "getShade"(direction: $Direction$Type, b: boolean): float
public "getBrightness"(pLightType: $LightLayer$Type, pBlockPos: $BlockPos$Type): integer
public "getParticleManager"(): $ParticleManager
public "getAsClientWorld"(): $Supplier<($ClientLevel)>
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "getBlockEntity"(pPos: $BlockPos$Type): $BlockEntity
public "getBiome"(pPos: $BlockPos$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "level"(): $Level
get "lightEngine"(): $LevelLightEngine
get "scoreboard"(): $Scoreboard
get "biomeManager"(): $BiomeManager
set "blockEntity"(value: $BlockEntity$Type)
get "freeMapId"(): integer
get "recipeManager"(): $RecipeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "particleManager"(): $ParticleManager
get "asClientWorld"(): $Supplier<($ClientLevel)>
set "particleManager"(value: $ParticleManager$Type)
get "chunkSource"(): $ChunkSource
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

public "registerEventGroup"(arg0: string): $ConfigMachineEvents
public "postGraphEvent"(arg0: $MachineEvent$Type): void
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "getMachineEvents"(): $Map<(string), ($Class<(any)>)>
public "getProcessorCache"(): $Map<($Class<(any)>), ($MachineEventGraphProcessor)>
public "getEventGraphs"(): $Map<($Class<(any)>), ($BaseGraph)>
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "machineEvents"(): $Map<(string), ($Class<(any)>)>
get "processorCache"(): $Map<($Class<(any)>), ($MachineEventGraphProcessor)>
get "eventGraphs"(): $Map<($Class<(any)>), ($BaseGraph)>
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

 "onChanged"(): void
 "markDirty"(name: string): void
 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "getSyncStorage"(): $IManagedStorage
 "getFieldHolder"(): $ManagedFieldHolder
 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
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

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getProgress"(): integer
public "getRecipe"(): $MBDRecipe
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "progress"(): integer
get "recipe"(): $MBDRecipe
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

public "getChild"(key: T): $TreeNode<(T), (K)>
public "toString"(): string
public "getKey"(): T
public "getContent"(): K
public "getChildren"(): $List<($TreeNode<(T), (K)>)>
public "isLeaf"(): boolean
public "removeChild"(key: T): void
public "getOrCreateChild"(childKey: T): $TreeNode<(T), (K)>
public "addContent"(key: T, content: K): void
public "createChild"(childKey: T): $TreeNode<(T), (K)>
public "setValid"(valid: $Predicate$Type<($TreeNode$Type<(T), (K)>)>): $TreeNode<(T), (K)>
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
public "getFrontIO"(): $IO
public "getBackIO"(): $IO
public "setRightIO"(arg0: $IO$Type): void
public "setBottomIO"(arg0: $IO$Type): void
public "getLeftIO"(): $IO
public "getBottomIO"(): $IO
public "getRightIO"(): $IO
public "setFrontIO"(arg0: $IO$Type): void
public "setBackIO"(arg0: $IO$Type): void
public "setLeftIO"(arg0: $IO$Type): void
public "getTopIO"(): $IO
public "setInternal"(arg0: $IO$Type): void
public "setTopIO"(arg0: $IO$Type): void
public "getIO"(arg0: $Direction$Type, arg1: $Direction$Type): $IO
get "internal"(): $IO
get "frontIO"(): $IO
get "backIO"(): $IO
set "rightIO"(value: $IO$Type)
set "bottomIO"(value: $IO$Type)
get "leftIO"(): $IO
get "bottomIO"(): $IO
get "rightIO"(): $IO
set "frontIO"(value: $IO$Type)
set "backIO"(value: $IO$Type)
set "leftIO"(value: $IO$Type)
get "topIO"(): $IO
set "internal"(value: $IO$Type)
set "topIO"(value: $IO$Type)
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
public "addedEdge"(addedEdge: $PortEdge$Type): $BaseGraph$GraphChanges
public "addedNode"(addedNode: $BaseNode$Type): $BaseGraph$GraphChanges
public "nodeChanged"(nodeChanged: $BaseNode$Type): $BaseGraph$GraphChanges
public "removedEdge"(removedEdge: $PortEdge$Type): $BaseGraph$GraphChanges
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

 "getSlots"(): integer
 "restoreFromSnapshot"(arg0: any): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setStackInSlot"(index: integer, stack: $ItemStack$Type): void
 "createSnapshot"(): any
 "onContentsChanged"(): void
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

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
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
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$IScene" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ISceneObject, $ISceneObject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/sceneeditor/sceneobject/$ISceneObject"

export interface $IScene {

 "removeSceneObjectInternal"(arg0: $ISceneObject$Type): void
 "addSceneObject"(sceneObject: $ISceneObject$Type): void
 "awake"(): void
 "addSceneObjectInternal"(arg0: $ISceneObject$Type): void
 "getSceneObject"(arg0: $UUID$Type): $ISceneObject
 "removeSceneObject"(sceneObject: $ISceneObject$Type): void
 "getAllSceneObjects"(): $Collection<($ISceneObject)>
}

export namespace $IScene {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScene$Type = ($IScene);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScene_ = $IScene$Type;
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

public "setCurrentProjectFile"(currentProjectFile: $File$Type): void
public "getCurrentProjectFile"(): $File
public "isCurrentProjectSaved"(): boolean
public "getHistory"(): $List<($Editor$HistoryItem)>
public "setGui"(gui: $ModularUI$Type): void
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "initEditorViews"(): void
public "openDialog"(dialog: $DialogWidget$Type): $DialogWidget
public "loadProject"(project: $IProject$Type): void
public "isWaitingForSave"(): boolean
public "ifCopiedPresent"(copyType: string, consumer: $Consumer$Type<(any)>): void
public "addAutoHistory"(name: string, source: any): void
public "addRawHistory"(name: string, date: $CompoundTag$Type): void
public "addRawHistory"(name: string, date: $CompoundTag$Type, source: any): void
public "saveAsProject"(result: $BooleanConsumer$Type): void
public "setCopy"(copyType: string, copied: any): void
public "jumpToHistory"(historyItem: $Editor$HistoryItem$Type): void
public "saveProject"(result: $BooleanConsumer$Type): void
public "askToSaveProject"(result: $BooleanConsumer$Type): void
public "getCopyType"(): string
public "getCurrentHistory"(): $Editor$HistoryItem
public "getTabPages"(): $StringTabContainer
public "getFloatView"(): $WidgetGroup
public "getCopied"(): any
public "getWorkSpace"(): $File
public "getCurrentProject"(): $IProject
public "getConfigPanel"(): $ConfigPanel
public "getToolPanel"(): $ToolPanel
public "getMenuPanel"(): $MenuPanel
public "getResourcePanel"(): $ResourcePanel
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "openMenu"<T, C>(posX: double, posY: double, menuNode: $TreeNode$Type<(T), (C)>): $MenuWidget<(T), (C)>
public "openMenu"(posX: double, posY: double, menuBuilder: $TreeBuilder$Menu$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
set "currentProjectFile"(value: $File$Type)
get "currentProjectFile"(): $File
get "currentProjectSaved"(): boolean
get "history"(): $List<($Editor$HistoryItem)>
set "gui"(value: $ModularUI$Type)
get "waitingForSave"(): boolean
get "copyType"(): string
get "currentHistory"(): $Editor$HistoryItem
get "tabPages"(): $StringTabContainer
get "floatView"(): $WidgetGroup
get "copied"(): any
get "workSpace"(): $File
get "currentProject"(): $IProject
get "configPanel"(): $ConfigPanel
get "toolPanel"(): $ToolPanel
get "menuPanel"(): $MenuPanel
get "resourcePanel"(): $ResourcePanel
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
 "instruction": string
readonly "machine": $MBDMachine

constructor()
constructor(arg0: $MBDMachine$Type, arg1: $CustomInstructionKeyframeEvent$Type<($AnimatableMachine$Type)>)

public "getListenerList"(): $ListenerList
public "getEvent"(): $CustomInstructionKeyframeEvent<($AnimatableMachine)>
public "getInstruction"(): string
public "setEvent"(arg0: $CustomInstructionKeyframeEvent$Type<($AnimatableMachine$Type)>): void
public "setInstruction"(arg0: string): void
get "listenerList"(): $ListenerList
get "event"(): $CustomInstructionKeyframeEvent<($AnimatableMachine)>
get "instruction"(): string
set "event"(value: $CustomInstructionKeyframeEvent$Type<($AnimatableMachine$Type)>)
set "instruction"(value: string)
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
declare module "packages/com/lowdragmc/mbd2/api/pattern/$BlockPattern" {
import {$TraceabilityPredicate, $TraceabilityPredicate$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$TraceabilityPredicate"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$MultiblockState, $MultiblockState$Type} from "packages/com/lowdragmc/mbd2/api/pattern/$MultiblockState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RelativeDirection, $RelativeDirection$Type} from "packages/com/lowdragmc/mbd2/api/pattern/util/$RelativeDirection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockPattern {
readonly "aisleRepetitions": ((integer)[])[]
readonly "structureDir": ($RelativeDirection)[]

constructor(arg0: ((($TraceabilityPredicate$Type)[])[])[], arg1: ($RelativeDirection$Type)[], arg2: ((integer)[])[], arg3: (integer)[])

public "getPreview"(arg0: (integer)[]): ((($BlockInfo)[])[])[]
public "checkPatternAtWithoutController"(arg0: $MultiblockState$Type, arg1: $Direction$Type): boolean
public "checkPatternAt"(arg0: $MultiblockState$Type, arg1: boolean): boolean
public "checkPatternAt"(arg0: $MultiblockState$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: boolean): boolean
public "autoBuild"(arg0: $Player$Type, arg1: $MultiblockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPattern$Type = ($BlockPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPattern_ = $BlockPattern$Type;
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
public "getHand"(): $InteractionHand
public "getPlayer"(): $Player
public "isRemote"(): boolean
public "createUI"(entityPlayer: $Player$Type): $ModularUI
public "markAsDirty"(): void
public "getHeld"(): $ItemStack
get "invalid"(): boolean
get "hand"(): $InteractionHand
get "player"(): $Player
get "remote"(): boolean
get "held"(): $ItemStack
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

public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "uv"(u: float, v: float): $VertexConsumer
public "endVertex"(): void
public "vertex"(x: double, y: double, z: double): $VertexConsumer
public "color"(red: integer, green: integer, blue: integer, alpha: integer): $VertexConsumer
public "uv2"(u: integer, v: integer): $VertexConsumer
public "overlayCoords"(u: integer, v: integer): $VertexConsumer
public "normal"(x: float, y: float, z: float): $VertexConsumer
public "defaultColor"(defaultR: integer, defaultG: integer, defaultB: integer, defaultA: integer): void
public "unsetDefaultColor"(): void
public "clerOffset"(): void
public "clearColor"(): void
public "addOffset"(offsetX: double, offsetY: double, offsetZ: double): void
public "setOffsetY"(offsetY: double): void
public "setOffsetZ"(offsetZ: double): void
public "setOffsetX"(offsetX: double): void
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "uv2"(arg0: integer): $VertexConsumer
public "overlayCoords"(arg0: integer): $VertexConsumer
public "color"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
set "offsetY"(value: double)
set "offsetZ"(value: double)
set "offsetX"(value: double)
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
public "renderer"(arg0: $IRenderer$Type): $MachineState$Builder<(T)>
public "modelRenderer"(arg0: $ResourceLocation$Type): $MachineState$Builder<(T)>
public "renderingBox"(arg0: $AABB$Type): $MachineState$Builder<(T)>
public "lightLevel"(arg0: integer): $MachineState$Builder<(T)>
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
 "onLoadingTraitInPreview"(): void
 "clientTick"(): void
 "onNeighborChanged"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: boolean): void
 "serverTick"(): void
 "getCapabilityProviderTraits"(): $List<($ICapabilityProviderTrait<(any)>)>
 "getRecipeHandlerTraits"(): $List<($IRecipeHandlerTrait<(any)>)>
 "getMachine"(): $MBDMachine
 "onMachineRemoved"(): void
 "onMachineLoad"(): void
 "onMachineUnLoad"(): void
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

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setResourceLocationOnly"(): $TextFieldWidget
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): $TextFieldWidget
public "setTextResponder"(textResponder: $Consumer$Type<(string)>): $TextFieldWidget
public "getCurrentString"(): string
public "setMaxStringLength"(maxStringLength: integer): $TextFieldWidget
public "setTextColor"(textColor: integer): $TextFieldWidget
public "setValidator"(validator: $Function$Type<(string), (string)>): $TextFieldWidget
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "setCurrentString"(currentString: any): $TextFieldWidget
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "setBackground"(background: $IGuiTexture$Type): $TextFieldWidget
public "setBordered"(bordered: boolean): $TextFieldWidget
public "setCompoundTagOnly"(): $TextFieldWidget
public "setWheelDur"(digits: integer, wheelDur: float): $TextFieldWidget
public "setWheelDur"(wheelDur: float): $TextFieldWidget
public "setNumbersOnlyLong"(minValue: long, maxValue: long): $TextFieldWidget
public "setNumbersOnlyInt"(minValue: integer, maxValue: integer): $TextFieldWidget
public "setNumbersOnlyFloat"(minValue: float, maxValue: float): $TextFieldWidget
public "getRawCurrentString"(): string
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textResponder"(value: $Consumer$Type<(string)>)
get "currentString"(): string
set "maxStringLength"(value: integer)
set "textColor"(value: integer)
set "validator"(value: $Function$Type<(string), (string)>)
set "currentString"(value: any)
set "background"(value: $IGuiTexture$Type)
set "bordered"(value: boolean)
set "wheelDur"(value: float)
get "rawCurrentString"(): string
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "endBranch"(): $TreeBuilder<(K), (V)>
public "startBranch"(key: K): $TreeBuilder<(K), (V)>
public "leaf"(key: K, content: V): $TreeBuilder<(K), (V)>
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


public "getCapacity"(): float
public static "builder"(): $ConfigKineticMachineSettings$ConfigKineticMachineSettingsBuilder
public "hasShaftTowards"(arg0: $Direction$Type, arg1: $Direction$Type): boolean
public "getRotationFacing"(arg0: $Direction$Type): $Direction
public "useFlywheel"(): boolean
public "getImpact"(): float
public "isGenerator"(): boolean
public "maxRPM"(): integer
public "torque"(): float
public "hasBackRotation"(): boolean
public "frontRotation"(): $ConfigKineticMachineSettings$RotationFacing
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "capacity"(): float
get "impact"(): float
get "generator"(): boolean
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
declare module "packages/com/lowdragmc/photon/client/fx/$FXEffect" {
import {$FX, $FX$Type} from "packages/com/lowdragmc/photon/client/fx/$FX"
import {$FXRuntime, $FXRuntime$Type} from "packages/com/lowdragmc/photon/client/fx/$FXRuntime"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$IFXEffect, $IFXEffect$Type} from "packages/com/lowdragmc/photon/client/fx/$IFXEffect"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"

export class $FXEffect implements $IFXEffect {
readonly "fx": $FX
readonly "level": $Level


public "getRuntime"(): $FXRuntime
public "setOffset"(offset: $Vector3f$Type): void
public "getLevel"(): $Level
public "setScale"(scale: $Vector3f$Type): void
public "setDelay"(delay: integer): void
public "setForcedDeath"(forcedDeath: boolean): void
public "setAllowMulti"(allowMulti: boolean): void
public "setRotation"(rotation: $Quaternionf$Type): void
public "getFx"(): $FX
public "start"(): void
public "setOffset"(x: double, y: double, z: double): void
public "setScale"(x: double, y: double, z: double): void
public "setRotation"(x: double, y: double, z: double): void
public "updateFXObjectFrame"(fxObject: $IFXObject$Type, partialTicks: float): void
public "updateFXObjectTick"(fxObject: $IFXObject$Type): void
get "runtime"(): $FXRuntime
set "offset"(value: $Vector3f$Type)
get "level"(): $Level
set "scale"(value: $Vector3f$Type)
set "delay"(value: integer)
set "forcedDeath"(value: boolean)
set "allowMulti"(value: boolean)
set "rotation"(value: $Quaternionf$Type)
get "fx"(): $FX
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FXEffect$Type = ($FXEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FXEffect_ = $FXEffect$Type;
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
import {$MachineState, $MachineState$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$MachineState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITrait, $ITrait$Type} from "packages/com/lowdragmc/mbd2/common/trait/$ITrait"
import {$FieldManagedStorage, $FieldManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$FieldManagedStorage"
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

public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getDefinition"(): $MBDMachineDefinition
public "getOffset"(): long
public "isInvalid"(): boolean
public "detach"(): void
public "setAnalogOutputSignal"(arg0: integer): void
public "setOutputDirectSignal"(arg0: integer, arg1: $Direction$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "loadAdditionalTraits"(): void
public "getAdditionalTraits"(): $List<($ITrait)>
public "getAnimatableMachine"(): $Map<($IRenderer), (any)>
public "setMachineState"(arg0: string): void
public "setOutputSignal"(arg0: integer, arg1: $Direction$Type): void
public "setMachineLevel"(arg0: integer): void
public "setCustomData"(arg0: $CompoundTag$Type): void
public "getMachineState"(): $MachineState
public "getCustomData"(): $CompoundTag
public "onChanged"(): void
public "onDrops"(arg0: $Entity$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "alwaysTryModifyRecipe"(): boolean
public "notifyRecipeStatusChanged"(arg0: $RecipeLogic$Status$Type, arg1: $RecipeLogic$Status$Type): void
public "scheduleRenderUpdate"(): void
public "getRecipeDampingValue"(): integer
public "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
public "onFuelBurningFinish"(arg0: $MBDRecipe$Type): void
public "alwaysReSearchRecipe"(): boolean
public "getFrontFacing"(): $Optional<($Direction)>
public "getMaxParallel"(arg0: $MBDRecipe$Type): $ContentModifier
public "getModifiedRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
public "onWaiting"(): void
public "onWorking"(): boolean
public "setFrontFacing"(arg0: $Direction$Type): void
public "afterWorking"(): void
public "beforeWorking"(arg0: $MBDRecipe$Type): boolean
public "isFacingValid"(arg0: $Direction$Type): boolean
public "runRecipeLogic"(): boolean
public "onUnload"(): void
public "getMachineLevel"(): integer
public "modifyFuelRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
public "getRecipeLogic"(): $RecipeLogic
public "getRecipeType"(): $MBDRecipeType
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public "getAppearance"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): $BlockState
public "clientTick"(): void
public "isRemote"(): boolean
public "onLoad"(): void
public "createUI"(arg0: $Player$Type): $ModularUI
public "getHolder"(): $BlockEntity
public "emitPhotonFx"(arg0: string, arg1: $ResourceLocation$Type, arg2: $Vector3f$Type, arg3: $Vector3f$Type, arg4: integer, arg5: boolean): void
public "killPhotonFx"(arg0: string, arg1: boolean): void
public "getTraitByDefinition"(arg0: $TraitDefinition$Type): $ITrait
public "triggerGeckolibAnim"(arg0: string, arg1: string, arg2: float): void
public "triggerGeckolibAnim"(arg0: string, arg1: float): void
public "onNeighborChanged"(arg0: $Block$Type, arg1: $BlockPos$Type, arg2: boolean): void
public "getRenderBoundingBox"(): $AABB
public "serverTick"(): void
public "getOutputDirectSignal"(): (byte)[]
public "getOutputDirectSignal"(arg0: $Direction$Type): integer
public "getDynamicMachineLevel"(): integer
public "initCapabilitiesProxy"(): void
public "getMachineStateName"(): string
public "getAnalogOutputSignal"(): byte
public "markAsDirty"(): void
public "updateState"(arg0: string, arg1: string): void
public "doModifyRecipe"(arg0: $MBDRecipe$Type): $MBDRecipe
public "openUI"(arg0: $Player$Type): $InteractionResult
public "getSyncStorage"(): $FieldManagedStorage
public "onUse"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "updateSignal"(): void
public "animateTick"(arg0: $RandomSource$Type): void
public "onMachineRemoved"(): void
public "shouldOpenUI"(arg0: $InteractionHand$Type, arg1: $BlockHitResult$Type): boolean
public "onMachinePlaced"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getOutputSignal"(): (byte)[]
public "getOutputSignal"(arg0: $Direction$Type): integer
public "getFieldHolder"(): $ManagedFieldHolder
public "updateCustomData"(arg0: $CompoundTag$Type, arg1: $CompoundTag$Type): void
public "playStateSound"(arg0: string): void
public "isDisableRendering"(): boolean
public "getCurrentSound"(): $MachineSound
public "getDropItem"(): $ItemStack
public "getTraitByName"<T>(arg0: $Class$Type<(T)>, arg1: string): T
public "getTraitByName"(arg0: string): $ITrait
public "getMachineHolder"(): $IMachineBlockEntity
public "getPhotonFXs"(): $Map<(string), (any)>
public "getLevel"(): $Level
public "getBlockState"(): $BlockState
public "loadCustomPersistedData"(arg0: $CompoundTag$Type): void
public "saveCustomPersistedData"(arg0: $CompoundTag$Type, arg1: boolean): void
public "onRotated"(arg0: $Direction$Type, arg1: $Direction$Type): void
public "hasFrontFacing"(): boolean
public "isInValid"(): boolean
public "getOffsetTimer"(): long
public "getChanceTier"(): integer
public "dampingWhenWaiting"(): boolean
public "applyParallel"(arg0: $MBDRecipe$Type, arg1: integer): $MBDRecipe
public "notifyBlockUpdate"(): void
public static "ofMachine"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($IMachine)>
public static "ofMachine"(arg0: $BlockEntity$Type): $Optional<($IMachine)>
public "getPos"(): $BlockPos
public "markDirty"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "hasProxies"(): boolean
public "markDirty"(name: string): void
public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
get "definition"(): $MBDMachineDefinition
get "offset"(): long
get "invalid"(): boolean
set "analogOutputSignal"(value: integer)
get "additionalTraits"(): $List<($ITrait)>
get "animatableMachine"(): $Map<($IRenderer), (any)>
set "machineState"(value: string)
set "machineLevel"(value: integer)
set "customData"(value: $CompoundTag$Type)
get "machineState"(): $MachineState
get "customData"(): $CompoundTag
get "recipeDampingValue"(): integer
get "recipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
get "frontFacing"(): $Optional<($Direction)>
set "frontFacing"(value: $Direction$Type)
get "machineLevel"(): integer
get "recipeLogic"(): $RecipeLogic
get "recipeType"(): $MBDRecipeType
get "remote"(): boolean
get "holder"(): $BlockEntity
get "renderBoundingBox"(): $AABB
get "outputDirectSignal"(): (byte)[]
get "dynamicMachineLevel"(): integer
get "machineStateName"(): string
get "analogOutputSignal"(): byte
get "syncStorage"(): $FieldManagedStorage
get "outputSignal"(): (byte)[]
get "fieldHolder"(): $ManagedFieldHolder
get "disableRendering"(): boolean
get "currentSound"(): $MachineSound
get "dropItem"(): $ItemStack
get "machineHolder"(): $IMachineBlockEntity
get "photonFXs"(): $Map<(string), (any)>
get "level"(): $Level
get "blockState"(): $BlockState
get "inValid"(): boolean
get "offsetTimer"(): long
get "chanceTier"(): integer
get "pos"(): $BlockPos
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
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "setEnable"(arg0: boolean): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
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
readonly "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "containerId": integer

constructor(modularUI: $ModularUI$Type, windowID: integer)

public "getModularUI"(): $ModularUI
public "removeSlot"(slotHandle: $Slot$Type): void
public static "mergeItemStack"(itemStack: $ItemStack$Type, slots: $List$Type<($Slot$Type)>, simulate: boolean): boolean
public "attemptMergeStack"(itemStack: $ItemStack$Type, fromContainer: boolean, simulate: boolean): boolean
public "writeClientAction"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "writeUpdateInfo"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "removed"(playerIn: $Player$Type): void
public "broadcastChanges"(): void
public "m_38897_"(slotHandle: $Slot$Type): $Slot
public "quickMoveStack"(player: $Player$Type, index: integer): $ItemStack
public "stillValid"(playerIn: $Player$Type): boolean
public "handleClientAction"(packet: $CPacketUIClientAction$Type): void
public "canTakeItemForPickAll"(stack: $ItemStack$Type, slotIn: $Slot$Type): boolean
public "clicked"(slotId: integer, dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): void
public "addSlotListener"(pListener: $ContainerListener$Type): void
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

public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, doTransfer: boolean): $FluidStack
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type, doTransfer: boolean): $FluidStack
public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "transferFluids"(sourceHandler: $IFluidTransfer$Type, destHandler: $IFluidTransfer$Type, transferLimit: long, fluidFilter: $Predicate$Type<($FluidStack$Type)>): long
public static "tryPickUpFluid"(emptyContainer: $ItemStack$Type, playerIn: $Player$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): $FluidActionResult
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type): boolean
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, container: $ItemStack$Type, resource: $FluidStack$Type): $FluidActionResult
public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
/**
 * 
 * @deprecated
 */
public static "getFluidTransfer"(itemStack: $ItemStack$Type): $IFluidTransfer
public static "tryFillContainer"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "tryEmptyContainer"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): boolean
public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, handler: $IFluidTransfer$Type): boolean
public static "destroyBlockOnFluidPlacement"(level: $Level$Type, pos: $BlockPos$Type): void
public static "tryFillContainerAndStow"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "tryEmptyContainerAndStow"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "getFluidContained"(container: $ItemStack$Type): $FluidStack
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

public "isCancelable"(): boolean
public "getPlayer"(): $Player
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "cancelable"(): boolean
get "player"(): $Player
get "listenerList"(): $ListenerList
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
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$StaticResource" {
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"

export class $StaticResource<T> {
static "EMPTY": $StaticResource<(any)>

constructor(resource: $Resource$Type<(T)>)

public static "empty"<T>(): $StaticResource<(T)>
public "loadAndUpdateStaticResource"(): boolean
public "isStaticResourceLoaded"(): boolean
get "staticResourceLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticResource$Type<T> = ($StaticResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaticResource_<T> = $StaticResource$Type<(T)>;
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

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
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
public "isRequireFuelForWorking"(): boolean
public static "createDefault"(): $MBDRecipeType
public "loadProductiveTag"(arg0: $File$Type, arg1: $CompoundTag$Type, arg2: $Deque$Type<($Runnable$Type)>): $MBDRecipeType
public "getIcon"(): $IGuiTexture
public "isProxyRecipesLoaded"(): boolean
public "getFuelRegistryName"(): $ResourceLocation
public "setRequireFuelForWorking"(arg0: boolean): $MBDRecipeType
public "getBuiltinRecipes"(): $Map<($ResourceLocation), ($MBDRecipe)>
public "isXEIVisible"(): boolean
public "getRegistryName"(): $ResourceLocation
public "isCreatedFromProjectFile"(): boolean
public "reloadFromProjectFile"(): void
public "recipeBuilder"(arg0: $ResourceLocation$Type, ...arg1: (any)[]): $MBDRecipeBuilder
public "recipeBuilder"(arg0: string, ...arg1: (any)[]): $MBDRecipeBuilder
public "recipeBuilder"(arg0: $Supplier$Type<(any)>, ...arg1: (any)[]): $MBDRecipeBuilder
public "recipeBuilder"(arg0: $ItemLike$Type, ...arg1: (any)[]): $MBDRecipeBuilder
public "toMBDrecipe"(arg0: $ResourceLocation$Type, arg1: $Recipe$Type<(any)>): $MBDRecipe
public "searchRecipe"(arg0: $RecipeManager$Type, arg1: $IRecipeCapabilityHolder$Type): $List<($MBDRecipe)>
public "onRecipeBuild"(arg0: $BiConsumer$Type<($MBDRecipeBuilder$Type), ($Consumer$Type<($FinishedRecipe$Type)>)>): $MBDRecipeType
public "searchFuelRecipe"(arg0: $RecipeManager$Type, arg1: $IRecipeCapabilityHolder$Type): $List<($MBDRecipe)>
public "prepareBuilder"(arg0: $Consumer$Type<($MBDRecipeBuilder$Type)>): $MBDRecipeType
public "getFuelIcon"(): $IGuiTexture
public "setFuelIcon"(arg0: $IGuiTexture$Type): $MBDRecipeType
public "bindXEIRecipeUI"(arg0: $WidgetGroup$Type, arg1: $MBDRecipe$Type): void
public "setRecipeBuilder"(arg0: $MBDRecipeBuilder$Type): $MBDRecipeType
public "setUiCreator"(arg0: $MBDRecipeType$UICreator$Type): $MBDRecipeType
public "getUiSize"(): $Size
public "setFuelUICreator"(arg0: $MBDRecipeType$UICreator$Type): $MBDRecipeType
public "setXEIVisible"(arg0: boolean): $MBDRecipeType
public "setUiSize"(arg0: $Size$Type): $MBDRecipeType
public "getProxyRecipes"(): $Map<($RecipeType<(any)>), ($List<($MBDRecipe)>)>
public "getProjectFile"(): $File
public "getFuelUICreator"(): $MBDRecipeType$UICreator
public "setFuelUISize"(arg0: $Size$Type): $MBDRecipeType
public "setProjectFile"(arg0: $File$Type): $MBDRecipeType
public "getFuelUISize"(): $Size
public "getUiCreator"(): $MBDRecipeType$UICreator
public "buildConfigurator"(arg0: $ConfiguratorGroup$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<($MBDRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<($MBDRecipe)>
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "icon"(value: $IGuiTexture$Type)
get "requireFuelForWorking"(): boolean
get "icon"(): $IGuiTexture
get "proxyRecipesLoaded"(): boolean
get "fuelRegistryName"(): $ResourceLocation
set "requireFuelForWorking"(value: boolean)
get "builtinRecipes"(): $Map<($ResourceLocation), ($MBDRecipe)>
get "xEIVisible"(): boolean
get "registryName"(): $ResourceLocation
get "createdFromProjectFile"(): boolean
get "fuelIcon"(): $IGuiTexture
set "fuelIcon"(value: $IGuiTexture$Type)
set "uiCreator"(value: $MBDRecipeType$UICreator$Type)
get "uiSize"(): $Size
set "fuelUICreator"(value: $MBDRecipeType$UICreator$Type)
set "xEIVisible"(value: boolean)
set "uiSize"(value: $Size$Type)
get "proxyRecipes"(): $Map<($RecipeType<(any)>), ($List<($MBDRecipe)>)>
get "projectFile"(): $File
get "fuelUICreator"(): $MBDRecipeType$UICreator
set "fuelUISize"(value: $Size$Type)
set "projectFile"(value: $File$Type)
get "fuelUISize"(): $Size
get "uiCreator"(): $MBDRecipeType$UICreator
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
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
public "unfreeze"(): void
public "containValue"(arg0: V): boolean
public "containKey"(arg0: K): boolean
public "readBuf"(arg0: $FriendlyByteBuf$Type): V
public "registerOrOverride"(arg0: K, arg1: V): V
public "writeBuf"(arg0: V, arg1: $FriendlyByteBuf$Type): void
public "saveToNBT"(arg0: V): $Tag
public "getOrDefaultKey"(arg0: V, arg1: K): K
public "loadFromNBT"(arg0: $Tag$Type): V
public "registry"(): $Map<(K), (V)>
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
 "writeToReadonlyField"(op: $AccessorOp$Type, obj: any, payload: $ITypedPayload$Type<(any)>): void
 "readFromReadonlyField"(op: $AccessorOp$Type, obj: any): $ITypedPayload<(any)>
 "operandTypes"(): ($Class<(any)>)[]
 "setDefaultType"(arg0: byte): void
 "hasPredicate"(): boolean
 "readManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>): $ITypedPayload<(any)>
 "copyForManaged"(value: any): any
 "isManaged"(): boolean
 "writeManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>, payload: $ITypedPayload$Type<(any)>): void
 "getDefaultType"(): byte
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

 "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
 "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
 "acceptWidget"(widget: $IConfigurableWidget$Type): void
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "initTemplate"(): void
 "serializeInnerNBT"(): $CompoundTag
 "canDragIn"(dragging: any): boolean
 "serializeWrapper"(): $CompoundTag
 "handleDragging"(dragging: any): boolean
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
}

export namespace $IConfigurableWidgetGroup {
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
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
import {$TraitDefinition, $TraitDefinition$Type} from "packages/com/lowdragmc/mbd2/common/trait/$TraitDefinition"
import {$ConfigMachineSettings$SignalConnection, $ConfigMachineSettings$SignalConnection$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$ConfigMachineSettings$SignalConnection"

export class $ConfigMachineSettings$ConfigMachineSettingsBuilder {


public "toString"(): string
public "build"(): $ConfigMachineSettings
public "machineLevel"(arg0: integer): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "traitDefinition"(arg0: $TraitDefinition$Type): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "traitDefinitions"(arg0: $Collection$Type<(any)>): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "clearTraitDefinitions"(): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "hasUI"(arg0: boolean): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "signalConnection"(arg0: $ConfigMachineSettings$SignalConnection$Type): $ConfigMachineSettings$ConfigMachineSettingsBuilder
public "dropMachineItem"(arg0: boolean): $ConfigMachineSettings$ConfigMachineSettingsBuilder
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

public "clearAllWidgets"(): void
public "getTabIndex"(): integer
public "getTabIndex"(group: $WidgetGroup$Type): integer
public "switchTabIndex"(index: integer): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type): void
public "addTab"(icon: $IGuiTexture$Type, name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type, onRemoved: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "getEditor"(): $Editor
public "getOnChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
public "getTabGroups"(): $List<($WidgetGroup)>
public "calculateTabSize"(): void
public "getOnSelected"(): $Map<($WidgetGroup), ($Runnable)>
public "getOnDeselected"(): $Map<($WidgetGroup), ($Runnable)>
public "removeTab"(tabButton: $TabButton$Type): void
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "tabIndex"(): integer
get "editor"(): $Editor
get "onChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
get "tabGroups"(): $List<($WidgetGroup)>
get "onSelected"(): $Map<($WidgetGroup), ($Runnable)>
get "onDeselected"(): $Map<($WidgetGroup), ($Runnable)>
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
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
public "createOverlay"(): $IGuiTexture
public "appendTooltip"(arg0: $List$Type<($Component$Type)>): void
public "drawSmallString"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: integer, arg6: string, arg7: integer): void
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
declare module "packages/com/lowdragmc/photon/client/fx/$IFXEffect" {
import {$FX, $FX$Type} from "packages/com/lowdragmc/photon/client/fx/$FX"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"
import {$IEffect, $IEffect$Type} from "packages/com/lowdragmc/photon/client/fx/$IEffect"

export interface $IFXEffect extends $IEffect {

 "start"(): void
 "setOffset"(arg0: $Vector3f$Type): void
 "setOffset"(x: double, y: double, z: double): void
 "setScale"(arg0: $Vector3f$Type): void
 "setScale"(x: double, y: double, z: double): void
 "setDelay"(arg0: integer): void
 "setForcedDeath"(arg0: boolean): void
 "setAllowMulti"(arg0: boolean): void
 "setRotation"(arg0: $Quaternionf$Type): void
 "setRotation"(x: double, y: double, z: double): void
 "getFx"(): $FX
 "getLevel"(): $Level
 "updateFXObjectFrame"(fxObject: $IFXObject$Type, partialTicks: float): void
 "updateFXObjectTick"(fxObject: $IFXObject$Type): void
}

export namespace $IFXEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFXEffect$Type = ($IFXEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFXEffect_ = $IFXEffect$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/recipe/ingredient/$EntityIngredient$Value" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $EntityIngredient$Value {

 "copy"(): $EntityIngredient$Value
 "getTypes"(): $Collection<($EntityType<(any)>)>
 "serialize"(): $JsonObject
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

(): boolean
}

export namespace $RPCSender {
function ofClient(player: $Player$Type): $RPCSender
function ofServer(): $RPCSender
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
import {$StateMachine, $StateMachine$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/$StateMachine"
import {$MachineSound, $MachineSound$Type} from "packages/com/lowdragmc/mbd2/client/$MachineSound"
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

public "getShape"(arg0: $Direction$Type): $VoxelShape
public "name"(): string
public "parent"(): $MachineState
public "compareTo"(arg0: $MachineState$Type): integer
public static "builder"(): $MachineState$Builder<(any)>
public "shape"(): $ToggleShape
public "children"(): $List<($MachineState)>
public "isRoot"(): boolean
public "removeChild"(arg0: $MachineState$Type): void
public "getRealRenderer"(): $IRenderer
public "getRenderer"(): $IRenderer
public "renderer"(): $ToggleRenderer
public "addChild"(arg0: string): $MachineState
public "getDepth"(): integer
public "stateMachine"(): $StateMachine<(any)>
public "getRenderingBox"(arg0: $Direction$Type): $AABB
public "renderingBox"(): $ToggleAABB
public "machineSound"(): $ToggleMachineSound
public "renderingBoxCache"(): $Map<($Direction), ($AABB)>
public "createMachineSound"(arg0: $BlockPos$Type, arg1: $BooleanSupplier$Type): $MachineSound
public "lightLevel"(): $ToggleLightValue
public "getLightLevel"(): integer
public "shapeCache"(): $Map<($Direction), ($VoxelShape)>
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "root"(): boolean
get "realRenderer"(): $IRenderer
get "depth"(): integer
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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

public "getMaxStackSize"(): integer
public "areItemsEqual"(itemStack1: $ItemStack$Type, itemStack2: $ItemStack$Type): boolean
public "setMaxStackSize"(maxStackSize: integer): void
public "slotClickPhantom"(slot: $Slot$Type, mouseButton: integer, clickTypeIn: $ClickType$Type, stackHeld: $ItemStack$Type): $ItemStack
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "canPutStack"(stack: $ItemStack$Type): boolean
public "canTakeStack"(player: $Player$Type): boolean
public "setCanTakeItems"(v: boolean): $PhantomSlotWidget
public "isClearSlotOnRightClick"(): boolean
public "setClearSlotOnRightClick"(clearSlotOnRightClick: boolean): $PhantomSlotWidget
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "maxStackSize"(): integer
set "maxStackSize"(value: integer)
set "canTakeItems"(value: boolean)
get "clearSlotOnRightClick"(): boolean
set "clearSlotOnRightClick"(value: boolean)
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
public "render"(pMatrixStack: $PoseStack$Type, pActiveRenderInfo: $Camera$Type, pPartialTicks: float): void
public static "makeParticleRenderTypeComparator"(renderOrder: $List$Type<($ParticleRenderType$Type)>): $Comparator<($ParticleRenderType)>
public "addParticle"(particle: $Particle$Type): void
public "clearAllParticles"(): void
public "getParticleAmount"(): integer
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

public "getListenerList"(): $ListenerList
public "getRecipe"(): $MBDRecipe
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
get "listenerList"(): $ListenerList
get "recipe"(): $MBDRecipe
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

public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "setOnPressCallback"(onPressCallback: $Consumer$Type<($ClickData$Type)>): $ButtonWidget
public "isClicked"(): boolean
public "setClickedTexture"(...clickedTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "setButtonTexture"(...buttonTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "initTemplate"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "setHoverBorderTexture"(border: integer, color: integer): $ButtonWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "serializeInnerNBT"(): $CompoundTag
public "canDragIn"(dragging: any): boolean
public "serializeWrapper"(): $CompoundTag
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "onPressCallback"(value: $Consumer$Type<($ClickData$Type)>)
get "clicked"(): boolean
set "clickedTexture"(value: ($IGuiTexture$Type)[])
set "buttonTexture"(value: ($IGuiTexture$Type)[])
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
public "draw"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, x: float, y: float, width: integer, height: integer): void
public "getXOffset"(): float
public "getYOffset"(): float
public "getScale"(): float
public "getRotation"(): float
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
public "copy"(): $IGuiTexture
public "setColor"(color: integer): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "updateTick"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "xOffset"(): float
get "yOffset"(): float
get "rotation"(): float
set "color"(value: integer)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "setBlock"(blockState: $BlockState$Type): $BlockSelectorWidget
public "setOnBlockStateUpdate"(onBlockStateUpdate: $Consumer$Type<($BlockState$Type)>): $BlockSelectorWidget
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
get "block"(): $BlockState
set "block"(value: $BlockState$Type)
set "onBlockStateUpdate"(value: $Consumer$Type<($BlockState$Type)>)
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

public "isCancelable"(): boolean
public static "getExposedParameters"(arg0: $Class$Type<(any)>): $List<($ExposedParameter<(any)>)>
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "postCustomEvent"(): $MachineEvent
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "postKubeJSEvent"(): $MachineEvent
public "gatherParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getMachine"(): $MBDMachine
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "machine"(): $MBDMachine
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
public "getTextureResource"(arg0: $GeoAnimatable$Type): $ResourceLocation
public "getModelResource"(arg0: $GeoAnimatable$Type): $ResourceLocation
public "getRenderType"(arg0: $GeoAnimatable$Type, arg1: $ResourceLocation$Type): $RenderType
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
public "tooltip"(tooltip: $List$Type<(string)>): $PortData
public "identifier"(identifier: string): $PortData
public "portColor"(portColor: integer): $PortData
public "CopyFrom"(other: $PortData$Type): void
public "acceptMultipleEdges"(acceptMultipleEdges: boolean): $PortData
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

 "getSuffix"(): string
 "getResources"(): $Resources
 "getProjectWorkSpace"(editor: $Editor$Type): $File
 "onLoad"(editor: $Editor$Type): void
 "loadProject"(file: $File$Type): $IProject
 "onClosed"(editor: $Editor$Type): void
 "saveProject"(file: $File$Type): void
 "newEmptyProject"(): $IProject
 "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
 "loadResources"(tag: $CompoundTag$Type): $Resources
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
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
public "recipeType"(arg0: $ResourceLocation$Type): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeModifiers"(arg0: $RecipeModifier$RecipeModifiers$Type): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "alwaysModifyRecipe"(arg0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "alwaysSearchRecipe"(arg0: boolean): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
public "recipeDampingValue"(arg0: integer): $ConfigRecipeLogicSettings$ConfigRecipeLogicSettingsBuilder
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
 "writeClientAction"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
 "writeUpdateInfo"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
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
declare module "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleDirection" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ToggleObject, $ToggleObject$Type} from "packages/com/lowdragmc/mbd2/common/machine/definition/config/toggle/$ToggleObject"

export class $ToggleDirection extends $ToggleObject<($Direction)> {

constructor()
constructor(arg0: boolean)
constructor(arg0: $Direction$Type)
constructor(arg0: $Direction$Type, arg1: boolean)

public "setValue"(arg0: $Direction$Type): void
set "value"(value: $Direction$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleDirection$Type = ($ToggleDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleDirection_ = $ToggleDirection$Type;
}}
declare module "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeCapabilityHolder" {
import {$RecipeCapability, $RecipeCapability$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$RecipeCapability"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeHandler, $IRecipeHandler$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IRecipeHandler"
import {$IO, $IO$Type} from "packages/com/lowdragmc/mbd2/api/capability/recipe/$IO"

export interface $IRecipeCapabilityHolder {

 "getRecipeCapabilitiesProxy"(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
 "getChanceTier"(): integer
 "hasProxies"(): boolean

(): $Table<($IO), ($RecipeCapability<(any)>), ($List<($IRecipeHandler<(any)>)>)>
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

public "getListenerList"(): $ListenerList
public "bindParameters"(arg0: $Map$Type<(string), ($ExposedParameter$Type)>): void
public "getNewStatus"(): $RecipeLogic$Status
public "getOldStatus"(): $RecipeLogic$Status
get "listenerList"(): $ListenerList
get "newStatus"(): $RecipeLogic$Status
get "oldStatus"(): $RecipeLogic$Status
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

public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotationFacing"(arg0: $BlockState$Type): $Direction
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "areStatesKineticallyEquivalent"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "updateIndirectNeighbourShapes"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "hideStressImpact"(): boolean
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "showCapacityWithAnnotation"(): boolean
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
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
public static "createNewEdge"(graph: $BaseGraph$Type, inputPort: $NodePort$Type, outputPort: $NodePort$Type): $PortEdge
public "onBeforeSerialize"(): void
public "deserializeNBT"(tag: $CompoundTag$Type): void
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
declare module "packages/com/lowdragmc/photon/client/fx/$IEffect" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFXObject, $IFXObject$Type} from "packages/com/lowdragmc/photon/client/gameobject/$IFXObject"

export interface $IEffect {

 "getLevel"(): $Level
 "updateFXObjectFrame"(fxObject: $IFXObject$Type, partialTicks: float): void
 "updateFXObjectTick"(fxObject: $IFXObject$Type): void

(): $Level
}

export namespace $IEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEffect$Type = ($IEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEffect_ = $IEffect$Type;
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
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "enable"(): boolean
set "enable"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
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
