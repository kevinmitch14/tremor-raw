import type { Meta, StoryObj } from "@storybook/react"

import { DateField } from "./DateField"

const meta: Meta<typeof DateField> = {
  title: "ui/DateField",
  component: DateField,
  render: (args) => {
    return <DateField {...args} />
  },
}

export default meta
type Story = StoryObj<typeof DateField>

export const Single: Story = {}
