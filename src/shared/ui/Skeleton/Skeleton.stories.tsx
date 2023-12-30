import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    height: 200,
    width: '100%',
};

export const Circle = Template.bind({});
Circle.args = {
    height: 100,
    width: 100,
    border: '50%',
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    height: 200,
    width: '100%',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    height: 100,
    width: 100,
    border: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
