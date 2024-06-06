# Layout schemas

## Layout version 2



### Objects

* [`Layout version 2`](#layout-version-2)
* [`Layout version 2.version`](#layout-version-2.version)
* [`Layout version 2.info`](#layout-version-2.info)
* [`Layout version 2.info.contact`](#layout-version-2.info.contact)
* [`Layout version 2.info.contact.email`](#layout-version-2.info.contact.email)
* [`Layout version 2.info.contact.name`](#layout-version-2.info.contact.name)
* [`Layout version 2.info.description`](#layout-version-2.info.description)
* [`Layout version 2.info.name`](#layout-version-2.info.name)
* [`Layout version 2.info.rtl`](#layout-version-2.info.rtl)
* [`Layout version 2.layers`](#layout-version-2.layers)
* [`Layout version 2.layers.extra_layers`](#layout-version-2.layers.extra_layers)
* [`Layout version 2.layers.hidden`](#layout-version-2.layers.hidden)
* [`sectors`](#layout-version-2.sectors)
* [`sectors.sectors`](#layout-version-2.sectors.sectors)
* [`sector_left_right`](#layout-version-2.sector_left_right)
* [`sector_left_right.parts`](#layout-version-2.sector_left_right.parts)
* [`actionList`](#layout-version-2.actionList)
* [`action`](#layout-version-2.action)
* [`action.type`](#layout-version-2.action.type)
* [`action.flags`](#layout-version-2.action.flags)
* [`action.flags.[]`](#layout-version-2.action.flags.[])
* [`action.key_code`](#layout-version-2.action.key_code)
* [`action.lower_case`](#layout-version-2.action.lower_case)
* [`action.movement_sequence`](#layout-version-2.action.movement_sequence)
* [`action.movement_sequence.[]`](#layout-version-2.action.movement_sequence.[])
* [`action.upper_case`](#layout-version-2.action.upper_case)
* [`sector_top_bottom`](#layout-version-2.sector_top_bottom)
* [`sector_top_bottom.parts`](#layout-version-2.sector_top_bottom.parts)

<a name="layout-version-2"></a>
### Layout version 2



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**version**|string||No|
|**info**|[`object`](#layout-version-2.info)|Layout informations|No|
|**layers**|[`object`](#layout-version-2.layers)||&#10003; Yes|

<a name="layout-version-2.version"></a>
### Layout version 2.version



* **Type(s)**
    * string
      <br />
      Constraints
        * **Should be** `2`
* **Required** No


<a name="layout-version-2.info"></a>
### Layout version 2.info

Layout informations

* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**contact**|[`object`](#layout-version-2.info.contact)|Contact informations of the author|No|
|**description**|string||No|
|**name**|string||No|
|**rtl**|boolean||No|

<a name="layout-version-2.info.contact"></a>
### Layout version 2.info.contact

Contact informations of the author

* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**email**|string||No|
|**name**|string||No|

<a name="layout-version-2.info.contact.email"></a>
### Layout version 2.info.contact.email



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-2.info.contact.name"></a>
### Layout version 2.info.contact.name



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-2.info.description"></a>
### Layout version 2.info.description



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-2.info.name"></a>
### Layout version 2.info.name



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-2.info.rtl"></a>
### Layout version 2.info.rtl



* **Type(s)**
    * boolean
* **Required** No


<a name="layout-version-2.layers"></a>
### Layout version 2.layers



* **Type(s)**
    * object
* **Required** &#10003; Yes


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**default**|[`object`](#layout-version-2.sectors)||Conditional|
|**extra_layers**|[`object`](#layout-version-2.layers.extra_layers)||No|
|**hidden**|[`array`](#layout-version-2.action)||No|

<a name="layout-version-2.layers.extra_layers"></a>
### Layout version 2.layers.extra_layers



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**first**|[`object`](#layout-version-2.sectors)||Conditional|
|**second**|[`object`](#layout-version-2.sectors)||Conditional|
|**third**|[`object`](#layout-version-2.sectors)||Conditional|
|**fourth**|[`object`](#layout-version-2.sectors)||Conditional|
|**fifth**|[`object`](#layout-version-2.sectors)||Conditional|

<a name="layout-version-2.layers.hidden"></a>
### Layout version 2.layers.hidden



* **Type(s)**
    * [`array`](#layout-version-2.action)
* **Required** No


<a name="layout-version-2.sectors"></a>
### sectors



* **Type(s)**
    * object
* **Required** require field(s):`extra_layers`


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**sectors**|[`object`](#layout-version-2.sectors.sectors)||No|

<a name="layout-version-2.sectors.sectors"></a>
### sectors.sectors



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**left**|[`object`](#layout-version-2.sector_left_right)||No|
|**right**|[`object`](#layout-version-2.sector_left_right)||No|
|**top**|[`object`](#layout-version-2.sector_top_bottom)||No|
|**bottom**|[`object`](#layout-version-2.sector_top_bottom)||No|

<a name="layout-version-2.sector_left_right"></a>
### sector_left_right



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**parts**|[`object`](#layout-version-2.sector_left_right.parts)||&#10003; Yes|

<a name="layout-version-2.sector_left_right.parts"></a>
### sector_left_right.parts



* **Type(s)**
    * object
* **Required** &#10003; Yes


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**top**|[`array`](#layout-version-2.actionList)||No|
|**bottom**|[`array`](#layout-version-2.actionList)||No|

<a name="layout-version-2.actionList"></a>
### actionList



* **Type(s)**
    * [`array`](#layout-version-2.actionList)
      <br />
      Constraints
        * **Have at most** `4` element(s)
* **Required** No


<a name="layout-version-2.action"></a>
### action



* **Type(s)**
    * object
    * null
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**type**|string||No|
|**flags**|integer, string, [`array`](#layout-version-2.action.flags.[])||No|
|**key_code**|string||No|
|**lower_case**|string||Conditional|
|**movement_sequence**|[`array`](#layout-version-2.action.movement_sequence.[])||No|
|**upper_case**|string||No|

<a name="layout-version-2.action.type"></a>
### action.type



* **Type(s)**
    * string
      <br />
      Constraints
        * **One of** <br />
            * `input_text`
            * `input_key`

* **Required** No


<a name="layout-version-2.action.flags"></a>
### action.flags



* **Type(s)**
    * integer
      <br />
      Constraints
        * **>=** `0`
    * string
      <br />
      Constraints
        * **One of** <br />
            * `meta_shift_on`
            * `meta_alt_on`
            * `meta_sym_on`
            * `meta_function_on`
            * `meta_alt_left_on`
            * `meta_alt_right_on`
            * `meta_shift_left_on`
            * `meta_shift_right_on`
            * `meta_ctrl_on`
            * `meta_ctrl_left_on`
            * `meta_ctrl_right_on`
            * `meta_meta_on`
            * `meta_meta_left_on`
            * `meta_meta_right_on`
            * `meta_caps_lock_on`
            * `meta_num_lock_on`
            * `meta_scroll_lock_on`

    * [`array`](#layout-version-2.action.flags.[])
* **Required** No


<a name="layout-version-2.action.flags.[]"></a>
### action.flags.[]



* **Type(s)**
    * integer
      <br />
      Constraints
        * **>=** `0`
    * string
      <br />
      Constraints
        * **One of** <br />
            * `meta_shift_on`
            * `meta_alt_on`
            * `meta_sym_on`
            * `meta_function_on`
            * `meta_alt_left_on`
            * `meta_alt_right_on`
            * `meta_shift_left_on`
            * `meta_shift_right_on`
            * `meta_ctrl_on`
            * `meta_ctrl_left_on`
            * `meta_ctrl_right_on`
            * `meta_meta_on`
            * `meta_meta_left_on`
            * `meta_meta_right_on`
            * `meta_caps_lock_on`
            * `meta_num_lock_on`
            * `meta_scroll_lock_on`

* **Required** No


<a name="layout-version-2.action.key_code"></a>
### action.key_code



* **Type(s)**
    * string
      <br />
      Constraints
        * **One of** <br />
            * `keycode_.+`
            * `move_current_end_point_left`
            * `move_current_end_point_right`
            * `move_current_end_point_up`
            * `move_current_end_point_down`
            * `selection_start`
            * `select_all`
            * `toggle_selection_anchor`
            * `shift_toggle`
            * `switch_to_main_keypad`
            * `switch_to_number_keypad`
            * `switch_to_symbols_keypad`
            * `switch_to_selection_keypad`
            * `switch_to_emoticon_keyboard`
            * `hide_keyboard`
            * `no_operation`
            * `fn_toggle`

* **Required** No


<a name="layout-version-2.action.lower_case"></a>
### action.lower_case



* **Type(s)**
    * string
* **Required** not require field(s):`type` OR `type` to match `^(?i)(input_text)$`


<a name="layout-version-2.action.movement_sequence"></a>
### action.movement_sequence



* **Type(s)**
    * [`array`](#layout-version-2.action.movement_sequence.[])
* **Required** No


<a name="layout-version-2.action.movement_sequence.[]"></a>
### action.movement_sequence.[]



* **Type(s)**
    * string
      <br />
      Constraints
        * **One of** <br />
            * `no_touch`
            * `inside_circle`
            * `top`
            * `left`
            * `bottom`
            * `right`
            * `long_press`
            * `long_press_end`

* **Required** No


<a name="layout-version-2.action.upper_case"></a>
### action.upper_case



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-2.sector_top_bottom"></a>
### sector_top_bottom



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**parts**|[`object`](#layout-version-2.sector_top_bottom.parts)||&#10003; Yes|

<a name="layout-version-2.sector_top_bottom.parts"></a>
### sector_top_bottom.parts



* **Type(s)**
    * object
* **Required** &#10003; Yes


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**left**|[`array`](#layout-version-2.actionList)||No|
|**right**|[`array`](#layout-version-2.actionList)||No|
## Layout version 2.1



### Objects

* [`Layout version 2.1`](#layout-version-21)
* [`Layout version 2.1.version`](#layout-version-21.version)
* [`Layout version 2.1.info`](#layout-version-21.info)
* [`Layout version 2.1.info.contact`](#layout-version-21.info.contact)
* [`Layout version 2.1.info.contact.email`](#layout-version-21.info.contact.email)
* [`Layout version 2.1.info.contact.name`](#layout-version-21.info.contact.name)
* [`Layout version 2.1.info.description`](#layout-version-21.info.description)
* [`Layout version 2.1.info.name`](#layout-version-21.info.name)
* [`Layout version 2.1.info.rtl`](#layout-version-21.info.rtl)
* [`Layout version 2.1.layers`](#layout-version-21.layers)
* [`Layout version 2.1.layers.extra_layers`](#layout-version-21.layers.extra_layers)
* [`Layout version 2.1.layers.hidden`](#layout-version-21.layers.hidden)
* [`Layout version 2.1.layers.functions`](#layout-version-21.layers.functions)
* [`sectors`](#layout-version-21.sectors)
* [`sectors.sectors`](#layout-version-21.sectors.sectors)
* [`sector_left_right`](#layout-version-21.sector_left_right)
* [`sector_left_right.parts`](#layout-version-21.sector_left_right.parts)
* [`actionList`](#layout-version-21.actionList)
* [`action`](#layout-version-21.action)
* [`action.type`](#layout-version-21.action.type)
* [`action.flags`](#layout-version-21.action.flags)
* [`action.flags.[]`](#layout-version-21.action.flags.[])
* [`action.key_code`](#layout-version-21.action.key_code)
* [`action.lower_case`](#layout-version-21.action.lower_case)
* [`action.movement_sequence`](#layout-version-21.action.movement_sequence)
* [`action.movement_sequence.[]`](#layout-version-21.action.movement_sequence.[])
* [`action.upper_case`](#layout-version-21.action.upper_case)
* [`sector_top_bottom`](#layout-version-21.sector_top_bottom)
* [`sector_top_bottom.parts`](#layout-version-21.sector_top_bottom.parts)

<a name="layout-version-21"></a>
### Layout version 2.1



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**version**|string||No|
|**info**|[`object`](#layout-version-21.info)|Layout informations|No|
|**layers**|[`object`](#layout-version-21.layers)||&#10003; Yes|

<a name="layout-version-21.version"></a>
### Layout version 2.1.version



* **Type(s)**
    * string
      <br />
      Constraints
        * **Should be** `2.1`
* **Required** No


<a name="layout-version-21.info"></a>
### Layout version 2.1.info

Layout informations

* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**contact**|[`object`](#layout-version-21.info.contact)|Contact informations of the author|No|
|**description**|string||No|
|**name**|string||No|
|**rtl**|boolean||No|

<a name="layout-version-21.info.contact"></a>
### Layout version 2.1.info.contact

Contact informations of the author

* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**email**|string||No|
|**name**|string||No|

<a name="layout-version-21.info.contact.email"></a>
### Layout version 2.1.info.contact.email



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-21.info.contact.name"></a>
### Layout version 2.1.info.contact.name



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-21.info.description"></a>
### Layout version 2.1.info.description



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-21.info.name"></a>
### Layout version 2.1.info.name



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-21.info.rtl"></a>
### Layout version 2.1.info.rtl



* **Type(s)**
    * boolean
* **Required** No


<a name="layout-version-21.layers"></a>
### Layout version 2.1.layers



* **Type(s)**
    * object
* **Required** &#10003; Yes


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**default**|[`object`](#layout-version-21.sectors)||Conditional|
|**extra_layers**|[`object`](#layout-version-21.layers.extra_layers)||No|
|**hidden**|[`array`](#layout-version-21.action)||No|
|**functions**|[`array`](#layout-version-21.action)|Like hidden but requires &#x27;fn button&#x27; to be active for being able to be triggered|No|

<a name="layout-version-21.layers.extra_layers"></a>
### Layout version 2.1.layers.extra_layers



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**first**|[`object`](#layout-version-21.sectors)||Conditional|
|**second**|[`object`](#layout-version-21.sectors)||Conditional|
|**third**|[`object`](#layout-version-21.sectors)||Conditional|
|**fourth**|[`object`](#layout-version-21.sectors)||Conditional|
|**fifth**|[`object`](#layout-version-21.sectors)||Conditional|

<a name="layout-version-21.layers.hidden"></a>
### Layout version 2.1.layers.hidden



* **Type(s)**
    * [`array`](#layout-version-21.action)
* **Required** No


<a name="layout-version-21.layers.functions"></a>
### Layout version 2.1.layers.functions

Like hidden but requires 'fn button' to be active for being able to be triggered

* **Type(s)**
    * [`array`](#layout-version-21.action)
* **Required** No


<a name="layout-version-21.sectors"></a>
### sectors



* **Type(s)**
    * object
* **Required** require field(s):`extra_layers`


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**sectors**|[`object`](#layout-version-21.sectors.sectors)||No|

<a name="layout-version-21.sectors.sectors"></a>
### sectors.sectors



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**left**|[`object`](#layout-version-21.sector_left_right)||No|
|**right**|[`object`](#layout-version-21.sector_left_right)||No|
|**top**|[`object`](#layout-version-21.sector_top_bottom)||No|
|**bottom**|[`object`](#layout-version-21.sector_top_bottom)||No|

<a name="layout-version-21.sector_left_right"></a>
### sector_left_right



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**parts**|[`object`](#layout-version-21.sector_left_right.parts)||&#10003; Yes|

<a name="layout-version-21.sector_left_right.parts"></a>
### sector_left_right.parts



* **Type(s)**
    * object
* **Required** &#10003; Yes


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**top**|[`array`](#layout-version-21.actionList)||No|
|**bottom**|[`array`](#layout-version-21.actionList)||No|

<a name="layout-version-21.actionList"></a>
### actionList



* **Type(s)**
    * [`array`](#layout-version-21.actionList)
      <br />
      Constraints
        * **Have at most** `4` element(s)
* **Required** No


<a name="layout-version-21.action"></a>
### action



* **Type(s)**
    * object
    * null
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**type**|string||No|
|**flags**|integer, string, [`array`](#layout-version-21.action.flags.[])||No|
|**key_code**|string||No|
|**lower_case**|string||Conditional|
|**movement_sequence**|[`array`](#layout-version-21.action.movement_sequence.[])||No|
|**upper_case**|string||No|

<a name="layout-version-21.action.type"></a>
### action.type



* **Type(s)**
    * string
      <br />
      Constraints
        * **One of** <br />
            * `input_text`
            * `input_key`

* **Required** No


<a name="layout-version-21.action.flags"></a>
### action.flags



* **Type(s)**
    * integer
      <br />
      Constraints
        * **>=** `0`
    * string
      <br />
      Constraints
        * **One of** <br />
            * `meta_shift_on`
            * `meta_alt_on`
            * `meta_sym_on`
            * `meta_function_on`
            * `meta_alt_left_on`
            * `meta_alt_right_on`
            * `meta_shift_left_on`
            * `meta_shift_right_on`
            * `meta_ctrl_on`
            * `meta_ctrl_left_on`
            * `meta_ctrl_right_on`
            * `meta_meta_on`
            * `meta_meta_left_on`
            * `meta_meta_right_on`
            * `meta_caps_lock_on`
            * `meta_num_lock_on`
            * `meta_scroll_lock_on`

    * [`array`](#layout-version-21.action.flags.[])
* **Required** No


<a name="layout-version-21.action.flags.[]"></a>
### action.flags.[]



* **Type(s)**
    * integer
      <br />
      Constraints
        * **>=** `0`
    * string
      <br />
      Constraints
        * **One of** <br />
            * `meta_shift_on`
            * `meta_alt_on`
            * `meta_sym_on`
            * `meta_function_on`
            * `meta_alt_left_on`
            * `meta_alt_right_on`
            * `meta_shift_left_on`
            * `meta_shift_right_on`
            * `meta_ctrl_on`
            * `meta_ctrl_left_on`
            * `meta_ctrl_right_on`
            * `meta_meta_on`
            * `meta_meta_left_on`
            * `meta_meta_right_on`
            * `meta_caps_lock_on`
            * `meta_num_lock_on`
            * `meta_scroll_lock_on`

* **Required** No


<a name="layout-version-21.action.key_code"></a>
### action.key_code



* **Type(s)**
    * string
      <br />
      Constraints
        * **One of** <br />
            * `keycode_.+`
            * `move_current_end_point_left`
            * `move_current_end_point_right`
            * `move_current_end_point_up`
            * `move_current_end_point_down`
            * `selection_start`
            * `select_all`
            * `toggle_selection_anchor`
            * `shift_toggle`
            * `switch_to_main_keypad`
            * `switch_to_number_keypad`
            * `switch_to_symbols_keypad`
            * `switch_to_selection_keypad`
            * `switch_to_emoticon_keyboard`
            * `hide_keyboard`
            * `no_operation`
            * `fn_toggle`

* **Required** No


<a name="layout-version-21.action.lower_case"></a>
### action.lower_case



* **Type(s)**
    * string
* **Required** not require field(s):`type` OR `type` to match `^(?i)(input_text)$`


<a name="layout-version-21.action.movement_sequence"></a>
### action.movement_sequence



* **Type(s)**
    * [`array`](#layout-version-21.action.movement_sequence.[])
* **Required** No


<a name="layout-version-21.action.movement_sequence.[]"></a>
### action.movement_sequence.[]



* **Type(s)**
    * string
      <br />
      Constraints
        * **One of** <br />
            * `no_touch`
            * `inside_circle`
            * `top`
            * `left`
            * `bottom`
            * `right`
            * `long_press`
            * `long_press_end`

* **Required** No


<a name="layout-version-21.action.upper_case"></a>
### action.upper_case



* **Type(s)**
    * string
* **Required** No


<a name="layout-version-21.sector_top_bottom"></a>
### sector_top_bottom



* **Type(s)**
    * object
* **Required** No


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**parts**|[`object`](#layout-version-21.sector_top_bottom.parts)||&#10003; Yes|

<a name="layout-version-21.sector_top_bottom.parts"></a>
### sector_top_bottom.parts



* **Type(s)**
    * object
* **Required** &#10003; Yes


#### Properties

|   |Type|Description|Required|
|---|---|---|---|
|**left**|[`array`](#layout-version-21.actionList)||No|
|**right**|[`array`](#layout-version-21.actionList)||No|
