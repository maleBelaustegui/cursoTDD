import { describe, expect, it } from "vitest";
import { canReconfigure } from "../src/can-configure";




describe('canReconfigure', ()=>{
    it('should be a function', ()=>{
        expect(canReconfigure).toBeTypeOf('function')
    })
    it('Should throw if first parameter is missing', () => {
        expect(()=>canReconfigure()).toThrow()
    }) 
    it('Should throw if first parameter is not a string', () => {
        expect(()=>canReconfigure(2)).toThrow()
    })  
    it('Should throw if second parameter is not a string', () => {
        expect(()=>canReconfigure('a')).toThrow()
    }) 
    it('Should return a boolean', ()=>{
        expect(canReconfigure('a','b')).toBeTypeOf('boolean')
    })
    it('Should return false if strings porvided have different length', () =>{
        expect(canReconfigure('abc', 'de')).toBe(false)
    })
    it('Should return false if strings porvided have different length even with same unique letters', () =>{
        expect(canReconfigure('aab', 'ab')).toBe(false)
    })
    it('Should return false if strings porvided have different number of unique letters', () =>{
        expect(canReconfigure('abc', 'ddd')).toBe(false)
    })
    it('Should return false if strings has different order of transformation', () =>{
        expect(canReconfigure('XBOX', 'XBBO')).toBe(false)
    })
})