// test/login.test.js 파일 생성
import {mount} from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Login.vue', () => {

    // 컴포넌트 객체 생성 (wrapper=선생님이 만든 변수명이로다)
    // 부모가 login이고 msg 변수로 전달
    // 아이디는 aaa, 암호 bbb, chk 체크한 상태로
    const wrapper = mount(Login,
        {
            props : {msg : 'login'},
            data () {
                return {
                    userid : 'aaa', //아이디 연결
                    userpw : 'bbb', //암호 연결
                    chk : true, //체크박스 연결 
                }
            }
        })

        it ('1. props로 전달되는 값이 정확하게 h5태그에 표시되는지', () => {
            expect( wrapper.find('h5').text() ).toEqual('login');
        });

        it ('2. userid변수의 type을 확인', () => {
            expect( typeof wrapper.vm.userid ).toEqual("string");
        });

        it ('3. userpw 변수의 type을 확인', () => {
            expect ( typeof wrapper.vm.userpw ).toEqual("string");
        });

        it ('4. handleLogin의 타입이 function인지 확인', () => {
            expect ( typeof wrapper.vm.handleLogin ).toEqual("function");
        });

        // 위에 userid, userpw, chk에 데이터를 다 넣어줬기 때문에
        // it or test로 사용 => 같은 기능
        test ('5. handleLogin을 수행하고 결과값을 비교', () => {
            expect ( wrapper.vm.handleLogin() ).toEqual(true);
        });

});