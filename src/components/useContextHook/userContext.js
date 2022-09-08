import React from 'react'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const UserContextProvider = UserContext.Provider
export const ChannelContextProvider = ChannelContext.Provider
