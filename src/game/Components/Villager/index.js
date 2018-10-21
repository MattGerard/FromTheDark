import React, { PureComponent } from 'react';
import styled from 'styled-components';

const VillagerContainer = styled.div`
  border: 1px solid #000;
  padding: 10px;
  display: inline-block;
  margin: 5px;
`;

export default class villager extends PureComponent {
  render() {
    const { villager } = this.props;
    return <VillagerContainer>{villager.id}</VillagerContainer>;
  }
}
