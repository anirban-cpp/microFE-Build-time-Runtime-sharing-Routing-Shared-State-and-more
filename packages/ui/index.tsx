import * as React from "react";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";
import {
    Header,
    AppShell as MantineAppShell,
    Title,
    MantineProvider,
    Navbar,
} from "@mantine/core";
import MainLink from "./MainLink";

export type RouteType = {
    element: React.FunctionComponent;
    path: string;
};

export type NavLink = {
    label: string;
    path: string;
}

export const AppShell: React.FunctionComponent<{
    title: string;
    colorScheme?: "light" | "dark";
    routes: RouteType[];
    navLinks: NavLink[];
}> = ({ title, colorScheme = "light", routes, navLinks }) => (
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
                        {
                            navLinks.map(link => (
                                <MainLink {...link} key={link.path} />
                            ))
                        }
                    </Navbar>
                }
                header={
                    <Header
                        height={60}
                        p="xs"
                        sx={{
                            display: "flex",
                        }}
                        styles={(theme) => ({
                            main: {
                                backgroundColor:
                                    theme.colorScheme === "dark"
                                        ? theme.colors.dark[8]
                                        : theme.colors.dark[0],
                            },
                        })}
                    >
                        <Title>{title}</Title>
                    </Header>
                }
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
);
