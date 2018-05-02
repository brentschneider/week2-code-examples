import React from 'react';
import Todolist from './index';
import ReactTestRenderer from 'react-test-renderer';

describe('Adding numbers', () => {
    it('should add two numbers', () => {
        expect(2 + 2).toBe(4);
    });
});

describe('Todolist component', () => {
    it('should render', () => {
        const component = ReactTestRenderer.create(<Todolist />);    
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('change the input', () => {
        const component = ReactTestRenderer.create(<Todolist />);
        component.getInstance().onInputChange({
            target: {
                value: 'new value'
            }
        });
        expect(component.toJSON()).toMatchSnapshot();
    });
});
