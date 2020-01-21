import React from 'react';
import { cleanup, render, fireEvent, waitForElement, wait } from '@testing-library/react';
import { getResponse } from '../../utils';
import { resultsTravel, resultsFootball, resultsUkNews } from './fixtures/data';

import '@testing-library/jest-dom/extend-expect';
import ContentView from '../ContentView';

jest.mock('../../utils');

describe('<ContentView />', () => {
  afterEach(cleanup, jest.clearAllMocks());

  it('should render loading spinner on load and data is not available yet', async () => {
    getResponse.mockResolvedValueOnce({
      data: {
        response: {}
      }
    });

    const { getByText } = await render(<ContentView />);
    const loading = getByText('Loading...');
    expect(loading).toHaveTextContent(/loading/i);
    expect(getResponse).toHaveBeenCalledTimes(1);
  });

  it('should render tabs and lists of news on successful data fetch', async () => {
    getResponse.mockResolvedValueOnce({
      data: {
        response: {
          results: resultsUkNews
        }
      }
    });

    const { getAllByTestId } = await render(<ContentView />);

    expect(getResponse).toHaveBeenCalled();

    const resolvedNewsList = await waitForElement(() => getAllByTestId('newsContentList'));
    expect(resolvedNewsList).toHaveLength(2);

    const resolvedtabList = await waitForElement(() => getAllByTestId('tabList'));
    expect(resolvedtabList).toHaveLength(3);
  });

  it('should render the right section name on successful data fetch', async () => {
    getResponse.mockResolvedValueOnce({
      data: {
        response: {
          results: resultsTravel
        }
      }
    });

    const { getAllByText } = await render(<ContentView />);

    const newsType = getAllByText('Travel');

    expect(newsType).toBeTruthy();
  });
});
