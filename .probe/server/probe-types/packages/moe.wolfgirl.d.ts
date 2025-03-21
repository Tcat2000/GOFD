declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSClassType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSClassType extends $BaseType {
 "classPath": $ClassPath

constructor(classPath: $ClassPath$Type)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSClassType$Type = ($TSClassType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSClassType_ = $TSClassType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $ClassPathProvider {

 "getClassPaths"(): $Collection<($ClassPath)>

(): $Collection<($ClassPath)>
}

export namespace $ClassPathProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassPathProvider$Type = ($ClassPathProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassPathProvider_ = $ClassPathProvider$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Clazz$ClassAttribute, $Clazz$ClassAttribute$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassAttribute"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FieldInfo, $FieldInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$ConstructorInfo, $ConstructorInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ConstructorInfo"
import {$MethodInfo, $MethodInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TypeVariableHolder, $TypeVariableHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder"

export class $Clazz extends $TypeVariableHolder implements $ClassPathProvider {
readonly "classPath": $ClassPath
readonly "constructors": $List<($ConstructorInfo)>
readonly "fields": $List<($FieldInfo)>
readonly "methods": $List<($MethodInfo)>
readonly "superClass": $TypeDescriptor
readonly "interfaces": $List<($TypeDescriptor)>
readonly "attribute": $Clazz$ClassAttribute
readonly "variableTypes": $List<($VariableType)>

constructor(clazz: $Class$Type<(any)>)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "getUsedClasses"(): $Set<($ClassPath)>
public "getClassPaths"(): $Collection<($ClassPath)>
get "usedClasses"(): $Set<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$Type = ($Clazz);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz_ = $Clazz$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Blasting" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Blasting extends $RecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredient"(ingredient: $InputItem$Type): this
public "xp"(xp: number): this
public "cookingTime"(cookingTime: (number) | (string)): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Blasting$Type = (Blasting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Blasting_ = Blasting$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSTypeOfType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSTypeOfType extends $BaseType {
readonly "inner": $BaseType

constructor(inner: $BaseType$Type)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSTypeOfType$Type = ($JSTypeOfType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSTypeOfType_ = $JSTypeOfType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/dankstorage/Upgrade" {
import {$ShapedRecipeSchema$ShapedRecipeJS, $ShapedRecipeSchema$ShapedRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapedRecipeSchema$ShapedRecipeJS"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Upgrade extends $ShapedRecipeSchema$ShapedRecipeJS {


public "result"(result: $OutputItem$Type): this
public "pattern"(pattern: (string)[]): this
public "key"(key: {[k: string]: $InputItem$Type}): this
public "kjsMirror"(): this
public "kjsShrink"(): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Upgrade$Type = (Upgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Upgrade_ = Upgrade$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BaseType$FormatType extends $Enum<($BaseType$FormatType)> {
static readonly "INPUT": $BaseType$FormatType
static readonly "RETURN": $BaseType$FormatType
static readonly "VARIABLE": $BaseType$FormatType


public static "values"(): ($BaseType$FormatType)[]
public static "valueOf"(name: string): $BaseType$FormatType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$FormatType$Type = (("input") | ("variable") | ("return")) | ($BaseType$FormatType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseType$FormatType_ = $BaseType$FormatType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/CraftingShapeless" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$ShapelessRecipeSchema$ShapelessRecipeJS, $ShapelessRecipeSchema$ShapelessRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapelessRecipeSchema$ShapelessRecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class CraftingShapeless extends $ShapelessRecipeSchema$ShapelessRecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredients"(ingredients: ($InputItem$Type)[]): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type CraftingShapeless$Type = (CraftingShapeless);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type CraftingShapeless_ = CraftingShapeless$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"

export class $Code {

constructor()

public "format"(declaration: $Declaration$Type): $List<(string)>
public "line"(declaration: $Declaration$Type): string
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Code$Type = ($Code);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Code_ = $Code$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/transpiler/$TypeConverter" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TypeDescJS, $TypeDescJS$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS"
import {$DescriptionContext, $DescriptionContext$Type} from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext"
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TypeConverter {
static readonly "PROBEJS_PREFIX": string
static readonly "PROBEJS": $DescriptionContext
readonly "predefinedTypes": $Map<($ClassPath), ($BaseType)>
readonly "scriptManager": $ScriptManager

constructor(manager: $ScriptManager$Type)

public "addType"(clazz: $Class$Type<(any)>, type: $BaseType$Type): void
public "convertType"(typeDesc: $TypeDescJS$Type): $BaseType
public "convertType"(baseType: $BaseType$Type): $BaseType
public "convertType"(descriptor: $TypeDescriptor$Type): $BaseType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeConverter$Type = ($TypeConverter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeConverter_ = $TypeConverter$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$ScriptEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$TypeConverter, $TypeConverter$Type} from "packages/moe/wolfgirl/probejs/lang/transpiler/$TypeConverter"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$ScriptDump, $ScriptDump$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump"

export class $ScriptEventJS extends $EventJS {

constructor(dump: $ScriptDump$Type)

public "getTypeConverter"(): $TypeConverter
public "getScriptType"(): $ScriptType
get "typeConverter"(): $TypeConverter
get "scriptType"(): $ScriptType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptEventJS$Type = ($ScriptEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptEventJS_ = $ScriptEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Clazz$ClassType extends $Enum<($Clazz$ClassType)> {
static readonly "INTERFACE": $Clazz$ClassType
static readonly "ENUM": $Clazz$ClassType
static readonly "RECORD": $Clazz$ClassType
static readonly "CLASS": $Clazz$ClassType


public static "values"(): ($Clazz$ClassType)[]
public static "valueOf"(name: string): $Clazz$ClassType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassType$Type = (("record") | ("interface") | ("class") | ("enum")) | ($Clazz$ClassType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz$ClassType_ = $Clazz$ClassType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/SmithingTrim" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class SmithingTrim extends $RecipeJS {


public "template"(template: $InputItem$Type): this
public "base"(base: $InputItem$Type): this
public "addition"(addition: $InputItem$Type): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type SmithingTrim$Type = (SmithingTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type SmithingTrim_ = SmithingTrim$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/CraftingShaped" {
import {$ShapedRecipeSchema$ShapedRecipeJS, $ShapedRecipeSchema$ShapedRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapedRecipeSchema$ShapedRecipeJS"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class CraftingShaped extends $ShapedRecipeSchema$ShapedRecipeJS {


public "result"(result: $OutputItem$Type): this
public "pattern"(pattern: (string)[]): this
public "key"(key: {[k: string]: $InputItem$Type}): this
public "kjsMirror"(): this
public "kjsShrink"(): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type CraftingShaped$Type = (CraftingShaped);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type CraftingShaped_ = CraftingShaped$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ClassPath extends $Record {

constructor(className: string)
constructor(parts: $List$Type<(string)>)
constructor(clazz: $Class$Type<(any)>)

public "getName"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getPackage"(): $List<(string)>
public "parts"(): $List<(string)>
public "getClassPath"(): string
public "getTypeScriptPath"(): string
public "getGenerics"(): $List<(string)>
public "getDirPath"(base: $Path$Type): $Path
public "makePath"(base: $Path$Type): $Path
public "getConcatenated"(sep: string): string
public "getConcatenatedPackage"(sep: string): string
public "getClassPathJava"(): string
get "name"(): string
get "package"(): $List<(string)>
get "classPath"(): string
get "typeScriptPath"(): string
get "generics"(): $List<(string)>
get "classPathJava"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassPath$Type = ($ClassPath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassPath_ = $ClassPath$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/CampfireCooking" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class CampfireCooking extends $RecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredient"(ingredient: $InputItem$Type): this
public "xp"(xp: number): this
public "cookingTime"(cookingTime: (number) | (string)): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type CampfireCooking$Type = (CampfireCooking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type CampfireCooking_ = CampfireCooking$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/$SnippetDump" {
import {$Snippet, $Snippet$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/$Snippet"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export class $SnippetDump {
 "snippets": $List<($Snippet)>

constructor()

public "writeTo"(path: $Path$Type): void
public "snippet"(name: string): $Snippet
public "fromDocs"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetDump$Type = ($SnippetDump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetDump_ = $SnippetDump$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType" {
import {$TSArrayType, $TSArrayType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSArrayType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"

export class $BaseType extends $Code {

constructor()

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "format"(declaration: $Declaration$Type): $List<(string)>
public "line"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): string
public "asArray"(): $TSArrayType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseType$Type = ($BaseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseType_ = $BaseType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$Types" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TSClassType, $TSClassType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSClassType"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$JSObjectType$Builder, $JSObjectType$Builder$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType$Builder"
import {$JSJoinedType$Intersection, $JSJoinedType$Intersection$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType$Intersection"
import {$JSArrayType, $JSArrayType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSArrayType"
import {$TSParamType, $TSParamType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSParamType"
import {$JSPrimitiveType, $JSPrimitiveType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSPrimitiveType"
import {$TSVariableType, $TSVariableType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSVariableType"
import {$JSTypeOfType, $JSTypeOfType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSTypeOfType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$JSLambdaType$Builder, $JSLambdaType$Builder$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType$Builder"

export interface $Types {

}

export namespace $Types {
const ANY: $JSPrimitiveType
const BOOLEAN: $JSPrimitiveType
const NUMBER: $JSPrimitiveType
const STRING: $JSPrimitiveType
const NEVER: $JSPrimitiveType
const UNKNOWN: $JSPrimitiveType
const VOID: $JSPrimitiveType
const THIS: $JSPrimitiveType
const OBJECT: $JSPrimitiveType
const NULL: $JSPrimitiveType
function type(classPath: $ClassPath$Type): $TSClassType
function type(clazz: $Class$Type<(any)>): $TSClassType
function generic(symbol: string, extendOn: $BaseType$Type): $TSVariableType
function generic(symbol: string): $TSVariableType
function lambda(): $JSLambdaType$Builder
function object(): $JSObjectType$Builder
function or(...types: ($BaseType$Type)[]): $BaseType
function literal(content: any): $JSPrimitiveType
function and(...types: ($BaseType$Type)[]): $JSJoinedType$Intersection
function primitive(type: string): $JSPrimitiveType
function custom(formatter: $BiFunction$Type<($Declaration$Type), ($BaseType$FormatType$Type), (string)>, ...imports: ($ClassPath$Type)[]): $BaseType
function typeMaybeGeneric(clazz: $Class$Type<(any)>): $BaseType
function typeOf(clazz: $Class$Type<(any)>): $JSTypeOfType
function typeOf(classPath: $ClassPath$Type): $JSTypeOfType
function typeOf(classType: $BaseType$Type): $JSTypeOfType
function ignoreContext(type: $BaseType$Type, formatType: $BaseType$FormatType$Type): $BaseType
function arrayOf(...types: ($BaseType$Type)[]): $JSArrayType
function parameterized(base: $BaseType$Type, ...params: ($BaseType$Type)[]): $TSParamType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Types$Type = ($Types);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Types_ = $Types$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $ParamDecl {
 "name": string
 "type": $BaseType
 "varArg": boolean
 "optional": boolean

constructor(name: string, type: $BaseType$Type, varArg: boolean, optional: boolean)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "format"(index: integer, declaration: $Declaration$Type): string
public static "formatParams"(params: $List$Type<($ParamDecl$Type)>, declaration: $Declaration$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamDecl$Type = ($ParamDecl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParamDecl_ = $ParamDecl$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/extendedcrafting/ShapedTable" {
import {$ShapedRecipeSchema$ShapedRecipeJS, $ShapedRecipeSchema$ShapedRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapedRecipeSchema$ShapedRecipeJS"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class ShapedTable extends $ShapedRecipeSchema$ShapedRecipeJS {


public "result"(result: $OutputItem$Type): this
public "pattern"(pattern: (string)[]): this
public "key"(key: {[k: string]: $InputItem$Type}): this
public "kjsMirror"(): this
public "kjsShrink"(): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type ShapedTable$Type = (ShapedTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type ShapedTable_ = ShapedTable$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$CommentableCode, $CommentableCode$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$CommentableCode"

export class $Wrapped extends $CommentableCode {
readonly "codes": $List<($Code)>
readonly "comments": $List<(string)>

constructor()

public "isEmpty"(): boolean
public "merge"(other: $Wrapped$Type): void
public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "addCode"(inner: $Code$Type): void
public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
get "empty"(): boolean
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$Type = ($Wrapped);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapped_ = $Wrapped$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSArrayType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSArrayType extends $BaseType {
readonly "components": $List<($BaseType)>

constructor(components: $List$Type<($BaseType$Type)>)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSArrayType$Type = ($JSArrayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSArrayType_ = $JSArrayType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType$Intersection" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$JSJoinedType, $JSJoinedType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSJoinedType$Intersection extends $JSJoinedType {
readonly "delimiter": string
readonly "types": $List<($BaseType)>

constructor(types: $List$Type<($BaseType$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$Intersection$Type = ($JSJoinedType$Intersection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSJoinedType$Intersection_ = $JSJoinedType$Intersection$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/DocumentedRecipes" {
import {CraftingShaped, CraftingShaped$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/CraftingShaped"
import {ShapelessTable, ShapelessTable$Type} from "packages/moe/wolfgirl/probejs/generated/schema/extendedcrafting/ShapelessTable"
import {Centrifuging, Centrifuging$Type} from "packages/moe/wolfgirl/probejs/generated/schema/mbd2/Centrifuging"
import {Shaped, Shaped$Type} from "packages/moe/wolfgirl/probejs/generated/schema/kubejs/Shaped"
import {ShapedTable, ShapedTable$Type} from "packages/moe/wolfgirl/probejs/generated/schema/extendedcrafting/ShapedTable"
import {GigaBlasting, GigaBlasting$Type} from "packages/moe/wolfgirl/probejs/generated/schema/mbd2/GigaBlasting"
import {Smelting, Smelting$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Smelting"
import {Blasting, Blasting$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Blasting"
import {Stonecutting, Stonecutting$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Stonecutting"
import {CampfireCooking, CampfireCooking$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/CampfireCooking"
import {Shapeless, Shapeless$Type} from "packages/moe/wolfgirl/probejs/generated/schema/kubejs/Shapeless"
import {Smoking, Smoking$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Smoking"
import {BurningCoal, BurningCoal$Type} from "packages/moe/wolfgirl/probejs/generated/schema/mbd2/BurningCoal"
import {RecipeType, RecipeType$Type} from "packages/moe/wolfgirl/probejs/generated/schema/mbd2/RecipeType"
import {Upgrade, Upgrade$Type} from "packages/moe/wolfgirl/probejs/generated/schema/dankstorage/Upgrade"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {SmithingTrim, SmithingTrim$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/SmithingTrim"
import {EmberToSu, EmberToSu$Type} from "packages/moe/wolfgirl/probejs/generated/schema/mbd2/EmberToSu"
import {CraftingShapeless, CraftingShapeless$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/CraftingShapeless"
import {Null, Null$Type} from "packages/moe/wolfgirl/probejs/generated/schema/mbd2/Null"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {SmithingTransform, SmithingTransform$Type} from "packages/moe/wolfgirl/probejs/generated/schema/minecraft/SmithingTransform"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class DocumentedRecipes {
 "extendedcrafting": {shapeless_table(result: $OutputItem$Type, ingredients: ($InputItem$Type)[]): ShapelessTable, shaped_table(result: $OutputItem$Type, pattern: (string)[], key: {[k: string]: $InputItem$Type}): ShapedTable}
 "mbd2": {recipe_type(): RecipeType, null(): Null, burning_coal(): BurningCoal, centrifuging(): Centrifuging, giga_blasting(): GigaBlasting, ember_to_su(): EmberToSu}
 "minecraft": {smithing_transform(result: $OutputItem$Type, template: $InputItem$Type, base: $InputItem$Type, addition: $InputItem$Type): SmithingTransform, crafting_shaped(result: $OutputItem$Type, pattern: (string)[], key: {[k: string]: $InputItem$Type}): CraftingShaped, crafting_shapeless(result: $OutputItem$Type, ingredients: ($InputItem$Type)[]): CraftingShapeless, stonecutting(result: $OutputItem$Type, ingredient: $InputItem$Type): Stonecutting, smoking(result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)): Smoking, campfire_cooking(result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)): CampfireCooking, smithing_trim(template: $InputItem$Type, base: $InputItem$Type, addition: $InputItem$Type): SmithingTrim, smelting(result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)): Smelting, blasting(result: $OutputItem$Type, ingredient: $InputItem$Type, xp?: number, cookingTime?: (number) | (string)): Blasting}
 "kubejs": {shaped(result: $OutputItem$Type, pattern: (string)[], key: {[k: string]: $InputItem$Type}): Shaped, shapeless(result: $OutputItem$Type, ingredients: ($InputItem$Type)[]): Shapeless}
 "forge": {}
 "pneumaticcraft": {}
 "immersiveengineering": {}
 "create": {}
 "patchouli": {}
 "embers": {}
 "dankstorage": {upgrade(result: $OutputItem$Type, pattern: (string)[], key: {[k: string]: $InputItem$Type}): Upgrade}


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type DocumentedRecipes$Type = (DocumentedRecipes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type DocumentedRecipes_ = DocumentedRecipes$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ConstructorInfo" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$ParamInfo, $ParamInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ParamInfo"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$Constructor, $Constructor$Type} from "packages/java/lang/reflect/$Constructor"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"
import {$TypeVariableHolder, $TypeVariableHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder"

export class $ConstructorInfo extends $TypeVariableHolder implements $ClassPathProvider {
readonly "params": $List<($ParamInfo)>
readonly "variableTypes": $List<($VariableType)>

constructor(arg0: $Constructor$Type<(any)>)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructorInfo$Type = ($ConstructorInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConstructorInfo_ = $ConstructorInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$CommentableCode" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"

export class $CommentableCode extends $Code {
readonly "comments": $List<(string)>

constructor()

public "format"(declaration: $Declaration$Type): $List<(string)>
public "newline"(...comments: (string)[]): void
public "formatComments"(): $List<(string)>
public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
public "addCommentAtStart"(...comments: (string)[]): void
public "linebreak"(): void
public "addComment"(...comments: (string)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentableCode$Type = ($CommentableCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentableCode_ = $CommentableCode$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$ClassProvider, $ClassProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassProvider"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"

export class $TypeDescriptor extends $AnnotationHolder implements $ClassPathProvider, $ClassProvider {

constructor(annotations: ($Annotation$Type)[])

public "stream"(): $Stream<($TypeDescriptor)>
public "getClasses"(): $Collection<($Class<(any)>)>
public "getClassPaths"(): $Collection<($ClassPath)>
get "classes"(): $Collection<($Class<(any)>)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeDescriptor$Type = ($TypeDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeDescriptor_ = $TypeDescriptor$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$TypeAssignmentEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptDump, $ScriptDump$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TypeAssignmentEventJS extends $EventJS {

constructor(scriptDump: $ScriptDump$Type)

public "assignType"(clazz: $Class$Type<(any)>, baseType: $BaseType$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAssignmentEventJS$Type = ($TypeAssignmentEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAssignmentEventJS_ = $TypeAssignmentEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Smoking" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Smoking extends $RecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredient"(ingredient: $InputItem$Type): this
public "xp"(xp: number): this
public "cookingTime"(cookingTime: (number) | (string)): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Smoking$Type = (Smoking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Smoking_ = Smoking$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/TagWrapperProbe" {
import {$TagWrapper, $TagWrapper$Type} from "packages/dev/latvian/mods/kubejs/server/tag/$TagWrapper"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class TagWrapperProbe<T, I> extends $TagWrapper {


public "add"(...filters: (I)[]): this
public "remove"(...filters: (I)[]): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type TagWrapperProbe$Type<T, I> = (TagWrapperProbe<(T), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type TagWrapperProbe_<T, I> = TagWrapperProbe$Type<(T), (I)>;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$ParamInfo, $ParamInfo$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ParamInfo"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$TypeVariable, $TypeVariable$Type} from "packages/java/lang/reflect/$TypeVariable"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JavaMembers$MethodInfo, $JavaMembers$MethodInfo$Type} from "packages/dev/latvian/mods/rhino/$JavaMembers$MethodInfo"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$MethodInfo$MethodAttributes, $MethodInfo$MethodAttributes$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo$MethodAttributes"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TypeVariableHolder, $TypeVariableHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder"

export class $MethodInfo extends $TypeVariableHolder implements $ClassPathProvider {
readonly "name": string
readonly "params": $List<($ParamInfo)>
 "returnType": $TypeDescriptor
readonly "attributes": $MethodInfo$MethodAttributes
readonly "variableTypes": $List<($VariableType)>

constructor(methodInfo: $JavaMembers$MethodInfo$Type, remapper: $Map$Type<($TypeVariable$Type<(any)>), ($Type$Type)>)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$Type = ($MethodInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodInfo_ = $MethodInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/base/$ClassProvider" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $ClassProvider {

 "getClasses"(): $Collection<($Class<(any)>)>

(): $Collection<($Class<(any)>)>
}

export namespace $ClassProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassProvider$Type = ($ClassProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassProvider_ = $ClassProvider$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSPrimitiveType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSPrimitiveType extends $BaseType {
readonly "content": string

constructor(content: string)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSPrimitiveType$Type = ($JSPrimitiveType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSPrimitiveType_ = $JSPrimitiveType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/mbd2/Null" {
import {$MBDRecipeSchema$MBDRecipeJS, $MBDRecipeSchema$MBDRecipeJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Null extends $MBDRecipeSchema$MBDRecipeJS {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Null$Type = (Null);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Null_ = Null$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/mbd2/GigaBlasting" {
import {$MBDRecipeSchema$MBDRecipeJS, $MBDRecipeSchema$MBDRecipeJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class GigaBlasting extends $MBDRecipeSchema$MBDRecipeJS {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type GigaBlasting$Type = (GigaBlasting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type GigaBlasting_ = GigaBlasting$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSArrayType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSArrayType extends $BaseType {
 "component": $BaseType

constructor(component: $BaseType$Type)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSArrayType$Type = ($TSArrayType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSArrayType_ = $TSArrayType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"

export class $AnnotationHolder {

constructor(annotations: ($Annotation$Type)[])

public "getAnnotation"<T extends $Annotation>(type: $Class$Type<(T)>): T
public "getAnnotations"<T extends $Annotation>(type: $Class$Type<(T)>): $List<(T)>
public "getAnnotations"(): ($Annotation)[]
public "hasAnnotation"(annotation: $Class$Type<(any)>): boolean
get "annotations"(): ($Annotation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationHolder$Type = ($AnnotationHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationHolder_ = $AnnotationHolder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FieldInfo$FieldAttributes, $FieldInfo$FieldAttributes$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo$FieldAttributes"
import {$JavaMembers$FieldInfo, $JavaMembers$FieldInfo$Type} from "packages/dev/latvian/mods/rhino/$JavaMembers$FieldInfo"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"

export class $FieldInfo extends $AnnotationHolder implements $ClassPathProvider {
readonly "name": string
readonly "type": $TypeDescriptor
readonly "attributes": $FieldInfo$FieldAttributes

constructor(field: $JavaMembers$FieldInfo$Type)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$Type = ($FieldInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldInfo_ = $FieldInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType$Builder" {
import {$JSObjectType, $JSObjectType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JSObjectType$Builder {
readonly "members": $Map<(string), ($BaseType)>

constructor()

public "member"(name: string, type: $BaseType$Type): $JSObjectType$Builder
public "build"(): $JSObjectType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$Builder$Type = ($JSObjectType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSObjectType$Builder_ = $JSObjectType$Builder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/parts/$SnippetPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SnippetPart {

 "format"(): string

(): string
}

export namespace $SnippetPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetPart$Type = ($SnippetPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetPart_ = $SnippetPart$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParamDecl, $ParamDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$MethodDecl, $MethodDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$MethodDecl"

export class $JSLambdaType extends $BaseType {
readonly "params": $List<($ParamDecl)>
readonly "returnType": $BaseType

constructor(params: $List$Type<($ParamDecl$Type)>, returnType: $BaseType$Type)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "formatWithName"(name: string, declaration: $Declaration$Type, input: $BaseType$FormatType$Type): string
public "asMethod"(methodName: string): $MethodDecl
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$Type = ($JSLambdaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSLambdaType_ = $JSLambdaType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType$Builder" {
import {$JSLambdaType, $JSLambdaType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSLambdaType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ParamDecl, $ParamDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSLambdaType$Builder {
readonly "params": $List<($ParamDecl)>
 "returnType": $BaseType
 "arrowFunction": boolean

constructor()

public "returnType"(type: $BaseType$Type): $JSLambdaType$Builder
public "method"(): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$Type, isOptional: boolean, isVarArg: boolean): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$Type, isOptional: boolean): $JSLambdaType$Builder
public "param"(symbol: string, type: $BaseType$Type): $JSLambdaType$Builder
public "build"(): $JSLambdaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSLambdaType$Builder$Type = ($JSLambdaType$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSLambdaType$Builder_ = $JSLambdaType$Builder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$MethodDecl" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TSVariableType, $TSVariableType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSVariableType"
import {$ParamDecl, $ParamDecl$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$ParamDecl"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$CommentableCode, $CommentableCode$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/member/$CommentableCode"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $MethodDecl extends $CommentableCode {
 "name": string
 "isAbstract": boolean
 "isStatic": boolean
 "isInterface": boolean
 "variableTypes": $List<($TSVariableType)>
 "params": $List<($ParamDecl)>
 "returnType": $BaseType
 "content": string
readonly "comments": $List<(string)>

constructor(name: string, variableTypes: $List$Type<($TSVariableType$Type)>, params: $List$Type<($ParamDecl$Type)>, returnType: $BaseType$Type)

public "getUsedClassPaths"(): $Collection<($ClassPath)>
public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodDecl$Type = ($MethodDecl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodDecl_ = $MethodDecl$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptType, $ScriptType$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$Wrapped$Global, $Wrapped$Global$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped$Global"
import {$Transpiler, $Transpiler$Type} from "packages/moe/wolfgirl/probejs/lang/transpiler/$Transpiler"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Clazz, $Clazz$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScriptDump {
static readonly "SERVER_DUMP": $Supplier<($ScriptDump)>
static readonly "CLIENT_DUMP": $Supplier<($ScriptDump)>
static readonly "STARTUP_DUMP": $Supplier<($ScriptDump)>
readonly "scriptType": $ScriptType
readonly "manager": $ScriptManager
readonly "basePath": $Path
readonly "scriptPath": $Path
readonly "globals": $Map<(string), ($Pair<($Collection<(string)>), ($Wrapped$Global)>)>
readonly "transpiler": $Transpiler
readonly "recordedClasses": $Set<($Clazz)>
 "dumped": integer
 "total": integer

constructor(manager: $ScriptManager$Type, basePath: $Path$Type, scriptPath: $Path$Type, scriptPredicate: $Predicate$Type<($Clazz$Type)>)

public "getSource"(): $Path
public "getTypeFolder"(): $Path
public "ensurePath"(path: string): $Path
public "ensurePath"(path: string, script: boolean): $Path
public "addGlobal"(identifier: string, ...content: ($Code$Type)[]): void
public "addGlobal"(identifier: string, excludedNames: $Collection$Type<(string)>, ...content: ($Code$Type)[]): void
public "getGlobalFolder"(): $Path
public "dumpGlobal"(): void
public "dumpClasses"(): void
public "getPackageFolder"(): $Path
public "dumpJSConfig"(): void
public "dump"(): void
public "assignType"(classPath: $ClassPath$Type, type: $BaseType$Type): void
public "assignType"(classPath: $Class$Type<(any)>, type: $BaseType$Type): void
public "retrieveClasses"(): $Set<($Class<(any)>)>
public "acceptClasses"(classes: $Collection$Type<($Clazz$Type)>): void
public "removeClasses"(): void
get "source"(): $Path
get "typeFolder"(): $Path
get "globalFolder"(): $Path
get "packageFolder"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScriptDump$Type = ($ScriptDump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScriptDump_ = $ScriptDump$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$TypingModificationEventJS" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptEventJS, $ScriptEventJS$Type} from "packages/moe/wolfgirl/probejs/events/$ScriptEventJS"
import {$ScriptDump, $ScriptDump$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$ScriptDump"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TypeScriptFile, $TypeScriptFile$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$TypeScriptFile"

export class $TypingModificationEventJS extends $ScriptEventJS {

constructor(dump: $ScriptDump$Type, files: $Map$Type<($ClassPath$Type), ($TypeScriptFile$Type)>)

public "modify"(clazz: $Class$Type<(any)>, file: $Consumer$Type<($TypeScriptFile$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypingModificationEventJS$Type = ($TypingModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypingModificationEventJS_ = $TypingModificationEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Stonecutting" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Stonecutting extends $RecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredient"(ingredient: $InputItem$Type): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Stonecutting$Type = (Stonecutting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Stonecutting_ = Stonecutting$Type;
}}
declare module "packages/moe/wolfgirl/probejs/events/$SnippetGenerationEventJS" {
import {$Snippet, $Snippet$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/$Snippet"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SnippetDump, $SnippetDump$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/$SnippetDump"

export class $SnippetGenerationEventJS extends $EventJS {

constructor(dump: $SnippetDump$Type)

public "create"(name: string, handler: $Consumer$Type<($Snippet$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnippetGenerationEventJS$Type = ($SnippetGenerationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnippetGenerationEventJS_ = $SnippetGenerationEventJS$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/base/$TypeVariableHolder" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VariableType, $VariableType$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType"
import {$TypeVariable, $TypeVariable$Type} from "packages/java/lang/reflect/$TypeVariable"

export class $TypeVariableHolder extends $AnnotationHolder {
readonly "variableTypes": $List<($VariableType)>

constructor(variables: ($TypeVariable$Type<(any)>)[], annotations: ($Annotation$Type)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeVariableHolder$Type = ($TypeVariableHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeVariableHolder_ = $TypeVariableHolder$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/mbd2/BurningCoal" {
import {$MBDRecipeSchema$MBDRecipeJS, $MBDRecipeSchema$MBDRecipeJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class BurningCoal extends $MBDRecipeSchema$MBDRecipeJS {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type BurningCoal$Type = (BurningCoal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type BurningCoal_ = BurningCoal$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSParamType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSParamType extends $BaseType {
 "baseType": $BaseType
readonly "params": $List<($BaseType)>

constructor(baseType: $BaseType$Type, params: $List$Type<($BaseType$Type)>)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSParamType$Type = ($TSParamType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSParamType_ = $TSParamType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/mbd2/RecipeType" {
import {$MBDRecipeSchema$MBDRecipeJS, $MBDRecipeSchema$MBDRecipeJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class RecipeType extends $MBDRecipeSchema$MBDRecipeJS {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type RecipeType$Type = (RecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type RecipeType_ = RecipeType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/$Snippet" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Variable, $Variable$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/parts/$Variable"

export class $Snippet {
readonly "name": string

constructor(name: string)

public "compile"(): $JsonObject
public "prefix"(prefix: string): $Snippet
public "literal"(content: string): $Snippet
public "description"(description: string): $Snippet
public "newline"(): $Snippet
public "registry"<T>(registry: $ResourceKey$Type<($Registry$Type<(T)>)>): $Snippet
public "getPrefixes"(): $List<(string)>
public "variable"(variable: $Variable$Type): $Snippet
public "tabStop"(enumeration: integer, defaultValue: string): $Snippet
public "tabStop"(): $Snippet
public "tabStop"(enumeration: integer): $Snippet
public "choices"(choices: $Collection$Type<(string)>): $Snippet
public "choices"(enumeration: integer, choices: $Collection$Type<(string)>): $Snippet
get "prefixes"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Snippet$Type = ($Snippet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Snippet_ = $Snippet$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/mbd2/EmberToSu" {
import {$MBDRecipeSchema$MBDRecipeJS, $MBDRecipeSchema$MBDRecipeJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class EmberToSu extends $MBDRecipeSchema$MBDRecipeJS {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type EmberToSu$Type = (EmberToSu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type EmberToSu_ = EmberToSu$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$FieldInfo$FieldAttributes" {
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export class $FieldInfo$FieldAttributes {
readonly "isFinal": boolean
readonly "isStatic": boolean

constructor(field: $Field$Type)

public "getStaticValue"(): any
get "staticValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldInfo$FieldAttributes$Type = ($FieldInfo$FieldAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldInfo$FieldAttributes_ = $FieldInfo$FieldAttributes$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$MethodInfo$MethodAttributes" {
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"

export class $MethodInfo$MethodAttributes {
readonly "isStatic": boolean
readonly "isDefault": boolean
readonly "isAbstract": boolean

constructor(method: $Method$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodInfo$MethodAttributes$Type = ($MethodInfo$MethodAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodInfo$MethodAttributes_ = $MethodInfo$MethodAttributes$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/kubejs/Shaped" {
import {$ShapedRecipeSchema$ShapedRecipeJS, $ShapedRecipeSchema$ShapedRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapedRecipeSchema$ShapedRecipeJS"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Shaped extends $ShapedRecipeSchema$ShapedRecipeJS {


public "result"(result: $OutputItem$Type): this
public "pattern"(pattern: (string)[]): this
public "key"(key: {[k: string]: $InputItem$Type}): this
public "kjsMirror"(): this
public "kjsShrink"(): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Shaped$Type = (Shaped);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Shaped_ = Shaped$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/mbd2/Centrifuging" {
import {$MBDRecipeSchema$MBDRecipeJS, $MBDRecipeSchema$MBDRecipeJS$Type} from "packages/com/lowdragmc/mbd2/integration/kubejs/recipe/$MBDRecipeSchema$MBDRecipeJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Centrifuging extends $MBDRecipeSchema$MBDRecipeJS {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Centrifuging$Type = (Centrifuging);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Centrifuging_ = Centrifuging$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/snippet/parts/$Variable" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SnippetPart, $SnippetPart$Type} from "packages/moe/wolfgirl/probejs/lang/snippet/parts/$SnippetPart"

export class $Variable extends $Enum<($Variable)> implements $SnippetPart {
static readonly "LINE_COMMENT": $Variable
static readonly "BLOCK_COMMENT_END": $Variable
static readonly "BLOCK_COMMENT_START": $Variable
static readonly "UUID": $Variable
static readonly "RANDOM_HEX": $Variable
static readonly "RANDOM": $Variable
static readonly "CURRENT_TIMEZONE_OFFSET": $Variable
static readonly "CURRENT_SECONDS_UNIX": $Variable
static readonly "CURRENT_SECOND": $Variable
static readonly "CURRENT_MINUTE": $Variable
static readonly "CURRENT_HOUR": $Variable
static readonly "CURRENT_DAY_NAME_SHORT": $Variable
static readonly "CURRENT_DAY_NAME": $Variable
static readonly "CURRENT_DATE": $Variable
static readonly "CURRENT_MONTH_NAME_SHORT": $Variable
static readonly "CURRENT_MONTH_NAME": $Variable
static readonly "CURRENT_MONTH": $Variable
static readonly "CURRENT_YEAR_SHORT": $Variable
static readonly "CURRENT_YEAR": $Variable
static readonly "CURSOR_NUMBER": $Variable
static readonly "CURSOR_INDEX": $Variable
static readonly "WORKSPACE_FOLDER": $Variable
static readonly "WORKSPACE_NAME": $Variable
static readonly "CLIPBOARD": $Variable
static readonly "RELATIVE_FILEPATH": $Variable
static readonly "TM_FILEPATH": $Variable
static readonly "TM_DIRECTORY": $Variable
static readonly "TM_FILENAME_BASE": $Variable
static readonly "TM_FILENAME": $Variable
static readonly "TM_LINE_NUMBER": $Variable
static readonly "TM_LINE_INDEX": $Variable
static readonly "TM_CURRENT_WORD": $Variable
static readonly "TM_CURRENT_LINE": $Variable
static readonly "TM_SELECTED_TEXT": $Variable


public static "values"(): ($Variable)[]
public static "valueOf"(name: string): $Variable
public "format"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variable$Type = (("cursor_index") | ("current_day_name_short") | ("tm_current_line") | ("block_comment_end") | ("current_month_name_short") | ("uuid") | ("clipboard") | ("random") | ("tm_line_index") | ("current_year_short") | ("current_year") | ("current_second") | ("line_comment") | ("workspace_folder") | ("workspace_name") | ("tm_filename_base") | ("tm_current_word") | ("current_hour") | ("tm_filepath") | ("tm_directory") | ("current_timezone_offset") | ("tm_selected_text") | ("relative_filepath") | ("current_date") | ("tm_filename") | ("current_seconds_unix") | ("current_minute") | ("random_hex") | ("current_month") | ("tm_line_number") | ("block_comment_start") | ("current_day_name") | ("current_month_name") | ("cursor_number")) | ($Variable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Variable_ = $Variable$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/transpiler/$Transpiler" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TypeConverter, $TypeConverter$Type} from "packages/moe/wolfgirl/probejs/lang/transpiler/$TypeConverter"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ScriptManager, $ScriptManager$Type} from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import {$Clazz, $Clazz$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TypeScriptFile, $TypeScriptFile$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$TypeScriptFile"

export class $Transpiler {
readonly "typeConverter": $TypeConverter
readonly "rejectedClasses": $Set<($ClassPath)>

constructor(manager: $ScriptManager$Type)

public "reject"(clazz: $Class$Type<(any)>): void
public "dump"(clazzes: $Collection$Type<($Clazz$Type)>): $Map<($ClassPath), ($TypeScriptFile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transpiler$Type = ($Transpiler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transpiler_ = $Transpiler$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/Smelting" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Smelting extends $RecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredient"(ingredient: $InputItem$Type): this
public "xp"(xp: number): this
public "cookingTime"(cookingTime: (number) | (string)): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Smelting$Type = (Smelting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Smelting_ = Smelting$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/type/impl/$VariableType" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$AnnotatedTypeVariable, $AnnotatedTypeVariable$Type} from "packages/java/lang/reflect/$AnnotatedTypeVariable"
import {$TypeVariable, $TypeVariable$Type} from "packages/java/lang/reflect/$TypeVariable"

export class $VariableType extends $TypeDescriptor {
 "symbol": string
 "descriptors": $List<($TypeDescriptor)>

constructor(typeVariable: $TypeVariable$Type<(any)>, checkBounds: boolean)
constructor(typeVariable: $AnnotatedTypeVariable$Type, checkBounds: boolean)
constructor(typeVariable: $TypeVariable$Type<(any)>)
constructor(typeVariable: $AnnotatedTypeVariable$Type)

public "stream"(): $Stream<($TypeDescriptor)>
public "getSymbol"(): string
public "getDescriptors"(): $List<($TypeDescriptor)>
get "symbol"(): string
get "descriptors"(): $List<($TypeDescriptor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableType$Type = ($VariableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableType_ = $VariableType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/kubejs/Shapeless" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$ShapelessRecipeSchema$ShapelessRecipeJS, $ShapelessRecipeSchema$ShapelessRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapelessRecipeSchema$ShapelessRecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class Shapeless extends $ShapelessRecipeSchema$ShapelessRecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredients"(ingredients: ($InputItem$Type)[]): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type Shapeless$Type = (Shapeless);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type Shapeless_ = Shapeless$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSJoinedType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $JSJoinedType extends $BaseType {
readonly "delimiter": string
readonly "types": $List<($BaseType)>


public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSJoinedType$Type = ($JSJoinedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSJoinedType_ = $JSJoinedType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$TSVariableType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"

export class $TSVariableType extends $BaseType {
readonly "symbol": string
 "extendsType": $BaseType

constructor(symbol: string, extendsType: $BaseType$Type)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TSVariableType$Type = ($TSVariableType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TSVariableType_ = $TSVariableType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/TagEventProbe" {
import {TagWrapperProbe, TagWrapperProbe$Type} from "packages/moe/wolfgirl/probejs/generated/TagWrapperProbe"
import {$TagEventJS, $TagEventJS$Type} from "packages/dev/latvian/mods/kubejs/server/tag/$TagEventJS"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class TagEventProbe<T, I> extends $TagEventJS {


public "add"(tag: T, ...filters: (I)[]): TagWrapperProbe<(T), (I)>
public "remove"(tag: T, ...filters: (I)[]): TagWrapperProbe<(T), (I)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type TagEventProbe$Type<T, I> = (TagEventProbe<(T), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type TagEventProbe_<T, I> = TagEventProbe$Type<(T), (I)>;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped$Global" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$Wrapped, $Wrapped$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/ts/$Wrapped"

export class $Wrapped$Global extends $Wrapped {
readonly "codes": $List<($Code)>
readonly "comments": $List<(string)>

constructor()

public "formatRaw"(declaration: $Declaration$Type): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrapped$Global$Type = ($Wrapped$Global);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrapped$Global_ = $Wrapped$Global$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Reference, $Reference$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Reference"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Declaration {
static readonly "INPUT_TEMPLATE": string
readonly "references": $Map<($ClassPath), ($Reference)>

constructor()

public "addClass"(path: $ClassPath$Type): void
public "getSymbol"(path: $ClassPath$Type, input: boolean): string
public "getSymbol"(path: $ClassPath$Type): string
public "exclude"(name: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Declaration$Type = ($Declaration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Declaration_ = $Declaration$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/extendedcrafting/ShapelessTable" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$ShapelessRecipeSchema$ShapelessRecipeJS, $ShapelessRecipeSchema$ShapelessRecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapelessRecipeSchema$ShapelessRecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class ShapelessTable extends $ShapelessRecipeSchema$ShapelessRecipeJS {


public "result"(result: $OutputItem$Type): this
public "ingredients"(ingredients: ($InputItem$Type)[]): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type ShapelessTable$Type = (ShapelessTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type ShapelessTable_ = ShapelessTable$Type;
}}
declare module "packages/moe/wolfgirl/probejs/generated/schema/minecraft/SmithingTransform" {
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

/**
 * This is a class generated by ProbeJS, you shall not load/require this class for your usages
 * because it doesn't exist in the JVM. The class exist only for type hinting purpose.
 * Loading the class will not throw an error, but instead the class loaded will be undefined.
 */
export class SmithingTransform extends $RecipeJS {


public "result"(result: $OutputItem$Type): this
public "template"(template: $InputItem$Type): this
public "base"(base: $InputItem$Type): this
public "addition"(addition: $InputItem$Type): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type SmithingTransform$Type = (SmithingTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type SmithingTransform_ = SmithingTransform$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassAttribute" {
import {$Clazz$ClassType, $Clazz$ClassType$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$Clazz$ClassType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Clazz$ClassAttribute {
readonly "type": $Clazz$ClassType
readonly "isAbstract": boolean
readonly "isInterface": boolean
readonly "raw": $Class<(any)>

constructor(clazz: $Class$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clazz$ClassAttribute$Type = ($Clazz$ClassAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Clazz$ClassAttribute_ = $Clazz$ClassAttribute$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/code/type/js/$JSObjectType" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BaseType$FormatType, $BaseType$FormatType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType$FormatType"
import {$BaseType, $BaseType$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$BaseType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JSObjectType extends $BaseType {
readonly "members": $Map<(string), ($BaseType)>

constructor(members: $Map$Type<(string), ($BaseType$Type)>)

public "format"(declaration: $Declaration$Type, input: $BaseType$FormatType$Type): $List<(string)>
public "getUsedClassPaths"(): $Collection<($ClassPath)>
get "usedClassPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSObjectType$Type = ($JSObjectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSObjectType_ = $JSObjectType$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/java/clazz/members/$ParamInfo" {
import {$TypeDescriptor, $TypeDescriptor$Type} from "packages/moe/wolfgirl/probejs/lang/java/type/$TypeDescriptor"
import {$AnnotationHolder, $AnnotationHolder$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$AnnotationHolder"
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Parameter, $Parameter$Type} from "packages/java/lang/reflect/$Parameter"
import {$ClassPathProvider, $ClassPathProvider$Type} from "packages/moe/wolfgirl/probejs/lang/java/base/$ClassPathProvider"

export class $ParamInfo extends $AnnotationHolder implements $ClassPathProvider {
 "name": string
 "type": $TypeDescriptor
readonly "varArgs": boolean

constructor(parameter: $Parameter$Type)

public "getClassPaths"(): $Collection<($ClassPath)>
get "classPaths"(): $Collection<($ClassPath)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParamInfo$Type = ($ParamInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParamInfo_ = $ParamInfo$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$TypeScriptFile" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Code, $Code$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/$Code"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Declaration, $Declaration$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/$Declaration"
import {$BufferedWriter, $BufferedWriter$Type} from "packages/java/io/$BufferedWriter"

export class $TypeScriptFile {
readonly "declaration": $Declaration
readonly "codeList": $List<($Code)>
readonly "classPath": $ClassPath

constructor(self: $ClassPath$Type)

public "format"(): string
public "write"(writer: $BufferedWriter$Type): void
public "write"(writeTo: $Path$Type): void
public "addCode"(code: $Code$Type): void
public "writeAsModule"(writer: $BufferedWriter$Type): void
public "findCode"<T extends $Code>(type: $Class$Type<(T)>): $Optional<(T)>
public "excludeSymbol"(name: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeScriptFile$Type = ($TypeScriptFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeScriptFile_ = $TypeScriptFile$Type;
}}
declare module "packages/moe/wolfgirl/probejs/lang/typescript/$Reference" {
import {$ClassPath, $ClassPath$Type} from "packages/moe/wolfgirl/probejs/lang/java/clazz/$ClassPath"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Reference extends $Record {

constructor(classPath: $ClassPath$Type, original: string, input: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "original"(): string
public "classPath"(): $ClassPath
public "input"(): string
public "getImport"(): string
get "import"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reference$Type = ($Reference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reference_ = $Reference$Type;
}}
