// test/join.spec.js 파일 생성
import {mount} from '@vue/test-utils';
import Join from '@/components/ExJoin.vue';

describe('ExJoin.vue', () => {

    // 컴포넌트 객체 생성 (wrapper=선생님이 만든 변수명이로다)
    // 부모가 Join이고 title 변수로 전달
    // 아이디는 aaa, 암호 bbb, chk 체크한 상태로
    const wrapper = mount(Join,
        {
            props : {title : '회원가입'},
            data () {
                return {
                    state : {
                        userid : 'a',
                        userpw : 'b',
                        userpw1 : 'b',
                        username : '가나다',
                        userphone : '010-0000-0001',
                        userage : 30,
                        userinfo : ["1","3","5"] //체크박스는 배열
                    }  
                }
            },
        })

        it ('1. props로 전달되는 값dl "회원가입"인지 확인', () => {
            expect ( wrapper.props().title ).toEqual('회원가입'); //성공
        });

        it ('2. 나이의 타입이 number인지 확인', () => { 
            expect ( typeof wrapper.vm.state.userage ).toEqual("number"); //성공
        });

        it ('2-1. 나이의 타입이 number인지 확인', () => { 
            expect ( typeof wrapper.vm.state.userage ).toEqual("string"); //실패
        });

        it ('3. handleIdCheck의 타입이 function인지 확인', () => {
            expect ( typeof wrapper.vm.handleIdCheck ).toEqual("function"); //성공
        });

        it ('4. handleJoinAction의 리턴값이 1인지', () => {
            expect ( wrapper.vm.handleJoinAction() ).toEqual(1); //성공
        });

        it ('5. userinfo에 체크된 갯수가 3개인지 ', () => {
            expect ( wrapper.vm.state.userinfo ).toHaveLength(3) //성공
        });

    })