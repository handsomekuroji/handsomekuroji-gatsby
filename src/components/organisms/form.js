import React from 'react'
import styled from 'styled-components'
import { media, font } from '~src/components/variable/mixin'

const Section = styled.section`
  box-sizing: border-box;
  padding: 0 16px 32px;

  ${media.s} {
    padding: 0 24px 32px;
  }

  ${media.ms} {
    padding: 0 32px 32px;
  }

  ${media.m} {
    padding: 0 64px 48px;
  }
`

const Wrapper = styled.form`
  display: grid;
  grid-gap: 16px;
`

const Block = styled.div`
  display: grid;
  grid-gap: 8px;
`

const Label = styled.label`
  font: 1rem / 1 ${font.$f_1};
`

const Input = styled.input`
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

const Textarea = styled.textarea`
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

const Button = styled.button`
  background: var(--c_0);
  border: 1px solid var(--c_0);
  border-radius: 6px;
  box-sizing: border-box;
  color: var(--c_4);
  font: bold 1rem / 1 ${font.$f_1};
  margin: 8px 0 0;
  padding: 12px 12px 10px;
  transition: background 0.2s ease, border 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background: rgba(var(--c_0-rgb), 0.8);
      border: 1px solid rgba(var(--c_0-rgb), 0.8);
    }
  }
`

const Hidden = styled.div`
  display: none;
`

export default function Form() {
  return (
    <Section>
      <Wrapper name="contact" action="/thanks" netlify-honeypot="bot-field" data-netlify="true" method="post">
        <input type="hidden" name="form-name" value="contact" aria-hidden="true" />
        <Hidden>
          <label id="dont" htmlFor="bot">
            Don’t fill this out
          </label>
          <input id="bot" type="text" name="bot-field" aria-labelledby="dont" />
        </Hidden>
        <Block>
          <Label id="name" htmlFor="name" aria-label="名前">
            Name
          </Label>
          <Input id="name" type="text" name="name" autoComplete="name" required="required" aria-labelledby="name" />
        </Block>
        <Block>
          <Label id="email" htmlFor="email" aria-label="メールアドレス">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required="required"
            aria-labelledby="email"
          />
        </Block>
        <Block>
          <Label id="title" htmlFor="title" aria-label="タイトル">
            Title
          </Label>
          <Input id="title" type="text" name="title" required="required" aria-labelledby="title" />
        </Block>
        <Block>
          <Label id="message" htmlFor="message" aria-label="メッセージ">
            Message
          </Label>
          <Textarea id="message" name="message" required="required" aria-labelledby="message" />
        </Block>
        <Button type="submit" aria-label="フォームの内容を送信">
          SEND
        </Button>
      </Wrapper>
    </Section>
  )
}
