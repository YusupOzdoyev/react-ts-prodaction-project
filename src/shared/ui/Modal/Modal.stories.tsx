import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Commodi deleniti est asperiores harum magni obcaecati eaque consequuntur similique, cupiditate, doloremque eum modi aliquid optio excepturi hic dolores ratione facere molestias.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Commodi deleniti est asperiores harum magni obcaecati eaque consequuntur similique, cupiditate, doloremque eum modi aliquid optio excepturi hic dolores ratione facere molestias.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
