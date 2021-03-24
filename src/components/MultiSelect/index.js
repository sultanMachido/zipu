import React from "react";
import MultiSelect from "@kenshooui/react-multi-select";

const CustomMultiSelect = (props) => {
  return (
    <MultiSelect
      items={props.buses}
      selectedItems={props.selectedItems}
      onChange={props.handleChange}
    />
  );

}

export default CustomMultiSelect;