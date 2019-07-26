import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Block, Button } from "../StyledComponents";

const mapStateToProps = ({ screens }) => ({
  screens
});

const CentralArea = ({ screens }) => (
  <Block
    width="50vw"
    height="90vh"
    align="center"
    bgColor="gainsboro"
    pright="0"
  >
    <Block align="right" height="10vh" pright="0">
      <Button>Save</Button>
      <Button mleft=".5vw">Save new version</Button>
      <Button mleft=".5vw">Submit for verification</Button>
    </Block>
    <Block bgColor="white" height="75vh">
      {`Screen Active: ID = ${screens.activeId}`}
    </Block>
  </Block>
);

CentralArea.propTypes = {
  // pending define shapeoff
  screens: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CentralArea);
