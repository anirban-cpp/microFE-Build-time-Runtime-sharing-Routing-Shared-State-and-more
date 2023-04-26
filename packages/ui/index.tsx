import * as React from 'react'
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import {
  AppShell as MantineAppShell,
  MantineProvider,
  Navbar,
} from '@mantine/core'
import MainLink from './MainLink'
import Header from './Header'

export type RouteType = {
  element: React.FunctionComponent
  path: string
}

export type NavLink = {
  label: string
  path: string
}

export const AppShell: React.FunctionComponent<{
  title: string
  colorScheme?: 'light' | 'dark'
  routes: RouteType[]
  navLinks: NavLink[]
}> = ({ title, colorScheme = 'light', routes, navLinks }) => (
  <BrowserRouter>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme,
      }}
    >
      <MantineAppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            {navLinks.map((link) => (
              <MainLink {...link} key={link.path} />
            ))}
          </Navbar>
        }
        header={<Header title={title} />}
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Outlet />
      </MantineAppShell>
    </MantineProvider>
  </BrowserRouter>
)
