// test/join.spec.js 파일 생성
import {mount} from '@vue/test-utils';
import Join from '@/components/Join.vue';

describe('Join.vue', () => {

    // 컴포넌트 객체 생성 (wrapper=선생님이 만든 변수명이로다)
    // 부모가 Join이고 title 변수로 전달
    // 아이디는 aaa, 암호 bbb, chk 체크한 상태로
    const wrapper = mount(Join,
        {
            props : {title : '가입하기'},
            data () {
                return {
                    state : {
                        userid : 'aaa', //아이디 연결
                        userpw : 'bbb', //암호 연결
                        userpw1 : 'bbb',
                        userage : 12,
                        userinfo : ["1","3"],
                    }  
                }
            },
        })

        it ('1. props로 전달되는 값 확인', () => {
            expect ( wrapper.find('h3').text() ).toEqual('가입하기'); //props에 'h3'태그에 온 값을 확인
            expect ( wrapper.props().title ).toEqual('가입하기'); //props에 온 값을 확인
        });

        it ('2. 나이의 타입이 일치하는지', () => { 
            expect ( typeof wrapper.vm.state.userage ).toEqual("number");
        });

        it ('3. 아이디의 타입을 실패하게', () => {
            expect ( typeof wrapper.vm.state.userid ).toEqual("number");
        });

        it ('4. handleIdCheck의 반환값을 확인', () => {
            expect ( wrapper.vm.handleIdCheck() ).toEqual(2);
        });

        it ('5. 체크가 1,3번인지 확인 ', () => {
            expect ( wrapper.vm.state.userinfo ).toEqual(["1","3"]);
            
        });

    })