import React from "react";
import Layout from "../component/Layout";
import Styles from "../styles/portfolio.module.css";
import Link from "next/link";

export default function ad() {
  return (
    <div className={Styles.main}>
      <Layout>
        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-36 ">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full flex justify-center">
                <div class="relative">
                  <img
                    src="images/bonono.jpg"
                    class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
              <div class="w-full text-center mt-20"></div>
            </div>
            <div class="text-center mt-2">
              <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                정보보안학과 3학년 손진빈입니다.
              </h3>
              <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase"></div>
            </div>
            <div class="mt-6 py-6 border-t border-slate-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 h-64">
                  <p class="font-light leading-relaxed text-slate-600 mb-4">
                    중부대학교에 재학중이며 현재 프론트쪽에 관심을 가지며
                    공부중인 손진빈입니다.
                    <br />
                    주로 팀원들과 같이 프로젝트를 계획하거나 학교 수업
                    내용위주로 <br />
                    지식을 쌓아가며 실력을 키워가고 있습니다.
                    <br />
                    언제나 노력하여 완숙한 개발자가 되는 그 날 까지 계속
                    발전하겠습니다.
                  </p>
                  <div className={Styles.down}>
                    <div className={Styles.downtext}>
                      <Link href="https://github.com/withsjb/wapaap">
                        <div className={Styles.gitimgbox}>
                          <img className="img" src="images/gitimg.jpg"></img>
                        </div>
                      </Link>
                      <p>github</p>
                    </div>
                    <div className={Styles.downtext}>
                      <div className={Styles.gitimgbox}>
                        <img className="img" src="images/call.jpg"></img>
                      </div>
                      <p>010-5671-0882</p>
                    </div>
                    <div className={Styles.downtext}>
                      <div className={Styles.gitimgbox}>
                        <img className="img" src="images/mail.jpg"></img>
                      </div>
                      <p>withsjb1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4  mt-36">
          <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">책임감</h3>
                <p class="leading-tight text-justify">
                  아무리 어렵고 힘든 작업이라도 한번 맡은 작업은 끝까지
                  할려고합니다.
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
              <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">성실함</h3>
                <p class="leading-tight text-justify">
                  자기가 할 일을 미루지 않으며 언제나 맡은 일에 최선을 다합니다.
                </p>
              </div>
            </div>

            <div class="flex flex-row-reverse md:contents">
              <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">도전</h3>
                <p class="leading-tight text-justify">
                  처음 하는 작업이나 어려워 보이는 작업도 실패를 두려워하지 않고
                  도전해보려고 합니다.
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
            </div>

            <div class="flex flex-row-reverse md:contents">
              <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">반성</h3>
                <p class="leading-tight text-justify">
                  실패를 경험으로 삼아 다음에는 어떻게 해야 성공할 수 있을지
                  자아성찰을 합니다.
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
              <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h3 class="font-semibold text-lg mb-1">배움</h3>
                <p class="leading-tight text-justify">
                  언제나 새로운 것을 배우고 읽으려 합니다. 새로운것을 두려워하지
                  않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
