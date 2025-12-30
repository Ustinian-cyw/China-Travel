document.addEventListener('DOMContentLoaded', () => {
		        // 智能体初始化
		        const client = new CozeWebSDK.WebChatClient({
		            config: {
		                bot_id: '7483545471857295371',
		                environment: 'production',
		                region: 'cn'
		            },
		            componentProps: {
		                container: '#coze-container',
		                launchButton: true,
		                launchStyle: {
		                    position: 'absolute',  // 改为绝对定位
		                    right: '20px',
		                    bottom: '20px',
		                    width: '60px',
		                    height: '60px',
		                    borderRadius: '50%',
		                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
		                }
		            },
		            auth: {
		                type: 'token',
						//2025.12.30-2026.1.29
						token: 'pat_Gs4JaKytD3oQXRh407HQeYyMVjCkuapVSfIuqjspCFD58UkgIuVQVGEfKyM09TkH',
				onRefreshToken: () => 'pat_Gs4JaKytD3oQXRh407HQeYyMVjCkuapVSfIuqjspCFD58UkgIuVQVGEfKyM09TkH'

	
						// 2025.11.19-12.19
				// 		token: 'pat_JNUIjdygNBcVU6iQZNJ4awLb32nkAQgAvVVkf9K2scftIDrIsEqaDNGoM8pmwNrE',
				// onRefreshToken: () => 'pat_JNUIjdygNBcVU6iQZNJ4awLb32nkAQgAvVVkf9K2scftIDrIsEqaDNGoM8pmwNrE'

						// 2025.8.24-2025.9.23
				// 		token: 'pat_Z2meWQ4YPTmurrxQ8UCCJq5x0BwVyaWH7UDl6CP4mM703kAfnJvCyfbhbKTKTULj',
				// onRefreshToken: () => 'pat_Z2meWQ4YPTmurrxQ8UCCJq5x0BwVyaWH7UDl6CP4mM703kAfnJvCyfbhbKTKTULj'
						
				// 		token: 'pat_f3Kq9ztxwqxzuZX8sKpBpb8K0vQxcJgDnxyQitw6quYFIdHCwZSa86Q9HNlBGSUk',
				// onRefreshToken: () => 'pat_f3Kq9ztxwqxzuZX8sKpBpb8K0vQxcJgDnxyQitw6quYFIdHCwZSa86Q9HNlBGSUk'
				    
				// token: 'pat_1UeMdWhKiDKOo9AGaaOjuqC3HqPIYi8AquGjHM7hzQV7mLqAZmWRn8WrVAAl5AST',
				// onRefreshToken: () => 'pat_1UeMdWhKiDKOo9AGaaOjuqC3HqPIYi8AquGjHM7hzQV7mLqAZmWRn8WrVAAl5AST'
						
				// token: 'pat_BoQ1q0QIu1ktzwJ3lOukXYtuGdpaTCR0gNJvkVP8jKvjEqL2tbe6RYy4ns3qEXxH',
				// onRefreshToken: () => 'pat_BoQ1q0QIu1ktzwJ3lOukXYtuGdpaTCR0gNJvkVP8jKvjEqL2tbe6RYy4ns3qEXxH'  
						
				// token: 'pat_jm1GawDHLxpVWSyjWNqMxujtxY1X0sOgYxz7REPUunOK6ouyvFBZjQUA8M9AjlCk',
				// onRefreshToken: () => 'pat_jm1GawDHLxpVWSyjWNqMxujtxY1X0sOgYxz7REPUunOK6ouyvFBZjQUA8M9AjlCk'
						
		                // token: 'pat_aF0QdvKrgQoCAaEzdwNpl3uww9IPB3ZtTnfFVRvDbWfPfhB03FRud7yij6kethaL',
		                // onRefreshToken: () => 'pat_aF0QdvKrgQoCAaEzdwNpl3uww9IPB3ZtTnfFVRvDbWfPfhB03FRud7yij6kethaL'
		            }
		        });
		
		        // 事件处理
		        client.on('open', () => {
		            document.getElementById('guideTip').style.display = 'none';
		        });
		
		        // 自动隐藏逻辑
		        let guideTimer = setTimeout(() => {
		            document.getElementById('guideTip').style.opacity = '0';
		            setTimeout(() => {
		                document.getElementById('guideTip').style.display = 'none';
		            }, 500);
		        }, 5000);
		
		        document.getElementById('guideTip').addEventListener('click', () => {
		            clearTimeout(guideTimer);
		            document.getElementById('guideTip').style.display = 'none';
		        });
		    });
