import React from 'react'
import { Button } from '../Button'
import { Input, SubscribeWrapper, Title } from './style'

export const Subscribe = ({className}) => {
  return (
    <SubscribeWrapper className={className}>
        <Title>Subscribe to Our New Stories</Title>
        <Input className="px-3" placeholder='Email Address...' />
        <Button className="primary round w-100 mt-3">submit</Button>
    </SubscribeWrapper>
  )
}