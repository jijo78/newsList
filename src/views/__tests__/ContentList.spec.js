import React from 'react';
import { cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import ContentList from '../ContentList';

const TEXT_TITLE = /Congratulations Kate, it’s a Labour win | Letters/i;
const TEXT_DATE = /22 Mar 2015/i;

const data = {
  id: 'global/2015/mar/22/congratulations-kate-labour-win-ale-doctor-bird',
  sectionName: 'Global',
  webPublicationDate: '2015-03-22T18:38:52Z',
  webTitle: 'Congratulations Kate, it’s a Labour win | Letters',
  webUrl:
    'https://www.theguardian.com/global/2015/mar/22/congratulations-kate-labour-win-ale-doctor-bird'
};
let props;

describe('<ContentList />', () => {
  beforeEach(() => {
    props = {
      item: data
    };
  });
  afterEach(cleanup);

  it('should not render component if no items prop is passed', () => {
    const { getByRole } = render(<ContentList />);
    expect(getByRole('alert')).toBeTruthy();
  });

  it('should render component if items prop is passed', () => {
    const { container } = render(<ContentList {...props} />);

    expect(container.innerHTML).toBeDefined();
  });

  it('should render the title', () => {
    const { getByText } = render(<ContentList {...props} />);
    const title = getByText(TEXT_TITLE);

    expect(title).toBeTruthy();
  });

  it('should format the date correctly', () => {
    const { getByText } = render(<ContentList {...props} />);
    const date = getByText(TEXT_DATE);

    expect(date).toBeTruthy();
  });
});
