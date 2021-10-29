import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";
function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <div>
      <Card onClick={props.onClick} className="infoBox">
        <CardContent
          className={`infoBox ${active && "infoBox--selected"} ${
            isRed && "infoBox--red"
          }`}
        >
          {/* title */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>

          {/* Number of cases */}
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
            {cases}
          </h2>

          {/* Total cases */}
          <Typography className="infoBox__total" color="textSecondary">
            Total {total}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
