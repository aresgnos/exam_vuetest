// test/mypage.test.js 파일 생성
import {mount} from '@vue/test-utils';
import Mypage from '@/components/Mypage.vue';

describe('Mypage.vue', () => {

    //1. 테스트 객체 만들기 (필요한 것 설정하기)
    const wrapper = mount(Mypage, {
        props : {
            title : '마이페이지',
        },
        data() {
            return {
                menu : 2
            }
        }


    })

    // to.Eqaul('전달하는값')
    it('1. prop로 title값이 전달되는지 확인', () =>{
        expect( wrapper.props().title ).toEqual('마이페이지');
    });

    it('2. title값이 <h3>태그에 표시되는지 확인', () => {
        expect ( wrapper.find('h3').text() ).toEqual('마이페이지');
    });

    // 0번부터 시작
    it('2. buttons 태그의 전체를 찾은 후 첫번째 버튼 내용 확인', () => {
        expect ( wrapper.findAll('button')[0].text() ).toEqual('정보수정');
        expect ( wrapper.findAll('input[type="button"]')[0].attributes('value') ).toEqual('정보수정1');
    });

    test('4. changeMenu를 호출한 후 결과값 확인', () => {
        wrapper.vm.changeMenu(3); // 메뉴 3번 호출
        expect ( wrapper.vm.menu ).toEqual(3); // 비교
    });

});