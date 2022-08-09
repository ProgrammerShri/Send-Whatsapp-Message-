import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Tooltip from "@mui/material/Tooltip";

const AppInput = ({
  id = "",
  label = "Enter or Paste Whatsapp Number",
  onChange,
  onClick,
  ...otherProps
}) => {
  return (
    <div>
      <TextField
        label={label}
        id={id}
        onChange={onChange}
        sx={{ m: 1, width: "40ch" }}
        type="number"
        {...otherProps}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="Paste Copied Number">
                <ContentPasteIcon
                  onClick={onClick}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "lightGray",
                    padding: "1rem",
                  }}
                />
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default AppInput;
