import React from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import exit from "Services/exit";

const BotonFlotante = (props) => {
  const { actions, history } = props;

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="left"
    >
      {actions &&
        actions.map((action) => (
          <SpeedDialAction
            icon={action.icon}
            key={action.name}
            tooltipTitle={action.name}
            onClick={() => history.push(action.link)}
          />
        ))}
      <SpeedDialAction
        icon={<ExitToApp />}
        tooltipTitle="Salir"
        onClick={() => exit(history)}
      />
    </SpeedDial>
  );
};

export default BotonFlotante;
