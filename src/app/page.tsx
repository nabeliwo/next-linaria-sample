import { Base } from "@/components/Base";
import { theme } from "@/theme";
import { styled } from "@linaria/react";

export default function Home() {
  return (
    <List>
      <li>
        <Title>Base</Title>

        <Content>
          <Base>
            デフォルト<br />
            radius: m<br />
            layer: 1
          </Base>
          <Base padding="S">padding あり</Base>
          <Base layer={2}>layer: 2</Base>
          <Base layer={3}>layer: 3</Base>
          <Base layer={4}>layer: 4</Base>
        </Content>
      </li>
    </List>
  )
}

const List = styled.ul`
  padding: ${theme.spacing.M};
  background-color: ${theme.color.BACKGROUND};
`
const Title = styled.p`
  margin-bottom: ${theme.spacing.S};
  font-weight: bold;
  font-size: ${theme.fontSize.L};
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.S};
`
