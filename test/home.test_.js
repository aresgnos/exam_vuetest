// test/home.test.js 파일 생성
import {mount} from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {

    // 테스트하고자 하는 컴포넌트 생성
    const wrapper = mount(Home, {props:{msg:'hello'}});

    it('1. h5태그를 찾아서 msg값이 hello인지 확인', () => {
        expect(wrapper.find('h5').text()).toEqual('hello');
    });

    it('2.plus함수가 정확하게 동작하는지 확인', () => {
        expect(wrapper.vm.minus(5,4)).toBe(1);
    });

})