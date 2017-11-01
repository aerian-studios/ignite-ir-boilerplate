// flow-typed signature: ede095b3b6cf42b743d3cd775cdf4b64
// flow-typed version: <<STUB>>/reduxsauce_v0.4.1
/**
 * @author Matt Kane (@ascorbic)
 */
import { Reducer } from 'redux'
import type { ActionTypes } from 'redux'
import type { ActionCreator, ActionCreators } from 'redux'
declare module 'reduxsauce' {
  declare type interface ActionConfig {
    [key: string]: string[] | ActionCreator | { [key: string]: any } | null
  }

  declare export function createActions(
    config: ActionConfig,
    options?: {prefix?: string}): {
      Types: ActionTypes,
      Creators: ActionCreators
    }
  /**
   * Creates a reducer.
   * @param  - The initial state for this reducer.
   * @param  - Keys are action types (strings), values are reducers (functions).
   * @return  A reducer object.
   */
  declare export function createReducer<S>(initialState: S, handlers: {[key: string]: Reducer<S>}): Reducer<S>
  
  declare export function createTypes(types: string, options?: {
    prefix?: string,
    [key: string]: any
  }): ActionTypes
  /**
   * Allows your reducers to be reset.
   * @param  - The action type to listen for.
   * @param  - The reducer to wrap.
   */
  declare export function resettableReducer<S>(type: string, originalReducer: Reducer<S>): Reducer<S>

}
