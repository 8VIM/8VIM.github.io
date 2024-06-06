# Layout version 2

## Objects

* [`Layout version 2`](#__root)
* [`Layout version 2.info`](#__root.info)
* [`Layout version 2.info.contact`](#__root.info.contact)
* [`Layout version 2.layers`](#__root.layers)
* [`Layout version 2.layers.extra_layers`](#__root.layers.extra_layers)
* [`Layout version 2.layers.hidden`](#__root.layers.hidden)
* [`sectors`](#sectors)
* [`sectors.sectors`](#sectors.sectors)
* [`sector_left_right`](#sector_left_right)
* [`sector_left_right.parts`](#sector_left_right.parts)
* [`actionList`](#actionList)
* [`action`](#action)
* [`action.flags.[]`](#action.flags.[])
* [`action.movement_sequence.[]`](#action.movement_sequence.[])
* [`sector_top_bottom`](#sector_top_bottom)
* [`sector_top_bottom.parts`](#sector_top_bottom.parts)

<a name="__root"></a>
## Layout version 2

### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**version**|`string`||No|
|**info**|[`object`](#__root.info)|Layout informations|No|
|**layers**|[`object`](#__root.layers)||&#10003; Yes|

<a name="__root.info"></a>
### Layout version 2.info

#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**contact**|[`object`](#__root.info.contact)|Contact informations of the author|No|
|**description**|`string`||No|
|**name**|`string`||No|
|**rtl**|`boolean`||No|

<a name="__root.info.contact"></a>
#### Layout version 2.info.contact

##### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**email**|`string`||No|
|**name**|`string`||No|

<a name="__root.layers"></a>
### Layout version 2.layers

#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**default**|[`object`](#sectors)||No|
|**extra_layers**|[`object`](#__root.layers.extra_layers)||No|
|**hidden**|[`array`](#__root.layers.hidden.[])||No|

<a name="__root.layers.extra_layers"></a>
#### Layout version 2.layers.extra_layers

##### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**first**|[`object`](#sectors)||No|
|**second**|[`object`](#sectors)||No|
|**third**|[`object`](#sectors)||No|
|**fourth**|[`object`](#sectors)||No|
|**fifth**|[`object`](#sectors)||No|

<a name="__root.layers.hidden"></a>
#### Layout version 2.layers.hidden

##### Items

Types:
* [`object`](#action)
* `null`

<a name="sectors"></a>
## sectors

### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**sectors**|[`object`](#sectors.sectors)||No|

<a name="sectors.sectors"></a>
### sectors.sectors

#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**left**|[`object`](#sector_left_right)||&#10003; Yes|
|**right**|[`object`](#sector_left_right)||&#10003; Yes|
|**top**|[`object`](#sector_top_bottom)||&#10003; Yes|
|**bottom**|[`object`](#sector_top_bottom)||&#10003; Yes|

<a name="sector_left_right"></a>
## sector_left_right

### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**parts**|[`object`](#sector_left_right.parts)||&#10003; Yes|

<a name="sector_left_right.parts"></a>
### sector_left_right.parts

#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**top**|[`array`](#actionList)||No|
|**bottom**|[`array`](#actionList)||No|

<a name="actionList"></a>
## actionList

### Items

Types:
* [`object`](#action)
* `null`

<a name="action"></a>
## action

### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**type**|`string`||No|
|**flags**|`integer`, `string`, [`array`](#action.flags.[])||No|
|**key_code**|`string`||No|
|**lower_case**|`string`||No|
|**movement_sequence**|[`array`](#action.movement_sequence.[])||No|
|**upper_case**|`string`||No|

<a name="action.flags.[]"></a>
#### action.flags.[]

##### Items

Types:
* `integer`
* `string`

<a name="action.movement_sequence.[]"></a>
#### action.movement_sequence.[]

##### Items

Types:
* `string`

<a name="sector_top_bottom"></a>
## sector_top_bottom

### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**parts**|[`object`](#sector_top_bottom.parts)||&#10003; Yes|

<a name="sector_top_bottom.parts"></a>
### sector_top_bottom.parts

#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**left**|[`array`](#actionList)||No|
|**right**|[`array`](#actionList)||No|
