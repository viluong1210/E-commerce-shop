import React from 'react'
import type { PaginationProps } from 'antd'
import { Button, Pagination } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import '../../styles/component/panigation.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  page: number;
  count: number;
  limit: number;
}

const PaginationProduct = ({page, count, limit = 12}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create query string
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams],
  );
  const onChange: PaginationProps['onChange'] = (page) => {

    router.push(
      `${pathname}?${createQueryString({
        page:page,
      })}`,
      {
        scroll: false,
      },
    );
  }
  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement,
  ) => {
    if (type === 'prev') {
      return (
        <Button>
          <DoubleLeftOutlined />
        </Button>
      )
    }
    if (type === 'next') {
      return (
        <Button>
          <DoubleRightOutlined />
        </Button>
      )
    }
    return originalElement
  }

  return (
    <div className="pagination-product mt-5 w-full flex justify-center">
      <Pagination
        current={page}
        onChange={onChange}
        total={count}
        itemRender={itemRender}
      />
    </div>
  )
}

export default PaginationProduct
