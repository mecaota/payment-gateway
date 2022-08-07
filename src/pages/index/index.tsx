import { memo } from 'react';
import type { FC } from 'react';
import { BananaButton } from '@molecules/bananaButton';

export const IndexPage: FC = memo(() => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello My page</p>
        <BananaButton />
      </header>
    </div>
  );
});
IndexPage.displayName = 'IndexPage';

export default IndexPage;
