import React from 'react'
import { UserContext, ChannelContext } from './userContext'

//  using Consumer...this method becomes messy as context values become many

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value is {user}, channel context value is{' '}
                    {channel}
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
