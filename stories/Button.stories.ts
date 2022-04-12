import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'projects/button/src/lib/button.component';
import { ButtonModule } from 'projects/button/src/lib/button.module';

export default {
  title: 'Example/MyLib',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {text: 'hello eknath', disabled: true} as Partial<ButtonComponent>;