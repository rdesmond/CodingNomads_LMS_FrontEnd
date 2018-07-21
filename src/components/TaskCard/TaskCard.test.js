import React from 'react';
import { shallow } from 'enzyme';
import { TaskCard, mapStateToProps } from './TaskCard';

describe('TaskCard', () => {
  let wrapper;
  let mockStudent;

  beforeEach(() => {
    mockStudent = {id: 1, roleId: 2}
    wrapper = shallow(<TaskCard user={mockStudent}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot for admin permissions', () => {
    let mockAdmin = {
      id: 1,
      roleId: 1
    };
    wrapper = shallow(<TaskCard user={mockAdmin}/>);
    
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return a state of the user', () => {
      let mockState = {
        tasks: [{}, {}],
        user: {id: 1, roleId: 1}
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      let expected = {id: 1, roleId: 1};

      expect(actual).toEqual(expected);
    })
  })
})