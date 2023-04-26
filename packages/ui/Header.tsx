import React from 'react'
import { Header as MantineHeader, Title } from '@mantine/core'

const Header: React.FunctionComponent<{
  title: string
}> = ({ title }) => {
  return (
    <MantineHeader
      height={60}
      p="xs"
      sx={{
        display: 'flex',
      }}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.dark[0],
        },
      })}
    >
      <Title>{title}</Title>
    </MantineHeader>
  )
}

export default Header
