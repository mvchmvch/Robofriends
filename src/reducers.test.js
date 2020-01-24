import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';


 import * as reducers from './reducers'


 describe('testing reducers', () => {
 
 	const initialSeachState = {
 		searchField: ''
 	}

 	it('should return the initial state', () => {
 		expect(reducers.searchRobots(undefined, {})).toEqual({searchField:''})
 	})

 		it('should handle the CHANGE_SEARCHFIELD', () => {
 		expect(reducers.searchRobots(initialSeachState, {
 			type: CHANGE_SEARCHFIELD,
 			payload: 'abc'
 		})).toEqual({searchField:'abc'})
 	})
 


 	const initialStateRobots = {
  		robots: [],
  		isPending: false
	}

	it('should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
	})

	it('should return handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestRobots(undefined, {type:REQUEST_ROBOTS_PENDING})).toEqual({robots:[], isPending:true})
	})

 })
 
 