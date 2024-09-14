import React from 'react';
import Todo from './tood-components/Todo';
import { GlobalReset } from './global-reset/global-reset';
import { useRecoilState } from 'recoil';
import { ThemeAtom } from './theme/theme-atom';
import { ThemeProvider } from 'styled-components';
import { DarkMode, LightMode } from './theme/theme';




function App() {

  const [isDark, setIsDark] = useRecoilState(ThemeAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? LightMode : DarkMode}>
        <GlobalReset />
        <Todo />
      </ThemeProvider>
    </>
  );
}

export default App;
