// test/mypage.test.js 파일 생성
import {mount} from '@vue/test-utils';
import Mypage from '@/components/ExMypage.vue';

describe('ExMypage.vue', () => {

    //1. 테스트 객체 만들기 (필요한 것 설정하기)
    const wrapper = mount(Mypage, {
        props : {
            title : '마이페이지',
        },
        data() {
            return {
                menu : 3
            }
        }
    })

    // to.Eqaul('전달하는값')
    it('1. h3태그에 "마이페이지"로 표시되는지 확인', () => {
        expect(wrapper.find('h3').text()).toEqual('마이페이지'); //성공
    });

    // 0번부터 시작
    it('2. buttons 태그의 전체를 찾은 후 두번째 버튼 내용 확인', () => {
        expect ( wrapper.findAll('button')[1].text() ).toEqual('암호변경'); //성공

    });

    it('3. changeMenuAction를 호출한 후 menu 값을 3으로 바꾸고 변경된 값이 동일한지', () => {
        wrapper.vm.changeMenuAction; 
        expect ( wrapper.vm.menu ).toEqual(3); //성공
    });

    it('3-1. changeMenuAction를 호출한 후 menu 값을 3으로 바꾸고 변경된 값이 동일한지', () => {
        wrapper.vm.changeMenuAction; 
        expect ( wrapper.vm.menu ).toEqual(1); // 실패
    });

});