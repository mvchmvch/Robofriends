import { apiCall } from './api/api'

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

import * as actions from './actions'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([thunkMiddleware])

const store = mockStore();

describe('testing actions',() => {

	beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    })

	it('should create an action to serach robots', () => {
		const text = 'test'
		const expectedAction = {
			type:CHANGE_SEARCHFIELD,
			payload: text
		}
 		expect(actions.setSearchField(text)).toEqual(expectedAction)
 	})

	it('should handle requesting robots API pending', () => {
		store.dispatch(actions.requestRobots())
		const action = store.getActions()

		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING, 
		}

		expect(action[0]).toEqual(expectedAction)
	})


	it('should handle requesting robots API response', () => {
		
		const mockResponse = (status, statusText, response) => {
  			return new window.Response(response, {
    			status: status,
    			statusText: statusText,
    			headers: {
      				'Content-type': 'application/json'
    			}
  			});
		};


		window.fetch = jest.fn().mockImplementation(() =>
		    Promise.resolve(mockResponse(200, null, '1')));


		return store.dispatch(actions.requestRobots())
		.then(() => {
			const action = store.getActions()	
			console.log("THEN!!!")
			console.log(action)
			expect(action[1]).toEqual({ type: REQUEST_ROBOTS_SUCCESS, payload:1});
		})
		.catch((error) => {
			console.log("CATCH!!!")
			const action = store.getActions()	
			console.log(action)
			expect(action[1]).toEqual({ type: REQUEST_ROBOTS_FAILED, payload:1 });
			
		})
	})



})