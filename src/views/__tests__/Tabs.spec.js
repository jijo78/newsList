import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Tabs from '../Tabs';

const TAB_TEXT = /Uknews/i;
const tabs = ['UKnews', 'Football', 'Travel'];
const onClickMock = jest.fn();
let props;

describe('<Tabs />', () => {
  beforeEach(() => {
    props = {
      tab: tabs,
      onClick: onClickMock
    };
  });
  afterEach(cleanup, jest.clearAllMocks());

  it('should render tab title', () => {
    const { getByText } = render(<Tabs {...props} />);
    const tab = getByText(TAB_TEXT);

    expect(tab).toBeDefined();
  });

  it('should render a different tab title', () => {
    props.tab = tabs[1];
    const { getByText } = render(<Tabs {...props} />);
    const tab = getByText('Football');

    expect(tab).toBeDefined();
  });

  it('should call onClick function if prop is present', () => {
    const { getByText } = render(<Tabs {...props} />);
    const tab = getByText(TAB_TEXT);

    fireEvent.click(tab);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
