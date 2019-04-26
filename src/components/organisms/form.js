import React from 'react'
import styled from 'styled-components'
import { media, font } from '../variable/mixin'

const FormSection = styled.section`
  box-sizing: border-box;
  padding: 0 16px 32px;
  ${media.s`
    padding: 0 24px 32px;
  `}
  ${media.ms`
    padding: 0 32px 32px;
  `}
  ${media.m`
    padding: 0 64px 48px;
  `}
`

const FormContainer = styled.form`
  display: grid;
  grid-gap: 16px;
`

const FormBlock = styled.div`
  display: grid;
  grid-gap: 8px;
`

const FromLabel = styled.label`
  font: 1rem / 1 ${font.$f_1};
`

const FormInput = styled.input`
  background: var(--c_4);
  border: 1px solid var(--c_7);
  border-radius: 6px;
  color: var(--c_7);
  font-size: 1rem;
  outline: none;
  padding: 8px;
  &:focus {
    outline: 1px var(--c_5) dashed;
  }
`

const FormTextarea = styled.textarea`
  background: var(--c_4);
  border: 1px solid var(--c_7);
  border-radius: 6px;
  color: var(--c_7);
  font-size: 1rem;
  height: 96px;
  padding: 8px;
  resize: vertical;
  &:focus {
    outline: 1px var(--c_5) dashed;
  }
`

const FormButton = styled.button`
  background: var(--c_0);
  border: 1px solid var(--c_0);
  border-radius: 6px;
  box-sizing: border-box;
  color: var(--c_4);
  font: bold 1rem / 1 ${font.$f_1};
  margin: 8px 0 0;
  padding: 12px 12px 10px;
  transition: 0.2s ease;
  &:hover {
    background: rgba(var(--c_0-rgb), 0.8);
    border: 1px solid rgba(var(--c_0-rgb), 0.8);
  }
`

const Hidden = styled.div`
  display: none;
`

export default function Form() {
  return (
    <FormSection>
      <FormContainer name="contact" action="/thanks" netlify-honeypot="bot-field" data-netlify="true" method="post">
        <input type="hidden" name="form-name" value="contact" aria-label="hidden" />
        <Hidden>
          <label id="dont" htmlFor="bot">
            Don’t fill this out
          </label>
          <input id="bot" type="text" name="bot-field" aria-labelby="dont" />
        </Hidden>
        <FormBlock>
          <FromLabel id="nameLabel" htmlFor="name">
            Name
          </FromLabel>
          <FormInput
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            required="required"
            aria-labelby="nameLabel"
          />
        </FormBlock>
        <FormBlock>
          <FromLabel id="emailLabel" htmlFor="email">
            Email
          </FromLabel>
          <FormInput
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required="required"
            aria-labelby="emailLabel"
          />
        </FormBlock>
        <FormBlock>
          <FromLabel id="titleLabel" htmlFor="title">
            Title
          </FromLabel>
          <FormInput id="title" type="text" name="title" required="required" aria-labelby="titleLabel" />
        </FormBlock>
        <FormBlock>
          <FromLabel id="messageLabel" htmlFor="message">
            Message
          </FromLabel>
          <FormTextarea id="message" name="message" required="required" aria-labelby="messageLabel" />
        </FormBlock>
        <FormButton aria-label="フォームの内容を送信" type="submit">
          SEND
        </FormButton>
      </FormContainer>
    </FormSection>
  )
}
